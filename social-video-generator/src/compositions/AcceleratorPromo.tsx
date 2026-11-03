import React from 'react';
import {AbsoluteFill, Easing, interpolate, interpolateColors, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {Backdrop, BrandCircle, type CaptionCue, clamp, CtaCard, ReelChrome, type ReelScene} from '../components/ReelKit';

// Vídeo 024 · Pisar el acelerador no echa más gasolina (al menos, no directamente).
// Fully rendered one-shot: a single world and a camera that travels pedal → ECU → petrol → diesel → turbo → map,
// with no cuts. Every event is tied to the word that names it in voice-video-024.wav (41,0 s, Google TTS, 1×).
export type AcceleratorSpec = {
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  requiresHumanReview: boolean;
  captions: CaptionCue[];
  audioFile?: string;
};

type SceneId = 'hook' | 'signal' | 'petrolAir' | 'petrolSpark' | 'dieselAir' | 'dieselFuel' | 'turbo' | 'same' | 'ask' | 'cta';
const ANIM = 'ANIMACIÓN ILUSTRATIVA · KILÓMETRO CLARO';
export const accScenes: ReelScene<SceneId>[] = [
  {id: 'hook', start: 0, end: 4.9, label: 'LA PREGUNTA', credit: ANIM},
  {id: 'signal', start: 4.9, end: 9.97, label: 'LA SEÑAL', credit: ANIM},
  {id: 'petrolAir', start: 9.97, end: 15.9, label: 'GASOLINA: AIRE', credit: ANIM},
  {id: 'petrolSpark', start: 15.9, end: 20.7, label: 'GASOLINA: CHISPA', credit: ANIM},
  {id: 'dieselAir', start: 20.7, end: 23.8, label: 'DIÉSEL: AIRE', credit: ANIM},
  {id: 'dieselFuel', start: 23.8, end: 29.06, label: 'DIÉSEL: GASÓLEO', credit: ANIM},
  {id: 'turbo', start: 29.06, end: 32.7, label: 'EL TURBO', credit: ANIM},
  {id: 'same', start: 32.7, end: 36.1, label: 'DOS RESPUESTAS', credit: ANIM},
  {id: 'ask', start: 36.1, end: 37.2, label: '¿LO SABÍAS?', credit: ANIM},
  {id: 'cta', start: 37.2, end: 41, label: 'LA GUÍA', credit: 'KILOMETROCLARO.COM'},
];

const AIR = '#bfe3f2', FUEL = '#ffd166', HOT = '#ff8a3d', FIRE = '#ff6b2c', PAPER = '#f7f8f5';
const ease = Easing.inOut(Easing.cubic);
const at = (t: number, from: number, dur = 0.3) => interpolate(t, [from, from + dur], [0, 1], {...clamp, easing: ease});
const win = (t: number, a: number, b: number, fade = 0.15) => Math.min(at(t, a, fade), 1 - at(t, b, fade));
const kf = (t: number, pts: [number, number][]) => interpolate(t, pts.map((p) => p[0]), pts.map((p) => p[1]), {...clamp, easing: ease});
const rnd = (i: number, k: number) => { const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); };
const PI = Math.PI;

// ---------- World layout --------------------------------------------------------------------
const P = {x: 1260, y: 520}, E = {x: 1260, y: 1500}, G = {x: 560, y: 2600}, D = {x: 1960, y: 2600}, T = {x: 2060, y: 3700}, GR = {x: 1460, y: 3700};
type Pt = [number, number];
const W1: Pt[] = [[P.x + 200, P.y - 290], [1720, 420], [1720, 1180], [E.x, E.y - 168]];
const W2: Pt[] = [[E.x - 110, E.y + 168], [E.x - 110, 1860], [G.x, 1680], [G.x, 1870]];
const W3: Pt[] = [[E.x + 110, E.y + 168], [E.x + 110, 1860], [D.x, 1680], [D.x, 1870]];
const bez = (p: Pt[], u: number): Pt => {
  const m = 1 - u;
  return [0, 1].map((k) => m * m * m * p[0][k] + 3 * m * m * u * p[1][k] + 3 * m * u * u * p[2][k] + u * u * u * p[3][k]) as Pt;
};
const bezD = (p: Pt[]) => `M${p[0][0]} ${p[0][1]} C${p[1][0]} ${p[1][1]} ${p[2][0]} ${p[2][1]} ${p[3][0]} ${p[3][1]}`;

