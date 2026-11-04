import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandCircle, type CaptionCue, clamp, type ReelScene} from '../components/ReelKit';
import {at, camVelocity, type CamKey, type Chapter, ExplainerShell, kf, makeCamera, PAPER, Plate, type Pt, rnd, win, Wire, WorldSvg, WPill} from '../components/ExplainerKit';

// Vídeo 025 · Sueltas el acelerador y el cuadro marca cero litros. One-shot world: pedal → ECU → cylinder → clutch →
// gearbox → wheel, plus a second «neutral» lane revealed in the overview. New in this reel: a persistent dashboard
// HUD that reacts to the voice (and opens into a concept graph), the energy pulse that reverses on «ruedas» and
// directional motion blur on fast pans. Voice: voice-video-025.wav (46,08 s, Google TTS, 1×).
export type LiftOffSpec = {
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  requiresHumanReview: boolean;
  captions: CaptionCue[];
  audioFile?: string;
};

type SceneId = 'hook' | 'drag' | 'cost' | 'cut' | 'decouple' | 'average' | 'lanes' | 'ask' | 'cta';
const ANIM = 'ANIMACIÓN ILUSTRATIVA · KILÓMETRO CLARO';
export const liftScenes: ReelScene<SceneId>[] = [
  {id: 'hook', start: 0, end: 7.4, label: '¿CERO LITROS?', credit: ANIM},
  {id: 'drag', start: 7.4, end: 11.6, label: 'LAS RUEDAS EMPUJAN', credit: ANIM},
  {id: 'cost', start: 11.6, end: 16.8, label: 'RETENCIÓN', credit: ANIM},
  {id: 'cut', start: 16.8, end: 22.3, label: 'CORTE DE INYECCIÓN', credit: ANIM},
  {id: 'decouple', start: 22.3, end: 29.4, label: 'MOTOR DESACOPLADO', credit: ANIM},
  {id: 'average', start: 29.4, end: 35.0, label: 'INSTANTÁNEO Y MEDIA', credit: 'GRÁFICO CONCEPTUAL · KILÓMETRO CLARO'},
  {id: 'lanes', start: 35.0, end: 40.8, label: 'MARCHA O PUNTO MUERTO', credit: ANIM},
  {id: 'ask', start: 40.8, end: 42.2, label: '¿LO SABÍAS?', credit: ANIM},
  {id: 'cta', start: 42.2, end: 46.08, label: 'LA GUÍA', credit: 'KILOMETROCLARO.COM'},
];
const CHAPTERS: Chapter[] = [
  {from: 0, to: 3.98, title: '¿CERO LITROS?'},
  {from: 3.98, to: 7.4, title: 'Y EL MOTOR SIGUE GIRANDO'},
  {from: 7.4, to: 11.6, title: 'LAS RUEDAS ARRASTRAN EL MOTOR', sub: 'EL ESFUERZO CAMBIA DE SENTIDO', subAt: 9.86},
  {from: 11.6, to: 16.8, title: 'MOVER EL MOTOR CUESTA ENERGÍA', sub: 'POR ESO EL COCHE RETIENE', subAt: 16.12},
  {from: 16.8, to: 22.3, title: 'CORTE DE INYECCIÓN', sub: 'DE AHÍ EL CERO', subAt: 21.34},
  {from: 22.3, to: 29.4, title: 'MOTOR DESACOPLADO', sub: 'VUELVE A GASTAR AL RALENTÍ', subAt: 27.36},
  {from: 29.4, to: 35.0, title: 'INSTANTÁNEO ≠ MEDIA'},
  {from: 35.0, to: 38.0, title: 'CON MARCHA', sub: 'RETIENE Y PUEDE NO GASTAR', subAt: 35.92},
  {from: 38.0, to: 40.8, title: 'EN PUNTO MUERTO', sub: 'RUEDA MÁS, PERO SUELE GASTAR', subAt: 38.78},
  {from: 40.8, to: 42.2, title: '¿LO SABÍAS?'},
];

const AIR = '#bfe3f2', FUEL = '#ffd166', HOT = '#ff8a3d', FIRE = '#ff6b2c', ALERT = '#ff8f7a';
const PI = Math.PI, TAU = 2 * PI;

// ---------- World layout -------------------------------------------------------------------------------
const P = {x: 250, y: 700}, E = {x: 1120, y: 640}, C = {x: 950, y: 1700};
const KX = 1720, GX = 2260, WX = 2860, LANE_B = 1520;
const SHAFT = C.y + 295; // crank centre height of lane A
const W_PEDAL: Pt[] = [[P.x + 120, P.y - 300], [560, 300], [700, 640], [E.x - 262, E.y]];
const W_INJ: Pt[] = [[E.x - 140, E.y + 162], [E.x - 140, 1000], [690, 990], [690, 1206]];

const CAM: CamKey[] = [
  [0, 250, 760, 1.2], [2.12, 250, 760, 1.22], [2.3, 250, 750, 1.36], [2.6, 250, 760, 1.26], [4.9, 300, 800, 1.18],
  [5.9, 950, 1730, 0.74], [7.3, 1000, 1760, 0.72],
  [8.2, GX, 1960, 0.95], [9.05, KX, 1960, 1.0], [9.9, WX, 1990, 0.85], [11.1, 1100, 1960, 0.8],
  [11.9, 950, 1680, 1.1], [13.5, 950, 1700, 1.15], [14.4, 640, 1420, 1.3], [15.55, 640, 1430, 1.28], [16.4, 1740, 1850, 0.38],
  [17.3, 1740, 1850, 0.38], [18.0, 1250, 1100, 0.62], [18.85, 1300, 680, 0.9], [19.6, 1300, 680, 0.9], [20.15, 760, 1300, 1.15], [21.5, 820, 1380, 1.05],
  [22.3, 1100, 1700, 0.85], [23.0, KX, 1960, 1.05], [23.55, KX, 1960, 1.05], [24.0, GX, 1960, 1.0], [24.6, GX, 1960, 1.0],
  [25.3, 1740, 1880, 0.38], [26.9, 1740, 1880, 0.38], [27.6, 820, 1450, 1.05], [29.3, 860, 1500, 1.0],
  [35.0, 1000, 1700, 0.8], [36.0, 1515, 2130, 0.3], [40.7, 1515, 2130, 0.31], [41.6, 700, 1300, 1.35], [46.08, 700, 1300, 1.05],
];
export const liftCamera = makeCamera(CAM);

