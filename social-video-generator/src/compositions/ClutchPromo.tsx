import React from 'react';
import {AbsoluteFill, interpolate, interpolateColors, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandCircle, type CaptionCue, clamp, type ReelScene} from '../components/ReelKit';
import {at, camVelocity, type CamKey, type Chapter, ExplainerShell, kf, makeCamera, PAPER, Plate, type Pt, rnd, win, Wire, WorldSvg, WPill} from '../components/ExplainerKit';

// Vídeo 027 · Cuando pisas el embrague no lo aprietas. One-shot world: pedals → hydraulic release → clutch section
// (flywheel | disc | pressure plate + diaphragm | release bearing) → gearbox input shaft, plus an inset wheel.
// A small simulation (pedal → clamp force → engine/gearbox speed → slip heat) drives the pedal bar, the two concentric
// speed rings, the rev counter, the sparks and the heat map so they always agree. New in this reel: a fixed pedal-travel
// bar with the friction band, and two concentric rings (engine / gearbox) that show slip.
// Voice: voice-video-027.wav (45,12 s, Google TTS, 1×).
export type ClutchSpec = {
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  requiresHumanReview: boolean;
  captions: CaptionCue[];
  audioFile?: string;
};

type SceneId = 'hook' | 'clamp' | 'press' | 'bite' | 'heat' | 'stall' | 'split' | 'ask' | 'cta';
const ANIM = 'ANIMACIÓN ILUSTRATIVA · KILÓMETRO CLARO';
const DUR = 45.12;
export const clutchScenes: ReelScene<SceneId>[] = [
  {id: 'hook', start: 0, end: 5.6, label: '¿PISAR = APRETAR?', credit: ANIM},
  {id: 'clamp', start: 5.6, end: 11.6, label: 'PEDAL SUELTO', credit: ANIM},
  {id: 'press', start: 11.6, end: 18.9, label: 'DESACOPLADO', credit: ANIM},
  {id: 'bite', start: 18.9, end: 26.2, label: 'PUNTO DE FRICCIÓN', credit: ANIM},
  {id: 'heat', start: 26.2, end: 33.4, label: 'CALOR Y DESGASTE', credit: 'GRÁFICO CONCEPTUAL · KILÓMETRO CLARO'},
  {id: 'stall', start: 33.4, end: 36.7, label: 'CALADO', credit: ANIM},
  {id: 'split', start: 36.7, end: 39.9, label: 'SEPARA Y UNE', credit: ANIM},
  {id: 'ask', start: 39.9, end: 41.3, label: '¿LO SABÍAS?', credit: ANIM},
  {id: 'cta', start: 41.3, end: DUR, label: 'LA GUÍA', credit: 'KILOMETROCLARO.COM'},
];
const CHAPTERS: Chapter[] = [
  {from: 0, to: 2.68, title: '¿PISAR = APRETAR?'},
  {from: 2.68, to: 5.6, title: 'AL CONTRARIO: SUELTA', sub: 'PISAR LIBERA EL DISCO', subAt: 3.74},
  {from: 5.6, to: 11.6, title: 'PEDAL SUELTO = DISCO APRETADO', sub: 'EL PAR PASA A LA CAJA', subAt: 10.24},
  {from: 11.6, to: 18.9, title: 'COLLARÍN → DIAFRAGMA', sub: 'MOTOR DESACOPLADO DE LA CAJA', subAt: 17.42},
  {from: 18.9, to: 26.2, title: 'PUNTO DE FRICCIÓN: DESLIZA', sub: 'ARRANQUE SUAVE', subAt: 24.96},
  {from: 26.2, to: 33.4, title: 'DESLIZAR GENERA CALOR', sub: 'ALARGARLO AUMENTA EL DESGASTE', subAt: 32.62},
  {from: 33.4, to: 36.7, title: 'SOLTAR DE GOLPE', sub: 'EL MOTOR PUEDE CALARSE', subAt: 35.9},
  {from: 36.7, to: 39.9, title: 'PISAR SEPARA · SOLTAR UNE'},
  {from: 39.9, to: 41.3, title: '¿LO SABÍAS?'},
];

const HOT = '#ff8a3d', ALERT = '#ff8f7a', STEEL = '#8fa39b';
const TAU = 2 * Math.PI;

