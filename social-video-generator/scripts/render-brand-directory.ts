import {spawnSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {dirname, isAbsolute, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import type {BrandDirectorySpec} from '../src/compositions/BrandDirectoryPromo';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configArg = process.argv.slice(2).find((arg) => arg !== '--') ?? 'data/videos/video-005.json';
const configPath = isAbsolute(configArg) ? configArg : resolve(root, configArg);
if (!existsSync(configPath)) throw new Error(`No existe el archivo: ${configPath}`);
const spec = JSON.parse(readFileSync(configPath, 'utf8')) as BrandDirectorySpec;
const durationFrames = Math.round(spec.durationSeconds * spec.fps);
if (spec.fps !== 30 || spec.durationSeconds !== 30 || durationFrames / spec.fps !== spec.durationSeconds || spec.scenes.length < 3) {
  throw new Error('El Reel debe durar 30 segundos exactos a 30 fps');
}
if (spec.scenes[0]?.startSeconds !== 0 || spec.scenes.at(-1)?.endSeconds !== spec.durationSeconds || spec.scenes.some((scene, index) => index > 0 && scene.startSeconds !== spec.scenes[index - 1].endSeconds)) {
  throw new Error('La cronología debe ser continua y cubrir los 30 segundos');
}
const captions = spec.scenes.flatMap((scene) => scene.captions).sort((a, b) => a.startSeconds - b.startSeconds);
if (captions.some((cue, index) => cue.startSeconds < 0 || cue.endSeconds <= cue.startSeconds || cue.endSeconds > spec.durationSeconds || (index > 0 && cue.startSeconds < captions[index - 1].endSeconds))) {
  throw new Error('Los subtítulos deben estar ordenados, sin solaparse y dentro del vídeo');
}
const formatSrtTime = (seconds: number) => {
  const milliseconds = Math.round(seconds * 1000);
  const hours = Math.floor(milliseconds / 3_600_000);
  const minutes = Math.floor((milliseconds % 3_600_000) / 60_000);
  const remainingSeconds = Math.floor((milliseconds % 60_000) / 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')},${String(milliseconds % 1000).padStart(3, '0')}`;
};
const outputDir = join(root, 'output');
mkdirSync(outputDir, {recursive: true});
const outputPath = join(outputDir, `${spec.id}.mp4`);
const subtitlePath = join(outputDir, `${spec.id}-es.srt`);
const voicePath = join(root, 'public', 'audio', 'voice-video-005.wav');
if (!existsSync(voicePath)) throw new Error(`No existe la locución original: ${voicePath}`);
const subtitleText = captions.map((cue, index) => `${index + 1}\r\n${formatSrtTime(cue.startSeconds)} --> ${formatSrtTime(cue.endSeconds)}\r\n${cue.text}\r\n`).join('\r\n');
writeFileSync(subtitlePath, subtitleText, 'utf8');

const cliPackagePath = join(root, 'node_modules', '@remotion', 'cli', 'package.json');
const cliPackage = JSON.parse(readFileSync(cliPackagePath, 'utf8')) as {bin: Record<string, string> | string};
const relativeBin = typeof cliPackage.bin === 'string' ? cliPackage.bin : cliPackage.bin.remotion;
if (!relativeBin) throw new Error('No se encontró el ejecutable de Remotion');
const cliPath = resolve(dirname(cliPackagePath), relativeBin);
const args = [cliPath, 'render', join(root, 'src', 'index.ts'), 'BrandDirectoryPromoReel', outputPath,
  '--props', configPath, '--codec', 'h264', '--pixel-format', 'yuv420p', '--crf', '15', '--x264-preset', 'slow', '--gop', '60', '--concurrency', '2', '--log', 'warn'];
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
if (process.platform === 'win32' && existsSync(edgePath)) args.push('--browser-executable', edgePath);
console.log(`[VIDEO] Renderizando ${spec.title} (30 s, locución original sin alterar)`);
const result = spawnSync(process.execPath, args, {cwd: root, stdio: 'inherit', env: process.env});
if (result.error) throw result.error;
if (result.status !== 0) throw new Error(`Remotion terminó con código ${result.status}`);
if (!existsSync(outputPath) || statSync(outputPath).size < 100_000) throw new Error(`MP4 no generado o demasiado pequeño: ${outputPath}`);
console.log(`[DONE] ${outputPath}`);
console.log(`[SUBTITLES] ${subtitlePath}`);
