import {spawnSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, statSync} from 'node:fs';
import {dirname, isAbsolute, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configArg = process.argv.slice(2).find((arg) => arg !== '--') ?? 'data/videos/video-003.json';
const configPath = isAbsolute(configArg) ? configArg : resolve(root, configArg);
if (!existsSync(configPath)) throw new Error(`No existe el archivo: ${configPath}`);
const spec = JSON.parse(readFileSync(configPath, 'utf8')) as {id: string; title: string; durationSeconds: number; fps: number; scenes: Array<{startSeconds: number; endSeconds: number}>};
const durationFrames = Math.round(spec.durationSeconds * spec.fps);
if (spec.fps !== 30 || spec.scenes.length !== 8 || Math.abs(spec.durationSeconds * spec.fps - durationFrames) > 1e-6) {
  throw new Error('El Reel necesita ocho escenas y una duración ajustada a fotogramas de 30 fps');
}
if (spec.scenes[0].startSeconds !== 0 || spec.scenes.at(-1)?.endSeconds !== spec.durationSeconds || spec.scenes.some((scene, index) => index > 0 && scene.startSeconds !== spec.scenes[index - 1].endSeconds)) {
  throw new Error('La cronología debe ser continua y cubrir la duración del Reel');
}
const outputDir = join(root, 'output');
mkdirSync(outputDir, {recursive: true});
const outputPath = join(outputDir, `${spec.id}.mp4`);
const cliPackagePath = join(root, 'node_modules', '@remotion', 'cli', 'package.json');
const cliPackage = JSON.parse(readFileSync(cliPackagePath, 'utf8')) as {bin: Record<string, string> | string};
const relativeBin = typeof cliPackage.bin === 'string' ? cliPackage.bin : cliPackage.bin.remotion;
if (!relativeBin) throw new Error('No se encontró el ejecutable de Remotion');
const cliPath = resolve(dirname(cliPackagePath), relativeBin);
const args = [cliPath, 'render', join(root, 'src', 'index.ts'), 'HiddenCarDetailsReel', outputPath,
  '--props', configPath, '--codec', 'h264', '--pixel-format', 'yuv420p', '--concurrency', '2', '--log', 'warn'];
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
if (process.platform === 'win32' && existsSync(edgePath)) args.push('--browser-executable', edgePath);
console.log(`[VIDEO] Renderizando ${spec.title}`);
const result = spawnSync(process.execPath, args, {cwd: root, stdio: 'inherit', env: process.env});
if (result.error) throw result.error;
if (result.status !== 0) throw new Error(`Remotion terminó con código ${result.status}`);
if (!existsSync(outputPath) || statSync(outputPath).size < 100_000) throw new Error(`MP4 no generado o demasiado pequeño: ${outputPath}`);
console.log(`[DONE] ${outputPath}`);