// ---------- Simulation: pedal → clamp → engine / gearbox speed → heat ------------------------------------
export const pedalAt = (t: number) => kf(t, [[0, 0], [0.46, 0], [1.2, 1], [5.84, 1], [6.4, 0], [12.06, 0], [13.6, 1], [19.46, 1], [21.0, 0.62], [23.14, 0.47], [24.96, 0.36], [25.7, 0], [28.54, 0], [29.4, 0.44], [32.62, 0.44], [33.2, 1], [34.44, 1], [34.55, 0]]);
const clampOf = (p: number) => (p <= 0.3 ? 1 : p >= 0.6 ? 0 : (0.6 - p) / 0.3);
const brakeAt = (t: number) => ((t >= 29.4 && t < 36.7) ? 25 : t >= 14.8 && t < 19.3 ? 1.6 : 0);
const DT = 0.01, NS = Math.ceil(DUR / DT) + 2;
const SIM = (() => {
  const c: number[] = [], we: number[] = [], wg: number[] = [], heat: number[] = [], aE: number[] = [], aG: number[] = [];
  let e = 1, g = 1, h = 0, ae = 0, ag = 0, running = true;
  for (let i = 0; i < NS; i++) {
    const t = i * DT;
    const cl = clampOf(pedalAt(t));
    const K = t >= 34.4 && t < 36.7 ? 7 : 2.2;
    let T = K * cl * (e - g);
    if (g < 0.01 && Math.abs(T) < 1.25 && t < 34.4) T = 0; // static friction: the car only starts once the clutch transmits enough
    const gov = running ? Math.max(-2, Math.min(2, 4 * (1 - e))) : 0;
    e += (gov - T) * DT;
    if (running && t > 34.4 && e < 0.4) running = false;
    if (!running) e -= e * 7 * DT;
    e = Math.max(0, e);
    g += (T / 2.5 - brakeAt(t) * g - 0.04 * g) * DT;
    g = Math.max(0, g);
    h += (0.55 * cl * Math.abs(e - g) - 0.035 * h) * DT;
    h = Math.min(1, h);
    ae += e * 3.2 * DT; ag += g * 3.2 * DT;
    c.push(cl); we.push(e); wg.push(g); heat.push(h); aE.push(ae); aG.push(ag);
  }
  return {c, we, wg, heat, aE, aG};
})();
const sample = (arr: number[], t: number) => arr[Math.max(0, Math.min(arr.length - 1, Math.round(t / DT)))];
type ClutchState = {p: number; c: number; we: number; wg: number; heat: number; aE: number; aG: number};
export const stateAt = (t: number): ClutchState => {
  if (t >= 36.7) return {p: 1, c: 0, we: 1, wg: 0, heat: 0.25, aE: (t - 36.7) * 3.2, aG: 0}; // overview: «pisar separa»
  return {p: pedalAt(t), c: sample(SIM.c, t), we: sample(SIM.we, t), wg: sample(SIM.wg, t), heat: sample(SIM.heat, t), aE: sample(SIM.aE, t), aG: sample(SIM.aG, t)};
};
const laneB = (t: number): ClutchState => ({p: 0, c: 1, we: 1, wg: 1, heat: 0.25, aE: t * 3.2, aG: t * 3.2});
const statusOf = (s: ClutchState) => (s.we < 0.05 ? ['MOTOR CALADO', ALERT] : s.c < 0.05 ? (s.wg < 0.05 ? ['CAJA PARADA', PAPER] : ['DESACOPLADOS', PAPER]) : Math.abs(s.we - s.wg) > 0.06 ? ['DESLIZAN', HOT] : ['MISMA VELOCIDAD', brand.lime]);

// ---------- World layout ---------------------------------------------------------------------------------
const PED = {x: 500, y: 720}, CX = 1500, CY = 1800, LANE_B = 1000, TACH = {x: 1070, y: 1330}, INSET = {x: 2150, y: 1150};
const W_HYD: Pt[] = [[PED.x - 200, PED.y - 230], [PED.x - 200, 300], [1700, 700], [CX + 105, CY - 118]];