// ---------- Engine timeline (lane A follows the voice; lane B is the neutral twin of the overview) --------
const phaseOf = (th: number) => ((th % (2 * TAU)) + 2 * TAU) % (2 * TAU);
const rawA = (t: number) => {
  if (t < 0.6) return 11 * t;
  const a1 = 6.6;
  if (t < 23.06) return a1 + 8.5 * (t - 0.6);
  const a2 = a1 + 8.5 * 22.46;
  if (t < 24.6) { const u = t - 23.06; return a2 + 8.5 * u - (2 * u * u) / (2 * 1.54); }
  const a3 = a2 + 8.5 * 1.54 - 1.54;
  if (t < 34.9) return a3 + 6.5 * (t - 24.6);
  return a3 + 6.5 * 10.3 + 8.5 * (t - 34.9);
};
// After the clutch scene starts (engine off-screen) the cycle is re-phased so an intake stroke begins on «ralentí».
const OFF_A = (((0.15 - phaseOf(rawA(27.36))) % (2 * TAU)) + 2 * TAU) % (2 * TAU);
const thetaA = (t: number) => rawA(t) + (t >= 23.06 ? OFF_A : 0);
const OFF_B = (((TAU + 0.05 - 6.5 * 39.0) % (2 * TAU)) + 2 * TAU) % (2 * TAU);
const thetaB = (t: number) => 6.5 * t + OFF_B;

type EngineIn = {theta: number; inject: number; fire: number; throttle: number; friction: number; pumping: number; air: number};
const engineA = (t: number): EngineIn => ({
  theta: thetaA(t),
  inject: t < 0.6 ? 1 : t >= 7.4 && t < 19.64 ? 0.55 * at(t, 7.4, 0.3) : t >= 19.64 && t < 19.8 ? 0.55 * (1 - at(t, 19.64, 0.16)) : t >= 27.36 && t < 34.9 ? 0.45 * at(t, 27.36, 0.2) : 0,
  fire: t < 0.6 ? 1 : t >= 27.36 && t < 34.9 ? 0.7 : 0,
  throttle: kf(t, [[0, 0.9], [0.9, 0.08]]),
  friction: win(t, 13.72, 16.4, 0.2),
  pumping: win(t, 14.54, 16.0, 0.2),
  air: t < 0.6 ? 1 : 0.38,
});
const engineB = (t: number): EngineIn => ({theta: thetaB(t), inject: 0.45, fire: 0.7, throttle: 0.08, friction: 0, pumping: 0, air: 0.38});

type LaneIn = {clutchGap: number; neutral: number; mode: 'none' | 'fwd' | 'rev'; retention: number; flip: number};
const laneA = (t: number): LaneIn => {
  const back = at(t, 34.9, 0.3); // re-engaged «con marcha» for the overview
  const gap = at(t, 23.06, 0.25) * (1 - at(t, 23.8, 0.3));
  const neutral = at(t, 23.8, 0.3) * (1 - back);
  return {
    clutchGap: gap, neutral,
    mode: t < 7.4 ? 'none' : t < 9.86 ? 'fwd' : 'rev',
    retention: Math.max(at(t, 16.12, 0.25) * (1 - at(t, 26.44, 0.3)), back),
    flip: win(t, 9.86, 10.5, 0.05),
  };
};
const laneB: LaneIn = {clutchGap: 0, neutral: 1, mode: 'rev', retention: 0, flip: 0};

// ---------- Engine (cylinder in section) ----------------------------------------------------------------
const INTAKE: Pt[] = [[-560, -345], [-230, -345], [-125, -275], [-60, -215]];
const along = (pts: Pt[], u: number): Pt => {
  const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  let d = u * seg.reduce((a, b) => a + b, 0);
  for (let i = 0; i < seg.length; i++) {
    if (d <= seg[i]) { const f = d / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f]; }
    d -= seg[i];
  }
  return pts[pts.length - 1];
};
const pistonTop = (th: number) => { const xs = 125 * Math.sin(th); return 295 - 125 * Math.cos(th) - Math.sqrt(300 * 300 - xs * xs) - 60; };

