import {spawnSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import type {MissionSInteriorSpec} from '../src/compositions/MissionSInteriorPromo';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configPath = join(root, 'data', 'videos', 'video-007.json');
const spec = JSON.parse(readFileSync(configPath, 'utf8')) as MissionSInteriorSpec;
const fps = spec.fps;
const durationFrames = Math.round(spec.durationSeconds * fps);
const videoDuration = durationFrames / fps;
if (fps !== 30 || Math.abs(videoDuration - spec.durationSeconds) > 1 / fps) {
  throw new Error('La duración debe poder representarse a 30 fps con una diferencia inferior a un fotograma.');
}

const audioPath = join(root, 'public', 'audio', 'voice-video-007.wav');
if (!existsSync(audioPath)) throw new Error('No se encuentra el audio original: ' + audioPath);
const wav = readFileSync(audioPath);
if (wav.toString('ascii', 0, 4) !== 'RIFF' || wav.toString('ascii', 8, 12) !== 'WAVE') {
  throw new Error('La locución debe ser un WAV válido.');
}
let cursor = 12;
let sampleRate = 0;
let blockAlign = 0;
let dataBytes = 0;
while (cursor + 8 <= wav.length) {
  const chunkId = wav.toString('ascii', cursor, cursor + 4);
  const chunkSize = wav.readUInt32LE(cursor + 4);
  if (chunkId === 'fmt ' && chunkSize >= 16) {
    sampleRate = wav.readUInt32LE(cursor + 12);
    blockAlign = wav.readUInt16LE(cursor + 20);
  }
  if (chunkId === 'data') dataBytes = chunkSize;
  cursor += 8 + chunkSize + (chunkSize % 2);
}
if (!sampleRate || !blockAlign || !dataBytes) throw new Error('No se pudo leer la duración del WAV.');
const audioDuration = dataBytes / blockAlign / sampleRate;
if (Math.abs(videoDuration - audioDuration) > 1 / fps) {
  throw new Error('Vídeo y audio difieren más de un fotograma: ' + videoDuration + ' s frente a ' + audioDuration + ' s.');
}
if (spec.captions.some((cue, index) => cue.startSeconds < 0 || cue.endSeconds <= cue.startSeconds || cue.endSeconds > audioDuration || (index > 0 && cue.startSeconds < spec.captions[index - 1].endSeconds))) {
  throw new Error('Los subtítulos deben estar ordenados, no solaparse y quedar dentro del audio.');
}

const srtTime = (seconds: number) => {
  const ms = Math.round(seconds * 1000);
  const hh = Math.floor(ms / 3_600_000);
  const mm = Math.floor((ms % 3_600_000) / 60_000);
  const ss = Math.floor((ms % 60_000) / 1000);
  return String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0') + ',' + String(ms % 1000).padStart(3, '0');
};
const outputDir = join(root, 'output');
mkdirSync(outputDir, {recursive: true});
const outputPath = join(outputDir, 'video-007.mp4');
const subtitlePath = join(outputDir, 'video-007-es.srt');
const srt = spec.captions.map((cue, index) => String(index + 1) + '\r\n' + srtTime(cue.startSeconds) + ' --> ' + srtTime(cue.endSeconds) + '\r\n' + cue.text + '\r\n').join('\r\n');
writeFileSync(subtitlePath, srt, 'utf8');

const cliPackagePath = join(root, 'node_modules', '@remotion', 'cli', 'package.json');
const cliPackage = JSON.parse(readFileSync(cliPackagePath, 'utf8')) as {bin: Record<string, string> | string};
const relativeBin = typeof cliPackage.bin === 'string' ? cliPackage.bin : cliPackage.bin.remotion;
if (!relativeBin) throw new Error('No se encontró el ejecutable de Remotion.');
const cliPath = resolve(dirname(cliPackagePath), relativeBin);
const args = [cliPath, 'render', join(root, 'src', 'index.ts'), 'MissionSInteriorReel', outputPath,
  '--props', configPath, '--codec', 'h264', '--pixel-format', 'yuv420p', '--crf', '16', '--x264-preset', 'slow', '--gop', '60', '--concurrency', '2', '--log', 'warn'];
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
if (process.platform === 'win32' && existsSync(edgePath)) args.push('--browser-executable', edgePath);
console.log('[VIDEO] Renderizando ' + spec.title + ' · audio original a 1× · ' + audioDuration + ' s');
const result = spawnSync(process.execPath, args, {cwd: root, stdio: 'inherit', env: process.env});
if (result.error) throw result.error;
if (result.status !== 0) throw new Error('Remotion terminó con código ' + result.status);
if (!existsSync(outputPath) || statSync(outputPath).size < 100_000) throw new Error('No se generó un MP4 válido: ' + outputPath);
console.log('[DONE] ' + outputPath);
console.log('[SUBTITLES] ' + subtitlePath);