const CAM: CamKey[] = [
  [0, PED.x, 740, 1.15], [1.7, PED.x, 740, 1.18], [3.6, PED.x, 740, 1.2], [3.85, 520, 760, 1.36], [4.9, 1450, CY, 1.0], [5.8, 1450, CY, 1.0],
  [6.9, 1360, CY, 1.4], [8.4, 1360, CY, 1.4], [9.2, 1240, CY, 1.4], [10.1, 1300, CY, 1.2], [11.2, 1850, CY, 0.9],
  [12.0, 1500, 1750, 0.85], [12.9, 1600, CY, 1.45], [13.7, 1560, 1690, 1.5], [14.9, 1400, CY, 1.3], [16.0, 1450, CY, 1.1], [17.3, 1700, 1560, 0.62], [18.8, 1700, 1560, 0.62],
  [19.5, 1500, 1650, 0.75], [22.9, 1500, 1650, 0.8], [23.4, 1330, 1640, 1.5], [24.7, 1340, 1640, 1.45], [25.4, 1750, 1500, 0.62], [26.4, 1750, 1500, 0.62],
  [27.8, 1330, 1700, 1.4], [29.6, 1340, 1700, 1.35], [30.7, 1750, 1500, 0.62], [32.4, 1750, 1500, 0.62], [32.8, 1330, 1580, 1.75], [33.4, 1340, 1600, 1.6],
  [34.2, 1450, 1600, 0.8], [36.5, 1450, 1600, 0.8], [37.2, 1515, 2250, 0.53], [39.9, 1515, 2250, 0.54], [40.5, 1318, 1590, 2.4], [DUR, 1318, 1590, 1.9],
];
export const clutchCamera = makeCamera(CAM);

// ---------- Pedals --------------------------------------------------------------------------------------
const Pedals: React.FC<{t: number; p: number}> = ({t, p}) => {
  const pad = (x: number, y: number, w: number, h: number, press: number, lime: boolean, label: string) => <g>
    <line x1={x} y1={y - 240} x2={x} y2={y - h / 2 + press * 70} stroke="#8fa39b" strokeWidth="14" strokeLinecap="round" />
    <rect x={x - w / 2} y={y - h / 2 + press * 70} width={w} height={h * (1 - 0.18 * press)} rx="16" fill="#2b3b37" stroke={lime ? brand.lime : '#6d817a'} strokeWidth={lime ? 6 : 4} />
    {[0, 1, 2].map((k) => <line key={k} x1={x - w / 2 + 14} y1={y - h / 2 + press * 70 + 22 + k * 22} x2={x + w / 2 - 14} y2={y - h / 2 + press * 70 + 22 + k * 22} stroke="#4a5e57" strokeWidth="5" />)}
    <text x={x} y={y + 170} textAnchor="middle" fill={lime ? brand.lime : '#9fb3aa'} fontSize="26" fontWeight="1000" letterSpacing="2">{label}</text>
  </g>;
  const crossed = at(t, 2.05, 0.2);
  return <g transform={`translate(${PED.x} ${PED.y})`}>
    <Plate x={0} y={0} w={760} h={640} />
    <path d="M-380 200 H380 V320 H-380 Z" fill="#1a2e28" />
    {pad(-200, 40, 120, 110, p, true, 'EMBRAGUE')}
    {pad(0, 40, 120, 110, 0, false, 'FRENO')}
    {pad(190, 30, 80, 150, 0, false, 'ACELERADOR')}
    <g transform={`translate(-200 ${-20 + p * 70})`}>
      <path d="M-70 -40 Q-80 -150 -30 -230 L60 -250 Q90 -160 70 -40 Q0 -10 -70 -40 Z" fill="#e7efe9" stroke="#173d34" strokeWidth="5" />
    </g>
    <WPill x={40} y={-270} text="APRIETA" o={win(t, 1.72, 3.6, 0.15)} dark color={PAPER} size={34} />
    {crossed > 0 ? <line x1={-60} y1={-270} x2={140} y2={-270} stroke={ALERT} strokeWidth="12" strokeLinecap="round" opacity={crossed * (1 - at(t, 3.6, 0.15))} /> : null}
    <WPill x={40} y={-270} text="SUELTA EL DISCO" o={at(t, 3.74, 0.2)} size={34} />
  </g>;
};

