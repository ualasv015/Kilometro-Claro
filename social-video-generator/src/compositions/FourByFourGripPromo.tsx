import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {Backdrop, BrandCircle, type CaptionCue, clamp, CtaCard, DiagramStage, Heading, IllustrativeBadge, PhotoStage, ReelChrome, type ReelScene, Strap} from '../components/ReelKit';

export type FourByFourGripSpec = {
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  requiresHumanReview: boolean;
  captions: CaptionCue[];
  audioFile?: string;
  imageCredits?: string[];
};

type SceneId = 'question' | 'advance' | 'axles' | 'brake' | 'factors' | 'limit' | 'even' | 'keys' | 'ask' | 'cta';
const IMG = 'images/traccion-4x4-nieve/';
const DIAGRAM = 'ANIMACIÓN ILUSTRATIVA · KILÓMETRO CLARO';
// Cuts sit in the pauses measured in voice-video-022.wav (30,4 s, Google TTS, 1×).
export const gripScenes: ReelScene<SceneId>[] = [
  {id: 'question', start: 0, end: 3.9, label: 'LA PREGUNTA', credit: 'FOTO: LEON SKIBITZKI · UNSPLASH'},
  {id: 'advance', start: 3.9, end: 8.74, label: 'AL AVANZAR', credit: DIAGRAM},
  {id: 'axles', start: 8.74, end: 10.9, label: 'LOS DOS EJES', credit: DIAGRAM},
  {id: 'brake', start: 10.9, end: 14.04, label: 'AL FRENAR', credit: 'FOTO: ISAAC MITCHELL · UNSPLASH'},
  {id: 'factors', start: 14.04, end: 16.8, label: 'DE QUÉ DEPENDE', credit: DIAGRAM},
  {id: 'limit', start: 16.8, end: 20.06, label: 'SIN AGARRE INFINITO', credit: 'COMPARACIÓN CONCEPTUAL · KILÓMETRO CLARO'},
  {id: 'even', start: 20.06, end: 22.3, label: 'INCLUSO CON 4x4', credit: 'FOTO: ZOSHUA COLAH · UNSPLASH'},
  {id: 'keys', start: 22.3, end: 26.02, label: 'LO QUE NECESITAS', credit: DIAGRAM},
  {id: 'ask', start: 26.02, end: 27.68, label: 'TU TURNO', credit: 'FOTO: ZOSHUA COLAH · UNSPLASH'},
  {id: 'cta', start: 27.68, end: 30.4, label: 'LA GUÍA', credit: 'KILOMETROCLARO.COM'},
];
const FPS = 30;
const ICE = '#bfe3f2';
const ORANGE = '#ffb454';
const ease = Easing.inOut(Easing.cubic);
const at = (t: number, from: number, dur = 0.3) => interpolate(t, [from, from + dur], [0, 1], {...clamp, easing: ease});

// --- Top-view car: front points up -------------------------------------------------
const TopCar: React.FC<{x: number; y: number; s?: number; rot?: number; body?: string; driven?: 'all' | 'front' | 'none'; glow?: number; tyres?: number; you?: boolean}> = ({x, y, s = 1, rot = 0, body = '#8fa3a1', driven = 'none', glow = 0, tyres = 0, you = false}) => {
  const wheels: [number, number, boolean][] = [[-50, -46, driven !== 'none'], [50, -46, driven !== 'none'], [-50, 46, driven === 'all'], [50, 46, driven === 'all']];
  return <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    <ellipse cx="0" cy="6" rx="58" ry="86" fill="#000" opacity=".35" />
    {wheels.map(([wx, wy, d], i) => {
      const on = d ? glow : tyres;
      return <g key={i}>
        {on > 0 ? <rect x={wx - 15} y={wy - 24} width="30" height="48" rx="9" fill={brand.lime} opacity={0.5 * on} style={{filter: 'blur(6px)'}} /> : null}
        <rect x={wx - 10} y={wy - 19} width="20" height="38" rx="6" fill={on > 0.5 ? brand.lime : '#1b2422'} stroke={on > 0.5 ? '#f7f8f5' : '#4d625a'} strokeWidth="3" />
      </g>;
    })}
    <rect x="-42" y="-75" width="84" height="150" rx="26" fill={body} stroke="#e4ece8" strokeWidth="4" />
    <rect x="-32" y="-46" width="64" height="30" rx="9" fill="#14262b" />
    <rect x="-30" y="34" width="60" height="22" rx="8" fill="#14262b" opacity=".85" />
    <rect x="-36" y="-76" width="20" height="8" rx="4" fill="#fff8d2" /><rect x="16" y="-76" width="20" height="8" rx="4" fill="#fff8d2" />
    {you ? <text x="0" y="12" textAnchor="middle" fill={brand.deep} fontSize="17" fontWeight="1000" letterSpacing="1">TÚ</text> : null}
  </g>;
};