// Camera keyframes: [time, centreX, centreY, zoom]. The point of interest sits at screen (540, 980).
const CAM: [number, number, number, number][] = [
  [0, 1260, 560, 1.0], [3.55, 1260, 560, 1.05], [3.78, 1260, 530, 1.17], [4.9, 1260, 560, 1.08],
  [5.5, 1330, 760, 0.95], [6.8, 1260, 1460, 0.95], [7.8, 1180, 1500, 0.98], [9.9, 1180, 1520, 0.98],
  [10.9, G.x, 2560, 0.85], [13.3, G.x, 2600, 0.85], [13.8, 140, 2290, 1.4], [14.25, 140, 2290, 1.45], [14.85, 480, 2560, 1.0],
  [16.0, 520, 2560, 1.0], [16.45, 330, 2240, 1.4], [18.3, 360, 2260, 1.35], [18.85, G.x, 2420, 1.2], [20.05, G.x, 2430, 1.2], [20.2, G.x, 2430, 1.3], [20.75, 600, 2520, 1.05],
  [21.45, D.x, 2600, 0.85], [24.4, D.x, 2600, 0.9], [25.0, D.x, 2420, 1.3], [26.9, D.x, 2440, 1.25], [27.5, D.x, 2560, 1.0], [29.1, D.x, 2600, 0.95],
  [29.9, 1770, 3680, 0.84], [32.6, 1770, 3680, 0.88],
  [33.5, 1260, 1690, 0.35], [35.9, 1260, 1690, 0.37], [36.45, E.x, 1520, 0.72], [37.3, E.x, 1520, 0.78], [41, E.x, 1600, 0.55],
];
export const camera = (t: number) => {
  if (t <= CAM[0][0]) return {cx: CAM[0][1], cy: CAM[0][2], z: CAM[0][3]};
  for (let i = 0; i < CAM.length - 1; i++) {
    const [t0, x0, y0, z0] = CAM[i], [t1, x1, y1, z1] = CAM[i + 1];
    if (t <= t1) {
      const e = ease((t - t0) / (t1 - t0));
      return {cx: x0 + (x1 - x0) * e, cy: y0 + (y1 - y0) * e, z: Math.exp(Math.log(z0) + (Math.log(z1) - Math.log(z0)) * e)};
    }
  }
  const l = CAM[CAM.length - 1];
  return {cx: l[1], cy: l[2], z: l[3]};
};

const WPill: React.FC<{x: number; y: number; text: string; o?: number; dark?: boolean; color?: string; size?: number}> = ({x, y, text, o = 1, dark = false, color = brand.lime, size = 28}) => {
  if (o <= 0.01) return null;
  const w = text.length * size * 0.68 + 56, h = size * 1.9;
  return <g opacity={o} transform={`translate(${x} ${y}) scale(${0.85 + 0.15 * o})`}>
    <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2} fill={dark ? '#071612ee' : color} stroke={dark ? color : '#071612'} strokeWidth="3" />
    <text y={size * 0.36} textAnchor="middle" fill={dark ? color : brand.deep} fontSize={size} fontWeight="1000" letterSpacing="1">{text}</text>
  </g>;
};

const Plate: React.FC<{x: number; y: number; w: number; h: number}> = ({x, y, w, h}) => <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="44" fill="#08171280" stroke="#d7f36a30" strokeWidth="3" />;

// ---------- Wires and signal pulses -------------------------------------------------------------
const Wire: React.FC<{p: Pt[]; t: number; pulses: [number, number][]}> = ({p, t, pulses}) => {
  const lit = Math.max(0, ...pulses.map(([a, b]) => win(t, a, b + 0.6, 0.2)));
  return <g>
    <path d={bezD(p)} fill="none" stroke="#04100c" strokeWidth="26" strokeLinecap="round" />
    <path d={bezD(p)} fill="none" stroke={interpolateColors(lit, [0, 1], ['#2e4a41', brand.lime])} strokeWidth="9" strokeLinecap="round" />
    {pulses.map(([a, b], i) => {
      if (t < a || t > b) return null;
      const [x, y] = bez(p, (t - a) / (b - a));
      return <g key={i}><circle cx={x} cy={y} r="46" fill={brand.lime} opacity=".25" /><circle cx={x} cy={y} r="20" fill={brand.lime} /><circle cx={x} cy={y} r="8" fill={PAPER} /></g>;
    })}
  </g>;
};

// ---------- Station 1: the pedal ----------------------------------------------------------------
const PedalStation: React.FC<{t: number}> = ({t}) => {
  const press = t < 33 ? kf(t, [[0, 0.2], [0.9, 1]]) : kf(t, [[33.2, 1], [33.42, 0.25], [33.7, 1]]);
  const crossed = at(t, 3.62, 0.22);
  const hook = t < 5.2 ? 1 : 1 - at(t, 5.2, 0.4);
  const pv = {x: 80, y: -280};
  return <g transform={`translate(${P.x} ${P.y})`}>
    <Plate x={0} y={0} w={880} h={800} />
    <path d="M-440 330 L440 220 L440 400 L-440 400 Z" fill="#1a2e28" />
    <path d="M-440 330 L440 220" stroke="#4a6158" strokeWidth="6" />
    <path d="M330 -380 L360 230" stroke="#4a6158" strokeWidth="10" opacity=".7" />
    <g transform={`rotate(${-13 * press} ${pv.x} ${pv.y})`}>
      <line x1={pv.x} y1={pv.y} x2={-30} y2={110} stroke="#8fa39b" strokeWidth="18" strokeLinecap="round" />
      <g transform="translate(-40 130) rotate(16)">
        <rect x="-36" y="-105" width="72" height="210" rx="22" fill="#2b3b37" stroke={brand.lime} strokeWidth="5" />
        {[-70, -35, 0, 35, 70].map((y) => <line key={y} x1="-22" y1={y} x2="22" y2={y} stroke="#5d726b" strokeWidth="5" />)}
        <path d="M-40 -110 Q-120 -150 -250 -110 L-330 -30 Q-345 40 -300 80 Q-180 130 -40 112 Z" fill="#e7efe9" stroke="#173d34" strokeWidth="5" />
        <path d="M-44 108 Q-180 128 -306 84" stroke="#173d34" strokeWidth="14" fill="none" />
        <path d="M-250 -110 L-400 -330 L-560 -250 L-330 -30 Z" fill="#35564b" />
      </g>
    </g>
    <rect x={pv.x - 40} y={pv.y - 70} width="160" height="110" rx="18" fill="#12302a" stroke={brand.lime} strokeWidth="4" />
    <text x={pv.x + 40} y={pv.y + 2} textAnchor="middle" fill={brand.lime} fontSize="26" fontWeight="1000" letterSpacing="1">SENSOR</text>
    <circle cx={pv.x} cy={pv.y} r="14" fill="#e7efe9" />
    <g opacity={hook}>
      <path d="M-10 60 Q120 -40 230 -20" fill="none" stroke={PAPER} strokeWidth="7" strokeDasharray="18 14" opacity={1 - 0.6 * crossed} />
      <g transform="translate(290 -10)" opacity={1 - 0.55 * crossed}>
        <path d="M0 -70 C30 -25 50 0 50 28 A50 50 0 0 1 -50 28 C-50 0 -30 -25 0 -70 Z" fill={FUEL} stroke="#173d34" strokeWidth="5" />
        <text y="45" textAnchor="middle" fill={brand.deep} fontSize="54" fontWeight="1000">?</text>
      </g>
      <g opacity={crossed} stroke="#ff6b5b" strokeWidth="14" strokeLinecap="round"><line x1="70" y1="-90" x2="190" y2="40" /><line x1="190" y1="-90" x2="70" y2="40" /></g>
    </g>
    <WPill x={pv.x + 40} y={pv.y - 125} text="SEÑAL ELÉCTRICA" o={crossed} />
  </g>;
};