// ---------- Clutch section (side view, axis horizontal) --------------------------------------------------
const ClutchSection: React.FC<{y: number; s: ClutchState; t: number; labels: boolean; main: boolean}> = ({y, s, t, labels, main}) => {
  const gap = 46 * (1 - s.c);
  const dxD = 0.35 * gap, dxP = gap;
  const heatOn = main ? at(t, 27.92, 0.4) : 0;
  const lin = interpolateColors(heatOn * s.heat, [0, 0.45, 1], [brand.lime, HOT, '#ff4d2e']);
  const wear = main ? at(t, 32.62, 0.8) : 0;
  const lt = 20 - 9 * wear;
  const slip = s.c * Math.abs(s.we - s.wg);
  const torque = s.c > 0.55 && s.we > 0.2 ? s.c : 0;
  const fingerTip = CX + 78 - 58 * Math.min(1, s.p / 0.6);
  const arrows = s.c * (main ? 0.35 + 0.65 * win(t, 6.96, 11.6, 0.2) : 1);
  const pressHi = main ? win(t, 12.82, 15.0, 0.15) : 0;
  return <g transform={`translate(0 ${y - CY})`}>
    <Plate x={CX - 50} y={CY} w={1780} h={680} />
    {/* engine stub and crank */}
    <rect x={CX - 980} y={CY - 150} width="200" height="300" rx="24" fill="#1d3029" stroke={STEEL} strokeWidth="4" />
    <text x={CX - 880} y={CY + 10} textAnchor="middle" fill="#cfdcd3" fontSize="30" fontWeight="1000" letterSpacing="3">MOTOR</text>
    <rect x={CX - 780} y={CY - 26} width="500" height="52" fill="#5d726b" />
    <line x1={CX - 780} y1={CY} x2={CX - 280} y2={CY} stroke="#c9d6d0" strokeWidth="52" strokeDasharray="16 20" strokeDashoffset={-s.aE * 40} opacity=".45" />
    {/* flywheel */}
    <rect x={CX - 282} y={CY - 285} width="54" height="570" rx="10" fill="#4a5e57" stroke="#c9d6d0" strokeWidth="4" />
    <line x1={CX - 255} y1={CY - 285} x2={CX - 255} y2={CY + 285} stroke="#e7efe9" strokeWidth="30" strokeDasharray="22 26" strokeDashoffset={-s.aE * 60} opacity=".35" />
    {/* disc with friction linings */}
    <g transform={`translate(${dxD} 0)`}>
      <rect x={CX - 205} y={CY - 258} width="12" height="516" rx="4" fill="#9fb3aa" />
      {[-1, 1].map((sg) => <g key={sg}>
        <rect x={CX - 205 - lt} y={sg < 0 ? CY - 258 : CY + 150} width={lt} height="108" rx="4" fill={lin} />
        <rect x={CX - 193} y={sg < 0 ? CY - 258 : CY + 150} width={lt} height="108" rx="4" fill={lin} />
      </g>)}
      <rect x={CX - 214} y={CY - 46} width="30" height="92" rx="6" fill="#c9d6d0" />
    </g>
    {/* pressure plate */}
    <rect x={CX - 172 + dxP} y={CY - 252} width="50" height="504" rx="10" fill={main && win(t, 6.96, 9.0, 0.15) > 0 ? '#c9d6d0' : '#8fa39b'} stroke={main && win(t, 6.96, 9.0, 0.15) > 0 ? brand.lime : '#c9d6d0'} strokeWidth="5" />
    {/* cover and diaphragm spring */}
    <path d={`M${CX - 112} ${CY - 292} H${CX + 52} V${CY - 92} M${CX - 112} ${CY + 292} H${CX + 52} V${CY + 92}`} fill="none" stroke="#5d726b" strokeWidth="10" />
    {[-1, 1].map((sg) => <g key={sg}>
      <line x1={CX - 122 + dxP} y1={CY + sg * 232} x2={CX + 30} y2={CY + sg * 205} stroke={pressHi > 0 ? brand.lime : '#c9d6d0'} strokeWidth="12" strokeLinecap="round" />
      <line x1={CX + 30} y1={CY + sg * 205} x2={fingerTip} y2={CY + sg * 72} stroke={pressHi > 0 ? brand.lime : '#c9d6d0'} strokeWidth="12" strokeLinecap="round" />
      <circle cx={CX + 30} cy={CY + sg * 205} r="11" fill="#e7efe9" />
    </g>)}
    {/* input shaft and gearbox */}
    <rect x={CX - 200} y={CY - 22} width="890" height="44" fill="#5d726b" />
    <line x1={CX - 200} y1={CY} x2={CX + 690} y2={CY} stroke="#c9d6d0" strokeWidth="44" strokeDasharray="14 18" strokeDashoffset={-s.aG * 40} opacity=".5" />
    <rect x={CX + 680} y={CY - 150} width="260" height="300" rx="26" fill="#12302a" stroke={brand.lime} strokeWidth="5" />
    <text x={CX + 810} y={CY + 10} textAnchor="middle" fill={brand.lime} fontSize="34" fontWeight="1000" letterSpacing="3">CAJA</text>
    {/* release bearing */}
    <rect x={fingerTip} y={CY - 84} width="62" height="168" rx="14" fill={s.p > 0.2 ? brand.lime : '#4a5e57'} stroke="#e7efe9" strokeWidth="4" />
    {/* clamp force arrows */}
    {arrows > 0.02 ? [-200, 200].map((yy) => <path key={yy} d={`M${CX - 60 + dxP} ${CY + yy} h-50 m14 -16 l-14 16 l14 16`} fill="none" stroke={brand.lime} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity={arrows} />) : null}
    {/* torque pulses to the gearbox */}
    {torque > 0 ? [...Array(6)].map((_, k) => { const ph = (t * 0.7 + k / 6) % 1; const x = CX - 250 + ph * 930; return <g key={k} opacity={torque * Math.min(1, (CX + 680 - x) / 80)}><circle cx={x} cy={CY} r="34" fill={brand.lime} opacity=".25" /><circle cx={x} cy={CY} r="15" fill={brand.lime} /></g>; }) : null}
    {/* slip sparks */}
    {slip > 0.05 ? [...Array(14)].map((_, k) => { const ph = (t * 2.2 + rnd(k, 3)) % 1; const sg = k % 2 ? 1 : -1; return <circle key={k} cx={CX - 200 + dxD + (rnd(k, 4) - 0.5) * 60 + ph * 40} cy={CY + sg * (262 + ph * 70)} r={5 - ph * 3} fill={k % 3 ? HOT : '#ffd27a'} opacity={Math.min(1, slip * 3) * (1 - ph)} />; }) : null}
    {labels ? <g fill="#cfdcd3" fontSize="24" fontWeight="1000" letterSpacing="2" textAnchor="middle">
      <text x={CX - 255} y={CY + 340}>VOLANTE</text>
      <text x={CX - 195} y={CY - 320}>DISCO</text>
      <text x={CX - 120} y={CY + 340}>PLATO</text>
      <text x={CX + 50} y={CY - 320}>DIAFRAGMA</text>
      <text x={CX + 200} y={CY + 130}>COLLARÍN</text>
      <text x={CX + 400} y={CY - 50}>EJE DE LA CAJA</text>
    </g> : null}
  </g>;
};