const Engine: React.FC<{st: EngineIn; t: number; id: string; children?: React.ReactNode}> = ({st, t, id, children}) => {
  const ph = phaseOf(st.theta);
  const top = pistonTop(st.theta);
  const cpx = 125 * Math.sin(st.theta), cpy = 295 - 125 * Math.cos(st.theta);
  const spray = st.inject > 0 ? st.inject * (0.78 + 0.22 * Math.sin(t * 22)) : 0;
  const flame = st.fire * (ph >= TAU && ph < TAU + 1.4 ? 1 - (ph - TAU) / 1.4 : 0);
  const flow = (ph < PI ? Math.sin(ph) : 0.12) * (0.35 + 0.65 * st.throttle);
  const N = 30, n = Math.round(st.air * N);
  const ang = ((90 - 82 * st.throttle) * PI) / 180;
  const hot = st.friction * (0.6 + 0.4 * Math.sin(t * 14));
  return <g>
    <defs>
      <clipPath id={`ch-${id}`}><rect x="-170" y="-262" width="340" height={Math.max(4, top + 262)} /></clipPath>
      <radialGradient id={`fire-${id}`}><stop offset="0" stopColor="#fff3c4" /><stop offset=".45" stopColor={FIRE} /><stop offset="1" stopColor={FIRE} stopOpacity="0" /></radialGradient>
      <radialGradient id={`hot-${id}`}><stop offset="0" stopColor="#ffe0a8" /><stop offset=".5" stopColor={HOT} /><stop offset="1" stopColor={HOT} stopOpacity="0" /></radialGradient>
    </defs>
    <Plate x={-20} y={30} w={1080} h={1260} />
    <path d="M-560 -345 H-230 L-120 -268" fill="none" stroke="#2a3a35" strokeWidth="86" strokeLinejoin="round" />
    <path d="M-560 -345 H-230 L-120 -268" fill="none" stroke="#10201b" strokeWidth="68" strokeLinejoin="round" />
    <path d="M120 -268 L230 -345 H430" fill="none" stroke="#2a3a35" strokeWidth="86" strokeLinejoin="round" />
    <path d="M120 -268 L230 -345 H430" fill="none" stroke="#1d1712" strokeWidth="68" strokeLinejoin="round" />
    <text x="-470" y="-410" textAnchor="middle" fill="#9fb3aa" fontSize="24" fontWeight="900" letterSpacing="2">ADMISIÓN</text>
    <text x="330" y="-410" textAnchor="middle" fill="#9fb3aa" fontSize="24" fontWeight="900" letterSpacing="2">ESCAPE</text>
    {[...Array(16)].map((_, i) => {
      const u = (t * 0.55 + i / 16) % 1;
      const [x, y] = along(INTAKE, u);
      const gate = x > -400 ? 0.12 + 0.88 * st.throttle : 1;
      return <circle key={i} cx={x} cy={y + Math.sin(i * 2.3) * 16} r="9" fill={AIR} opacity={flow * gate} />;
    })}
    {st.pumping > 0 ? <g opacity={st.pumping}>
      <circle cx="-400" cy="-345" r={62 + 6 * Math.sin(t * 9)} fill="none" stroke={ALERT} strokeWidth="6" />
      {[-500, -470].map((x) => <path key={x} d={`M${x} -372 l22 27 l-22 27`} fill="none" stroke={ALERT} strokeWidth="7" strokeLinecap="round" />)}
    </g> : null}
    <line x1={-400 - 36 * Math.cos(ang)} y1={-345 - 36 * Math.sin(ang)} x2={-400 + 36 * Math.cos(ang)} y2={-345 + 36 * Math.sin(ang)} stroke={brand.lime} strokeWidth="12" strokeLinecap="round" />
    <circle cx="-400" cy="-345" r="9" fill={PAPER} />
    <rect x="-240" y="-330" width="480" height="70" rx="12" fill="#3b4d47" />
    <rect x="-192" y="-262" width="22" height="600" fill="#6f8580" /><rect x="170" y="-262" width="22" height="600" fill="#6f8580" />
    <rect x="-170" y="-262" width="340" height="600" fill="#071410" />
    <g clipPath={`url(#ch-${id})`}>
      {[...Array(N)].map((_, i) => {
        if (i >= n) return null;
        const x = (rnd(i, 1) * 2 - 1) * 150 + Math.sin(t * 6 + i) * 3;
        const y = -252 + rnd(i, 2) * Math.max(0, top + 252 - 14) + 6;
        return <circle key={i} cx={x} cy={y} r="8" fill={i % 4 === 0 && st.inject > 0.2 ? FUEL : AIR} opacity={0.9 * (1 - 0.8 * flame)} />;
      })}
      {flame > 0 ? <circle cx="0" cy={-210} r={70 + 200 * flame} fill={`url(#fire-${id})`} opacity={Math.min(1, flame * 1.3)} /> : null}
    </g>
    {hot > 0.02 ? <g opacity={hot}>
      <ellipse cx="-166" cy={top + 24} rx="22" ry="34" fill={`url(#hot-${id})`} /><ellipse cx="166" cy={top + 24} rx="22" ry="34" fill={`url(#hot-${id})`} />
    </g> : null}
    <rect x="-166" y={top} width="332" height="100" rx="10" fill="#9fb3aa" stroke="#e7efe9" strokeWidth="4" />
    {[16, 34, 52].map((dy) => <line key={dy} x1="-166" y1={top + dy} x2="166" y2={top + dy} stroke={st.friction > 0.3 ? HOT : '#5d726b'} strokeWidth="4" />)}
    <line x1="0" y1={top + 60} x2={cpx} y2={cpy} stroke="#c9d6d0" strokeWidth="26" strokeLinecap="round" />
    <circle cx="0" cy="295" r="150" fill="none" stroke="#2f4640" strokeWidth="18" />
    {hot > 0.02 ? <g opacity={hot}><circle cx="0" cy="295" r="62" fill={`url(#hot-${id})`} /><circle cx={cpx} cy={cpy} r="44" fill={`url(#hot-${id})`} /></g> : null}
    <circle cx="0" cy="295" r="40" fill="#4a5e57" />
    <circle cx={cpx} cy={cpy} r="22" fill="#e7efe9" />
    <g transform="translate(-250 -440) rotate(-38)"><rect x="-18" y="-60" width="36" height="110" rx="10" fill={spray > 0.05 ? '#e7efe9' : '#8fa39b'} stroke="#173d34" strokeWidth="4" /><rect x="-8" y="48" width="16" height="22" fill="#8fa39b" /></g>
    {spray > 0.02 ? [...Array(14)].map((_, k) => {
      const r = 20 + k * 11 * (0.4 + 0.6 * spray);
      return <circle key={k} cx={-205 + r * 0.79 + (rnd(k, 5) - 0.5) * k * 3} cy={-385 + r * 0.61 + (rnd(k, 6) - 0.5) * k * 3} r={4 + k * 0.3} fill={FUEL} opacity={spray} />;
    }) : null}
    <rect x="-16" y="-420" width="32" height="120" rx="8" fill="#e7efe9" stroke="#173d34" strokeWidth="4" />
    <rect x="-26" y="-330" width="52" height="40" rx="6" fill="#8fa39b" />
    <line x1="0" y1="-290" x2="0" y2="-262" stroke="#c9d6d0" strokeWidth="8" />
    {flame > 0.75 ? <g transform="translate(0 -258)"><circle r="40" fill={brand.lime} opacity=".35" /><path d="M0 -34 L8 -8 L34 0 L8 8 L0 34 L-8 8 L-34 0 L-8 -8 Z" fill={PAPER} /></g> : null}
    {children}
  </g>;
};

// ---------- Drivetrain: clutch → gearbox → wheel, with the energy pulse ----------------------------------
const Gear: React.FC<{x: number; y: number; r: number; a: number; on: boolean}> = ({x, y, r, a, on}) => <g transform={`rotate(${(a * 180) / PI} ${x} ${y})`}>
  <circle cx={x} cy={y} r={r} fill="#2b3b37" stroke={on ? brand.lime : '#8fa39b'} strokeWidth="9" strokeDasharray="9 7" />
  <line x1={x - r + 12} y1={y} x2={x + r - 12} y2={y} stroke="#5d726b" strokeWidth="6" />
  <circle cx={x} cy={y} r="10" fill="#c9d6d0" />
</g>;

