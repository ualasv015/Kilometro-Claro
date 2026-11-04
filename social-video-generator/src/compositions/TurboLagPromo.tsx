import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandCircle, type CaptionCue, clamp, type ReelScene} from '../components/ReelKit';
import {at, camVelocity, type CamKey, type Chapter, ExplainerShell, kf, makeCamera, PAPER, Plate, type Pt, win, Wire, WorldSvg, WPill} from '../components/ExplainerKit';

// Vídeo 026 · El turbo no se enciende a unas revoluciones concretas (turbo lag). One-shot world with two separate gas
// circuits — exhaust (orange) and intake (paper/lime) — joined only by the turbo shaft. A tiny simulation (exhaust
// energy → turbo speed with inertia → boost) drives every gauge and the timeline strip, so they always agree.
// New in this reel: the camera travels along the shaft, and a live request/pressure strip runs at the bottom.
// Voice: voice-video-026.wav (43,96 s, Google TTS, 1×).
export type TurboLagSpec = {
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  requiresHumanReview: boolean;
  captions: CaptionCue[];
  audioFile?: string;
};

type SceneId = 'hook' | 'drive' | 'press' | 'lag' | 'low' | 'tech' | 'recap' | 'ask' | 'cta';
const ANIM = 'ANIMACIÓN ILUSTRATIVA · KILÓMETRO CLARO';
const DUR = 43.96;
export const turboScenes: ReelScene<SceneId>[] = [
  {id: 'hook', start: 0, end: 5.8, label: '¿A X VUELTAS?', credit: ANIM},
  {id: 'drive', start: 5.8, end: 12.9, label: 'CÓMO SE MUEVE', credit: ANIM},
  {id: 'press', start: 12.9, end: 21.4, label: 'INERCIA', credit: ANIM},
  {id: 'lag', start: 21.4, end: 23.6, label: 'TURBO LAG', credit: 'GRÁFICO CONCEPTUAL · KILÓMETRO CLARO'},
  {id: 'low', start: 23.6, end: 30.6, label: 'POCAS VUELTAS', credit: ANIM},
  {id: 'tech', start: 30.6, end: 35.2, label: 'SOLUCIONES', credit: ANIM},
  {id: 'recap', start: 35.2, end: 39.2, label: 'PIDES Y LLEGA', credit: ANIM},
  {id: 'ask', start: 39.2, end: 40.6, label: '¿LO SABÍAS?', credit: ANIM},
  {id: 'cta', start: 40.6, end: DUR, label: 'LA GUÍA', credit: 'KILOMETROCLARO.COM'},
];
const CHAPTERS: Chapter[] = [
  {from: 0, to: 3.24, title: '¿EL TURBO ENTRA A X VUELTAS?'},
  {from: 3.24, to: 5.8, title: 'YA PUEDE ESTAR GIRANDO', sub: 'ANTES DE QUE PISES', subAt: 5.08},
  {from: 5.8, to: 12.9, title: 'GASES DE ESCAPE → TURBINA', sub: 'EJE → COMPRESOR → AIRE A PRESIÓN', subAt: 9.84},
  {from: 12.9, to: 16.0, title: 'AL PISAR, MÁS ESCAPE', sub: 'MÁS ENERGÍA PARA LA TURBINA', subAt: 14.74},
  {from: 16.0, to: 21.4, title: 'TIENEN INERCIA', sub: 'TURBINA, EJE Y COMPRESOR TARDAN EN ACELERAR', subAt: 18.16},
  {from: 21.4, to: 23.6, title: 'TURBO LAG', sub: 'EL HUECO ENTRE PEDIR Y RECIBIR', subAt: 22.02},
  {from: 23.6, to: 30.6, title: 'A POCAS VUELTAS, POCA ENERGÍA', sub: 'MARCHA ADECUADA = MÁS MARGEN', subAt: 28.46},
  {from: 30.6, to: 35.2, title: 'ADELANTAR LA SUBIDA', sub: 'GEOMETRÍA VARIABLE · ASISTENCIA ELÉCTRICA', subAt: 31.66},
  {from: 35.2, to: 39.2, title: 'PIDES AL INSTANTE', sub: 'LA PRESIÓN LLEGA DESPUÉS', subAt: 38.16},
  {from: 39.2, to: 40.6, title: '¿LO SABÍAS?'},
];

const EXH = '#ff8a3d', EXH_DARK = '#3a2416', AIR = '#e7efe9', ALERT = '#ff8f7a';
const PI = Math.PI, TAU = 2 * PI;
const CENTER_Y = 910; // the timeline strip takes the bottom of the screen; world area is y 470–1340