// ---------- Station 2: the ECU --------------------------------------------------------------------
const EcuStation: React.FC<{t: number}> = ({t}) => {
  const req = t < 33 ? 0.22 + 0.68 * at(t, 9.26, 0.35) : 0.22 + 0.68 * at(t, 33.75, 0.3);
  const inA = at(t, 7.88, 0.25), inB = at(t, 8.1, 0.25);
  const glow = Math.max(win(t, 6.7, 9.9, 0.2), win(t, 33.8, 35.5, 0.2));
  return <g transform={`translate(${E.x} ${E.y})`}>
    {[[-60, 'RÉGIMEN DEL MOTOR', inA], [60, 'CONTROL DE TRACCIÓN', inB]].map(([y, label, o]) => <g key={label as string} opacity={0.25 + 0.75 * (o as number)}>
      <line x1={-318} y1={y as number} x2={-282} y2={y as number} stroke={brand.lime} strokeWidth="6" strokeDasharray="12 8" strokeDashoffset={-t * 60} />
      <WPill x={-468} y={y as number} text={label as string} dark color="#e7efe9" size={22} />
    </g>)}
    {glow > 0 ? <rect x="-310" y="-195" width="620" height="390" rx="46" fill={brand.lime} opacity={0.18 * glow} /> : null}
    <rect x="-280" y="-168" width="560" height="336" rx="34" fill="#12302a" stroke={brand.lime} strokeWidth="5" />
    {[...Array(9)].map((_, i) => <g key={i}><rect x={-224 + i * 54} y="-190" width="16" height="24" fill="#8fa39b" /><rect x={-224 + i * 54} y="166" width="16" height="24" fill="#8fa39b" /></g>)}
    <text y="-108" textAnchor="middle" fill={brand.lime} fontSize="38" fontWeight="1000" letterSpacing="3">CENTRALITA</text>
    <rect x="-230" y="-72" width="460" height="196" rx="18" fill="#061410" stroke="#3c5a50" strokeWidth="3" />
    <text y="-30" textAnchor="middle" fill="#cfdcd3" fontSize="24" fontWeight="900" letterSpacing="2">PETICIÓN DE PAR</text>
    <rect x="-200" y="0" width="400" height="38" rx="19" fill="#1d332d" />
    <rect x="-200" y="0" width={400 * req} height="38" rx="19" fill={brand.lime} />
    <text y="98" textAnchor="middle" fill={req > 0.6 ? brand.lime : '#5d726b'} fontSize="30" fontWeight="1000" letterSpacing="2">{req > 0.6 ? 'MÁS PAR' : 'EN ESPERA'}</text>
  </g>;
};

// ---------- Stations 3 and 4: one cylinder, two ways to burn --------------------------------------
type EngineState = {theta: number; air: number; heat: number; fuel: number; flame: number; spark: number; spray: number; flow: number; throttle: number};
const pistonTop = (th: number) => { const xs = 125 * Math.sin(th); return 295 - 125 * Math.cos(th) - Math.sqrt(300 * 300 - xs * xs) - 60; };
const OMEGA = (2 * PI) / 1.78; // overview: both pistons reach a firing TDC exactly on «dos» (34,48 s)

