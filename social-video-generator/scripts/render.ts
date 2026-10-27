import {spawnSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, statSync} from 'node:fs';
import {dirname, isAbsolute, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {calculateTripCost} from '../src/calculations/cost';
import {validateVideoSpec} from '../src/content/validate';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configArg = process.argv.slice(2).find((arg) => arg !== '--') ?? 'data/videos/video-001.json';
const configPath = isAbsolute(configArg) ? configArg : resolve(root, configArg);

console.log('[VIDEO] Loading configuration');
if (!existsSync(configPath)) throw new Error(`No existe el archivo: ${configPath}`);
const spec = validateVideoSpec(JSON.parse(readFileSync(configPath, 'utf8')));
console.log('[DATA] Validating sources and editorial assumptions');
if (spec.requiresHumanReview) console.log('[DATA] Requires human review before publication');
console.log('[CALC] Calculating scenarios');
for (const vehicle of spec.variables.vehicles) {
  const cost = calculateTripCost(spec.distanceKm, vehicle.consumptionPer100Km, vehicle.pricePerUnit);
  console.log(`[CALC] ${vehicle.label}: ${cost.toFixed(2)} EUR / ${spec.distanceKm} km`);
}
console.log('[SCENE] Building timeline');

const outputDir = join(root, 'output');
mkdirSync(outputDir, {recursive: true});
const outputPath = join(outputDir, `${spec.id}.mp4`);
const cliPackagePath = join(root, 'node_modules', '@remotion', 'cli', 'package.json');
const cliPackage = JSON.parse(readFileSync(cliPackagePath, 'utf8')) as {bin: Record<string, string> | string};
const relativeBin = typeof cliPackage.bin === 'string' ? cliPackage.bin : cliPackage.bin.remotion;
if (!relativeBin) throw new Error('No se encontró el ejecutable de Remotion');
const cliPath = resolve(dirname(cliPackagePath), relativeBin);
const args = [cliPath, 'render', join(root, 'src', 'index.ts'), 'Cost100Km', outputPath,
  '--props', configPath, '--codec', 'h264', '--pixel-format', 'yuv420p', '--concurrency', '2', '--log', 'warn'];

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
if (process.platform === 'win32' && existsSync(edgePath)) args.push('--browser-executable', edgePath);
console.log('[RENDER] Rendering frames and encoding MP4');
const result = spawnSync(process.execPath, args, {cwd: root, stdio: 'inherit', env: process.env});
if (result.error) throw result.error;
if (result.status !== 0) throw new Error(`Remotion terminó con código ${result.status}`);
if (!existsSync(outputPath) || statSync(outputPath).size < 100_000) throw new Error(`MP4 no generado o demasiado pequeño: ${outputPath}`);
console.log(`[DONE] ${outputPath}`);
