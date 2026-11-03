import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {Backdrop, BrandCircle, type CaptionCue, clamp, CtaCard, Heading, IllustrativeBadge, ReelChrome, type ReelScene, Strap} from '../components/ReelKit';

// Vídeo 023 · CVT y e-CVT: suenan igual, funcionan distinto. Montaje 100 % con animaciones propias,
// a sangre (sin marco) y con composición en dos mitades.
export type CvtVsEcvtSpec = {
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  requiresHumanReview: boolean;
  captions: CaptionCue[];
  audioFile?: string;
};

type SceneId = 'names' | 'pulleys' | 'rpm' | 'split' | 'planetary' | 'feel' | 'inside' | 'ask' | 'cta';
const ANIM = 'ANIMACIÓN ILUSTRATIVA · KILÓMETRO CLARO';
// Cuts sit in the pauses (or at the first word of the phrase) of voice-video-023.wav (32,24 s, Google TTS, 1×).
export const cvtScenes: ReelScene<SceneId>[] = [
  {id: 'names', start: 0, end: 5.4, label: 'NOMBRES PARECIDOS', credit: ANIM},
  {id: 'pulleys', start: 5.4, end: 10.74, label: 'CVT: POLEAS', credit: ANIM},
  {id: 'rpm', start: 10.74, end: 14.5, label: 'SIN MARCHAS FIJAS', credit: 'GRÁFICO CONCEPTUAL · KILÓMETRO CLARO'},
  {id: 'split', start: 14.5, end: 17.24, label: 'EN CAMBIO', credit: ANIM},
  {id: 'planetary', start: 17.24, end: 21.75, label: 'e-CVT: ENGRANAJES', credit: 'ESQUEMA SIMPLIFICADO · KILÓMETRO CLARO'},
  {id: 'feel', start: 21.75, end: 25.18, label: 'AL VOLANTE', credit: ANIM},
  {id: 'inside', start: 25.18, end: 27.8, label: 'POR DENTRO', credit: ANIM},
  {id: 'ask', start: 27.8, end: 29.15, label: 'TU ELECCIÓN', credit: ANIM},
  {id: 'cta', start: 29.15, end: 32.24, label: 'LA GUÍA', credit: 'KILOMETROCLARO.COM'},
];
const FPS = 30;
const W = 1080, H = 1060;
const STEEL = '#5d726b';
const ease = Easing.inOut(Easing.cubic);
const at = (t: number, from: number, dur = 0.3) => interpolate(t, [from, from + dur], [0, 1], {...clamp, easing: ease});
const sub = (sec: number, sceneStart: number) => Math.round((sec - sceneStart) * FPS);

const Pill: React.FC<{x: number; y: number; w: number; text: string; o?: number; dark?: boolean; size?: number; color?: string}> = ({x, y, w, text, o = 1, dark = false, size = 20, color}) => <g opacity={o}>
  <rect x={x - w / 2} y={y - 23} width={w} height="46" rx="23" fill={dark ? '#0a211aee' : color ?? brand.lime} stroke={dark ? color ?? brand.lime : 'none'} strokeWidth="2" />
  <text x={x} y={y + 7} textAnchor="middle" fill={dark ? color ?? brand.lime : brand.deep} fontSize={size} fontWeight="1000" letterSpacing="1">{text}</text>
</g>;

// ---------- CVT: two variable pulleys + belt ------------------------------------------
const SUM_R = 190;
export const cvtRadius = (t: number) => {
  if (t < 7.42) return 65;
  const up = interpolate(t, [7.42, 9.7], [0, 1], {...clamp, easing: ease});
  const back = interpolate(t, [9.9, 10.74], [0, 0.45], {...clamp, easing: ease});
  return 65 + 60 * (up - back);
};

const beltPath = (x1: number, x2: number, y: number, r1: number, r2: number) => {
  const s = (r1 - r2) / (x2 - x1), c = Math.sqrt(1 - s * s);
  const p1 = [x1 + r1 * s, y - r1 * c], p2 = [x2 + r2 * s, y - r2 * c], q2 = [x2 + r2 * s, y + r2 * c], q1 = [x1 + r1 * s, y + r1 * c];
  const big2 = r2 > r1 ? 1 : 0, big1 = r1 > r2 ? 1 : 0;
  return `M${p1[0]} ${p1[1]} L${p2[0]} ${p2[1]} A${r2} ${r2} 0 ${big2} 1 ${q2[0]} ${q2[1]} L${q1[0]} ${q1[1]} A${r1} ${r1} 0 ${big1} 1 ${p1[0]} ${p1[1]} Z`;
};

const Sheave: React.FC<{cx: number; cy: number; R: number; r: number; angle: number; lit: number}> = ({cx, cy, R, r, angle, lit}) => <g>
  <circle cx={cx} cy={cy} r={R} fill="#22312d" stroke={lit > 0.5 ? brand.lime : '#8fa39b'} strokeWidth="5" />
  <circle cx={cx} cy={cy} r={R - 18} fill="none" stroke="#3c4d48" strokeWidth="3" />
  <circle cx={cx} cy={cy} r={r - 10} fill="#2c3e39" />
  <g transform={`rotate(${(angle * 180) / Math.PI} ${cx} ${cy})`}>
    {[0, 1, 2, 3, 4, 5].map((k) => <line key={k} x1={cx} y1={cy} x2={cx + Math.cos((k * Math.PI) / 3) * (R - 22)} y2={cy + Math.sin((k * Math.PI) / 3) * (R - 22)} stroke="#4a5e57" strokeWidth="6" />)}
  </g>
  <circle cx={cx} cy={cy} r="26" fill="#9fb3aa" stroke="#e7efe9" strokeWidth="4" />
</g>;