// ---------- Physics: exhaust energy → turbo speed (inertia) → boost --------------------------------------
const step = (t: number, a: number, d = 0.12) => interpolate(t, [a, a + d], [0, 1], clamp);
export const request = (t: number) => 0.12 + 0.78 * (step(t, 13.5) - step(t, 34.9) + step(t, 35.9));
const energyTarget = (t: number) => {
  if (t < 13.5) return 0.28;
  if (t < 24.0) return 0.95;
  if (t < 28.5) return 0.36; // a muy pocas vueltas: little exhaust energy even with the pedal down
  if (t < 34.9) return 0.95;
  if (t < 35.9) return 0.3;
  return 0.95;
};
const tauTurbo = (t: number) => (t >= 28.5 && t < 31.66 ? 1.1 : t >= 31.66 && t < 34.9 ? 0.7 : t >= 35.9 ? 1.25 : 2.3);
const DT = 0.01, NS = Math.ceil(DT ? DUR / DT : 0) + 2;
const SIM = (() => {
  const ex: number[] = [], om: number[] = [], bo: number[] = [], ghost: number[] = [];
  let e = 0.28, w = 0.28, b = 0, g = 0.28, gb = 0;
  for (let i = 0; i < NS; i++) {
    const t = i * DT;
    e += ((energyTarget(t) - e) / 0.25) * DT;
    w += ((e - w) / tauTurbo(t)) * DT;
    b += ((Math.max(0, (w - 0.3) / 0.65) - b) / 0.35) * DT;
    g += ((e - g) / (t >= 13.5 ? 0.95 : 2.3)) * DT; // what a faster-responding turbo would do on the first press
    gb += ((Math.max(0, (g - 0.3) / 0.65) - gb) / 0.35) * DT;
    ex.push(e); om.push(w); bo.push(Math.min(1, b)); ghost.push(Math.min(1, gb));
  }
  // integrated wheel angle
  const ang: number[] = [0];
  for (let i = 1; i < NS; i++) ang.push(ang[i - 1] + om[i] * 34 * DT);
  return {ex, om, bo, ghost, ang};
})();
const sample = (arr: number[], t: number) => arr[Math.max(0, Math.min(arr.length - 1, Math.round(t / DT)))];
export const exhaustAt = (t: number) => sample(SIM.ex, t);
export const turboAt = (t: number) => sample(SIM.om, t);
export const boostAt = (t: number) => sample(SIM.bo, t);
const ghostAt = (t: number) => sample(SIM.ghost, t);
const turboAngle = (t: number) => sample(SIM.ang, t);
const rpm = (t: number) => kf(t, [[0, 0.3], [13.5, 0.3], [21, 0.47], [23.9, 0.47], [24.7, 0.14], [28.46, 0.14], [28.95, 0.44], [34.9, 0.42], [35.9, 0.36], [38.5, 0.48]]);

// ---------- World layout -----------------------------------------------------------------------------------
const TACH = {x: 2450, y: 1450}, ENG = {x: 1500, y: 1900}, TURB = {x: 2150, y: 2720}, COMP = {x: 1550, y: 2720};
const PED = {x: 450, y: 1000}, ECU = {x: 1000, y: 1000}, LEVER = {x: 2950, y: 1470};
const SPIN_DIAL = {x: 2150, y: 2410}, BOOST_DIAL = {x: 1130, y: 2440}, IC = {x: 850, y: 2300};
const EXH_PATH: Pt[] = [[1960, 1900], [2300, 1900], [2300, 2720], [2150, 2720], [2150, 3130]];
const INT_PATH: Pt[] = [[1550, 3150], [1550, 2720], [1300, 2720], [850, 2720], [850, 1900], [1062, 1900]];
const W_PED: Pt[] = [[PED.x + 110, PED.y - 230], [700, 760], [760, 1000], [ECU.x - 200, ECU.y]];
const W_ECU: Pt[] = [[ECU.x + 200, ECU.y + 40], [1350, 1100], [1500, 1400], [ENG.x, ENG.y - 262]];

const CAM: CamKey[] = [
  [0, TACH.x, TACH.y, 1.25], [0.55, TACH.x, TACH.y, 1.25], [0.75, TACH.x, TACH.y, 1.4], [1.0, TACH.x, TACH.y, 1.3], [3.9, TACH.x, 1500, 1.2],
  [4.9, 1850, 2620, 0.85], [5.9, 1850, 2620, 0.85],
  [6.9, 1960, 1980, 0.95], [8.4, 2200, 2650, 1.2], [9.6, TURB.x, TURB.y, 1.45], [10.45, COMP.x, COMP.y, 1.55], [10.9, COMP.x, COMP.y, 1.5], [11.7, 1080, 2330, 0.9], [12.4, 1250, 1960, 0.8],
  [13.3, 780, 1060, 0.95], [14.2, 780, 1060, 0.95], [15.2, 1850, 2350, 0.62], [17.9, 1850, 2560, 0.85], [18.5, 2060, 2600, 1.05], [19.9, 2060, 2600, 1.05], [20.4, 1350, 2580, 1.0], [21.3, 1700, 2400, 0.62],
  [23.4, 1700, 2400, 0.6], [24.3, 2250, 2050, 0.5], [30.4, 2250, 2050, 0.52],
  [31.4, TURB.x, 2690, 1.35], [32.5, 1850, 2690, 1.35], [34.9, 1850, 2690, 1.25],
  [35.6, 1660, 1960, 0.34], [38.9, 1660, 1960, 0.35], [39.9, TURB.x, TURB.y, 2.2], [DUR, TURB.x, TURB.y, 1.6],
];
export const turboCamera = makeCamera(CAM);