export const petrolState = (t: number): EngineState => {
  const ov = t > 32.7;
  return {
    theta: ov ? 4 * PI + (t - 32.7) * OMEGA : kf(t, [[9.97, 0], [14.28, 0], [15.6, PI], [17.1, PI], [18.9, 2 * PI], [20.1, 2 * PI], [20.6, 3 * PI], [21.4, 4 * PI]]),
    air: ov ? 1 : kf(t, [[9.97, 0.22], [14.28, 0.22], [15.6, 1], [20.6, 1], [21.4, 0.22]]),
    heat: 0,
    fuel: ov ? 1 : at(t, 16.6, 0.45) * (t < 20.7 ? 1 : 0),
    flame: ov ? win(t, 34.48, 35.0, 0.1) : win(t, 20.1, 20.75, 0.1),
    spark: ov ? win(t, 34.46, 34.6, 0.04) : win(t, 20.08, 20.3, 0.04),
    spray: win(t, 16.24, 16.95, 0.1),
    flow: ov ? 0.6 : Math.max(0.25, win(t, 14.28, 15.6)),
    throttle: ov ? 1 : 0.06 + 0.94 * at(t, 13.54, 0.4),
  };
};
export const dieselState = (t: number): EngineState => {
  const ov = t > 32.7;
  const heat = t < 27.4 ? kf(t, [[24.0, 0], [25.4, 1], [26.3, 1], [26.9, 0.3], [27.2, 0]]) : kf(t, [[27.6, 0], [28.6, 1]]);
  return {
    theta: ov ? 4 * PI + (t - 32.7) * OMEGA : kf(t, [[20.7, 0], [21.45, 0], [23.3, PI], [24.0, PI], [25.4, 2 * PI], [26.3, 2 * PI], [26.9, 3 * PI], [27.2, 4 * PI], [27.6, 5 * PI], [28.6, 6 * PI]]),
    air: ov ? 1 : kf(t, [[20.7, 0.2], [21.45, 0.25], [22.9, 1], [26.9, 1], [27.2, 0.25], [27.6, 1]]),
    heat: ov ? 0.6 : heat,
    fuel: 0,
    flame: ov ? win(t, 34.48, 35.0, 0.1) : win(t, 26.22, 26.95, 0.12),
    spark: 0,
    spray: ov ? win(t, 34.4, 34.6, 0.05) : win(t, 25.38, 25.95, 0.08),
    flow: ov ? 0.6 : Math.max(0.15, win(t, 21.45, 23.3), win(t, 27.2, 27.6, 0.08)),
    throttle: 1,
  };
};

const INTAKE: Pt[] = [[-660, -345], [-230, -345], [-125, -275], [-60, -215]];
const along = (pts: Pt[], u: number): Pt => {
  const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  let d = u * seg.reduce((a, b) => a + b, 0);
  for (let i = 0; i < seg.length; i++) {
    if (d <= seg[i]) { const f = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f]; }
    d -= seg[i];
  }
  return pts[pts.length - 1];
};