const Section: React.FC<{cx: number; yA: number; r: number; lit: number}> = ({cx, yA, r, lit}) => {
  const k = 0.45, Hh = 110, h = (r - 40) * 0.9, g = 40 - k * h;
  const half = (sg: number) => {
    const ix = cx + sg * g, ox = cx + sg * (g + k * Hh);
    return <path d={`M${ix} ${yA} L${ox} ${yA - Hh} L${ox + sg * 46} ${yA - Hh} L${ox + sg * 46} ${yA} Z`} fill="#7f9690" stroke={lit > 0.5 ? brand.lime : '#c9d6d0'} strokeWidth="3" />;
  };
  const yb = yA - h;
  return <g>
    <rect x={cx - 150} y={yA} width="300" height="18" rx="6" fill="#4a5e57" />
    {half(-1)}{half(1)}
    <path d={`M${cx - 40} ${yb} L${cx + 40} ${yb} L${cx + 40 + k * 30} ${yb - 30} L${cx - 40 - k * 30} ${yb - 30} Z`} fill={brand.lime} stroke="#f7f8f5" strokeWidth="3" />
  </g>;
};

/** Drawn in a 1080-wide box, pulleys centred on y = cy. */
export const PulleyGroup: React.FC<{t: number; r1: number; spin: number; beltLit?: number; pulleyLit?: number; sections?: boolean; cy?: number}> = ({t, r1, spin, beltLit = 1, pulleyLit = 0, sections = false, cy = 350}) => {
  const r2 = SUM_R - r1, x1 = 300, x2 = 780;
  const dr = cvtRadius(t + 0.05) - cvtRadius(t);
  const tag = (closing: boolean) => (Math.abs(dr) < 0.05 ? 'POSICIÓN FIJA' : closing ? 'SE CIERRA: SUBE' : 'SE ABRE: BAJA');
  return <g>
    <Sheave cx={x1} cy={cy} R={150} r={r1} angle={spin} lit={pulleyLit} />
    <Sheave cx={x2} cy={cy} R={150} r={r2} angle={(spin * r1) / r2} lit={pulleyLit} />
    {beltLit > 0 ? <path d={beltPath(x1, x2, cy, r1, r2)} fill="none" stroke={brand.lime} strokeWidth="30" opacity={0.25 * beltLit} style={{filter: 'blur(8px)'}} /> : null}
    <path d={beltPath(x1, x2, cy, r1, r2)} fill="none" stroke="#e7efe9" strokeWidth="16" />
    <path d={beltPath(x1, x2, cy, r1, r2)} fill="none" stroke={brand.lime} strokeWidth="16" strokeDasharray="22 14" strokeDashoffset={-spin * r1} opacity={0.35 + 0.65 * beltLit} />
    {sections ? <g>
      <text x="540" y="740" textAnchor="middle" fill="#cfdcd3" fontSize="19" fontWeight="900" letterSpacing="3">VISTA EN SECCIÓN</text>
      <Section cx={x1} yA={920} r={r1} lit={pulleyLit} />
      <Section cx={x2} yA={920} r={r2} lit={pulleyLit} />
      <text x={x1} y="975" textAnchor="middle" fill={dr > 0.05 ? brand.lime : '#cfdcd3'} fontSize="19" fontWeight="1000" letterSpacing="1">{tag(dr > 0)}</text>
      <text x={x2} y="975" textAnchor="middle" fill={dr < -0.05 ? brand.lime : '#cfdcd3'} fontSize="19" fontWeight="1000" letterSpacing="1">{tag(dr < 0)}</text>
    </g> : null}
  </g>;
};

export const PulleyDiagram: React.FC<{t: number}> = ({t}) => {
  const r1 = cvtRadius(t);
  const spin = (t - 5.4) * 2.6;
  const pulleys = at(t, 8.98, 0.25), belt = at(t, 9.78, 0.25), vary = at(t, 7.42, 0.3);
  return <svg viewBox={`0 0 ${W} ${H}`} style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <rect width={W} height={H} fill="#0b1915" />
    <g opacity=".12">{[...Array(12)].map((_, i) => <path key={i} d={`M0 ${i * 92} H${W}`} stroke={brand.lime} strokeWidth="1" />)}</g>
    <text x="300" y="132" textAnchor="middle" fill="#e7efe9" fontSize="22" fontWeight="1000" letterSpacing="2">DEL MOTOR</text>
    <text x="780" y="132" textAnchor="middle" fill="#e7efe9" fontSize="22" fontWeight="1000" letterSpacing="2">A LAS RUEDAS</text>
    <PulleyGroup t={t} r1={r1} spin={spin} beltLit={belt} pulleyLit={pulleys} sections />
    <Pill x={540} y={170} w={300} text="CORREA O CADENA" o={belt} />
    <Pill x={540} y={580} w={430} text="POLEAS DE DIÁMETRO VARIABLE" o={pulleys} dark />
    <Pill x={540} y={1018} w={260} text="RELACIÓN VARIABLE" o={vary} dark color="#e7efe9" size={18} />
    <IllustrativeBadge />
  </svg>;
};