const Drivetrain: React.FC<{y: number; t: number; ln: LaneIn; engineTheta: number; labels?: boolean}> = ({y, t, ln, engineTheta, labels = true}) => {
  const wheelA = t * 2.4;
  const gap = ln.clutchGap * 44;
  const inGear = ln.neutral < 0.5;
  const stopX = ln.clutchGap > 0.5 ? KX + 4 + gap : !inGear ? GX + 180 : C.x;
  const shaft = (x1: number, x2: number, rot: number, glow: boolean) => <g>
    <line x1={x1} y1={y} x2={x2} y2={y} stroke="#4a5e57" strokeWidth="30" strokeLinecap="round" />
    <line x1={x1} y1={y} x2={x2} y2={y} stroke={glow ? '#a8c24a' : '#6d817a'} strokeWidth="30" strokeDasharray="18 22" strokeDashoffset={-rot * 40} />
  </g>;
  const revLit = ln.mode === 'rev';
  return <g>
    <Plate x={(KX + WX) / 2 + 40} y={y} w={1520} h={620} />
    {shaft(C.x + 150, KX - 82, engineTheta, revLit && stopX <= C.x)}
    {shaft(KX + 14 + gap, GX - 180, ln.clutchGap > 0.5 ? wheelA * 2.2 : engineTheta, revLit && stopX < GX - 180)}
    {shaft(GX + 180, WX - 40, wheelA * 2.2, revLit)}
    {/* clutch */}
    <path d={`M${KX - 120} ${y - 205} H${KX + 80} V${y + 205} H${KX - 120} Z`} fill="none" stroke="#3c5a50" strokeWidth="4" strokeDasharray="14 10" />
    <rect x={KX - 82} y={y - 170} width="30" height="340" rx="8" fill="#5d726b" stroke="#c9d6d0" strokeWidth="3" />
    <rect x={KX - 42 + gap} y={y - 140} width="22" height="280" rx="6" fill={ln.clutchGap > 0.5 ? '#6d817a' : '#9fb3aa'} stroke={ln.clutchGap > 0.5 ? ALERT : brand.lime} strokeWidth="4" />
    <rect x={KX - 14 + gap} y={y - 150} width="28" height="300" rx="6" fill="#4a5e57" stroke="#c9d6d0" strokeWidth="3" />
    {ln.clutchGap > 0.05 ? <rect x={KX - 52} y={y - 140} width={gap - 4 + 14} height="280" fill={ALERT} opacity={0.25 * ln.clutchGap} /> : null}
    {/* gearbox */}
    <rect x={GX - 180} y={y - 155} width="360" height="310" rx="26" fill="#12302a" stroke={inGear ? brand.lime : ALERT} strokeWidth="5" />
    <Gear x={GX - 85} y={y} r={52} a={engineTheta * 0.8} on={inGear} />
    <Gear x={GX - 85} y={y + 92} r={40} a={-engineTheta} on={inGear} />
    <Gear x={GX + 85} y={y + 92} r={46} a={-engineTheta * 0.9} on={inGear} />
    <Gear x={GX + 85} y={y} r={44} a={wheelA * 2.2} on={inGear} />
    <rect x={GX + 50} y={y - 50 + (inGear ? 0 : -40)} width="70" height="16" rx="6" fill={inGear ? brand.lime : ALERT} />
    {/* wheel */}
    <line x1={WX - 420} y1={y + 233} x2={WX + 420} y2={y + 233} stroke="#9fb3aa" strokeWidth="6" />
    {[...Array(9)].map((_, i) => <rect key={i} x={((i * 120 - t * 260) % 1080 + 1080) % 1080 + WX - 540} y={y + 248} width="60" height="8" rx="4" fill="#4a6158" />)}
    <circle cx={WX} cy={y} r="230" fill="#141c1a" stroke="#4a5e57" strokeWidth="6" />
    <circle cx={WX} cy={y} r="168" fill="#22312d" stroke="#8fa39b" strokeWidth="5" />
    <g transform={`rotate(${(wheelA * 180) / PI} ${WX} ${y})`}>{[0, 1, 2, 3, 4].map((k) => <line key={k} x1={WX} y1={y} x2={WX + 150 * Math.cos((k * TAU) / 5)} y2={y + 150 * Math.sin((k * TAU) / 5)} stroke="#9fb3aa" strokeWidth="18" strokeLinecap="round" />)}</g>
    <circle cx={WX} cy={y} r="34" fill="#c9d6d0" />
    {ln.retention > 0.01 ? <g opacity={ln.retention}>
      <path d={`M${WX + 262 * Math.cos(-0.35)} ${y + 262 * Math.sin(-0.35)} A262 262 0 0 0 ${WX + 262 * Math.cos(-2.6)} ${y + 262 * Math.sin(-2.6)}`} fill="none" stroke={HOT} strokeWidth="20" strokeLinecap="round" />
      <path d={`M${WX + 262 * Math.cos(-2.6) - 6} ${y + 262 * Math.sin(-2.6) - 34} l-30 44 l52 8`} fill="none" stroke={HOT} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
    </g> : null}
    {ln.flip > 0 ? <circle cx={WX} cy={y} r={60 + 260 * (1 - ln.flip)} fill="none" stroke={brand.lime} strokeWidth="14" opacity={ln.flip} /> : null}
    {/* energy pulses */}
    {ln.mode !== 'none' ? [...Array(10)].map((_, k) => {
      const ph = (t * 0.55 + k / 10) % 1;
      const fwd = ln.mode === 'fwd';
      const x = fwd ? C.x + 150 + ph * (WX - C.x - 150) : WX - ph * (WX - C.x - 150);
      if (!fwd && x < stopX) return null;
      const o = Math.max(0, Math.min(1, (x - (fwd ? C.x + 150 : stopX)) / 90, (WX - x) / 90));
      const d = fwd ? 1 : -1;
      return <g key={k} opacity={o}>
        <circle cx={x} cy={y} r="40" fill={brand.lime} opacity=".22" />
        <circle cx={x} cy={y} r="17" fill={brand.lime} />
        <path d={`M${x - 8 * d} ${y - 12} l${14 * d} 12 l${-14 * d} 12`} fill="none" stroke={brand.deep} strokeWidth="5" strokeLinecap="round" />
      </g>;
    }) : null}
    {labels ? <g>
      <text x={KX - 20} y={y - 240} textAnchor="middle" fill="#cfdcd3" fontSize="30" fontWeight="1000" letterSpacing="3">EMBRAGUE</text>
      <text x={GX} y={y - 190} textAnchor="middle" fill="#cfdcd3" fontSize="30" fontWeight="1000" letterSpacing="3">CAJA DE CAMBIOS</text>
      <text x={WX} y={y - 285} textAnchor="middle" fill="#cfdcd3" fontSize="30" fontWeight="1000" letterSpacing="3">RUEDA</text>
    </g> : null}
  </g>;
};