const Cylinder: React.FC<{kind: 'petrol' | 'diesel'; st: EngineState; t: number; children?: React.ReactNode}> = ({kind, st, t, children}) => {
  const top = pistonTop(st.theta);
  const cpx = 125 * Math.sin(st.theta), cpy = 295 - 125 * Math.cos(st.theta);
  const N = kind === 'petrol' ? 38 : 76;
  const n = Math.round(st.air * N);
  const clip = `chamber-${kind}`;
  const airCol = interpolateColors(st.heat, [0, 1], [AIR, HOT]);
  const petrol = kind === 'petrol';
  return <g>
    <defs>
      <clipPath id={clip}><rect x="-170" y="-262" width="340" height={Math.max(4, top + 262)} /></clipPath>
      <radialGradient id={`fire-${kind}`}><stop offset="0" stopColor="#fff3c4" /><stop offset=".45" stopColor={FIRE} /><stop offset="1" stopColor={FIRE} stopOpacity="0" /></radialGradient>
    </defs>
    <Plate x={0} y={20} w={1320} h={1240} />
    {/* intake and exhaust ducts */}
    <path d="M-660 -345 H-230 L-120 -268" fill="none" stroke="#2a3a35" strokeWidth="86" strokeLinejoin="round" />
    <path d="M-660 -345 H-230 L-120 -268" fill="none" stroke="#10201b" strokeWidth="68" strokeLinejoin="round" />
    <path d="M120 -268 L230 -345 H660" fill="none" stroke="#2a3a35" strokeWidth="86" strokeLinejoin="round" />
    <path d="M120 -268 L230 -345 H660" fill="none" stroke="#1d1712" strokeWidth="68" strokeLinejoin="round" />
    <text x="-450" y="-410" textAnchor="middle" fill="#9fb3aa" fontSize="24" fontWeight="900" letterSpacing="2">ADMISIÓN</text>
    <text x="450" y="-410" textAnchor="middle" fill="#9fb3aa" fontSize="24" fontWeight="900" letterSpacing="2">ESCAPE</text>
    {[...Array(16)].map((_, i) => {
      const u = ((t * 0.55 + i / 16) % 1);
      const [x, y] = along(INTAKE, u);
      const gate = petrol && x > -420 ? 0.15 + 0.85 * st.throttle : 1;
      return <circle key={i} cx={x} cy={y + Math.sin(i * 2.3) * 16} r="9" fill={AIR} opacity={st.flow * gate} />;
    })}
    {petrol ? <g>
      <line x1={-420 - 36 * Math.cos((90 - 80 * st.throttle) * PI / 180)} y1={-345 - 36 * Math.sin((90 - 80 * st.throttle) * PI / 180)} x2={-420 + 36 * Math.cos((90 - 80 * st.throttle) * PI / 180)} y2={-345 + 36 * Math.sin((90 - 80 * st.throttle) * PI / 180)} stroke={brand.lime} strokeWidth="12" strokeLinecap="round" />
      <circle cx="-420" cy="-345" r="9" fill={PAPER} />
    </g> : null}
    {/* head, bore, piston, rod and crank */}
    <rect x="-240" y="-330" width="480" height="70" rx="12" fill="#3b4d47" />
    <rect x="-192" y="-262" width="22" height="600" fill="#6f8580" /><rect x="170" y="-262" width="22" height="600" fill="#6f8580" />
    <rect x="-170" y="-262" width="340" height="600" fill="#071410" />
    <g clipPath={`url(#${clip})`}>
      {[...Array(N)].map((_, i) => {
        if (i >= n) return null;
        const x = (rnd(i, 1) * 2 - 1) * 150 + Math.sin(t * 6 + i) * 3;
        const y = -252 + rnd(i, 2) * Math.max(0, top + 252 - 14) + 6;
        const isFuel = petrol && i % 3 === 0 && st.fuel > 0.5;
        return <circle key={i} cx={x} cy={y} r={petrol ? 8 : 7} fill={isFuel ? FUEL : airCol} opacity={0.9 * (1 - 0.8 * st.flame)} />;
      })}
      {st.heat > 0.05 ? <rect x="-170" y="-262" width="340" height="600" fill={HOT} opacity={0.22 * st.heat} /> : null}
      {!petrol && st.spray > 0 ? [-55, -32, -11, 11, 32, 55].map((a) => {
        const len = 40 + 110 * st.spray;
        return [...Array(7)].map((_, k) => {
          const r = (k + 1) / 7 * len, ang = (a * PI) / 180;
          return <circle key={`${a}-${k}`} cx={Math.sin(ang) * r} cy={-250 + Math.cos(ang) * r} r={3 + k * 0.5} fill={FUEL} opacity={st.spray} />;
        });
      }) : null}
      {st.flame > 0 ? <circle cx="0" cy={-210} r={70 + 220 * st.flame} fill={`url(#fire-${kind})`} opacity={Math.min(1, st.flame * 1.3)} /> : null}
      {!petrol && st.flame > 0 ? [-55, -32, -11, 11, 32, 55].map((a) => <circle key={a} cx={Math.sin((a * PI) / 180) * 130} cy={-250 + Math.cos((a * PI) / 180) * 130} r={14 + 34 * st.flame} fill="#ffd27a" opacity={st.flame} />) : null}
    </g>
    <rect x="-166" y={top} width="332" height="100" rx="10" fill="#9fb3aa" stroke="#e7efe9" strokeWidth="4" />
    {[16, 34, 52].map((dy) => <line key={dy} x1="-166" y1={top + dy} x2="166" y2={top + dy} stroke="#5d726b" strokeWidth="4" />)}
    <line x1="0" y1={top + 60} x2={cpx} y2={cpy} stroke="#c9d6d0" strokeWidth="26" strokeLinecap="round" />
    <circle cx="0" cy="295" r="150" fill="none" stroke="#2f4640" strokeWidth="18" />
    <circle cx="0" cy="295" r="40" fill="#4a5e57" />
    <circle cx={cpx} cy={cpy} r="22" fill="#e7efe9" />
    {/* injector, spark plug */}
    {petrol ? <g>
      <g transform="translate(-250 -440) rotate(-38)"><rect x="-18" y="-60" width="36" height="110" rx="10" fill="#c9d6d0" stroke="#173d34" strokeWidth="4" /><rect x="-8" y="48" width="16" height="22" fill="#8fa39b" /></g>
      {st.spray > 0 ? [...Array(14)].map((_, k) => {
        const r = 20 + k * 11 * (0.4 + 0.6 * st.spray);
        return <circle key={k} cx={-205 + r * 0.79 + (rnd(k, 5) - 0.5) * k * 3} cy={-385 + r * 0.61 + (rnd(k, 6) - 0.5) * k * 3} r={4 + k * 0.3} fill={FUEL} opacity={st.spray} />;
      }) : null}
      <rect x="-16" y="-420" width="32" height="120" rx="8" fill="#e7efe9" stroke="#173d34" strokeWidth="4" />
      <rect x="-26" y="-330" width="52" height="40" rx="6" fill="#8fa39b" />
      <line x1="0" y1="-290" x2="0" y2="-262" stroke="#c9d6d0" strokeWidth="8" />
      {st.spark > 0 ? <g transform={`translate(0 -258) scale(${0.4 + st.spark})`} opacity={st.spark}>
        <circle r="46" fill={brand.lime} opacity=".35" />
        <path d="M0 -40 L9 -9 L40 0 L9 9 L0 40 L-9 9 L-40 0 L-9 -9 Z" fill={PAPER} />
      </g> : null}
    </g> : <g>
      <rect x="-20" y="-430" width="40" height="150" rx="10" fill="#c9d6d0" stroke="#173d34" strokeWidth="4" />
      <rect x="-9" y="-282" width="18" height="22" fill="#8fa39b" />
    </g>}
    {children}
  </g>;
};