const Tach: React.FC<{v: number; o: number}> = ({v, o}) => {
  const {x, y} = TACH, r = 110;
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25, av = a0 + (a1 - a0) * 0.55 * v;
  return <g opacity={o}>
    <circle cx={x} cy={y} r={r + 14} fill="#071612ee" stroke="#3c5a50" strokeWidth="4" />
    {[...Array(13)].map((_, i) => { const a = a0 + ((a1 - a0) * i) / 12; return <line key={i} x1={x + (r - 22) * Math.cos(a)} y1={y + (r - 22) * Math.sin(a)} x2={x + (r - 6) * Math.cos(a)} y2={y + (r - 6) * Math.sin(a)} stroke="#9fb3aa" strokeWidth="4" />; })}
    <line x1={x} y1={y} x2={x + (r - 26) * Math.cos(av)} y2={y + (r - 26) * Math.sin(av)} stroke={v < 0.05 ? ALERT : PAPER} strokeWidth="7" strokeLinecap="round" />
    <circle cx={x} cy={y} r="10" fill={PAPER} />
    <text x={x} y={y + 64} textAnchor="middle" fill="#cfdcd3" fontSize="17" fontWeight="1000" letterSpacing="1">REVOLUCIONES</text>
  </g>;
};

const Inset: React.FC<{s: ClutchState; t: number; o: number}> = ({s, t, o}) => {
  const tilt = -12 * at(t, 30.92, 0.4) * (1 - at(t, 33.3, 0.3));
  const {x, y} = INSET;
  return <g opacity={o}>
    <rect x={x - 280} y={y - 210} width="560" height="420" rx="30" fill="#0a1f1a" stroke={brand.lime} strokeWidth="4" />
    <clipPath id="insetClip"><rect x={x - 276} y={y - 206} width="552" height="412" rx="28" /></clipPath>
    <g clipPath="url(#insetClip)"><g transform={`rotate(${tilt} ${x} ${y + 60})`}>
      <rect x={x - 400} y={y + 110} width="800" height="200" fill="#2a3633" />
      {[...Array(8)].map((_, i) => <rect key={i} x={((i * 130 - s.aG * 60) % 1040 + 1040) % 1040 + x - 520} y={y + 140} width="70" height="10" rx="5" fill="#e9e5c4" opacity=".7" />)}
      <circle cx={x} cy={y} r="110" fill="#141c1a" stroke="#4a5e57" strokeWidth="6" />
      <g transform={`rotate(${(s.aG * 180) / Math.PI} ${x} ${y})`}>{[0, 1, 2, 3, 4].map((k) => <line key={k} x1={x} y1={y} x2={x + 72 * Math.cos((k * TAU) / 5)} y2={y + 72 * Math.sin((k * TAU) / 5)} stroke="#9fb3aa" strokeWidth="12" strokeLinecap="round" />)}</g>
      <circle cx={x} cy={y} r="20" fill="#c9d6d0" />
    </g></g>
    <text x={x - 250} y={y - 165} fill="#cfdcd3" fontSize="22" fontWeight="1000" letterSpacing="2">LA RUEDA</text>
  </g>;
};