// ---------- Pedal and ECU ---------------------------------------------------------------------------------
const PedalStation: React.FC<{t: number}> = ({t}) => {
  const press = kf(t, [[0, 1], [0.9, 0]]);
  const lift = 1 - press;
  const pv = {x: 90, y: -250};
  return <g transform={`translate(${P.x} ${P.y})`}>
    <Plate x={0} y={0} w={640} h={700} />
    <path d="M-320 300 L320 210 L320 350 L-320 350 Z" fill="#1a2e28" />
    <path d="M-320 300 L320 210" stroke="#4a6158" strokeWidth="6" />
    <g transform={`rotate(${-13 * press} ${pv.x} ${pv.y})`}>
      <line x1={pv.x} y1={pv.y} x2={-20} y2={110} stroke="#8fa39b" strokeWidth="18" strokeLinecap="round" />
      <g transform="translate(-30 130) rotate(16)">
        <rect x="-36" y="-105" width="72" height="210" rx="22" fill="#2b3b37" stroke={brand.lime} strokeWidth="5" />
        {[-70, -35, 0, 35, 70].map((yy) => <line key={yy} x1="-22" y1={yy} x2="22" y2={yy} stroke="#5d726b" strokeWidth="5" />)}
        <g transform={`translate(${-70 * lift} ${-50 * lift})`}>
          <path d="M-42 -110 Q-120 -150 -230 -110 L-290 -30 Q-300 40 -262 80 Q-170 128 -42 112 Z" fill="#e7efe9" stroke="#173d34" strokeWidth="5" />
          <path d="M-46 108 Q-170 126 -270 84" stroke="#173d34" strokeWidth="14" fill="none" />
          <path d="M-230 -110 L-330 -300 L-460 -230 L-290 -30 Z" fill="#35564b" />
        </g>
      </g>
    </g>
    <rect x={pv.x - 40} y={pv.y - 70} width="160" height="110" rx="18" fill="#12302a" stroke={brand.lime} strokeWidth="4" />
    <text x={pv.x + 40} y={pv.y + 2} textAnchor="middle" fill={brand.lime} fontSize="26" fontWeight="1000" letterSpacing="1">SENSOR</text>
    <circle cx={pv.x} cy={pv.y} r="14" fill="#e7efe9" />
    <path d="M-150 -40 V-170 M-150 -170 l-26 34 M-150 -170 l26 34" fill="none" stroke={brand.lime} strokeWidth="14" strokeLinecap="round" opacity={win(t, 0.15, 2.4, 0.2)} />
    <WPill x={-120} y={330} text="PEDAL SUELTO" o={at(t, 0.9, 0.25)} />
  </g>;
};

const injecting = (s: number) => s < 0.6 || (s >= 7.4 && s < 19.64) || (s >= 27.36 && s < 34.9);
const EcuStation: React.FC<{t: number}> = ({t}) => {
  const glow = win(t, 18.7, 21.6, 0.2);
  const flash = win(t, 19.64, 19.95, 0.05);
  const inPedal = at(t, 17.4, 0.25), inRpm = at(t, 18.18, 0.25);
  const cut = t >= 19.64 && t < 27.36;
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const s = t - 2.4 + (i / 120) * 2.4;
    const v = injecting(s) && ((s * 4) % 1) < 0.38 ? 1 : 0;
    pts.push(`${(-200 + (i / 120) * 400).toFixed(1)} ${(40 - v * 46).toFixed(1)}`);
  }
  return <g transform={`translate(${E.x} ${E.y})`}>
    {[[-50, 'PEDAL SUELTO', inPedal], [50, 'RÉGIMEN SUFICIENTE', inRpm]].map(([yy, label, o]) => <g key={label as string} opacity={0.3 + 0.7 * (o as number)}>
      <line x1={282} y1={yy as number} x2={322} y2={yy as number} stroke={brand.lime} strokeWidth="6" />
      <WPill x={490} y={yy as number} text={label as string} dark color={(o as number) > 0.5 ? brand.lime : '#e7efe9'} size={22} />
    </g>)}
    {glow > 0 ? <rect x="-310" y="-192" width="620" height="384" rx="46" fill={flash > 0 ? PAPER : brand.lime} opacity={0.18 * glow + 0.35 * flash} /> : null}
    <rect x="-262" y="-162" width="524" height="324" rx="34" fill="#12302a" stroke={brand.lime} strokeWidth="5" />
    {[...Array(9)].map((_, i) => <g key={i}><rect x={-214 + i * 52} y="-184" width="16" height="24" fill="#8fa39b" /><rect x={-214 + i * 52} y="160" width="16" height="24" fill="#8fa39b" /></g>)}
    <text y="-104" textAnchor="middle" fill={brand.lime} fontSize="38" fontWeight="1000" letterSpacing="3">CENTRALITA</text>
    <rect x="-226" y="-70" width="452" height="190" rx="18" fill="#061410" stroke="#3c5a50" strokeWidth="3" />
    <text x="-200" y="-34" fill="#cfdcd3" fontSize="22" fontWeight="900" letterSpacing="2">PULSOS DEL INYECTOR</text>
    <path d={'M' + pts.join(' L')} fill="none" stroke={cut ? ALERT : brand.lime} strokeWidth="5" strokeLinejoin="round" />
    <text y="100" textAnchor="middle" fill={cut ? ALERT : '#cfdcd3'} fontSize="28" fontWeight="1000" letterSpacing="2">{cut ? 'INYECCIÓN CORTADA' : injecting(t) ? 'INYECTANDO' : 'SIN PULSOS'}</text>
  </g>;
};