// ---------- Station 5: the turbo ---------------------------------------------------------------------
const boostAt = (tt: number) => (tt < 30.62 ? 0.12 : 0.12 + 0.88 * (1 - Math.exp(-(tt - 30.62) / 0.5)));
const pedalAt = (tt: number) => (tt < 30.46 ? 0.15 : 1);
const TurboStation: React.FC<{t: number}> = ({t}) => {
  const on = at(t, 29.3, 0.4);
  const boost = t < 29.3 ? 0.1 : t > 32.7 ? 0.7 : boostAt(t);
  const phi = t * (60 + 900 * boost);
  const gx = (tt: number) => GR.x - 200 + ((tt - 29.6) / 3.0) * 400;
  const gy = (v: number) => GR.y + 130 - v * 260;
  const now = Math.min(t, 32.6);
  const trace = (f: (tt: number) => number) => {
    if (now <= 29.6) return '';
    const pts: string[] = [];
    for (let tt = 29.6; tt <= now; tt += 0.05) pts.push(`${gx(tt).toFixed(1)} ${gy(f(tt)).toFixed(1)}`);
    return 'M' + pts.join(' L');
  };
  const lag = at(t, 31.74, 0.25);
  const blades = (cx: number, col: string, dir: number) => <g transform={`rotate(${dir * phi} ${cx} ${T.y})`}>
    {[...Array(8)].map((_, i) => <path key={i} d={`M${cx} ${T.y} q40 -30 ${80 * Math.cos((i * PI) / 4)} ${80 * Math.sin((i * PI) / 4)}`} transform={`rotate(${i * 45} ${cx} ${T.y})`} stroke={col} strokeWidth="9" fill="none" strokeLinecap="round" />)}
  </g>;
  return <g>
    <Plate x={(GR.x + T.x + 330) / 2 - 80} y={T.y} w={1300} h={680} />
    <text x={1790} y={3330} textAnchor="middle" fill={brand.lime} fontSize="80" fontWeight="1000" letterSpacing="2">TURBO</text>
    <text x={1790} y={3385} textAnchor="middle" fill={PAPER} fontSize="34" fontWeight="900" letterSpacing="2">MÁS AIRE A PRESIÓN</text>
    <path d={`M${T.x - 70} ${T.y} H${T.x + 70}`} stroke="#8fa39b" strokeWidth="26" />
    <circle cx={T.x - 165} cy={T.y} r="112" fill="#12303a" stroke={AIR} strokeWidth="6" />
    {blades(T.x - 165, AIR, 1)}
    <circle cx={T.x + 165} cy={T.y} r="112" fill="#3a2416" stroke={HOT} strokeWidth="6" />
    {blades(T.x + 165, HOT, -1)}
    <rect x={T.x - 60} y={T.y - 40} width="120" height="80" rx="14" fill="#3b4d47" stroke="#e7efe9" strokeWidth="4" />
    <text x={T.x - 165} y={T.y + 165} textAnchor="middle" fill={AIR} fontSize="26" fontWeight="1000" letterSpacing="2">COMPRESOR</text>
    <text x={T.x + 165} y={T.y + 165} textAnchor="middle" fill={HOT} fontSize="26" fontWeight="1000" letterSpacing="2">TURBINA</text>
    <WPill x={T.x + 165} y={T.y - 175} text="GASES DE ESCAPE" o={on} dark color={HOT} size={24} />
    {/* graph */}
    <rect x={GR.x - 230} y={GR.y - 170} width="460" height="340" rx="22" fill="#061410" stroke="#3c5a50" strokeWidth="3" />
    <path d={`M${GR.x - 200} ${GR.y + 130} H${GR.x + 205}`} stroke="#9fb3aa" strokeWidth="3" />
    <text x={GR.x - 200} y={GR.y - 135} fill={PAPER} fontSize="22" fontWeight="1000" letterSpacing="1">— PEDAL</text>
    <text x={GR.x + 10} y={GR.y - 135} fill={brand.lime} fontSize="22" fontWeight="1000" letterSpacing="1">— PRESIÓN DEL TURBO</text>
    <path d={trace(pedalAt)} fill="none" stroke={PAPER} strokeWidth="6" strokeLinejoin="round" />
    <path d={trace(boostAt)} fill="none" stroke={brand.lime} strokeWidth="8" strokeLinejoin="round" />
    <g opacity={lag}>
      <path d={`M${gx(30.46)} ${gy(1) - 34} H${gx(31.7)}`} stroke={HOT} strokeWidth="5" />
      <path d={`M${gx(30.46)} ${gy(1) - 46} v24 M${gx(31.7)} ${gy(1) - 46} v24`} stroke={HOT} strokeWidth="5" />
    </g>
    <WPill x={GR.x} y={GR.y + 230} text="PUEDE TARDAR UN INSTANTE" o={lag} color={HOT} size={26} />
  </g>;
};

// ---------- The whole world ---------------------------------------------------------------------------
const Pipes: React.FC<{t: number}> = ({t}) => {
  const turbo = t > 29.2 ? 1 : 0.35;
  return <g opacity={turbo}>
    <path d={`M${D.x + 640} ${D.y - 345} H2700 V${T.y} H${T.x + 280}`} fill="none" stroke="#2a3a35" strokeWidth="44" strokeLinejoin="round" />
    <path d={`M${D.x + 640} ${D.y - 345} H2700 V${T.y} H${T.x + 280}`} fill="none" stroke={HOT} strokeWidth="12" strokeDasharray="22 26" strokeDashoffset={-t * 160} opacity=".8" />
    <path d={`M${T.x - 165} ${T.y - 115} V3445 H1255 V${D.y - 345} H${D.x - 660}`} fill="none" stroke="#2a3a35" strokeWidth="44" strokeLinejoin="round" />
    <path d={`M${T.x - 165} ${T.y - 115} V3445 H1255 V${D.y - 345} H${D.x - 660}`} fill="none" stroke={AIR} strokeWidth="12" strokeDasharray="22 26" strokeDashoffset={t * 160} opacity=".8" />
  </g>;
};

