import {spawnSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import type {ClutchSpec} from '../src/compositions/ClutchPromo';

// Vídeo 27 · Cuando pisas el embrague no lo aprietas (plano secuencia, todo render)
// La locución original se usa a velocidad 1×; el montaje se adapta a ella.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configPath = resolve(root, process.argv[2] ?? join('data', 'videos', 'video-027.json'));
const spec = JSON.parse(readFileSync(configPath, 'utf8')) as ClutchSpec;
const wavPath = join(root, 'public', spec.audioFile ?? join('audio', 'voice-video-027.wav'));
if (!existsSync(wavPath)) throw new Error('No se encuentra la locución original: ' + wavPath);
const wav = readFileSync(wavPath);
if (wav.toString('ascii', 0, 4) !== 'RIFF' || wav.toString('ascii', 8, 12) !== 'WAVE') throw new Error('La locución debe ser un WAV válido.');

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
const videoDuration = Math.round(audioDuration * spec.fps) / spec.fps;
if (Math.abs(videoDuration - audioDuration) > 1 / spec.fps) throw new Error(`El vídeo no puede representar la duración del audio: ${videoDuration} s frente a ${audioDuration} s.`);
if (Math.abs(spec.durationSeconds - audioDuration) > 1 / spec.fps) throw new Error(`La duración configurada no coincide con el WAV: ${spec.durationSeconds} s frente a ${audioDuration} s.`);
if (spec.captions.some((cue, index) => cue.startSeconds < 0 || cue.endSeconds <= cue.startSeconds || cue.endSeconds > audioDuration || (index > 0 && cue.startSeconds < spec.captions[index - 1].endSeconds))) throw new Error('Los subtítulos deben estar ordenados, no solaparse y quedar dentro del audio.');

const srtTime = (seconds: number) => {
  const ms = Math.round(seconds * 1000);
  const hh = Math.floor(ms / 3_600_000);
  const mm = Math.floor((ms % 3_600_000) / 60_000);
  const ss = Math.floor((ms % 60_000) / 1000);
  return String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0') + ',' + String(ms % 1000).padStart(3, '0');
};
const outputRoot = join(root, 'output');
const name = spec.id;
const videoDir = join(outputRoot, 'videos');
const subtitleDir = join(outputRoot, 'subtitulos');
for (const dir of [videoDir, subtitleDir, join(outputRoot, 'portadas')]) mkdirSync(dir, {recursive: true});
const outputPath = join(videoDir, name + '.mp4');
const subtitlePath = join(subtitleDir, name + '-es.srt');
const coverPath = join(outputRoot, 'portadas', spec.id + '-portada.png');
const srt = spec.captions.map((cue, index) => `${index + 1}\r\n${srtTime(cue.startSeconds)} --> ${srtTime(cue.endSeconds)}\r\n${cue.text}\r\n`).join('\r\n');
writeFileSync(subtitlePath, srt, 'utf8');

const cliPackagePath = join(root, 'node_modules', '@remotion', 'cli', 'package.json');
const cliPackage = JSON.parse(readFileSync(cliPackagePath, 'utf8')) as {bin: Record<string, string> | string};
const relativeBin = typeof cliPackage.bin === 'string' ? cliPackage.bin : cliPackage.bin.remotion;
if (!relativeBin) throw new Error('No se encontró el ejecutable de Remotion.');
const cliPath = resolve(dirname(cliPackagePath), relativeBin);
// A fixed, uncommon port avoids clashing with other local servers on Remotion's default port.
const browser: string[] = ['--port', process.env.REMOTION_PORT ?? '3917'];
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
if (process.platform === 'win32' && process.env.USE_EDGE === '1' && existsSync(edgePath)) browser.push('--browser-executable', edgePath);
const run = (args: string[]) => {
  const result = spawnSync(process.execPath, [cliPath, ...args, ...browser], {cwd: root, stdio: 'inherit', env: process.env});
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('Remotion terminó con código ' + result.status);
};

console.log(`[VIDEO] Duración del audio PCM: ${audioDuration.toFixed(3)} s · vídeo a ${spec.fps} fps · audio original a 1×`);
run(['render', join(root, 'src', 'index.ts'), 'ClutchReel', outputPath, '--props', configPath, '--codec', 'h264', '--pixel-format', 'yuv420p', '--crf', '16', '--x264-preset', 'slow', '--gop', '60', '--audio-codec', 'aac', '--concurrency', '2', '--log', 'warn']);
if (!existsSync(outputPath) || statSync(outputPath).size < 100_000) throw new Error('No se generó un MP4 válido: ' + outputPath);
run(['still', join(root, 'src', 'index.ts'), 'ClutchCover', coverPath, '--frame', '0', '--log', 'warn']);
console.log('[DONE] ' + outputPath);
console.log('[SUBTITLES] ' + subtitlePath);
console.log('[COVER] ' + coverPath);