// ---------- RPM chart: continuous vs fixed gears ----------------------------------------
const yR = (rpm: number) => 840 - (600 * rpm) / 6000;
const SAW = `M140 ${yR(1000)} L330 ${yR(4500)} L330 ${yR(2600)} L520 ${yR(4500)} L520 ${yR(3000)} L720 ${yR(4500)} L720 ${yR(3300)} L1000 ${yR(4300)}`;
const CVTLINE = `M140 ${yR(1000)} Q190 ${yR(3950)} 290 ${yR(3800)} L1000 ${yR(4050)}`;
export const RpmDiagram: React.FC<{t: number}> = ({t}) => {
  const cvt = interpolate(t, [10.9, 12.2], [0, 1], {...clamp, easing: ease});
  const saw = interpolate(t, [12.36, 13.1], [0, 1], {...clamp, easing: ease});
  const box = at(t, 13.42, 0.25);
  return <svg viewBox={`0 0 ${W} ${H}`} style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <rect width={W} height={H} fill="#0b1915" />
    {[1000, 2000, 3000, 4000, 5000, 6000].map((r) => <path key={r} d={`M140 ${yR(r)} H1000`} stroke="#f7f8f5" strokeWidth="1" opacity=".1" />)}
    <path d={`M140 200 V840 H1010`} stroke="#9fb3aa" strokeWidth="4" fill="none" />
    <text x="140" y="180" fill="#e7efe9" fontSize="22" fontWeight="1000" letterSpacing="2">REVOLUCIONES DEL MOTOR</text>
    <text x="1000" y="890" textAnchor="end" fill="#e7efe9" fontSize="22" fontWeight="1000" letterSpacing="2">VELOCIDAD DEL COCHE →</text>
    <path d={SAW} pathLength={1} fill="none" stroke="#c9d6d0" strokeWidth="7" strokeLinejoin="round" strokeDasharray="1 1" strokeDashoffset={1 - saw} />
    {['1ª', '2ª', '3ª', '4ª'].map((g, i) => <text key={g} x={[300, 490, 690, 960][i]} y={[yR(4500), yR(4500), yR(4500), yR(4300)][i] - 18} textAnchor="middle" fill="#e7efe9" fontSize="26" fontWeight="1000" opacity={interpolate(saw, [i * 0.22, i * 0.22 + 0.2], [0, 1], clamp)}>{g}</text>)}
    <path d={CVTLINE} pathLength={1} fill="none" stroke={brand.lime} strokeWidth="30" opacity=".2" strokeDasharray="1 1" strokeDashoffset={1 - cvt} style={{filter: 'blur(8px)'}} />
    <path d={CVTLINE} pathLength={1} fill="none" stroke={brand.lime} strokeWidth="10" strokeLinecap="round" strokeDasharray="1 1" strokeDashoffset={1 - cvt} />
    <Pill x={340} y={285} w={260} text="CVT: SIN SALTOS" o={at(t, 11.9, 0.25)} />
    <Pill x={420} y={yR(1500)} w={300} text="MARCHAS FIJAS" o={saw > 0.3 ? 1 : saw * 3} dark color="#e7efe9" />
    <Pill x={420} y={yR(1500) + 64} w={360} text="= CAJA TRADICIONAL" o={box} dark color="#e7efe9" />
    <IllustrativeBadge text="GRÁFICO CONCEPTUAL" width={280} />
  </svg>;
};

// ---------- e-CVT: planetary gear set (power split) -------------------------------------
const ZS = 30, ZP = 24, ZR = 78, K = 3.5;
const RS = ZS * K, RP = ZP * K, RR = ZR * K, ORBIT = RS + RP;
const gearPath = (n: number, rRoot: number, rTip: number, phase: number) => {
  const step = (2 * Math.PI) / n;
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = phase + i * step;
    const pts: [number, number][] = [[rRoot, a - 0.5 * step], [rRoot, a - 0.22 * step], [rTip, a - 0.11 * step], [rTip, a + 0.11 * step], [rRoot, a + 0.22 * step]];
    pts.forEach(([r, ang], j) => { d += `${i === 0 && j === 0 ? 'M' : 'L'}${(r * Math.cos(ang)).toFixed(2)} ${(r * Math.sin(ang)).toFixed(2)} `; });
  }
  return d + 'Z';
};
const circlePath = (R: number) => `M${R} 0 A${R} ${R} 0 1 0 ${-R} 0 A${R} ${R} 0 1 0 ${R} 0 Z`;
const BETA = [-Math.PI / 2, Math.PI / 6, (5 * Math.PI) / 6];
const stepS = (2 * Math.PI) / ZS, stepP = (2 * Math.PI) / ZP, stepR = (2 * Math.PI) / ZR;
const planetOffset = (b: number) => b + Math.PI - stepP * (0.5 - b / stepS);
const ringOffset = (() => {
  const b = BETA[0];
  const v = (b - planetOffset(b)) / stepP; // planet tooth index facing the ring at t = 0
  return b - stepR * (v + 0.5);
})();
const SUN_PATH = gearPath(ZS, RS - 8, RS + 7, 0);
const PLANET_PATH = gearPath(ZP, RP - 8, RP + 7, 0);
const RING_PATH = circlePath(RR + 37) + ' ' + gearPath(ZR, RR + 8, RR - 7, 0);

/** Planetary set centred on (0,0). tau drives the motion: engine on the carrier, wheels on the ring. */
export const PlanetaryGroup: React.FC<{tau: number; lit?: number; carrierLit?: number}> = ({tau, lit = 1, carrierLit = 0}) => {
  const thC = 0.8 * tau;
  const thR = 0.35 * tau + 0.06 * tau * tau;
  const thS = ((ZS + ZR) * thC - ZR * thR) / ZS;
  const thP = thC - (ZS / ZP) * (thS - thC);
  const deg = (r: number) => (r * 180) / Math.PI;
  return <g>
    <path d={RING_PATH} fillRule="evenodd" fill={lit > 0.5 ? '#7fa59a' : STEEL} stroke="#e7efe9" strokeWidth="3" transform={`rotate(${deg(thR + ringOffset)})`} />
    <g transform={`rotate(${deg(thC)})`}>
      {BETA.map((b) => <line key={b} x1="0" y1="0" x2={ORBIT * Math.cos(b)} y2={ORBIT * Math.sin(b)} stroke={carrierLit > 0.5 ? brand.lime : '#3f524c'} strokeWidth="34" strokeLinecap="round" opacity=".85" />)}
    </g>
    {BETA.map((b) => {
      const a = b + thC;
      return <g key={b} transform={`translate(${ORBIT * Math.cos(a)} ${ORBIT * Math.sin(a)})`}>
        <path d={PLANET_PATH} fill={lit > 0.5 ? '#e7efe9' : '#9fb3aa'} stroke="#173d34" strokeWidth="2" transform={`rotate(${deg(thP + planetOffset(b))})`} />
        <circle r="16" fill={carrierLit > 0.5 ? brand.lime : '#3f524c'} stroke="#173d34" strokeWidth="3" />
      </g>;
    })}
    <path d={SUN_PATH} fill={lit > 0.5 ? brand.lime : '#9fb3aa'} stroke="#173d34" strokeWidth="2" transform={`rotate(${deg(thS)})`} />
    <circle r="22" fill="#173d34" stroke="#e7efe9" strokeWidth="3" />
  </g>;
};