export const AcceleratorWorld: React.FC<{t: number; cam?: {cx: number; cy: number; z: number}; centerY?: number}> = ({t, cam, centerY = 980}) => {
  const c = cam ?? camera(t);
  const ov = t > 32.7 && t < 36.2 ? 1 : 0;
  const detail = 1 - at(t, 32.75, 0.4) + at(t, 36.1, 0.3); // per-station labels hide in the overview
  const ps = petrolState(t), ds = dieselState(t);
  const pl = (v: number) => v * Math.min(1, detail);
  const gridOff = 0;
  return <svg viewBox="0 0 1080 1920" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', fontFamily: brand.font}}>
    <defs>
      <pattern id="accGrid" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M120 0 H0 V120" fill="none" stroke={brand.lime} strokeWidth="2" opacity=".09" /></pattern>
      <radialGradient id="accVignette" cx="50%" cy="50%" r="70%"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".55" /></radialGradient>
    </defs>
    <rect width="1080" height="1920" fill="#0b1e19" />
    <g opacity=".5">{[...Array(40)].map((_, i) => {
      const x = (((rnd(i, 3) * 1400 - c.cx * 0.18) % 1400) + 1400) % 1400 - 160;
      const y = (((rnd(i, 4) * 2300 - c.cy * 0.18) % 2300) + 2300) % 2300 - 190;
      return <circle key={i} cx={x} cy={y} r={2 + rnd(i, 7) * 4} fill={brand.lime} opacity={0.12 + rnd(i, 8) * 0.2} />;
    })}</g>
    <g transform={`translate(${540 - c.cx * c.z} ${centerY - c.cy * c.z}) scale(${c.z})`}>
      <rect x="-800" y="-600" width="4400" height="5200" fill="url(#accGrid)" transform={`translate(${gridOff} 0)`} />
      <Pipes t={t} />
      <Wire p={W1} t={t} pulses={[[5.55, 6.8], [33.45, 33.9]]} />
      <Wire p={W2} t={t} pulses={[[9.97, 10.85], [33.9, 34.45]]} />
      <Wire p={W3} t={t} pulses={[[20.75, 21.45], [33.9, 34.45]]} />
      <PedalStation t={t} />
      <EcuStation t={t} />
      {[[G, 'GASOLINA', 'MANDA EL AIRE'], [D, 'DIÉSEL', 'MANDA EL GASÓLEO']].map(([p, title, sub]) => {
        const q = p as {x: number; y: number};
        const flash = ov * win(t, 34.48, 35.4, 0.1);
        const far = interpolate(c.z, [0.88, 0.98], [1, 0], clamp);
        return <g key={title as string} opacity={far}>
          <text x={q.x} y={q.y - 690} textAnchor="middle" fill={brand.lime} fontSize={84 + 26 * flash} fontWeight="1000" letterSpacing="3">{title as string}</text>
          <text x={q.x} y={q.y - 630} textAnchor="middle" fill={PAPER} fontSize="38" fontWeight="900" letterSpacing="3">{sub as string}</text>
        </g>;
      })}
      <g transform={`translate(${G.x} ${G.y})`}>
        <Cylinder kind="petrol" st={ps} t={t}>
          <WPill x={-420} y={-470} text="MARIPOSA" o={pl(at(t, 13.54, 0.25))} />
          <WPill x={-30} y={-120} text="MÁS AIRE" o={pl(win(t, 14.7, 16.0, 0.2))} dark color={AIR} />
          <WPill x={-250} y={-560} text={t < 16.66 ? 'INYECTOR' : 'AJUSTA LA GASOLINA AL AIRE'} o={pl(at(t, 16.24, 0.25))} color={FUEL} />
          <WPill x={210} y={-470} text={t < 20.1 ? 'BUJÍA' : '¡CHISPA!'} o={pl(at(t, 18.68, 0.25))} />
        </Cylinder>
      </g>
      <g transform={`translate(${D.x} ${D.y})`}>
        <Cylinder kind="diesel" st={ds} t={t}>
          <WPill x={400} y={-150} text="AIRE DE SOBRA" o={pl(win(t, 22.96, 24.6, 0.2))} dark color={AIR} />
          <WPill x={0} y={-500} text="INYECTA MÁS GASÓLEO" o={pl(at(t, 24.82, 0.25))} color={FUEL} />
          <WPill x={0} y={200} text="SE ENCIENDE SOLO · SIN CHISPA" o={pl(win(t, 26.22, 27.5, 0.2))} color={HOT} />
          <WPill x={400} y={-240} text="AIRE CALIENTE" o={pl(at(t, 27.8, 0.2))} dark color={HOT} />
          <WPill x={400} y={-150} text="POR COMPRESIÓN" o={pl(at(t, 28.54, 0.2))} dark color={HOT} />
        </Cylinder>
      </g>
      <TurboStation t={t} />
    </g>
    <rect width="1080" height="1920" fill="url(#accVignette)" />
  </svg>;
};