// ---------- The world ---------------------------------------------------------------------------------------
export const LiftOffWorld: React.FC<{t: number; cam?: {cx: number; cy: number; z: number}; centerY?: number; cover?: boolean}> = ({t, cam, centerY = 1000, cover = false}) => {
  const c = cam ?? liftCamera(t);
  const blur = cam ? undefined : camVelocity(liftCamera, t, 30, centerY);
  const eA = engineA(t), lA = laneA(t);
  const ov = t > 34.5; // second lane only exists for the overview
  const focusA = cover || t < 38.0 || t > 40.8 ? 1 : 0.4 + 0.6 * (1 - at(t, 38.0, 0.3));
  const focusB = cover ? 1 : t < 38.0 ? 0.45 : 0.45 + 0.55 * at(t, 38.0, 0.3);
  const far = interpolate(c.z, [0.5, 0.7], [1, 0], clamp); // big map-scale pills only when the camera is pulled back
  const detail = 1 - at(t, 34.6, 0.4) + at(t, 40.8, 0.3);
  const laneTitle = at(t, 35.2, 0.4) * (1 - at(t, 41.0, 0.3));
  return <WorldSvg cam={c} centerY={centerY} blur={blur} id="lift">
    <Wire p={W_PEDAL} t={t} pulses={[[0.25, 1.1], [17.2, 17.8]]} />
    <Wire p={W_INJ} t={t} pulses={[[19.64, 20.08]]} color={ALERT} />
    <PedalStation t={t} />
    <EcuStation t={t} />
    <g opacity={ov ? focusA : 1}>
      <g transform={`translate(${C.x} ${C.y})`}>
        <Engine st={eA} t={t} id="a">
          <WPill x={-300} y={120} text="ROZAMIENTO" o={detail * win(t, 13.72, 14.5, 0.2)} color={HOT} />
          <WPill x={-380} y={-490} text="MARIPOSA CASI CERRADA" o={detail * win(t, 14.54, 16.0, 0.2)} dark color={ALERT} size={26} />
          <WPill x={-320} y={-560} text="SIGUE INYECTANDO" o={detail * win(t, 16.66, 19.64, 0.2)} dark color={FUEL} size={24} />
          <WPill x={-320} y={-560} text="INYECTOR CORTADO" o={detail * Math.max(win(t, 20.08, 22.2, 0.15), win(t, 41.3, 42.3, 0.15))} color={ALERT} size={26} />
          <WPill x={-320} y={-560} text="VUELVE A INYECTAR" o={detail * win(t, 27.36, 29.4, 0.15)} color={FUEL} size={26} />
          <WPill x={0} y={-640} text="MOTOR" o={detail * (1 - at(t, 7.0, 0.3))} dark color="#e7efe9" size={30} />
        </Engine>
      </g>
      <Drivetrain y={SHAFT} t={t} ln={lA} engineTheta={eA.theta} />
      <WPill x={WX} y={SHAFT - 430} text="RETENCIÓN" o={far * detail * lA.retention * (t < 26.9 ? 1 : 0)} color={HOT} size={62} />
      <WPill x={KX - 20} y={SHAFT + 262} text={lA.clutchGap > 0.5 ? 'EMBRAGUE PISADO' : 'ACOPLADO'} o={detail * win(t, 22.9, 23.8, 0.15)} dark color={lA.clutchGap > 0.5 ? ALERT : brand.lime} size={26} />
      <WPill x={GX} y={SHAFT + 220} text="PUNTO MUERTO (N)" o={detail * win(t, 23.8, 26.9, 0.15)} dark color={ALERT} size={26} />
      <WPill x={1650} y={SHAFT - 400} text="MOTOR DESACOPLADO" o={far * detail * win(t, 25.14, 27.3, 0.2)} color={ALERT} size={60} />
      <text x={GX} y={SHAFT - 420} textAnchor="middle" fill={brand.lime} fontSize="120" fontWeight="1000" letterSpacing="4" opacity={laneTitle}>CON MARCHA</text>
    </g>
    {ov ? <g opacity={focusB}>
      <path d={`M-60 ${SHAFT + 440} H3120`} stroke={brand.lime} strokeWidth="8" strokeDasharray="40 30" opacity={laneTitle * 0.6} />
      <g transform={`translate(${C.x} ${C.y + LANE_B})`}><Engine st={engineB(t)} t={t} id="b" /></g>
      <Drivetrain y={SHAFT + LANE_B} t={t} ln={laneB} engineTheta={thetaB(t)} labels={false} />
      <text x={GX} y={SHAFT + LANE_B - 420} textAnchor="middle" fill={ALERT} fontSize="120" fontWeight="1000" letterSpacing="4" opacity={laneTitle}>EN PUNTO MUERTO</text>
    </g> : null}
  </WorldSvg>;
};

// ---------- Dashboard HUD (screen-fixed, reacts to the voice) ------------------------------------------------
const hudState = (t: number) => {
  if (t < 2.18) return {needle: kf(t, [[0, 0.74], [0.9, 0.34], [2.1, 0.22]]), big: t < 0.62 ? 'ACELERANDO' : 'PIE FUERA', small: 'CONSUMO INSTANTÁNEO'};
  if (t < 7.4) return {needle: kf(t, [[2.18, 0.22], [2.32, 0]]), big: '0 L/100 km', small: 'CONSUMO INSTANTÁNEO'};
  if (t < 19.64) return {needle: kf(t, [[7.4, 0], [7.9, 0.24]]), big: 'INYECTANDO', small: 'PASO A PASO · SIN CORTE'};
  if (t < 21.34) return {needle: kf(t, [[19.64, 0.24], [20.1, 0]]), big: 'CORTE', small: 'INYECCIÓN CORTADA'};
  if (t < 27.36) return {needle: 0, big: '0 L/100 km', small: t < 25.14 ? 'CORTE DE INYECCIÓN' : 'MOTOR DESACOPLADO'};
  if (t < 35.0) return {needle: kf(t, [[27.36, 0], [27.8, 0.17]]), big: 'RALENTÍ', small: 'VUELVE A GASTAR'};
  if (t < 38.1) return {needle: kf(t, [[35.0, 0.17], [35.5, 0]]), big: '0 L/100 km', small: 'CON MARCHA'};
  if (t < 40.8) return {needle: kf(t, [[38.1, 0], [38.5, 0.17]]), big: 'RALENTÍ', small: 'EN PUNTO MUERTO'};
  return {needle: kf(t, [[40.8, 0.17], [41.2, 0]]), big: '0 L/100 km', small: 'CON MARCHA'};
};

const Gauge: React.FC<{needle: number; flash: number}> = ({needle, flash}) => {
  const r = 60, cx = 74, cy = 86;
  const a = PI + PI * needle;
  const arcTo = (v: number) => `M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r * Math.cos(PI + PI * v)} ${cy + r * Math.sin(PI + PI * v)}`;
  return <svg viewBox="0 0 148 108" style={{width: 148, height: 108, flex: 'none', fontFamily: brand.font}}>
    <path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="#2e4a41" strokeWidth="12" strokeLinecap="round" />
    {needle > 0.01 ? <path d={arcTo(needle)} fill="none" stroke={PAPER} strokeWidth="12" strokeLinecap="round" /> : null}
    {flash > 0 ? <circle cx={cx - r} cy={cy} r={14 + 16 * flash} fill={brand.lime} opacity={0.5 * flash} /> : null}
    <line x1={cx} y1={cy} x2={cx + (r - 14) * Math.cos(a)} y2={cy + (r - 14) * Math.sin(a)} stroke={needle < 0.02 ? brand.lime : PAPER} strokeWidth="6" strokeLinecap="round" />
    <circle cx={cx} cy={cy} r="8" fill={PAPER} />
    <text x={cx - r} y={cy + 22} textAnchor="middle" fill={brand.lime} fontSize="17" fontWeight="1000">0</text>
  </svg>;
};