const Chevrons: React.FC<{x: number; y: number; t: number; o: number}> = ({x, y, t, o}) => <g opacity={o}>
  {[0, 1, 2].map((k) => {
    const ph = ((t * 2.2 + k / 3) % 1);
    return <path key={k} d={`M${x - 9} ${y + 30 + ph * 46} l9 -9 l9 9`} fill="none" stroke={brand.lime} strokeWidth="4" strokeLinecap="round" opacity={1 - ph} />;
  })}
</g>;

const Pill: React.FC<{x: number; y: number; w: number; text: string; o?: number; dark?: boolean; size?: number; color?: string}> = ({x, y, w, text, o = 1, dark = false, size = 19, color}) => <g opacity={o}>
  <rect x={x - w / 2} y={y - 22} width={w} height="44" rx="22" fill={dark ? '#0a211aee' : color ?? brand.lime} stroke={dark ? color ?? brand.lime : 'none'} strokeWidth="2" />
  <text x={x} y={y + 7} textAnchor="middle" fill={dark ? color ?? brand.lime : brand.deep} fontSize={size} fontWeight="1000" letterSpacing="1">{text}</text>
</g>;

// --- Animation 1: same slippery road, 4x2 vs 4x4 pulling away ------------------------
export const AdvanceDiagram: React.FC<{t: number}> = ({t}) => {
  const go = interpolate(t, [5.24, 8.74], [0, 1], {...clamp, easing: Easing.out(Easing.quad)});
  const lit = at(t, 5.24, 0.25);
  const slip = at(t, 7.48, 0.3);
  const y4 = 560 - 330 * go;
  const y2 = 560 - 150 * go;
  const wobble = Math.sin(t * 17) * 4 * interpolate(go, [0, 0.15, 1], [0, 1, 1]);
  const scroll = (t * 40 * (0.3 + go)) % 80;
  return <svg viewBox="0 0 984 720" style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <defs>
      <linearGradient id="advIce" x1="0" y1="0" x2="1" y2="1"><stop stopColor={ICE} stopOpacity=".26" /><stop offset=".5" stopColor="#ffffff" stopOpacity=".1" /><stop offset="1" stopColor={ICE} stopOpacity=".24" /></linearGradient>
      <clipPath id="advClip"><rect width="984" height="720" /></clipPath>
    </defs>
    <g clipPath="url(#advClip)">
      <rect width="984" height="720" fill="#dfe8e6" />
      {[...Array(14)].map((_, i) => <circle key={i} cx={i % 2 ? 120 : 870} cy={(i * 97 + scroll * 2) % 760 - 20} r={20 + (i % 3) * 8} fill="#c7d4d1" />)}
      <rect x="232" width="520" height="720" fill="#33403f" />
      <rect x="232" width="520" height="720" fill="url(#advIce)" />
      {[...Array(10)].map((_, i) => <path key={i} d={`M${262 + (i * 53) % 470} ${(i * 131 + scroll * 3) % 760 - 40} l${i % 2 ? 22 : -18} 46`} stroke="#ffffff" strokeWidth="3" opacity=".22" strokeLinecap="round" />)}
      <path d="M492 0 V720" stroke="#e9e5c4" strokeWidth="5" strokeDasharray="34 30" strokeDashoffset={-scroll} opacity=".6" />
      <path d="M240 0 V720 M744 0 V720" stroke="#f2f4ef" strokeWidth="6" opacity=".7" />
      <rect x="232" width="520" height="720" fill={ICE} opacity={0.22 * slip * (0.75 + 0.25 * Math.sin(t * 9))} />
      <path d="M248 632 H736" stroke={brand.lime} strokeWidth="4" strokeDasharray="14 10" opacity=".8" />
      {/* tyre tracks: length shows how far each car got */}
      <path d={`M340 632 V${y2 + 60} M384 632 V${y2 + 60}`} stroke="#11191a" strokeWidth="12" opacity=".35" />
      <path d={`M600 632 V${y4 + 60} M644 632 V${y4 + 60}`} stroke="#11191a" strokeWidth="12" opacity=".35" />
      {[-50, 50].map((dx) => <Chevrons key={`a${dx}`} x={622 + dx} y={y4 + 46} t={t} o={lit} />)}
      {[-50, 50].map((dx) => <Chevrons key={`b${dx}`} x={622 + dx} y={y4 - 46} t={t} o={lit} />)}
      <TopCar x={362 + wobble * 0.6} y={y2} rot={wobble} driven="front" glow={lit} body="#9aa9a6" />
      {[-1, 1].map((sg) => <g key={`s${sg}`} opacity={lit}>
        {[0, 1, 2, 3].map((k) => {
          const ph = (t * 3 + k / 4 + (sg > 0 ? 0.5 : 0)) % 1;
          return <circle key={k} cx={362 + sg * (66 + ph * 34)} cy={y2 - 40 + ph * 40} r={7 - ph * 4} fill={ORANGE} opacity={1 - ph} />;
        })}
        <path d={`M${362 + sg * 64} ${y2 - 74} a14 14 0 1 ${sg > 0 ? 1 : 0} 0 28`} fill="none" stroke={ORANGE} strokeWidth="4" strokeLinecap="round" />
      </g>)}
      <TopCar x={622} y={y4} driven="all" glow={lit} body={brand.lime} />
      <Pill x={362} y={y2 - 118} w={150} text="PATINA" o={slip} dark color={ORANGE} />
      <Pill x={622} y={y4 - 118} w={170} text="AVANZA" o={lit} />
      <rect x="250" y="648" width="224" height="62" rx="18" fill="#0a211aee" />
      <text x="362" y="674" textAnchor="middle" fill="#f7f8f5" fontSize="22" fontWeight="1000">4x2</text>
      <text x="362" y="698" textAnchor="middle" fill="#cfdcd3" fontSize="15" fontWeight="900" letterSpacing="1">EMPUJAN 2 RUEDAS</text>
      <rect x="510" y="648" width="224" height="62" rx="18" fill="#0a211aee" stroke={brand.lime} strokeWidth="2" />
      <text x="622" y="674" textAnchor="middle" fill={brand.lime} fontSize="22" fontWeight="1000">4x4</text>
      <text x="622" y="698" textAnchor="middle" fill="#cfdcd3" fontSize="15" fontWeight="900" letterSpacing="1">EMPUJAN 4 RUEDAS</text>
      <Pill x={492} y={590} w={320} text="SUELO RESBALADIZO" o={slip} dark color={ICE} />
    </g>
    <IllustrativeBadge />
    <text x="960" y="51" textAnchor="end" fill="#173d34" fontSize="18" fontWeight="900" letterSpacing="3">VISTA CENITAL</text>
  </svg>;
};