// ---------- Overlay: chapter titles, scrims, badge -------------------------------------------------------
const CHAPTERS: {from: number; to: number; title: string; sub?: string; subAt?: number}[] = [
  {from: 0, to: 3.62, title: '¿PISAR = MÁS GASOLINA?'},
  {from: 3.62, to: 4.9, title: 'NO DIRECTAMENTE'},
  {from: 4.9, to: 9.97, title: 'EL PEDAL ES UNA SEÑAL', sub: 'LA CENTRALITA PIDE MÁS PAR', subAt: 9.26},
  {from: 9.97, to: 15.9, title: 'GASOLINA: MANDA EL AIRE', sub: 'LA MARIPOSA SE ABRE', subAt: 13.54},
  {from: 15.9, to: 20.7, title: 'GASOLINA AJUSTADA AL AIRE', sub: 'Y LA BUJÍA LA ENCIENDE', subAt: 18.68},
  {from: 20.7, to: 23.8, title: 'DIÉSEL: AIRE DE SOBRA'},
  {from: 23.8, to: 29.06, title: 'DIÉSEL: MANDA EL GASÓLEO', sub: 'SE ENCIENDE SIN CHISPA', subAt: 26.22},
  {from: 29.06, to: 32.7, title: '¿Y SI HAY TURBO?', sub: 'EL AIRE EXTRA PUEDE TARDAR', subAt: 31.74},
  {from: 32.7, to: 36.1, title: 'MISMA PISADA', sub: 'DOS RESPUESTAS DISTINTAS', subAt: 34.48},
  {from: 36.1, to: 37.2, title: '¿LO SABÍAS?'},
];
const ChapterTitle: React.FC<{t: number}> = ({t}) => {
  const ch = CHAPTERS.find((c) => t >= c.from && t < c.to);
  if (!ch) return null;
  const p = ch.from === 0 ? 1 : interpolate(t, [ch.from, ch.from + 0.28], [0.3, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const punch = ch.title === 'NO DIRECTAMENTE' ? interpolate(t, [3.62, 3.72, 3.85], [1.18, 0.97, 1], clamp) : 1;
  const s = ch.sub && ch.subAt !== undefined ? at(t, ch.subAt, 0.22) : 0;
  return <div style={{position: 'absolute', top: 200, left: 50, right: 50, zIndex: 6, opacity: p, transform: `translateX(${(1 - p) * -60}px)`}}>
    <div style={{display: 'flex', alignItems: 'stretch', gap: 18}}>
      <div style={{width: 10, borderRadius: 6, background: brand.lime, boxShadow: '0 0 18px #d7f36a90'}} />
      <div>
        <div style={{color: ch.title === 'NO DIRECTAMENTE' ? '#ff8f7a' : brand.lime, fontSize: ch.title.length > 22 ? 54 : 62, lineHeight: 1, fontWeight: 1000, letterSpacing: -1.8, transform: `scale(${punch})`, transformOrigin: 'left center', textShadow: '0 6px 24px #06140fb0'}}>{ch.title}</div>
        {ch.sub ? <div style={{marginTop: 12, color: PAPER, fontSize: 28, lineHeight: 1.1, fontWeight: 900, letterSpacing: 1, opacity: s, transform: `translateY(${(1 - s) * 12}px)`}}>{ch.sub}</div> : null}
      </div>
    </div>
  </div>;
};

export const AcceleratorPromo: React.FC<AcceleratorSpec> = (spec) => {
  const frame = useCurrentFrame();
  const t = frame / spec.fps;
  const found = accScenes.findIndex((s) => t >= s.start && t < s.end);
  const activeIndex = found < 0 ? accScenes.length - 1 : found;
  const active = accScenes[activeIndex];
  const cta = t >= 37.2;
  const dim = at(t, 37.2, 0.4);
  return <AbsoluteFill style={{background: '#0b1e19', overflow: 'hidden', fontFamily: brand.font}}>
    <AcceleratorWorld t={t} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(#0a211af5 0px, #0a211ae0 250px, #0a211a00 440px, #0a211a00 1380px, #0a211ad8 1560px, #0a211af2 1920px)', zIndex: 3}} />
    {cta ? <><div style={{position: 'absolute', inset: 0, opacity: dim * 0.92, zIndex: 4}}><Backdrop frame={frame} /></div><div style={{position: 'absolute', inset: 0, zIndex: 5, opacity: dim}}><CtaCard frame={Math.round((t - 37.2) * spec.fps)} guide="GASOLINA Y DIÉSEL" detail={<>QUÉ PASA CUANDO PISAS<br />EL ACELERADOR</>} /></div></> : null}
    <ChapterTitle t={t} />
    {!cta ? <div style={{position: 'absolute', left: 54, top: 1506, padding: '8px 16px', borderRadius: 18, border: `2px solid ${brand.lime}`, background: '#071612e6', color: brand.lime, fontSize: 17, fontWeight: 900, letterSpacing: 1.2, zIndex: 7}}>ESQUEMA SIMPLIFICADO · MOTOR CONVENCIONAL</div> : null}
    <ReelChrome frame={frame} fps={spec.fps} real={t} durationSeconds={spec.durationSeconds} scenes={accScenes} activeIndex={activeIndex} tag="GASOLINA vs DIÉSEL" captions={spec.captions} audioFile={spec.audioFile ?? 'audio/voice-video-024.wav'} />
  </AbsoluteFill>;
};

// World only (no chrome), to check every station and camera move before the montage.
export const AcceleratorPreview: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{background: '#0b1e19'}}><AcceleratorWorld t={frame / 30} /></AbsoluteFill>;
};

export const AcceleratorCover: React.FC = () => <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
  <AcceleratorWorld t={34.62} cam={{cx: 1260, cy: 1700, z: 0.4}} centerY={1200} />
  <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(#0a211afa 0px, #0a211af0 520px, #0a211a00 700px, #0a211a00 1650px, #0a211af0 1800px)'}} />
  <div style={{position: 'absolute', top: 90, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}><BrandCircle size={150} /></div>
  <div style={{position: 'absolute', top: 280, left: 30, right: 30, textAlign: 'center', color: brand.lime, fontSize: 112, lineHeight: 0.92, fontWeight: 1000, letterSpacing: -4, textShadow: '0 10px 30px #06140f80'}}>PISAR ≠<br />MÁS GASOLINA</div>
  <div style={{position: 'absolute', top: 515, left: 40, right: 40, textAlign: 'center', color: PAPER, fontSize: 46, lineHeight: 1.05, fontWeight: 1000, letterSpacing: -1}}>QUÉ PASA EN GASOLINA Y DIÉSEL</div>
  <div style={{position: 'absolute', top: 1720, left: 210, right: 210, padding: '18px 10px', borderRadius: 22, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 32, fontWeight: 1000}}>KILOMETROCLARO.COM</div>
</AbsoluteFill>;