export const LiftOffHud: React.FC<{t: number; top?: number}> = ({t, top = 336}) => {
  const s = hudState(t);
  const split = win(t, 29.4, 35.0, 0.25);
  const flash = Math.max(win(t, 2.18, 2.6, 0.05), win(t, 21.34, 21.8, 0.05), win(t, 30.72, 31.2, 0.05));
  const zero = s.big.startsWith('0');
  const rewind = win(t, 7.4, 8.6, 0.15);
  const o = 1 - at(t, 41.95, 0.25);
  const leftZero = t >= 30.72;
  return <div style={{position: 'absolute', top, left: 50, right: 50, height: 118, borderRadius: 24, background: '#071612f0', border: `2px solid ${zero ? brand.lime : '#d7f36a80'}`, boxShadow: `0 14px 40px #000a${flash > 0 ? `, 0 0 ${30 * flash}px #d7f36a` : ''}`, zIndex: 5, opacity: o, overflow: 'hidden', fontFamily: brand.font}}>
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', gap: 14, padding: '0 18px', opacity: 1 - split}}>
      <Gauge needle={s.needle} flash={flash} />
      <div style={{flex: 1, minWidth: 0}}>
        <div style={{color: '#cfdcd3', fontSize: 17, fontWeight: 900, letterSpacing: 2}}>{s.small}</div>
        <div style={{color: zero ? brand.lime : PAPER, fontSize: 46, lineHeight: 1.05, fontWeight: 1000, letterSpacing: -1, transform: `scale(${1 + 0.12 * flash})`, transformOrigin: 'left center'}}>{s.big}</div>
      </div>
      <div style={{flex: 'none', textAlign: 'right', color: brand.lime, fontSize: 13, lineHeight: 1.25, fontWeight: 900, letterSpacing: 1, border: '1.5px solid #d7f36a90', borderRadius: 10, padding: '6px 8px'}}>GRÁFICO CONCEPTUAL<br />SIN DATOS DE PRUEBA</div>
    </div>
    {rewind > 0 ? <div style={{position: 'absolute', right: 214, top: 14, padding: '4px 12px', borderRadius: 12, background: brand.lime, color: brand.deep, fontSize: 16, fontWeight: 1000, letterSpacing: 1, opacity: rewind}}>↺ PASO A PASO</div> : null}
    {split > 0 ? <div style={{position: 'absolute', inset: 0, display: 'flex', opacity: split}}>
      <div style={{flex: 1, padding: '16px 22px', borderRight: '2px solid #d7f36a60'}}>
        <div style={{color: '#cfdcd3', fontSize: 17, fontWeight: 900, letterSpacing: 2}}>INSTANTÁNEO</div>
        <div style={{color: leftZero ? brand.lime : PAPER, fontSize: 38, fontWeight: 1000, letterSpacing: -1, marginTop: 4}}>{leftZero ? '0 L/100 km' : 'RALENTÍ'}</div>
      </div>
      <div style={{flex: 1, padding: '16px 22px'}}>
        <div style={{color: '#cfdcd3', fontSize: 17, fontWeight: 900, letterSpacing: 2}}>MEDIA</div>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, marginTop: 10, opacity: 0.3 + 0.7 * at(t, 32.58, 0.25)}}>
          <div style={{flex: 1, height: 22, borderRadius: 11, background: '#2e4a41', overflow: 'hidden'}}><div style={{width: `${58 * at(t, 32.58, 0.5) - 3 * at(t, 33.0, 1.2)}%`, height: '100%', background: brand.lime}} /></div>
          <div style={{color: PAPER, fontSize: 20, fontWeight: 1000, letterSpacing: 1}}>{t >= 32.58 ? 'SIGUE CONTANDO' : '—'}</div>
        </div>
      </div>
    </div> : null}
  </div>;
};