// ---------- The world --------------------------------------------------------------------------------------
export const ClutchWorld: React.FC<{t: number; cam?: {cx: number; cy: number; z: number}; centerY?: number; cover?: boolean}> = ({t, cam, centerY = 1000, cover = false}) => {
  const base = cam ?? clutchCamera(t);
  const shake = !cam && t > 35.9 && t < 36.35 ? Math.sin(t * 90) * 7 * (1 - (t - 35.9) / 0.45) : 0;
  const c = {cx: base.cx + shake / base.z, cy: base.cy, z: base.z};
  const blur = cam ? undefined : camVelocity(clutchCamera, t, 30, centerY);
  const s = stateAt(t);
  const ov = cover ? 1 : win(t, 36.75, 40.3, 0.3);
  const detail = 1 - ov;
  const far = interpolate(c.z, [0.5, 0.7], [1, 0], clamp);
  return <WorldSvg cam={c} centerY={centerY} blur={blur} id="clutch">
    {!cover ? <><Wire p={W_HYD} t={t} pulses={[[0.5, 1.2], [12.06, 12.8], [32.7, 33.2]]} /><Pedals t={t} p={s.p} /></> : null}
    <ClutchSection y={CY} s={s} t={t} labels={detail > 0.5} main />
    <Tach v={s.we} o={detail} />
    <Inset s={s} t={t} o={detail} />
    {ov > 0 ? <g opacity={ov}>
      <ClutchSection y={CY + LANE_B} s={laneB(t)} t={t} labels={false} main={false} />
      <path d={`M${CX - 1000} ${CY + LANE_B / 2 - 20} H${CX + 960}`} stroke={brand.lime} strokeWidth="8" strokeDasharray="40 30" opacity=".6" />
      <text x={CX - 20} y={CY - 380} textAnchor="middle" fill={ALERT} fontSize="104" fontWeight="1000" letterSpacing="4" opacity={0.35 + 0.65 * (cover ? 1 : at(t, 37.16, 0.2))}>PISAR SEPARA</text>
      <text x={CX - 20} y={CY + LANE_B - 380} textAnchor="middle" fill={brand.lime} fontSize="104" fontWeight="1000" letterSpacing="4" opacity={0.35 + 0.65 * (cover ? 1 : at(t, 38.54, 0.2))}>SOLTAR UNE</text>
    </g> : null}
    {/* labels tied to words */}
    <WPill x={CX - 150} y={CY - 380} text="PLATO DE PRESIÓN" o={detail * win(t, 6.96, 8.9, 0.15)} />
    <WPill x={CX - 255} y={CY - 380} text="VOLANTE DEL MOTOR" o={detail * win(t, 8.92, 10.2, 0.15)} />
    <WPill x={CX + 200} y={CY - 200} text="EL PAR PASA A LA CAJA" o={detail * win(t, 10.24, 11.8, 0.15)} size={26} />
    <WPill x={CX + 210} y={CY - 380} text="COLLARÍN" o={detail * win(t, 12.82, 13.6, 0.12)} />
    <WPill x={CX + 70} y={CY - 380} text="DIAFRAGMA" o={detail * win(t, 13.64, 14.75, 0.12)} />
    <WPill x={CX - 110} y={CY - 380} text="DEJA DE APRETAR" o={detail * win(t, 14.8, 16.1, 0.15)} color={ALERT} />
    <WPill x={CX - 110} y={CY + 400} text="HOLGURA EXAGERADA" o={detail * win(t, 15.0, 16.4, 0.15)} dark color={PAPER} size={22} />
    <WPill x={CX + 330} y={CY + 330} text="CAJA PARÁNDOSE" o={far * detail * win(t, 17.42, 18.9, 0.2)} dark color={PAPER} size={48} />
    <WPill x={CX - 200} y={CY - 390} text="DESLIZA" o={detail * win(t, 23.88, 25.0, 0.12)} color={HOT} />
    <WPill x={INSET.x} y={INSET.y + 270} text="ARRANCA" o={far * detail * win(t, 24.96, 26.4, 0.15)} size={48} />
    <WPill x={CX - 180} y={CY - 380} text="MAPA DE CALOR" o={detail * win(t, 27.92, 29.6, 0.15)} color={HOT} />
    <WPill x={CX - 180} y={CY - 315} text="GRÁFICO CONCEPTUAL · SIN DATOS DE PRUEBA" o={detail * win(t, 27.92, 29.6, 0.15)} dark color={HOT} size={16} />
    <WPill x={INSET.x} y={INSET.y + 270} text="SUJETO EN UNA CUESTA" o={far * detail * win(t, 30.92, 32.5, 0.15)} color={HOT} size={44} />
    <WPill x={CX - 200} y={CY - 340} text="DESGASTE" o={detail * win(t, 32.62, 33.5, 0.12)} color={ALERT} />
    <WPill x={TACH.x} y={TACH.y - 190} text="CALADO" o={detail * win(t, 35.9, 36.8, 0.12)} color={ALERT} size={40} />
  </WorldSvg>;
};