const along = (pts: Pt[], u: number): Pt => {
  const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  let d = u * seg.reduce((a, b) => a + b, 0);
  for (let i = 0; i < seg.length; i++) {
    if (d <= seg[i]) { const f = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f]; }
    d -= seg[i];
  }
  return pts[pts.length - 1];
};
const polyD = (pts: Pt[]) => 'M' + pts.map((p) => p.join(' ')).join(' L');

// ---------- Stations ---------------------------------------------------------------------------------------
const Dial: React.FC<{x: number; y: number; r: number; v: number; label: string; color: string; note?: boolean; o?: number}> = ({x, y, r, v, label, color, note = false, o = 1}) => {
  const a0 = PI * 0.75, a1 = PI * 2.25;
  const pt = (a: number, rr: number) => `${x + rr * Math.cos(a)} ${y + rr * Math.sin(a)}`;
  const av = a0 + (a1 - a0) * Math.max(0, Math.min(1, v));
  return <g opacity={o}>
    <circle cx={x} cy={y} r={r + 16} fill="#071612ee" stroke="#3c5a50" strokeWidth="4" />
    <path d={`M${pt(a0, r - 6)} A${r - 6} ${r - 6} 0 1 1 ${pt(a1, r - 6)}`} fill="none" stroke="#2e4a41" strokeWidth="14" strokeLinecap="round" />
    {v > 0.01 ? <path d={`M${pt(a0, r - 6)} A${r - 6} ${r - 6} 0 ${av - a0 > PI ? 1 : 0} 1 ${pt(av, r - 6)}`} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" /> : null}
    <line x1={x} y1={y} x2={x + (r - 24) * Math.cos(av)} y2={y + (r - 24) * Math.sin(av)} stroke={PAPER} strokeWidth="7" strokeLinecap="round" />
    <circle cx={x} cy={y} r="10" fill={PAPER} />
    <text x={x} y={y + r * 0.62} textAnchor="middle" fill="#cfdcd3" fontSize={Math.round(r * 0.17)} fontWeight="900" letterSpacing="1">{label}</text>
    {note ? <text x={x} y={y - r - 30} textAnchor="middle" fill={brand.lime} fontSize="17" fontWeight="900" letterSpacing="1">GRÁFICO CONCEPTUAL · SIN DATOS DE PRUEBA</text> : null}
  </g>;
};

const Tachometer: React.FC<{t: number}> = ({t}) => {
  const {x, y} = TACH, r = 210;
  const crossed = at(t, 0.6, 0.25);
  const a0 = PI * 0.75, a1 = PI * 2.25;
  const markA = a0 + (a1 - a0) * 0.3;
  const v = rpm(t);
  const av = a0 + (a1 - a0) * v;
  const mx = x + (r - 20) * Math.cos(markA), my = y + (r - 20) * Math.sin(markA);
  return <g>
    <Plate x={x} y={y - 10} w={560} h={560} />
    <circle cx={x} cy={y} r={r + 22} fill="#071612" stroke="#4a6158" strokeWidth="6" />
    {[...Array(25)].map((_, i) => { const a = a0 + ((a1 - a0) * i) / 24; const long = i % 3 === 0; return <line key={i} x1={x + (r - (long ? 40 : 24)) * Math.cos(a)} y1={y + (r - (long ? 40 : 24)) * Math.sin(a)} x2={x + (r - 6) * Math.cos(a)} y2={y + (r - 6) * Math.sin(a)} stroke={i > 19 ? ALERT : '#9fb3aa'} strokeWidth={long ? 7 : 4} />; })}
    <line x1={mx} y1={my} x2={x + (r + 30) * Math.cos(markA)} y2={y + (r + 30) * Math.sin(markA)} stroke={brand.lime} strokeWidth="9" opacity={1 - 0.6 * crossed} />
    <g opacity={1 - 0.45 * crossed}>
      <text x={x - r - 50} y={y + 62} textAnchor="end" fill={brand.lime} fontSize="38" fontWeight="1000">2.000</text>
      <WPill x={x - 140} y={y - r - 80} text="¿AQUÍ ENTRA EL TURBO?" o={1} size={26} />
    </g>
    {crossed > 0 ? <g opacity={crossed} stroke={ALERT} strokeWidth="12" strokeLinecap="round">
      <line x1={x - r - 175} y1={y + 50} x2={x - r - 40} y2={y + 50} />
      <line x1={x - 330} y1={y - r - 80} x2={x + 50} y2={y - r - 80} />
      <line x1={mx - 34} y1={my - 34} x2={mx + 34} y2={my + 34} /><line x1={mx + 34} y1={my - 34} x2={mx - 34} y2={my + 34} />
    </g> : null}
    <line x1={x} y1={y} x2={x + (r - 40) * Math.cos(av)} y2={y + (r - 40) * Math.sin(av)} stroke={PAPER} strokeWidth="11" strokeLinecap="round" />
    <circle cx={x} cy={y} r="20" fill={PAPER} />
    <text x={x} y={y + 108} textAnchor="middle" fill="#cfdcd3" fontSize="26" fontWeight="1000" letterSpacing="3">REVOLUCIONES</text>
  </g>;
};

const Engine4: React.FC<{t: number}> = ({t}) => {
  const {x, y} = ENG;
  const ph = (t * (3 + 9 * rpm(t))) % TAU; // visual cycle speed follows the revs
  const ex = exhaustAt(t);
  return <g>
    <Plate x={x} y={y} w={1080} h={640} />
    <rect x={x - 350} y={y - 250} width="700" height="500" rx="30" fill="#1d3029" stroke="#8fa39b" strokeWidth="5" />
    {[0, 1, 2, 3].map((i) => {
      const cx = x - 225 + i * 150;
      const p = Math.sin(ph + [0, PI, PI, 0][i]);
      const top = y - 160 + 70 * (1 + p) / 2;
      return <g key={i}>
        <rect x={cx - 58} y={y - 200} width="116" height="330" rx="10" fill="#071410" stroke="#5d726b" strokeWidth="4" />
        <rect x={cx - 52} y={top} width="104" height="70" rx="8" fill="#9fb3aa" stroke={PAPER} strokeWidth="3" />
        <line x1={cx} y1={top + 70} x2={cx} y2={y + 170} stroke="#c9d6d0" strokeWidth="14" strokeLinecap="round" />
        <circle cx={cx} cy={y - 175} r={14 + 10 * ex * Math.max(0, Math.sin(ph * 2 + i))} fill={EXH} opacity={0.35 + 0.5 * ex} />
      </g>;
    })}
    <rect x={x - 330} y={y + 170} width="660" height="40" rx="12" fill="#4a5e57" />
    <text x={x} y={y + 300} textAnchor="middle" fill="#cfdcd3" fontSize="34" fontWeight="1000" letterSpacing="4">MOTOR</text>
    {/* intake manifold (left, paper) and exhaust manifold (right, orange) */}
    <rect x={x - 440} y={y - 200} width="90" height="330" rx="20" fill="#24342f" stroke={AIR} strokeWidth="5" />
    <rect x={x + 350} y={y - 200} width="110" height="330" rx="20" fill={EXH_DARK} stroke={EXH} strokeWidth="5" />
    <text x={x - 395} y={y + 175} textAnchor="middle" fill={AIR} fontSize="22" fontWeight="1000" letterSpacing="1" transform={`rotate(-90 ${x - 395} ${y + 175})`} dx="160">ADMISIÓN</text>
    <text x={x + 405} y={y + 175} textAnchor="middle" fill={EXH} fontSize="22" fontWeight="1000" letterSpacing="1" transform={`rotate(-90 ${x + 405} ${y + 175})`} dx="160">ESCAPE</text>
  </g>;
};

const Wheel: React.FC<{x: number; y: number; a: number; color: string; dark: string; dir: 1 | -1; hi?: number}> = ({x, y, a, color, dark, dir, hi = 0}) => <g>
  <circle cx={x} cy={y} r="192" fill={dark} stroke={color} strokeWidth={6 + 8 * hi} />
  {hi > 0 ? <circle cx={x} cy={y} r={200 + 16 * hi} fill="none" stroke={brand.lime} strokeWidth="6" opacity={hi} /> : null}
  <circle cx={x} cy={y} r="128" fill="#0b1915" stroke="#3c5a50" strokeWidth="3" />
  <g transform={`rotate(${(dir * a * 180) / PI} ${x} ${y})`}>
    {[...Array(9)].map((_, i) => <path key={i} d={`M${x} ${y} q${dir * 46} -40 ${118 * Math.cos((i * TAU) / 9)} ${118 * Math.sin((i * TAU) / 9)}`} transform={`rotate(${i * 40} ${x} ${y})`} stroke={color} strokeWidth="11" fill="none" strokeLinecap="round" />)}
  </g>
  <circle cx={x} cy={y} r="24" fill="#c9d6d0" />
</g>;

const Turbo: React.FC<{t: number}> = ({t}) => {
  const a = turboAngle(t);
  const vgt = at(t, 31.66, 0.5) * (1 - at(t, 35.0, 0.4));
  const emot = win(t, 32.78, 35.0, 0.2);
  const shaftHi = win(t, 9.84, 11.0, 0.15);
  const sx0 = COMP.x + 195, sx1 = TURB.x - 195;
  return <g>
    <Plate x={(COMP.x + TURB.x) / 2} y={TURB.y + 20} w={1100} h={560} />
    {/* VGT vanes around the turbine */}
    {vgt > 0.01 ? [...Array(12)].map((_, i) => {
      const ang = (i * TAU) / 12, rr = 160;
      const cx = TURB.x + rr * Math.cos(ang), cy = TURB.y + rr * Math.sin(ang);
      const rot = (ang * 180) / PI + 90 * (1 - vgt) + 25 * vgt;
      return <rect key={i} x={cx - 26} y={cy - 7} width="52" height="14" rx="5" fill={brand.lime} transform={`rotate(${rot} ${cx} ${cy})`} opacity={vgt} />;
    }) : null}
    <Wheel x={TURB.x} y={TURB.y} a={a} color={EXH} dark={EXH_DARK} dir={1} hi={win(t, 8.56, 9.6, 0.12)} />
    <Wheel x={COMP.x} y={COMP.y} a={a} color={AIR} dark="#1d2b27" dir={-1} hi={win(t, 10.12, 11.2, 0.12)} />
    {/* shaft and bearing housing */}
    <rect x={sx0} y={TURB.y - 22} width={sx1 - sx0} height="44" rx="10" fill="#5d726b" stroke={shaftHi > 0 ? brand.lime : '#c9d6d0'} strokeWidth={3 + 5 * shaftHi} />
    <line x1={sx0} y1={TURB.y} x2={sx1} y2={TURB.y} stroke="#c9d6d0" strokeWidth="44" strokeDasharray="14 18" strokeDashoffset={-a * 30} opacity=".5" />
    <rect x={1790} y={TURB.y - 64} width="120" height="128" rx="18" fill="#2b3b37" stroke="#9fb3aa" strokeWidth="4" />
    {emot > 0 ? <g opacity={emot}>
      <rect x={1776} y={TURB.y - 92} width="148" height="184" rx="24" fill="none" stroke={brand.lime} strokeWidth="8" />
      {[0, 1, 2, 3, 4].map((i) => <line key={i} x1={1796 + i * 27} y1={TURB.y - 80} x2={1796 + i * 27} y2={TURB.y + 80} stroke="#d9a35b" strokeWidth="9" />)}
      <path d={`M1850 ${TURB.y - 150} l-22 40 h26 l-18 42`} fill="none" stroke={brand.lime} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" opacity={0.5 + 0.5 * Math.sin(t * 20)} />
    </g> : null}
    <text x={TURB.x} y={TURB.y + 250} textAnchor="middle" fill={EXH} fontSize="32" fontWeight="1000" letterSpacing="3">TURBINA</text>
    <text x={COMP.x} y={TURB.y + 250} textAnchor="middle" fill={AIR} fontSize="32" fontWeight="1000" letterSpacing="3">COMPRESOR</text>
    <text x={1850} y={TURB.y + 110} textAnchor="middle" fill="#cfdcd3" fontSize="28" fontWeight="1000" letterSpacing="3">EJE</text>
  </g>;
};

const Flow: React.FC<{pts: Pt[]; t: number; n: number; speed: number; o: number; color: string; r: number; after?: number; color2?: string}> = ({pts, t, n, speed, o, color, r, after, color2}) => <g>
  {[...Array(n)].map((_, i) => {
    const u = (t * speed + i / n) % 1;
    const [x, y] = along(pts, u);
    const post = after !== undefined && u > after;
    return <circle key={i} cx={x + Math.sin(i * 2.1) * 10} cy={y + Math.cos(i * 1.7) * 10} r={post ? r * 1.25 : r} fill={post ? color2 ?? color : color} opacity={o} />;
  })}
</g>;

const PedalEcu: React.FC<{t: number}> = ({t}) => {
  const press = Math.max(at(t, 13.42, 0.25) * (1 - at(t, 34.9, 0.2)), at(t, 35.68, 0.12));
  const req = request(t);
  return <g>
    <g transform={`translate(${PED.x} ${PED.y})`}>
      <Plate x={0} y={0} w={480} h={500} />
      <path d="M-240 200 L240 140 L240 250 L-240 250 Z" fill="#1a2e28" />
      <g transform={`rotate(${-14 * press} 60 -180)`}>
        <line x1="60" y1="-180" x2="-10" y2="60" stroke="#8fa39b" strokeWidth="16" strokeLinecap="round" />
        <g transform="translate(-20 80) rotate(16)"><rect x="-30" y="-85" width="60" height="170" rx="18" fill="#2b3b37" stroke={brand.lime} strokeWidth="5" />
          <g transform={`translate(${-60 * (1 - press)} ${-50 * (1 - press)})`}><path d="M-36 -90 Q-100 -120 -190 -88 L-238 -24 Q-246 32 -214 64 Q-140 102 -36 92 Z" fill="#e7efe9" stroke="#173d34" strokeWidth="5" /></g>
        </g>
      </g>
      <rect x="20" y="-232" width="130" height="88" rx="16" fill="#12302a" stroke={brand.lime} strokeWidth="4" />
      <text x="85" y="-178" textAnchor="middle" fill={brand.lime} fontSize="22" fontWeight="1000">PEDAL</text>
    </g>
    <g transform={`translate(${ECU.x} ${ECU.y})`}>
      <rect x="-200" y="-120" width="400" height="240" rx="28" fill="#12302a" stroke={brand.lime} strokeWidth="5" />
      <text y="-66" textAnchor="middle" fill={brand.lime} fontSize="32" fontWeight="1000" letterSpacing="2">CENTRALITA</text>
      <text y="-18" textAnchor="middle" fill="#cfdcd3" fontSize="20" fontWeight="900" letterSpacing="2">PETICIÓN DE PAR</text>
      <rect x="-160" y="6" width="320" height="34" rx="17" fill="#1d332d" /><rect x="-160" y="6" width={320 * req} height="34" rx="17" fill={brand.lime} />
      <text y="88" textAnchor="middle" fill={req > 0.5 ? brand.lime : '#5d726b'} fontSize="24" fontWeight="1000" letterSpacing="2">{req > 0.5 ? 'PIDE MÁS PAR' : 'PIE FUERA'}</text>
    </g>
  </g>;
};

const Lever: React.FC<{t: number}> = ({t}) => {
  const d = at(t, 28.46, 0.35);
  const kx = LEVER.x + 40 - 80 * d, ky = LEVER.y - 70 + 140 * d;
  return <g>
    <Plate x={LEVER.x} y={LEVER.y} w={330} h={420} />
    <path d={`M${LEVER.x - 40} ${LEVER.y - 110} V${LEVER.y + 110} M${LEVER.x + 40} ${LEVER.y - 110} V${LEVER.y + 110} M${LEVER.x - 40} ${LEVER.y} H${LEVER.x + 40}`} stroke="#3c5a50" strokeWidth="22" strokeLinecap="round" />
    <line x1={LEVER.x} y1={LEVER.y + 170} x2={kx} y2={ky} stroke="#8fa39b" strokeWidth="16" strokeLinecap="round" />
    <circle cx={kx} cy={ky} r="38" fill={d > 0.5 ? brand.lime : '#c9d6d0'} stroke="#173d34" strokeWidth="5" />
    <text x={LEVER.x} y={LEVER.y - 160} textAnchor="middle" fill="#cfdcd3" fontSize="26" fontWeight="1000" letterSpacing="2">CAMBIO</text>
  </g>;
};

// ---------- The world -------------------------------------------------------------------------------------------
export const TurboWorld: React.FC<{t: number; cam?: {cx: number; cy: number; z: number}; centerY?: number}> = ({t, cam, centerY = CENTER_Y}) => {
  const c = cam ?? turboCamera(t);
  const blur = cam ? undefined : camVelocity(turboCamera, t, 30, centerY);
  const ex = exhaustAt(t), w = turboAt(t), b = boostAt(t);
  const far = interpolate(c.z, [0.45, 0.6], [1, 0], clamp);
  const near = 1 - far;
  const dialsO = 1 - win(t, 30.8, 35.2, 0.3);
  const ov = win(t, 35.4, 39.4, 0.3);
  const wave = interpolate(t, [36.4, 38.16], [0, 1], clamp); // the pressurised air arriving «un momento después»
  const wave2 = interpolate(t, [10.9, 12.1], [0, 1], clamp);
  return <WorldSvg cam={c} centerY={centerY} blur={blur} id="turbo">
    {/* pipes: the two circuits never touch */}
    <path d={polyD(EXH_PATH)} fill="none" stroke="#2a1d14" strokeWidth="96" strokeLinejoin="round" />
    <path d={polyD(EXH_PATH)} fill="none" stroke={EXH} strokeWidth="96" strokeLinejoin="round" opacity={0.12 + 0.3 * ex} />
    <path d={polyD(INT_PATH)} fill="none" stroke="#1f2d29" strokeWidth="86" strokeLinejoin="round" />
    <path d={polyD(INT_PATH)} fill="none" stroke={brand.lime} strokeWidth="86" strokeLinejoin="round" opacity={0.06 + 0.22 * b} />
    <Wire p={W_PED} t={t} pulses={[[13.5, 13.95], [35.68, 35.92]]} />
    <Wire p={W_ECU} t={t} pulses={[[13.95, 14.4], [35.92, 36.15]]} />
    <Flow pts={EXH_PATH} t={t} n={34} speed={0.12 + 0.35 * ex} o={0.25 + 0.75 * ex} color={EXH} r={8 + 9 * ex} />
    <Flow pts={INT_PATH} t={t} n={34} speed={0.1 + 0.3 * b} o={0.45 + 0.4 * b} color={AIR} r={7} after={0.12} color2={b > 0.25 ? brand.lime : AIR} />
    {wave2 > 0 && wave2 < 1 ? (() => { const [x, y] = along(INT_PATH.slice(1), wave2); return <circle cx={x} cy={y} r={70} fill="none" stroke={brand.lime} strokeWidth="14" opacity={0.9} />; })() : null}
    {wave > 0 && wave < 1 ? (() => { const [x, y] = along(INT_PATH.slice(1), wave); return <g><circle cx={x} cy={y} r={120} fill={brand.lime} opacity=".25" /><circle cx={x} cy={y} r={70} fill="none" stroke={brand.lime} strokeWidth="22" /></g>; })() : null}
    {/* intercooler */}
    <rect x={IC.x - 85} y={IC.y - 170} width="170" height="340" rx="22" fill="#1b2a26" stroke={AIR} strokeWidth="5" />
    {[...Array(9)].map((_, i) => <line key={i} x1={IC.x - 70} y1={IC.y - 140 + i * 35} x2={IC.x + 70} y2={IC.y - 140 + i * 35} stroke="#5d726b" strokeWidth="5" />)}
    <text x={IC.x - 120} y={IC.y} textAnchor="middle" fill={AIR} fontSize="24" fontWeight="1000" letterSpacing="2" transform={`rotate(-90 ${IC.x - 120} ${IC.y})`}>INTERCOOLER</text>
    <text x={COMP.x} y={3230} textAnchor="middle" fill={AIR} fontSize="26" fontWeight="1000" letterSpacing="2">AIRE DEL FILTRO</text>
    <text x={TURB.x} y={3210} textAnchor="middle" fill={EXH} fontSize="26" fontWeight="1000" letterSpacing="2">AL TUBO DE ESCAPE</text>
    <PedalEcu t={t} />
    <Tachometer t={t} />
    <Lever t={t} />
    <Engine4 t={t} />
    <Turbo t={t} />
    <Dial x={SPIN_DIAL.x} y={SPIN_DIAL.y} r={100} v={w} label="GIRO DEL TURBO" color={EXH} o={dialsO} />
    <Dial x={BOOST_DIAL.x} y={BOOST_DIAL.y} r={100} v={b} label="PRESIÓN" color={brand.lime} note o={dialsO} />
    {/* labels tied to words */}
    <WPill x={1850} y={2560} text="YA GIRA CON EL PIE FUERA" o={near * win(t, 4.18, 6.6, 0.2)} dark color={EXH} size={24} />
    <WPill x={2440} y={2180} text="GASES DE ESCAPE" o={near * win(t, 6.8, 8.8, 0.2)} color={EXH} />
    <WPill x={1600} y={2470} text="EJE: SOLO PASA EL GIRO" o={near * win(t, 9.84, 11.2, 0.15)} size={26} />
    <WPill x={850} y={2080} text="AIRE A PRESIÓN" o={near * win(t, 11.52, 12.9, 0.2)} />
    <WPill x={2440} y={2180} text="MÁS ENERGÍA" o={win(t, 14.74, 17.6, 0.2)} color={EXH} size={40} />
    <WPill x={1850} y={2560} text="INERCIA: GANA GIRO POCO A POCO" o={near * win(t, 18.16, 20.2, 0.2)} dark color={EXH} size={24} />
    <WPill x={1100} y={2610} text="LA PRESIÓN SUBE DESPUÉS" o={near * win(t, 20.3, 21.6, 0.15)} size={24} />
    <WPill x={TACH.x} y={TACH.y + 330} text="POCAS VUELTAS" o={win(t, 24.64, 28.4, 0.2)} color={ALERT} size={60} />
    <WPill x={2440} y={2180} text="POCA ENERGÍA" o={win(t, 25.3, 28.4, 0.2)} dark color={EXH} size={60} />
    <WPill x={LEVER.x - 200} y={LEVER.y + 490} text="MARCHA MÁS CORTA" o={win(t, 28.46, 30.6, 0.2)} size={56} />
    <WPill x={TACH.x} y={TACH.y + 330} text="MÁS MARGEN" o={win(t, 29.58, 30.6, 0.15)} size={60} />
    <WPill x={TURB.x} y={2470} text="GEOMETRÍA VARIABLE" o={win(t, 31.66, 32.55, 0.2)} />
    <WPill x={1850} y={2400} text="ASISTENCIA ELÉCTRICA" o={win(t, 32.78, 34.9, 0.2)} dark />
    <WPill x={PED.x + 60} y={PED.y - 350} text="PIDES" o={far * ov * at(t, 35.68, 0.15)} size={84} />
    <WPill x={ENG.x - 300} y={ENG.y - 420} text="LLEGA DESPUÉS" o={far * ov * at(t, 38.16, 0.2)} color={AIR} size={84} />
  </WorldSvg>;
};

// ---------- Live timeline strip (request vs pressure across the whole reel) -------------------------------------
export const TimelineStrip: React.FC<{t: number; top?: number; cover?: boolean}> = ({t, top = 1360, cover = false}) => {
  const grow = cover ? 1 : win(t, 21.5, 23.5, 0.3);
  const o = cover ? 1 : 1 - at(t, 40.4, 0.25);
  const h = 130 + 170 * grow;
  const W = 980, IX0 = 26, IX1 = W - 26;
  const tx = (s: number) => IX0 + (s / DUR) * (IX1 - IX0);
  const YB = h - 22, YT = 46;
  const ty = (v: number) => YB - v * (YB - YT);
  const now = cover ? DUR : Math.min(t, DUR);
  const line = (f: (s: number) => number, from = 0, to = now) => { const p: string[] = []; for (let s = from; s <= to; s += 0.08) p.push(`${tx(s).toFixed(1)} ${ty(f(s)).toFixed(1)}`); return p.length > 1 ? 'M' + p.join(' L') : ''; };
  const gap = cover ? 1 : at(t, 22.02, 0.3);
  const gapPath = () => {
    const up: string[] = [], dn: string[] = [];
    for (let s = 13.5; s <= 21; s += 0.08) { up.push(`${tx(s).toFixed(1)} ${ty(request(s)).toFixed(1)}`); dn.unshift(`${tx(s).toFixed(1)} ${ty(boostAt(s)).toFixed(1)}`); }
    return 'M' + up.concat(dn).join(' L') + ' Z';
  };
  const ghost = cover ? 0 : at(t, 33.88, 0.4) * (1 - at(t, 35.2, 0.3));
  const fs = 16;
  return <div style={{position: 'absolute', top: top + 130 - h, left: 50, width: W, height: h, borderRadius: 22, background: '#071612f2', border: `2px solid ${grow > 0.5 ? brand.lime : '#d7f36a80'}`, boxShadow: '0 14px 40px #000a', zIndex: 5, opacity: o, overflow: 'hidden', fontFamily: brand.font}}>
    <svg viewBox={`0 0 ${W} ${h}`} style={{width: '100%', height: '100%'}}>
      <text x={IX0} y="30" fill={brand.lime} fontSize={fs} fontWeight="1000" letterSpacing="1">— PETICIÓN</text>
      <text x={IX0 + 150} y="30" fill={PAPER} fontSize={fs} fontWeight="1000" letterSpacing="1">— PRESIÓN DE ADMISIÓN</text>
      <text x={IX1} y="30" textAnchor="end" fill="#9fb3aa" fontSize={13} fontWeight="900" letterSpacing="1">GRÁFICO CONCEPTUAL · SIN DATOS DE PRUEBA</text>
      <path d={`M${IX0} ${YB} H${IX1}`} stroke="#3c5a50" strokeWidth="2" />
      {gap > 0 && now > 21 ? <path d={gapPath()} fill={brand.lime} opacity={0.3 * gap} /> : null}
      {ghost > 0 ? <path d={line(ghostAt, 13.4, 21)} fill="none" stroke={brand.lime} strokeWidth="4" strokeDasharray="10 8" opacity={ghost} /> : null}
      <path d={line(request)} fill="none" stroke={brand.lime} strokeWidth="5" strokeLinejoin="round" />
      <path d={line(boostAt)} fill="none" stroke={PAPER} strokeWidth="5" strokeLinejoin="round" />
      {!cover ? <><line x1={tx(now)} y1={YT - 6} x2={tx(now)} y2={YB} stroke="#cfdcd3" strokeWidth="2" opacity=".5" /><circle cx={tx(now)} cy={ty(boostAt(now))} r="7" fill={PAPER} /><circle cx={tx(now)} cy={ty(request(now))} r="7" fill={brand.lime} /></> : null}
      {gap > 0 ? <g opacity={gap}><rect x={tx(17.25) - 70} y={ty(0.55) - 15} width="140" height="30" rx="15" fill={brand.lime} /><text x={tx(17.25)} y={ty(0.55) + 6} textAnchor="middle" fill={brand.deep} fontSize="17" fontWeight="1000" letterSpacing="1">TURBO LAG</text></g> : null}
      {ghost > 0 ? <text x={tx(13.6)} y={ty(0.98)} fill={brand.lime} fontSize="15" fontWeight="1000" opacity={ghost}>ADELANTA LA SUBIDA</text> : null}
    </svg>
  </div>;
};

export const TurboLagPromo: React.FC<TurboLagSpec> = (spec) => {
  const frame = useCurrentFrame();
  const t = frame / spec.fps;
  return <ExplainerShell spec={spec} frame={frame} t={t} scenes={turboScenes} tag="TURBO LAG" badge="ESQUEMA SIMPLIFICADO · TURBO CONVENCIONAL" chapters={CHAPTERS}
    ctaFrom={40.6} ctaGuide="POR QUÉ TARDA EL TURBO" ctaDetail={<>INERCIA, REVOLUCIONES Y SOLUCIONES<br />COMO LA GEOMETRÍA VARIABLE</>} defaultAudio="audio/voice-video-026.wav"
    world={<TurboWorld t={t} />} hud={<TimelineStrip t={t} />} />;
};

export const TurboLagPreview: React.FC = () => {
  const t = useCurrentFrame() / 30;
  return <AbsoluteFill style={{background: '#0b1e19'}}><TurboWorld t={t} /><TimelineStrip t={t} /></AbsoluteFill>;
};

export const TurboLagCover: React.FC = () => <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
  <TurboWorld t={20.4} cam={{cx: 1660, cy: 2040, z: 0.36}} centerY={1000} />
  <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(#0a211afa 0px, #0a211af2 560px, #0a211a00 720px, #0a211a00 1500px, #0a211af0 1640px)'}} />
  <div style={{position: 'absolute', top: 80, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}><BrandCircle size={140} /></div>
  <div style={{position: 'absolute', top: 250, left: 30, right: 30, textAlign: 'center', color: brand.lime, fontSize: 132, lineHeight: 0.92, fontWeight: 1000, letterSpacing: -4, whiteSpace: 'nowrap', textShadow: '0 10px 30px #06140f80'}}>TURBO LAG</div>
  <div style={{position: 'absolute', top: 410, left: 40, right: 40, textAlign: 'center', color: PAPER, fontSize: 44, lineHeight: 1.05, fontWeight: 1000, letterSpacing: -1}}>POR QUÉ TARDA EL TURBO</div>
  <div style={{position: 'absolute', top: 480, left: 40, right: 40, textAlign: 'center', color: '#cfdcd3', fontSize: 30, lineHeight: 1.1, fontWeight: 900, letterSpacing: 1}}>PIDES AL INSTANTE · LA PRESIÓN LLEGA DESPUÉS</div>
  <TimelineStrip t={DUR} top={1530} cover />
  <div style={{position: 'absolute', top: 1740, left: 210, right: 210, padding: '18px 10px', borderRadius: 22, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 32, fontWeight: 1000}}>KILOMETROCLARO.COM</div>
</AbsoluteFill>;