// ---------- Concept graph: instantaneous vs average (opens out of the HUD on «Eso sí…») ------------------------
const inst = (x: number) => (x < 0.08 ? 0.15 + (0.7 * x) / 0.08 : x < 0.4 ? 0.85 : x < 0.6 ? 0.42 : x < 0.62 ? 0.42 * (1 - (x - 0.6) / 0.02) : x < 0.76 ? 0 : x < 0.8 ? (0.8 * (x - 0.76)) / 0.04 : 0.8);
const AVG = (() => {
  const out: number[] = [];
  let sum = 0;
  for (let i = 0; i <= 200; i++) { const x = i / 200; sum += inst(x); out.push(sum / (i + 1)); }
  return out;
})();
export const AverageGraph: React.FC<{t: number}> = ({t}) => {
  const o = win(t, 29.55, 35.0, 0.3);
  if (o <= 0) return null;
  const X0 = 90, X1 = 890, YT = 170, YB = 640;
  const gx = (x: number) => X0 + x * (X1 - X0), gy = (v: number) => YB - v * (YB - YT);
  const xp = kf(t, [[29.82, 0], [30.72, 0.62], [31.4, 0.76], [32.3, 1]]);
  const instPath = (to: number) => { const p: string[] = []; for (let x = 0; x <= to + 1e-6; x += 0.004) p.push(`${gx(x).toFixed(1)} ${gy(inst(x)).toFixed(1)}`); return p.length > 1 ? 'M' + p.join(' L') : ''; };
  const ap = kf(t, [[32.58, 0], [33.4, 1]]);
  const avgPath = () => { const p: string[] = []; for (let i = 6; i <= Math.round(ap * 200); i++) p.push(`${gx(i / 200).toFixed(1)} ${gy(AVG[i]).toFixed(1)}`); return p.length > 1 ? 'M' + p.join(' L') : ''; };
  const fill = at(t, 33.64, 0.3);
  const zeroHi = at(t, 30.72, 0.2);
  const fillPath = () => { const p: string[] = [`${gx(0)} ${gy(0)}`]; for (let x = 0; x <= 0.4; x += 0.004) p.push(`${gx(x).toFixed(1)} ${gy(inst(x)).toFixed(1)}`); p.push(`${gx(0.4)} ${gy(0)}`); return 'M' + p.join(' L') + ' Z'; };
  return <>
    <div style={{position: 'absolute', inset: 0, background: '#03100c', opacity: 0.66 * o, zIndex: 4}} />
    <div style={{position: 'absolute', top: 500, left: 60, right: 60, height: 920, zIndex: 5, opacity: o, transform: `translateY(${(1 - o) * -60}px) scale(${0.94 + 0.06 * o})`, transformOrigin: 'top center', borderRadius: 30, background: '#071612f5', border: `2px solid ${brand.lime}`, boxShadow: '0 30px 80px #000c'}}>
      <svg viewBox="0 0 960 920" style={{width: '100%', height: '100%', fontFamily: brand.font}}>
        <rect x="26" y="26" width="560" height="46" rx="23" fill="#0a211a" stroke={brand.lime} strokeWidth="2" />
        <text x="306" y="56" textAnchor="middle" fill={brand.lime} fontSize="19" fontWeight="900" letterSpacing="1.2">GRÁFICO CONCEPTUAL · SIN DATOS DE PRUEBA</text>
        <text x={X0} y="128" fill={PAPER} fontSize="22" fontWeight="1000" letterSpacing="1">— INSTANTÁNEO</text>
        <text x={X0 + 250} y="128" fill={brand.lime} fontSize="22" fontWeight="1000" letterSpacing="1" opacity={0.3 + 0.7 * at(t, 32.58, 0.2)}>— MEDIA</text>
        {[0.25, 0.5, 0.75, 1].map((v) => <path key={v} d={`M${X0} ${gy(v)} H${X1}`} stroke={PAPER} strokeWidth="1" opacity=".1" />)}
        <path d={`M${X0} ${YT - 20} V${YB} H${X1 + 10}`} fill="none" stroke="#9fb3aa" strokeWidth="3" />
        <text x="52" y={(YT + YB) / 2} textAnchor="middle" transform={`rotate(-90 52 ${(YT + YB) / 2})`} fill="#cfdcd3" fontSize="20" fontWeight="900" letterSpacing="2">CONSUMO</text>
        <text x={X1} y={YB + 40} textAnchor="end" fill="#cfdcd3" fontSize="20" fontWeight="900" letterSpacing="2">RECORRIDO →</text>
        <rect x={gx(0.62)} y={YT - 10} width={gx(0.76) - gx(0.62)} height={YB - YT + 10} fill={brand.lime} opacity={0.12 * zeroHi} />
        {fill > 0 ? <path d={fillPath()} fill={brand.lime} opacity={0.22 * fill} /> : null}
        <path d={instPath(xp)} fill="none" stroke={PAPER} strokeWidth="7" strokeLinejoin="round" />
        {xp >= 0.62 ? <path d={`M${gx(0.62)} ${gy(0)} H${gx(Math.min(xp, 0.76))}`} stroke={brand.lime} strokeWidth="11" strokeLinecap="round" /> : null}
        <path d={avgPath()} fill="none" stroke={brand.lime} strokeWidth="7" strokeDasharray="20 12" />
        <text x={gx(0.24)} y={gy(0.85) - 22} textAnchor="middle" fill="#cfdcd3" fontSize="20" fontWeight="900" letterSpacing="2" opacity={at(t, 29.9, 0.3)}>ACELERAR</text>
        <g opacity={at(t, 31.56, 0.25)}>
          <rect x={gx(0.69) - 150} y={YB - 86} width="300" height="46" rx="23" fill={brand.lime} />
          <text x={gx(0.69)} y={YB - 56} textAnchor="middle" fill={brand.deep} fontSize="20" fontWeight="1000" letterSpacing="1">0 · DURA UN INSTANTE</text>
        </g>
        <g opacity={at(t, 33.0, 0.25)}>
          <rect x={gx(0.69) - 120} y={gy(AVG[138]) - 78} width="240" height="44" rx="22" fill="#0a211a" stroke={brand.lime} strokeWidth="2" />
          <text x={gx(0.69)} y={gy(AVG[138]) - 49} textAnchor="middle" fill={brand.lime} fontSize="19" fontWeight="1000" letterSpacing="1">NO BAJA A CERO</text>
        </g>
        <g opacity={at(t, 34.12, 0.25)}>
          <rect x={gx(0.2) - 175} y={gy(0.45) - 23} width="350" height="46" rx="23" fill={brand.deep} stroke={brand.lime} strokeWidth="2" />
          <text x={gx(0.2)} y={gy(0.45) + 7} textAnchor="middle" fill={brand.lime} fontSize="19" fontWeight="1000" letterSpacing="1">LO GASTADO AL ACELERAR</text>
        </g>
        <text x="480" y="770" textAnchor="middle" fill={PAPER} fontSize="26" fontWeight="900" letterSpacing="1" opacity={at(t, 33.2, 0.3)}>LA MEDIA REPARTE TODOS LOS LITROS</text>
        <text x="480" y="808" textAnchor="middle" fill={PAPER} fontSize="26" fontWeight="900" letterSpacing="1" opacity={at(t, 33.2, 0.3)}>ENTRE TODOS LOS KILÓMETROS</text>
      </svg>
    </div>
  </>;
};

export const LiftOffPromo: React.FC<LiftOffSpec> = (spec) => {
  const frame = useCurrentFrame();
  const t = frame / spec.fps;
  return <ExplainerShell spec={spec} frame={frame} t={t} scenes={liftScenes} tag="SOLTAR EL ACELERADOR" badge="ESQUEMA SIMPLIFICADO · CAMBIO MANUAL" chapters={CHAPTERS}
    ctaFrom={42.2} ctaGuide="AL SOLTAR EL ACELERADOR" ctaDetail={<>RETENCIÓN, CORTE DE INYECCIÓN<br />Y PUNTO MUERTO</>} defaultAudio="audio/voice-video-025.wav"
    world={<LiftOffWorld t={t} />} hud={<><AverageGraph t={t} /><LiftOffHud t={t} /></>} />;
};

// World + HUD without chrome or captions, to check every station and camera move before the montage.
export const LiftOffPreview: React.FC = () => {
  const t = useCurrentFrame() / 30;
  return <AbsoluteFill style={{background: '#0b1e19'}}><LiftOffWorld t={t} /><AverageGraph t={t} /><LiftOffHud t={t} /></AbsoluteFill>;
};

export const LiftOffCover: React.FC = () => <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
  <LiftOffWorld t={36.6} cam={{cx: 1515, cy: 2130, z: 0.3}} centerY={1210} cover />
  <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(#0a211afa 0px, #0a211af2 600px, #0a211a00 760px, #0a211a00 1660px, #0a211af0 1800px)'}} />
  <div style={{position: 'absolute', top: 80, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}><BrandCircle size={140} /></div>
  <div style={{position: 'absolute', top: 250, left: 30, right: 30, textAlign: 'center', color: brand.lime, fontSize: 104, lineHeight: 0.92, fontWeight: 1000, letterSpacing: -4, whiteSpace: 'nowrap', textShadow: '0 10px 30px #06140f80'}}>¿CERO LITROS?</div>
  <div style={{position: 'absolute', top: 395, left: 40, right: 40, textAlign: 'center', color: PAPER, fontSize: 42, lineHeight: 1.05, fontWeight: 1000, letterSpacing: -1}}>QUÉ PASA AL SOLTAR EL ACELERADOR</div>
  <LiftOffHud t={5} top={500} />
  <div style={{position: 'absolute', top: 1720, left: 210, right: 210, padding: '18px 10px', borderRadius: 22, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 32, fontWeight: 1000}}>KILOMETROCLARO.COM</div>
</AbsoluteFill>;