// ---------- Screen HUD: pedal-travel bar (left) and concentric speed rings (right) -----------------------------
export const PedalBar: React.FC<{t: number; top?: number; height?: number}> = ({t, top = 480, height = 1000}) => {
  const s = stateAt(t);
  const o = 1 - win(t, 36.7, 40.3, 0.3) - at(t, 41.2, 0.2);
  const band = at(t, 23.14, 0.25);
  const y0 = 56, h = height - 112;
  const py = y0 + s.p * h;
  return <div style={{position: 'absolute', top, left: 40, width: 92, height, zIndex: 5, opacity: Math.max(0, o), fontFamily: brand.font}}>
    <svg viewBox={`0 0 92 ${height}`} style={{width: '100%', height: '100%'}}>
      <rect x="2" y="2" width="88" height={height - 4} rx="20" fill="#071612e8" stroke="#d7f36a80" strokeWidth="2" />
      <text x="46" y="32" textAnchor="middle" fill={brand.lime} fontSize="15" fontWeight="1000" letterSpacing="1">PEDAL</text>
      <rect x="40" y={y0} width="12" height={h} rx="6" fill="#2e4a41" />
      <rect x="30" y={y0 + 0.3 * h} width="32" height={0.3 * h} rx="8" fill={HOT} opacity={0.18 + 0.5 * band} />
      <rect x="40" y={y0} width="12" height={s.p * h} rx="6" fill={brand.lime} />
      <rect x="16" y={py - 14} width="60" height="28" rx="12" fill={brand.lime} stroke="#071612" strokeWidth="3" />
      <text x="46" y={y0 - 4} textAnchor="middle" fill="#cfdcd3" fontSize="11" fontWeight="900">SUELTO</text>
      <text x="46" y={y0 + h + 18} textAnchor="middle" fill="#cfdcd3" fontSize="11" fontWeight="900">PISADO</text>
      <text transform={`translate(80 ${y0 + 0.45 * h}) rotate(-90)`} textAnchor="middle" fill={HOT} fontSize="14" fontWeight="1000" letterSpacing="1" opacity={0.4 + 0.6 * band}>PUNTO DE FRICCIÓN</text>
      <text transform={`translate(14 ${y0 + h / 2}) rotate(-90)`} textAnchor="middle" fill="#9fb3aa" fontSize="10" fontWeight="900" letterSpacing="1">GRÁFICO CONCEPTUAL · SIN DATOS DE PRUEBA</text>
    </svg>
  </div>;
};