// --- Animation 2: zoom into the 4x4, force flows to both axles -----------------------
export const AxlesDiagram: React.FC<{t: number}> = ({t}) => {
  const zoom = interpolate(t, [8.74, 9.1], [0.5, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const flow = at(t, 9.4, 0.25);
  const reach = interpolate(t, [9.4, 9.98], [0, 1], clamp);
  const axles = at(t, 9.98, 0.25);
  const dash = -t * 220;
  const shaft = (d: string, len: number) => <g>
    <path d={d} stroke="#5d726b" strokeWidth="14" fill="none" strokeLinecap="round" />
    <path d={d} stroke={brand.lime} strokeWidth="14" fill="none" strokeLinecap="round" strokeDasharray={`${len * reach} ${len}`} opacity={flow} />
    <path d={d} stroke="#ffffff" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="10 26" strokeDashoffset={dash} opacity={flow * 0.85} />
  </g>;
  const wheel = (x: number, y: number) => <g>
    <rect x={x - 30} y={y - 62} width="60" height="124" rx="16" fill={axles > 0.5 ? brand.lime : '#1b2422'} stroke={axles > 0.5 ? '#f7f8f5' : '#5d726b'} strokeWidth="5" />
    {[...Array(6)].map((_, k) => <path key={k} d={`M${x - 22} ${y - 48 + ((k * 20 + (axles > 0.5 ? -t * 160 : 0)) % 120 + 120) % 120} h44`} stroke={axles > 0.5 ? brand.deep : '#3a4a45'} strokeWidth="5" opacity=".6" />)}
  </g>;
  return <svg viewBox="0 0 984 720" style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <rect width="984" height="720" fill="#0b1915" />
    <g opacity=".14">{[...Array(12)].map((_, i) => <path key={i} d={`M0 ${i * 64} H984`} stroke={brand.lime} strokeWidth="1" />)}</g>
    <g transform={`translate(492 372) scale(${zoom}) translate(-492 -372)`}>
      <rect x="340" y="100" width="304" height="540" rx="96" fill="#8fa3a1" opacity=".16" stroke="#d6e3dd" strokeWidth="5" />
      <rect x="372" y="236" width="240" height="64" rx="20" fill="#14262b" opacity=".6" />
      {shaft('M492 410 V214', 196)}
      {shaft('M492 410 V534', 124)}
      {shaft('M492 214 H330 M492 214 H654', 162)}
      {shaft('M492 534 H330 M492 534 H654', 162)}
      <rect x="420" y="300" width="144" height="58" rx="12" fill="#2b3b37" stroke="#9fb3aa" strokeWidth="4" />
      <text x="492" y="337" textAnchor="middle" fill="#f7f8f5" fontSize="20" fontWeight="1000" letterSpacing="1">MOTOR</text>
      <rect x="430" y="384" width="124" height="52" rx="12" fill={flow > 0.5 ? brand.lime : '#2b3b37'} stroke="#f7f8f5" strokeWidth="4" />
      <text x="492" y="417" textAnchor="middle" fill={flow > 0.5 ? brand.deep : '#f7f8f5'} fontSize="17" fontWeight="1000" letterSpacing="1">REPARTO</text>
      <circle cx="492" cy="214" r="26" fill="#2b3b37" stroke={axles > 0.5 ? brand.lime : '#9fb3aa'} strokeWidth="5" />
      <circle cx="492" cy="534" r="26" fill="#2b3b37" stroke={axles > 0.5 ? brand.lime : '#9fb3aa'} strokeWidth="5" />
      {wheel(310, 214)}{wheel(674, 214)}{wheel(310, 534)}{wheel(674, 534)}
    </g>
    <Pill x={150} y={214} w={240} text="EJE DELANTERO" o={axles} size={18} />
    <Pill x={150} y={534} w={240} text="EJE TRASERO" o={axles} size={18} />
    <Pill x={836} y={372} w={230} text="FUERZA" o={flow} dark />
    <path d="M836 400 V440" stroke={brand.lime} strokeWidth="4" opacity={flow} />
    <IllustrativeBadge />
    <text x="960" y="704" textAnchor="end" fill="#cfdcd3" fontSize="18" fontWeight="900" letterSpacing="3">TRACCIÓN TOTAL · ESQUEMA</text>
  </svg>;
};

// --- Animation 3: side view, braking distance grows with speed and surface -----------
const CAR_S = 0.72;
const SideCar: React.FC<{x: number; ghost?: boolean; tyres?: number}> = ({x, ghost = false, tyres = 1}) => <g transform={`translate(${x} 348) scale(${CAR_S}) translate(0 -348)`} opacity={ghost ? 0.55 : 1}>
  <path d="M0 316 L6 270 Q12 252 40 248 L74 214 Q86 202 108 202 H186 Q206 202 220 220 L244 250 Q266 254 270 274 L272 316 Z" fill={ghost ? 'none' : '#9aa9a6'} stroke={ghost ? brand.lime : '#e4ece8'} strokeWidth="4" strokeDasharray={ghost ? '10 8' : undefined} />
  {ghost ? null : <path d="M84 246 L110 216 H150 V246 Z M160 246 V216 H196 Q206 216 214 228 L226 246 Z" fill="#14262b" />}
  {[64, 214].map((cx) => <g key={cx}>
    {!ghost && tyres > 0 ? <circle cx={cx} cy="318" r="40" fill={brand.lime} opacity={0.45 * tyres} style={{filter: 'blur(7px)'}} /> : null}
    <circle cx={cx} cy="318" r="30" fill={ghost ? 'none' : '#1b2422'} stroke={ghost ? brand.lime : tyres > 0.5 ? brand.lime : '#6d817a'} strokeWidth="6" strokeDasharray={ghost ? '8 6' : undefined} />
    {ghost ? null : <circle cx={cx} cy="318" r="11" fill="#8fa3a1" />}
  </g>)}
</g>;

export const BrakeDistanceDiagram: React.FC<{t: number}> = ({t}) => {
  const sp = at(t, 14.26, 0.45), snow = at(t, 15.32, 0.45);
  const stopX = 480 + 170 * sp + 230 * snow;
  const arrowStart = 20 + 272 * CAR_S;
  return <svg viewBox="0 0 984 520" style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <defs><linearGradient id="bdSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#0b1d19" /><stop offset="1" stopColor="#163029" /></linearGradient></defs>
    <rect width="984" height="520" fill="url(#bdSky)" />
    <rect y="348" width="984" height="172" fill="#0d1d18" />
    <rect y="348" width="984" height="34" fill="#3a4645" />
    <rect y="338" width="984" height="22" rx="8" fill="#eef4f2" opacity={snow * 0.95} />
    {[...Array(22)].map((_, i) => <circle key={i} cx={(i * 47) % 984} cy={350 + (i % 3) * 8} r={6 + (i % 4) * 3} fill="#ffffff" opacity={snow * 0.7} />)}
    {[...Array(26)].map((_, i) => <circle key={`f${i}`} cx={(i * 83 + t * 30 * ((i % 3) + 1)) % 984} cy={((i * 61) + t * 70 * ((i % 2) + 1)) % 330} r={2 + (i % 3)} fill="#ffffff" opacity={snow * 0.75} />)}
    {sp > 0 ? <path d={`M480 300 V400`} stroke="#9fb3aa" strokeWidth="3" strokeDasharray="6 6" opacity=".7" /> : null}
    {snow > 0 ? <path d={`M650 300 V400`} stroke="#9fb3aa" strokeWidth="3" strokeDasharray="6 6" opacity=".7" /> : null}
    <SideCar x={stopX - 272 * CAR_S} ghost />
    <path d={`M${stopX} 220 V400`} stroke={brand.lime} strokeWidth="5" />
    <path d={`M${stopX} 220 h38 l-10 14 l10 14 h-38`} fill={brand.lime} />
    <SideCar x={20} tyres={1} />
    <path d={`M${arrowStart} 430 H${stopX}`} stroke={brand.lime} strokeWidth="5" />
    <path d={`M${arrowStart + 14} 418 l-14 12 l14 12 M${stopX - 14} 418 l14 12 l-14 12`} fill="none" stroke={brand.lime} strokeWidth="5" strokeLinecap="round" />
    <rect x={(arrowStart + stopX) / 2 - 140} y="448" width="280" height="40" rx="20" fill="#0a211aee" stroke={brand.lime} strokeWidth="2" />
    <text x={(arrowStart + stopX) / 2} y="475" textAnchor="middle" fill={brand.lime} fontSize="18" fontWeight="1000" letterSpacing="1">DISTANCIA DE FRENADO</text>
    <Pill x={640} y={120} w={210} text="+ VELOCIDAD" o={sp} size={18} />
    <Pill x={862} y={120} w={200} text="+ NIEVE" o={snow} dark color={ICE} size={18} />
    <IllustrativeBadge />
  </svg>;
};

// --- Animation 4: conceptual bars, same grip ceiling when braking --------------------
export const GripLimitDiagram: React.FC<{t: number}> = ({t}) => {
  const base = 600, ceil = 210, H = base - ceil;
  const acc = interpolate(t, [16.8, 17.6], [0.15, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const brk = interpolate(t, [16.8, 18.05], [0.15, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const line = at(t, 18.02, 0.3);
  const push = at(t, 18.88, 0.2);
  const bump = push > 0 ? Math.max(0, Math.sin(Math.min(1, (t - 18.88) / 0.5) * Math.PI)) * 14 : 0;
  const bar = (x: number, frac: number, lime: boolean, label: string, hit = false) => {
    const h = H * frac;
    return <g>
      <rect x={x - 55} y={base - h + (hit ? bump * 0.4 : 0)} width="110" height={Math.max(0, h - (hit ? bump * 0.4 : 0))} rx="14" fill={lime ? brand.lime : '#9aa9a6'} />
      {hit && line > 0.5 ? <rect x={x - 62} y={ceil - 6} width="124" height="12" rx="6" fill="#ffffff" opacity={0.4 + 0.6 * (bump / 14)} /> : null}
      <text x={x} y={base + 36} textAnchor="middle" fill={lime ? brand.lime : '#e7efe9'} fontSize="28" fontWeight="1000">{label}</text>
    </g>;
  };
  return <svg viewBox="0 0 984 720" style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <rect width="984" height="720" fill="#0b1915" />
    <g opacity=".12">{[...Array(8)].map((_, i) => <path key={i} d={`M60 ${base - i * 56} H924`} stroke="#f7f8f5" strokeWidth="1" />)}</g>
    <path d={`M60 ${base} H924`} stroke="#9fb3aa" strokeWidth="3" />
    <path d="M492 150 V680" stroke="#f7f8f5" strokeWidth="2" opacity=".2" />
    {bar(185, 0.48 * acc, false, '4x2')}
    {bar(335, 0.94 * acc, true, '4x4')}
    {bar(649, 1 * brk, false, '4x2', true)}
    {bar(799, 1 * brk, true, '4x4', true)}
    <text x="260" y={base + 86} textAnchor="middle" fill="#f7f8f5" fontSize="26" fontWeight="1000" letterSpacing="3">ACELERAR</text>
    <text x="724" y={base + 86} textAnchor="middle" fill="#f7f8f5" fontSize="26" fontWeight="1000" letterSpacing="3">FRENAR</text>
    <g opacity={line}>
      <path d={`M60 ${ceil} H924`} stroke="#ff8f7a" strokeWidth="5" strokeDasharray="18 10" />
      <rect x="222" y={ceil - 66} width="540" height="42" rx="21" fill="#ff8f7a" />
      <text x="492" y={ceil - 38} textAnchor="middle" fill="#2a0f0a" fontSize="19" fontWeight="1000" letterSpacing="1">LÍMITE DE AGARRE DE LOS NEUMÁTICOS</text>
    </g>
    <Pill x={724} y={ceil - 112} w={300} text="NO HAY MÁS AGARRE" o={push} dark />
    <IllustrativeBadge text="COMPARACIÓN CONCEPTUAL · SIN DATOS DE PRUEBA" width={640} />
  </svg>;
};

// --- Animation 5: following on snow, tyres + safety gap ------------------------------
export const FollowDiagram: React.FC<{t: number}> = ({t}) => {
  const tyre = at(t, 22.78, 0.3);
  const gap = at(t, 24.06, 0.9);
  const followY = 400 + 150 * gap;
  const leadY = 150;
  const scroll = (t * 160) % 80;
  const top = leadY + 75, bottom = followY - 75;
  return <svg viewBox="0 0 984 720" style={{width: '100%', height: '100%', fontFamily: brand.font}}>
    <rect width="984" height="720" fill="#dfe8e6" />
    {[...Array(12)].map((_, i) => <circle key={i} cx={i % 2 ? 110 : 880} cy={(i * 113 + scroll * 3) % 800 - 40} r={22 + (i % 3) * 9} fill="#c7d4d1" />)}
    <rect x="300" width="384" height="720" fill="#33403f" />
    <rect x="300" width="384" height="720" fill={ICE} opacity=".16" />
    {[...Array(9)].map((_, i) => <path key={i} d={`M${330 + (i * 47) % 330} ${(i * 151 + scroll * 4) % 800 - 40} l${i % 2 ? 16 : -14} 40`} stroke="#ffffff" strokeWidth="3" opacity=".25" strokeLinecap="round" />)}
    <path d="M308 0 V720 M676 0 V720" stroke="#f2f4ef" strokeWidth="6" strokeDasharray="40 30" strokeDashoffset={-scroll * 2} opacity=".8" />
    <TopCar x={492} y={leadY} body="#9aa9a6" />
    <TopCar x={492} y={followY} body={brand.lime} tyres={tyre} you />
    <g opacity={gap}>
      <path d={`M252 ${top} V${bottom}`} stroke={brand.lime} strokeWidth="5" />
      <path d={`M236 ${top} H268 M236 ${bottom} H268`} stroke={brand.lime} strokeWidth="5" />
      <path d={`M240 ${top + 16} l12 -14 l12 14 M240 ${bottom - 16} l12 14 l12 -14`} fill="none" stroke={brand.lime} strokeWidth="4" />
      <rect x="22" y={(top + bottom) / 2 - 48} width="216" height="96" rx="20" fill="#0a211aee" stroke={brand.lime} strokeWidth="2" />
      <text x="130" y={(top + bottom) / 2 - 8} textAnchor="middle" fill={brand.lime} fontSize="21" fontWeight="1000" letterSpacing="1">DISTANCIA</text>
      <text x="130" y={(top + bottom) / 2 + 24} textAnchor="middle" fill={brand.lime} fontSize="21" fontWeight="1000" letterSpacing="1">DE SEGURIDAD</text>
    </g>
    <g opacity={tyre}>
      <path d={`M548 ${followY - 46} H708`} stroke={brand.lime} strokeWidth="4" />
      <rect x="708" y={followY - 92} width="250" height="92" rx="20" fill="#0a211aee" stroke={brand.lime} strokeWidth="2" />
      <text x="833" y={followY - 54} textAnchor="middle" fill={brand.lime} fontSize="21" fontWeight="1000" letterSpacing="1">NEUMÁTICOS</text>
      <text x="833" y={followY - 22} textAnchor="middle" fill={brand.lime} fontSize="21" fontWeight="1000" letterSpacing="1">ADECUADOS</text>
    </g>
    <IllustrativeBadge />
    <text x="960" y="51" textAnchor="end" fill="#173d34" fontSize="18" fontWeight="900" letterSpacing="3">VISTA CENITAL</text>
  </svg>;
};

const FactorCard: React.FC<{frame: number; from: number; left: number; title: string; detail: string; icon: 'tyre' | 'speed' | 'road'}> = ({frame, from, left, title, detail, icon}) => {
  const p = interpolate(frame, [from, from + 8], [0, 1], clamp);
  const on = frame >= from;
  return <div style={{position: 'absolute', top: 1000, left, width: 300, height: 196, boxSizing: 'border-box', padding: '16px 12px', borderRadius: 24, background: on ? brand.lime : '#f7f8f51c', color: on ? brand.deep : '#e7efe9', textAlign: 'center', opacity: 0.35 + p * 0.65, transform: `translateY(${interpolate(p, [0, 1], [26, 0])}px) scale(${interpolate(p, [0, 1], [0.94, 1])})`, boxShadow: on ? '0 16px 36px #06140f60' : 'none', zIndex: 5}}>
    <svg viewBox="0 0 80 60" style={{width: 74, height: 54}}>
      <g fill="none" stroke={on ? brand.deep : '#e7efe9'} strokeWidth="5" strokeLinecap="round">
        {icon === 'tyre' ? <><circle cx="40" cy="30" r="25" /><circle cx="40" cy="30" r="10" /><path d="M40 5 V12 M40 48 V55 M15 30 H22 M58 30 H65 M22 12 L27 17 M58 12 L53 17 M22 48 L27 43 M58 48 L53 43" /></> : null}
        {icon === 'speed' ? <><path d="M10 48 A30 30 0 1 1 70 48" /><path d="M40 44 L56 22" /><circle cx="40" cy="44" r="4" fill={on ? brand.deep : '#e7efe9'} /></> : null}
        {icon === 'road' ? <><path d="M40 4 V56 M19 16 L61 44 M61 16 L19 44" /><path d="M33 8 L40 14 L47 8 M33 52 L40 46 L47 52" /></> : null}
      </g>
    </svg>
    <div style={{marginTop: 8, fontSize: 30, lineHeight: 1, fontWeight: 1000}}>{title}</div>
    <div style={{marginTop: 10, fontSize: 19, lineHeight: 1.1, fontWeight: 850}}>{detail}</div>
  </div>;
};

const sub = (sec: number, sceneStart: number) => Math.round((sec - sceneStart) * FPS);

const SceneContent: React.FC<{id: SceneId; frame: number; t: number}> = ({id, frame, t}) => {
  if (id === 'question') return <>
    <Heading frame={99} eyebrow="SOBRE NIEVE" title="¿UN 4x4 FRENA ANTES?" />
    <PhotoStage instant frame={frame} src={`${IMG}suv-carretera-nevada.jpg`} alt="SUV circulando por una carretera nevada entre árboles" position="50% 62%" origin="50% 66%" zoomFrom={1.02} zoomTo={1.2} zoomFrames={117} />
    <Strap frame={frame} text="CARRETERA CON NIEVE A LOS LADOS" from={20} />
  </>;
  if (id === 'advance') return <>
    <Heading frame={frame} eyebrow="LO QUE SÍ HACE LA TRACCIÓN TOTAL" title="MÁS MOTRICIDAD AL AVANZAR" sub="CUANDO EL SUELO RESBALA" subFrom={sub(7.48, 3.9)} compact />
    <DiagramStage frame={frame} wipe><AdvanceDiagram t={t} /></DiagramStage>
  </>;
  if (id === 'axles') return <>
    <Heading frame={frame} eyebrow="POR QUÉ AYUDA" title="FUERZA A LOS DOS EJES" />
    <DiagramStage frame={frame} punch><AxlesDiagram t={t} /></DiagramStage>
  </>;
  if (id === 'brake') return <>
    <Heading frame={frame} eyebrow="PERO AL FRENAR…" title="MANDAN LOS NEUMÁTICOS" sub="EL AGARRE SALE DE SU HUELLA EN EL SUELO" subFrom={sub(13.26, 10.9)} compact />
    <PhotoStage frame={frame} src={`${IMG}neumatico-nieve.jpg`} alt="Neumático todoterreno con la banda de rodadura cubierta de nieve" position="50% 58%" origin="42% 62%" zoomFrom={1.08} zoomTo={1.22} zoomFrames={94} pan={-12} snap />
  </>;
  if (id === 'factors') return <>
    <Heading frame={frame} eyebrow="AL FRENAR, EL AGARRE DEPENDE DE" title="TRES FACTORES CLAVE" compact />
    <DiagramStage frame={frame} top={440} height={520}><BrakeDistanceDiagram t={t} /></DiagramStage>
    <FactorCard frame={frame} from={0} left={48} title="NEUMÁTICOS" detail="TIPO Y ESTADO" icon="tyre" />
    <FactorCard frame={frame} from={sub(14.26, 14.04)} left={390} title="VELOCIDAD" detail="MÁS RÁPIDO, MÁS METROS" icon="speed" />
    <FactorCard frame={frame} from={sub(15.32, 14.04)} left={732} title="CARRETERA" detail="NIEVE, HIELO, AGUA" icon="road" />
  </>;
  if (id === 'limit') return <>
    <Heading frame={frame} eyebrow="4 RUEDAS MOTRICES ≠ AGARRE INFINITO" title="ACELERAR NO ES FRENAR" sub="AL FRENAR, TODOS LOS COCHES USAN SUS 4 RUEDAS" subFrom={sub(17.5, 16.8)} compact />
    <DiagramStage frame={frame}><GripLimitDiagram t={t} /></DiagramStage>
  </>;
  if (id === 'even') return <>
    <Heading frame={frame} eyebrow="POR ESO" title="INCLUSO CON UN 4x4" />
    <PhotoStage frame={frame} src={`${IMG}coches-distancia-nieve.jpg`} alt="Coches circulando separados por una carretera mojada entre laderas nevadas" position="22% 60%" origin="14% 72%" zoomFrom={1.06} zoomTo={1.24} zoomFrames={67} pan={16} />
    <Strap frame={frame} text="LA NIEVE ES LA MISMA PARA TODOS" from={8} />
  </>;
  if (id === 'keys') return <>
    <Heading frame={frame} eyebrow="LO QUE DE VERDAD NECESITAS" title="NEUMÁTICOS + DISTANCIA" />
    <DiagramStage frame={frame}><FollowDiagram t={t} /></DiagramStage>
  </>;
  if (id === 'ask') return <>
    <Heading frame={frame} eyebrow="¿YA LO SABÍAS?" title="¿CONOCÍAS LA DIFERENCIA?" compact />
    <PhotoStage frame={frame} src={`${IMG}todoterreno-blanco-nieve.jpg`} alt="Todoterreno blanco aparcado en una carretera cubierta de nieve" position="56% 50%" origin="58% 52%" zoomFrom={1.06} zoomTo={1.18} zoomFrames={50} snap />
    <Strap frame={frame} text="CUÉNTANOS EN COMENTARIOS" from={10} lime />
  </>;
  return <CtaCard frame={frame} guide="DE TRACCIÓN" detail={<>DELANTERA, TRASERA, TOTAL Y 4x4<br />EXPLICADAS SIN LÍO</>} />;
};

export const FourByFourGripPromo: React.FC<FourByFourGripSpec> = (spec) => {
  const frame = useCurrentFrame();
  const t = frame / spec.fps;
  const found = gripScenes.findIndex((s) => t >= s.start && t < s.end);
  const activeIndex = found < 0 ? gripScenes.length - 1 : found;
  const active = gripScenes[activeIndex];
  const localFrame = Math.max(0, Math.round((t - active.start) * spec.fps));
  return <AbsoluteFill style={{background: brand.deep, overflow: 'hidden', fontFamily: brand.font}}>
    <Backdrop frame={frame} />
    <SceneContent id={active.id} frame={localFrame} t={t} />
    <ReelChrome frame={frame} fps={spec.fps} real={t} durationSeconds={spec.durationSeconds} scenes={gripScenes} activeIndex={activeIndex} tag="TRACCIÓN 4x4" captions={spec.captions} audioFile={spec.audioFile ?? 'audio/voice-video-022.wav'} />
  </AbsoluteFill>;
};

// Stand-alone preview of the five animations, to check start, middle and end before montage.
const PREVIEW: [number, number, 'advance' | 'axles' | 'brake' | 'limit' | 'follow'][] = [[3.9, 8.74, 'advance'], [8.74, 10.9, 'axles'], [14.04, 16.8, 'brake'], [16.8, 20.06, 'limit'], [22.3, 26.02, 'follow']];
export const previewFrames = Math.round(PREVIEW.reduce((a, [s, e]) => a + e - s, 0) * FPS);
export const FourByFourGripPreview: React.FC = () => {
  let local = useCurrentFrame() / FPS;
  for (const [s, e, part] of PREVIEW) {
    if (local < e - s || part === 'follow') {
      const tt = s + local;
      return <AbsoluteFill style={{background: '#061410', justifyContent: 'center'}}>
        {part === 'advance' ? <AdvanceDiagram t={tt} /> : part === 'axles' ? <AxlesDiagram t={tt} /> : part === 'brake' ? <div style={{height: 520}}><BrakeDistanceDiagram t={tt} /></div> : part === 'limit' ? <GripLimitDiagram t={tt} /> : <FollowDiagram t={tt} />}
      </AbsoluteFill>;
    }
    local -= e - s;
  }
  return null;
};

export const FourByFourGripCover: React.FC = () => <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
  <Backdrop frame={0} />
  <div style={{position: 'absolute', top: 150, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}><BrandCircle size={170} /></div>
  <div style={{position: 'absolute', top: 360, left: 40, right: 40, textAlign: 'center', color: brand.lime, fontSize: 104, lineHeight: 0.95, fontWeight: 1000, letterSpacing: -4, textShadow: '0 10px 30px #06140f80'}}>¿UN 4x4<br />FRENA ANTES?</div>
  <div style={{position: 'absolute', top: 640, left: 48, width: 984, height: 720, overflow: 'hidden', borderRadius: 34, boxShadow: '0 26px 65px #06140f80'}}>
    <div style={{width: 984, height: 720}}><GripLimitDiagram t={19.6} /></div>
  </div>
  <div style={{position: 'absolute', top: 1400, left: 50, right: 50, textAlign: 'center', color: brand.paper, fontSize: 50, lineHeight: 1.05, fontWeight: 1000, letterSpacing: -1}}>TRACCIÓN TOTAL<br /><span style={{color: brand.lime}}>NO ES AGARRE INFINITO</span></div>
  <div style={{position: 'absolute', top: 1570, left: 210, right: 210, padding: '18px 10px', borderRadius: 22, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 32, fontWeight: 1000}}>KILOMETROCLARO.COM</div>
</AbsoluteFill>;