const FlowPath: React.FC<{d: string; t: number; o: number; width?: number}> = ({d, t, o, width = 12}) => <g opacity={o}>
  <path d={d} fill="none" stroke={brand.lime} strokeWidth={width + 16} opacity=".2" strokeLinecap="round" strokeLinejoin="round" />
  <path d={d} fill="none" stroke={brand.lime} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
  <path d={d} fill="none" stroke="#173d34" strokeWidth={width * 0.45} strokeDasharray="10 22" strokeDashoffset={-t * 120} strokeLinecap="round" />
</g>;

const Box: React.FC<{x: number; y: number; w: number; title: string; sub: string; on: number; o?: number}> = ({x, y, w, title, sub, on, o = 1}) => <g opacity={o}>
  <rect x={x - w / 2} y={y - 40} width={w} height="80" rx="18" fill={on > 0.5 ? brand.lime : '#0a211aee'} stroke={brand.lime} strokeWidth="3" />
  <text x={x} y={y - 4} textAnchor="middle" fill={on > 0.5 ? brand.deep : brand.lime} fontSize="23" fontWeight="1000" letterSpacing="1">{title}</text>
  <text x={x} y={y + 25} textAnchor="middle" fill={on > 0.5 ? brand.deep : '#cfdcd3'} fontSize="16" fontWeight="900" letterSpacing="1">{sub}</text>
</g>;