export const SpeedRings: React.FC<{t: number}> = ({t}) => {
  const s = stateAt(t);
  const o = 1 - win(t, 36.7, 40.3, 0.3) - at(t, 41.2, 0.2);
  const [txt, col] = statusOf(s);
  const ring = (r: number, a: number, col2: string, w: number) => <g>
    <circle cx="100" cy="100" r={r} fill="none" stroke="#2e4a41" strokeWidth={w} />
    <circle cx="100" cy="100" r={r} fill="none" stroke={col2} strokeWidth={w} strokeDasharray={`${r * 1.1} ${r * 5.2}`} transform={`rotate(${(a * 180) / Math.PI} 100 100)`} strokeLinecap="round" />
  </g>;
  return <div style={{position: 'absolute', top: 1232, right: 40, width: 210, height: 262, zIndex: 5, opacity: Math.max(0, o), borderRadius: 22, background: '#071612e8', border: '2px solid #d7f36a80', fontFamily: brand.font}}>
    <svg viewBox="0 0 210 262" style={{width: '100%', height: '100%'}}>
      <g transform="translate(5 6)">
        {ring(82, s.aE, brand.lime, 16)}
        {ring(54, s.aG, PAPER, 16)}
        <circle cx="100" cy="100" r="26" fill="#0b1915" stroke="#3c5a50" strokeWidth="3" />
      </g>
      <text x="22" y="222" fill={brand.lime} fontSize="14" fontWeight="1000" letterSpacing="1">● MOTOR</text>
      <text x="118" y="222" fill={PAPER} fontSize="14" fontWeight="1000" letterSpacing="1">● CAJA</text>
      <text x="105" y="248" textAnchor="middle" fill={col} fontSize="16" fontWeight="1000" letterSpacing="1">{txt}</text>
    </svg>
  </div>;
};

export const ClutchPromo: React.FC<ClutchSpec> = (spec) => {
  const frame = useCurrentFrame();
  const t = frame / spec.fps;
  return <ExplainerShell spec={spec} frame={frame} t={t} scenes={clutchScenes} tag="EMBRAGUE" badge="ESQUEMA SIMPLIFICADO · EMBRAGUE MONODISCO EN SECO" chapters={CHAPTERS}
    ctaFrom={41.3} ctaGuide="AL PISAR EL EMBRAGUE" ctaDetail={<>DISCO, PLATO, COLLARÍN<br />Y PUNTO DE FRICCIÓN</>} defaultAudio="audio/voice-video-027.wav"
    world={<ClutchWorld t={t} />} hud={<><PedalBar t={t} /><SpeedRings t={t} /></>} />;
};

export const ClutchPreview: React.FC = () => {
  const t = useCurrentFrame() / 30;
  return <AbsoluteFill style={{background: '#0b1e19'}}><ClutchWorld t={t} /><PedalBar t={t} /><SpeedRings t={t} /></AbsoluteFill>;
};

export const ClutchCover: React.FC = () => <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
  <ClutchWorld t={38.6} cam={{cx: 1515, cy: 2250, z: 0.5}} centerY={1150} cover />
  <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(#0a211afa 0px, #0a211af2 560px, #0a211a00 700px, #0a211a00 1640px, #0a211af0 1760px)'}} />
  <div style={{position: 'absolute', top: 80, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}><BrandCircle size={140} /></div>
  <div style={{position: 'absolute', top: 250, left: 20, right: 20, textAlign: 'center', color: brand.lime, fontSize: 96, lineHeight: 0.95, fontWeight: 1000, letterSpacing: -4, whiteSpace: 'nowrap', textShadow: '0 10px 30px #06140f80'}}>¿PISAR = APRETAR?</div>
  <div style={{position: 'absolute', top: 380, left: 40, right: 40, textAlign: 'center', color: PAPER, fontSize: 44, lineHeight: 1.05, fontWeight: 1000, letterSpacing: -1}}>QUÉ PASA AL PISAR EL EMBRAGUE</div>
  <div style={{position: 'absolute', top: 450, left: 40, right: 40, textAlign: 'center', color: '#cfdcd3', fontSize: 30, lineHeight: 1.1, fontWeight: 900, letterSpacing: 1}}>PISAR SEPARA · SOLTAR UNE</div>
  <div style={{position: 'absolute', top: 1740, left: 210, right: 210, padding: '18px 10px', borderRadius: 22, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 32, fontWeight: 1000}}>KILOMETROCLARO.COM</div>
</AbsoluteFill>;