export const PlanetaryDiagram: React.FC<{t: number}> = ({t}) => {
  const tau = t - 14.5;
  const zoom = interpolate(t, [17.24, 17.6], [0.82, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const lit = at(t, 18.32, 0.2), split = at(t, 19.52, 0.3), power = at(t, 20.18, 0.3), motors = at(t, 20.9, 0.25);
  const cx = 540, cy = 500;
  return <svg viewBox={`0 0 ${W} ${H}`} style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <rect width={W} height={H} fill="#0b1915" />
    <g opacity=".1">{[...Array(14)].map((_, i) => <circle key={i} cx={cx} cy={cy} r={60 + i * 45} fill="none" stroke={brand.lime} strokeWidth="1" />)}</g>
    <FlowPath d="M210 905 L210 820 L398 640" t={t} o={split} width={10 + 6 * power} />
    <FlowPath d={`M${cx} ${cy} L${cx} 160`} t={t} o={split} width={10 + 6 * power} />
    <FlowPath d="M772 732 L870 830 L870 905" t={t} o={split} width={10 + 6 * power} />
    <g transform={`translate(${cx} ${cy}) scale(${zoom})`}><PlanetaryGroup tau={tau} lit={lit} carrierLit={split} /></g>
    <Pill x={120} y={500} w={200} text="SATÉLITES" o={lit} dark color="#e7efe9" size={19} />
    <Pill x={958} y={500} w={204} text="CORONA" o={lit} dark color="#9fd3c4" size={19} />
    <Pill x={cx} y={cy + 74} w={110} text="SOL" o={lit * (1 - split)} size={19} />
    <Box x={cx} y={118} w={420} title="MG1" sub="MOTOR-GENERADOR ELÉCTRICO" on={motors} o={split} />
    <Box x={210} y={945} w={340} title="MOTOR DE GASOLINA" sub="ENTRA POR LOS SATÉLITES" on={0} o={split} />
    <Box x={870} y={945} w={340} title="MG2 + RUEDAS" sub="MOTOR ELÉCTRICO Y SALIDA" on={motors} o={split} />
    <IllustrativeBadge text="ESQUEMA SIMPLIFICADO" width={300} />
  </svg>;
};

// ---------- Two halves: CVT above, e-CVT below -------------------------------------------
const HalfLabel: React.FC<{y: number; text: string; o?: number; lime?: boolean}> = ({y, text, o = 1, lime = false}) => <Pill x={540} y={y} w={Math.max(260, text.length * 15 + 60)} text={text} o={o} dark={!lime} size={20} />;
const VsBadge: React.FC<{t: number; from: number; sign: string}> = ({t, from, sign}) => {
  const p = at(t, from, 0.2);
  const s = interpolate(p, [0, 0.6, 1], [0.6, 1.25, 1]);
  return <g transform={`translate(540 530) scale(${s})`} opacity={0.3 + 0.7 * p}>
    <circle r="50" fill={brand.lime} stroke="#0b1915" strokeWidth="8" />
    <text y="20" textAnchor="middle" fill={brand.deep} fontSize="56" fontWeight="1000">{sign}</text>
  </g>;
};

export const SplitDiagram: React.FC<{t: number}> = ({t}) => {
  const slide = interpolate(t, [14.5, 14.9], [1, 0], {...clamp, easing: Easing.out(Easing.cubic)});
  const focus = at(t, 15.56, 0.3);
  const toyota = at(t, 16.94, 0.2);
  return <svg viewBox={`0 0 ${W} ${H}`} style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <rect width={W} height={H} fill="#0b1915" />
    <g transform={`translate(${-W * slide} 0)`} opacity={1 - 0.6 * focus}>
      <rect width={W} height="526" fill="#10231e" />
      <g transform="translate(540 250) scale(.85) translate(-540 -350)"><PulleyGroup t={9.0} r1={95} spin={(t - 14.5) * 2.6} beltLit={0.4} /></g>
      <HalfLabel y={448} text="CVT · POLEAS Y CORREA" />
    </g>
    <g transform={`translate(${W * slide} 0)`}>
      <rect y="534" width={W} height="526" fill="#0d1d18" />
      <g transform="translate(540 800) scale(.58)"><PlanetaryGroup tau={t - 14.5} lit={focus} /></g>
      <Pill x={540} y={1025} w={540} text="e-CVT · ENGRANAJES PLANETARIOS" o={0.4 + 0.6 * focus} />
      <Pill x={880} y={600} w={290} text="HÍBRIDOS TOYOTA" o={toyota} dark color="#e7efe9" size={19} />
    </g>
    <path d="M0 530 H1080" stroke={brand.lime} strokeWidth="4" />
    <VsBadge t={t} from={14.6} sign="≠" />
    <IllustrativeBadge />
  </svg>;
};

// ---------- At the wheel: calm driving and a motorway merge ----------------------------
const SideCarShape: React.FC<{x: number; y: number; s: number; spin: number}> = ({x, y, s, spin}) => <g transform={`translate(${x} ${y}) scale(${s})`}>
  <path d="M0 68 L6 22 Q12 4 40 0 L74 -34 Q86 -46 108 -46 H186 Q206 -46 220 -28 L244 2 Q266 6 270 26 L272 68 Z" fill="#9aa9a6" stroke="#e4ece8" strokeWidth="4" />
  <path d="M84 -2 L110 -32 H150 V-2 Z M160 -2 V-32 H196 Q206 -32 214 -20 L226 -2 Z" fill="#14262b" />
  {[64, 214].map((cx) => <g key={cx} transform={`rotate(${spin} ${cx} 70)`}><circle cx={cx} cy="70" r="30" fill="#1b2422" stroke="#6d817a" strokeWidth="6" /><path d={`M${cx - 18} 70 H${cx + 18} M${cx} 52 V88`} stroke="#9fb3aa" strokeWidth="5" /></g>)}
</g>;

const Gauge: React.FC<{x: number; y: number; r: number; v: number}> = ({x, y, r, v}) => {
  const a = ((-210 + 240 * v) * Math.PI) / 180;
  const arc = (from: number, to: number) => {
    const p = (d: number) => [x + r * Math.cos((d * Math.PI) / 180), y + r * Math.sin((d * Math.PI) / 180)];
    const [ax, ay] = p(from), [bx, by] = p(to);
    return `M${ax} ${ay} A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${bx} ${by}`;
  };
  return <g>
    <circle cx={x} cy={y} r={r + 14} fill="#0a211aee" stroke="#3c5a50" strokeWidth="3" />
    <path d={arc(-210, 30)} fill="none" stroke="#3c5a50" strokeWidth="12" strokeLinecap="round" />
    <path d={arc(-210, -210 + 240 * Math.max(0.01, v))} fill="none" stroke={brand.lime} strokeWidth="12" strokeLinecap="round" />
    <line x1={x} y1={y} x2={x + (r - 18) * Math.cos(a)} y2={y + (r - 18) * Math.sin(a)} stroke="#f7f8f5" strokeWidth="6" strokeLinecap="round" />
    <circle cx={x} cy={y} r="9" fill="#f7f8f5" />
    <text x={x} y={y + r * 0.62} textAnchor="middle" fill="#cfdcd3" fontSize="15" fontWeight="900" letterSpacing="1">VELOCIDAD</text>
  </g>;
};

export const FeelDiagram: React.FC<{t: number}> = ({t}) => {
  const tau = Math.max(0, t - 21.75);
  const v = 0.18 + 0.62 * (1 - Math.exp(-tau / 1.7));
  const off = 140 * tau + 48 * tau * tau;
  const slide = interpolate(t, [21.75, 22.1], [1, 0], {...clamp, easing: Easing.out(Easing.cubic)});
  const feel = at(t, 23.58, 0.25);
  const m = interpolate(tau, [0, 3.3], [0, 1], {...clamp, easing: Easing.inOut(Easing.sin)});
  const carX = 140 + 520 * m, carY = interpolate(m, [0, 0.55, 1], [968, 842, 820], clamp);
  const carRot = interpolate(m, [0, 0.5, 0.7, 1], [-24, -20, -6, 0], clamp);
  return <svg viewBox={`0 0 ${W} ${H}`} style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <defs><linearGradient id="feelSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#17352d" /><stop offset="1" stopColor="#2b5446" /></linearGradient><clipPath id="topHalf"><rect width={W} height="526" /></clipPath><clipPath id="botHalf"><rect y="534" width={W} height="526" /></clipPath></defs>
    <g clipPath="url(#topHalf)" transform={`translate(0 ${-526 * slide})`}>
      <rect width={W} height="526" fill="url(#feelSky)" />
      {[...Array(8)].map((_, i) => { const x = ((i * 170 - off * 0.35) % 1360 + 1360) % 1360 - 140; return <g key={i}><rect x={x} y={170 + (i % 3) * 30} width="110" height={240 - (i % 3) * 30} fill="#1d4a3e" /><rect x={x + 18} y={200 + (i % 3) * 30} width="22" height="26" fill="#d7f36a33" /><rect x={x + 62} y={200 + (i % 3) * 30} width="22" height="26" fill="#d7f36a22" /></g>; })}
      {[...Array(7)].map((_, i) => { const x = ((i * 210 - off) % 1470 + 1470) % 1470 - 200; return <g key={i}><rect x={x + 14} y="330" width="10" height="80" fill="#4a3a2a" /><circle cx={x + 19} cy="320" r="38" fill="#3f8a6a" /></g>; })}
      <rect y="410" width={W} height="116" fill="#33403f" />
      {[...Array(9)].map((_, i) => <rect key={i} x={((i * 160 - off * 1.4) % 1440 + 1440) % 1440 - 180} y="462" width="80" height="8" rx="4" fill="#e9e5c4" opacity=".8" />)}
      <SideCarShape x={300} y={348} s={0.9} spin={-off * 1.4} />
      <Gauge x={930} y={140} r={78} v={v * 0.7} />
      <Pill x={170} y={110} w={260} text="RITMO TRANQUILO" dark color="#e7efe9" size={18} />
      <Pill x={110} y={170} w={130} text="CVT" size={20} />
    </g>
    <g clipPath="url(#botHalf)" transform={`translate(0 ${526 * slide})`}>
      <rect y="534" width={W} height="526" fill="#16352c" />
      <rect y="700" width={W} height="170" fill="#33403f" />
      <path d="M-40 1100 L420 870 L640 870 L180 1100 Z" fill="#33403f" />
      <path d={`M0 785 H${W}`} stroke="#e9e5c4" strokeWidth="6" strokeDasharray="50 40" strokeDashoffset={off * 1.2} opacity=".8" />
      <path d="M0 704 H1080 M0 866 H420" stroke="#f2f4ef" strokeWidth="6" opacity=".7" />
      <path d="M420 866 L640 866" stroke="#f2f4ef" strokeWidth="5" strokeDasharray="16 14" opacity=".7" />
      {[0, 1].map((i) => <g key={i} transform={`translate(${((i * 560 + 900 - off * 0.25) % 1300 + 1300) % 1300 - 120} 742) rotate(90)`}><rect x="-26" y="-44" width="52" height="88" rx="16" fill="#9aa9a6" stroke="#e4ece8" strokeWidth="3" /></g>)}
      <g transform={`translate(${carX} ${carY}) rotate(${90 + carRot})`}><rect x="-28" y="-48" width="56" height="96" rx="17" fill={brand.lime} stroke="#f7f8f5" strokeWidth="4" /><rect x="-21" y="-30" width="42" height="20" rx="6" fill="#173d34" /></g>
      <Gauge x={930} y={960} r={70} v={v} />
      <Pill x={210} y={600} w={340} text="INCORPORACIÓN A AUTOVÍA" dark color="#e7efe9" size={18} />
      <Pill x={110} y={660} w={130} text="e-CVT" size={20} />
    </g>
    <path d="M0 530 H1080" stroke={brand.lime} strokeWidth="4" />
    <Pill x={540} y={530} w={380} text="SENSACIÓN CONTINUA" o={feel} size={22} />
    <IllustrativeBadge text="ANIMACIÓN ILUSTRATIVA · NO ES UNA PRUEBA" width={500} />
  </svg>;
};

// ---------- Inside: X-ray reveal of both mechanisms -------------------------------------
export const InsideDiagram: React.FC<{t: number}> = ({t}) => {
  const scan = interpolate(t, [25.34, 25.95], [0, 1], {...clamp, easing: ease});
  const xr = scan * W;
  const r1 = 95 + 28 * Math.sin((t - 25.18) * 2.4);
  const housing = (y: number) => <g>
    <rect x="150" y={y + 70} width="780" height="380" rx="70" fill="#22312d" stroke="#8fa39b" strokeWidth="5" />
    <text x="540" y={y + 285} textAnchor="middle" fill="#8fa39b" fontSize="90" fontWeight="1000">?</text>
  </g>;
  return <svg viewBox={`0 0 ${W} ${H}`} style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <defs><clipPath id="xray"><rect width={xr} height={H} /></clipPath><clipPath id="xrayInv"><rect x={xr} width={W - xr} height={H} /></clipPath></defs>
    <rect width={W} height={H} fill="#0b1915" />
    <rect width={W} height="526" fill="#10231e" />
    <g clipPath="url(#xrayInv)">{housing(0)}{housing(534)}</g>
    <g clipPath="url(#xray)">
      <g transform="translate(540 250) scale(.85) translate(-540 -350)"><PulleyGroup t={26} r1={r1} spin={(t - 25) * 3} beltLit={1} pulleyLit={1} /></g>
      <g transform="translate(540 800) scale(.58)"><PlanetaryGroup tau={t - 22} lit={1} carrierLit={1} /></g>
    </g>
    {scan > 0 && scan < 1 ? <g><rect x={xr - 6} width="12" height={H} fill={brand.lime} /><rect x={xr - 40} width="40" height={H} fill={brand.lime} opacity=".18" /></g> : null}
    <HalfLabel y={448} text="POLEAS + CORREA O CADENA" o={at(t, 25.7, 0.25)} lime />
    <HalfLabel y={1025} text="ENGRANAJES + DOS MOTORES ELÉCTRICOS" o={at(t, 25.8, 0.25)} lime />
    <path d="M0 530 H1080" stroke={brand.lime} strokeWidth="4" />
    <VsBadge t={t} from={26.86} sign="≠" />
    <IllustrativeBadge />
  </svg>;
};

// ---------- HTML scenes -------------------------------------------------------------------
const NameCard: React.FC<{name: string; detail: string; lime: boolean; style: React.CSSProperties}> = ({name, detail, lime, style}) => <div style={{position: 'absolute', boxSizing: 'border-box', borderRadius: 40, background: lime ? brand.lime : '#0d2a22', border: lime ? 'none' : `5px solid ${brand.lime}`, color: lime ? brand.deep : brand.lime, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 30px 70px #06140f90', ...style}}>
  <div style={{fontSize: 200, lineHeight: 0.9, fontWeight: 1000, letterSpacing: -8}}>{name}</div>
  <div style={{marginTop: 18, fontSize: 30, fontWeight: 1000, letterSpacing: 3, color: lime ? brand.deep : brand.paper}}>{detail}</div>
</div>;

const NamesScene: React.FC<{frame: number; t: number}> = ({frame, t}) => {
  const close = interpolate(t, [1.88, 2.7], [0, 1], {...clamp, easing: ease});
  const apart = interpolate(t, [3.26, 3.7], [0, 1], {...clamp, easing: Easing.out(Easing.back(1.6))});
  const dy = 70 * close - 85 * apart;
  const neq = t >= 3.64;
  const sp = interpolate(t, [3.64, 3.84], [0.6, 1], clamp);
  return <>
    <Heading frame={frame + 99} eyebrow="SUENAN CASI IGUAL" title="NOMBRES PARECIDOS" sub="PERO NO FUNCIONAN IGUAL" subFrom={sub(3.64, 0) + 99} />
    <NameCard name="CVT" detail="TRANSMISIÓN CONTINUA" lime style={{top: 450 + dy, left: 70, right: 70, height: 400, transform: `rotate(${-2.5 * apart}deg) translateX(${-40 * apart}px)`, zIndex: 3}} />
    <NameCard name="e-CVT" detail="HÍBRIDOS TOYOTA" lime={false} style={{top: 1010 - dy, left: 70, right: 70, height: 400, transform: `rotate(${2.5 * apart}deg) translateX(${40 * apart}px)`, zIndex: 3}} />
    <div style={{position: 'absolute', top: 870, left: 470, width: 140, height: 140, borderRadius: '50%', background: neq ? brand.lime : brand.paper, color: brand.deep, display: 'grid', placeItems: 'center', fontSize: 92, fontWeight: 1000, zIndex: 5, boxShadow: '0 16px 40px #06140f90', transform: `scale(${neq ? interpolate(sp, [0.6, 0.85, 1], [0.6, 1.25, 1]) : 1 + 0.12 * close})`}}>{neq ? '≠' : '≈'}</div>
  </>;
};

const AskScene: React.FC<{frame: number; t: number}> = ({frame, t}) => {
  const flip = (delay: number) => interpolate(frame, [delay, delay + 9], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const pulse = (k: number) => 1 + 0.035 * Math.max(0, Math.sin((t - 27.8) * 4.4 + k * Math.PI));
  const card = (lime: boolean, left: number, delay: number, name: string, detail: string, k: number) => {
    const p = flip(delay);
    return <div style={{position: 'absolute', top: 470, left, width: 460, height: 760, boxSizing: 'border-box', borderRadius: 36, background: lime ? brand.lime : '#0d2a22', border: lime ? 'none' : `5px solid ${brand.lime}`, color: lime ? brand.deep : brand.lime, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, opacity: 0.3 + 0.7 * p, transform: `perspective(1400px) rotateY(${(lime ? -1 : 1) * 80 * (1 - p)}deg) scale(${pulse(k)})`, boxShadow: '0 30px 70px #06140f90', zIndex: 3}}>
      <svg viewBox="0 0 400 300" style={{width: 360, height: 270}}>
        {lime ? <g transform="translate(200 150) scale(.42) translate(-540 -350)"><PulleyGroup t={26} r1={95 + 25 * Math.sin(t * 2)} spin={t * 3} /></g> : <g transform="translate(200 150) scale(.42)"><PlanetaryGroup tau={t} lit={1} /></g>}
      </svg>
      <div style={{fontSize: 120, lineHeight: 0.9, fontWeight: 1000, letterSpacing: -5}}>{name}</div>
      <div style={{fontSize: 25, fontWeight: 1000, letterSpacing: 2, textAlign: 'center', color: lime ? brand.deep : brand.paper, lineHeight: 1.15}}>{detail}</div>
    </div>;
  };
  return <>
    <Heading frame={frame} eyebrow="TU TURNO" title="¿CUÁL PREFIERES?" />
    {card(true, 60, 0, 'CVT', 'POLEAS Y CORREA O CADENA', 0)}
    {card(false, 560, 3, 'e-CVT', 'ENGRANAJES Y MOTORES ELÉCTRICOS', 1)}
    <Strap frame={frame} text="RESPONDE EN COMENTARIOS" top={1280} from={8} lime />
  </>;
};

// Full-bleed stage (no frame), with marked transitions.
const Stage: React.FC<{frame: number; mode: 'wipe' | 'punch' | 'circle' | 'none'; children: React.ReactNode}> = ({frame, mode, children}) => {
  const p = interpolate(frame, [0, 10], [0, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const clip = mode === 'wipe' ? `inset(0 ${100 - p * 100}% 0 0)` : mode === 'circle' ? `circle(${8 + p * 110}% at 50% 47%)` : undefined;
  const scale = mode === 'punch' ? interpolate(frame, [0, 7], [1.12, 1], clamp) : 1;
  return <div style={{position: 'absolute', top: 410, left: 0, right: 0, height: H, overflow: 'hidden', zIndex: 2, clipPath: clip, transform: `scale(${scale})`, opacity: mode === 'punch' ? interpolate(frame, [0, 4], [0.3, 1], clamp) : 1, borderTop: `3px solid ${brand.lime}`, borderBottom: `3px solid ${brand.lime}`, boxSizing: 'border-box'}}>{children}</div>;
};

const SceneContent: React.FC<{id: SceneId; frame: number; t: number}> = ({id, frame, t}) => {
  if (id === 'names') return <NamesScene frame={frame} t={t} />;
  if (id === 'pulleys') return <>
    <Heading frame={frame} eyebrow="CVT CONVENCIONAL" title="POLEAS Y CORREA O CADENA" sub="VARÍA LA RELACIÓN DE TRANSMISIÓN" subFrom={sub(7.42, 5.4)} compact />
    <Stage frame={frame} mode="wipe"><PulleyDiagram t={t} /></Stage>
  </>;
  if (id === 'rpm') return <>
    <Heading frame={frame} eyebrow="ASÍ ACELERA" title="SIN MARCHAS FIJAS" />
    <Stage frame={frame} mode="punch"><RpmDiagram t={t} /></Stage>
  </>;
  if (id === 'split') return <>
    <Heading frame={frame} eyebrow="EN CAMBIO" title="LA e-CVT DE LOS HÍBRIDOS TOYOTA" compact />
    <Stage frame={frame} mode="none"><SplitDiagram t={t} /></Stage>
  </>;
  if (id === 'planetary') return <>
    <Heading frame={frame} eyebrow="e-CVT TOYOTA" title="ENGRANAJES PLANETARIOS" sub="REPARTEN LA POTENCIA ENTRE SUS MOTORES" subFrom={sub(19.52, 17.24)} compact />
    <Stage frame={frame} mode="circle"><PlanetaryDiagram t={t} /></Stage>
  </>;
  if (id === 'feel') return <>
    <Heading frame={frame} eyebrow="AL VOLANTE, AMBAS PUEDEN DAR" title="SENSACIÓN CONTINUA" />
    <Stage frame={frame} mode="none"><FeelDiagram t={t} /></Stage>
  </>;
  if (id === 'inside') return <>
    <Heading frame={frame} eyebrow="PERO POR DENTRO" title="SOLUCIONES DIFERENTES" />
    <Stage frame={frame} mode="punch"><InsideDiagram t={t} /></Stage>
  </>;
  if (id === 'ask') return <AskScene frame={frame} t={t} />;
  return <CtaCard frame={frame} guide="CAMBIOS AUTOMÁTICOS" detail={<>CONVERTIDOR, DOBLE EMBRAGUE, CVT Y e-CVT<br />EXPLICADOS SIN LÍO</>} />;
};

export const CvtVsEcvtPromo: React.FC<CvtVsEcvtSpec> = (spec) => {
  const frame = useCurrentFrame();
  const t = frame / spec.fps;
  const found = cvtScenes.findIndex((s) => t >= s.start && t < s.end);
  const activeIndex = found < 0 ? cvtScenes.length - 1 : found;
  const active = cvtScenes[activeIndex];
  const localFrame = Math.max(0, Math.round((t - active.start) * spec.fps));
  return <AbsoluteFill style={{background: brand.deep, overflow: 'hidden', fontFamily: brand.font}}>
    <Backdrop frame={frame} />
    <SceneContent id={active.id} frame={localFrame} t={t} />
    <ReelChrome frame={frame} fps={spec.fps} real={t} durationSeconds={spec.durationSeconds} scenes={cvtScenes} activeIndex={activeIndex} tag="CVT vs e-CVT" captions={spec.captions} audioFile={spec.audioFile ?? 'audio/voice-video-023.wav'} />
  </AbsoluteFill>;
};

// Stand-alone preview of the six animations (1080 × 1060), to check start, middle and end before montage.
type PreviewPart = 'pulleys' | 'rpm' | 'split' | 'planetary' | 'feel' | 'inside';
const PREVIEW: [number, number, PreviewPart][] = [[5.4, 10.74, 'pulleys'], [10.74, 14.5, 'rpm'], [14.5, 17.24, 'split'], [17.24, 21.75, 'planetary'], [21.75, 25.18, 'feel'], [25.18, 27.8, 'inside']];
export const cvtPreviewFrames = Math.round(PREVIEW.reduce((a, [s, e]) => a + e - s, 0) * FPS);
export const CvtVsEcvtPreview: React.FC = () => {
  let local = useCurrentFrame() / FPS;
  for (const [s, e, part] of PREVIEW) {
    if (local < e - s || part === 'inside') {
      const tt = s + local;
      const C = {pulleys: PulleyDiagram, rpm: RpmDiagram, split: SplitDiagram, planetary: PlanetaryDiagram, feel: FeelDiagram, inside: InsideDiagram}[part];
      return <AbsoluteFill style={{background: '#061410'}}><C t={tt} /></AbsoluteFill>;
    }
    local -= e - s;
  }
  return null;
};

export const CvtVsEcvtCover: React.FC = () => <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
  <Backdrop frame={0} />
  <div style={{position: 'absolute', top: 120, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}><BrandCircle size={160} /></div>
  <div style={{position: 'absolute', top: 310, left: 30, right: 30, textAlign: 'center', color: brand.lime, fontSize: 150, lineHeight: 0.92, fontWeight: 1000, letterSpacing: -6, textShadow: '0 10px 30px #06140f80'}}>CVT ≠ e-CVT</div>
  <div style={{position: 'absolute', top: 470, left: 40, right: 40, textAlign: 'center', color: brand.paper, fontSize: 46, lineHeight: 1.05, fontWeight: 1000, letterSpacing: -1}}>SUENAN IGUAL, NO FUNCIONAN IGUAL</div>
  <div style={{position: 'absolute', top: 580, left: 0, right: 0, height: 1060, borderTop: `3px solid ${brand.lime}`, borderBottom: `3px solid ${brand.lime}`, overflow: 'hidden'}}><InsideDiagram t={27.4} /></div>
  <div style={{position: 'absolute', top: 1700, left: 210, right: 210, padding: '18px 10px', borderRadius: 22, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 32, fontWeight: 1000}}>KILOMETROCLARO.COM</div>
</AbsoluteFill>;
