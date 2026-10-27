import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from '../components/BrandLogo';

type DetailKind = 'hook' | 'fuel-arrow' | 'recirculation' | 'heated-mirrors' | 'tire-pressure' | 'hidden-key' | 'child-lock' | 'cta';
type DetailScene = {
  id: string;
  kind: DetailKind;
  startSeconds: number;
  endSeconds: number;
  headline: string;
  voiceover: string;
  note?: string;
};
export type HiddenDetailsSpec = {
  schemaVersion: number;
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  sourceNote: string;
  requiresHumanReview: boolean;
  scenes: DetailScene[];
};

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const sceneStyle = (frame: number, start: number, end: number): React.CSSProperties => ({
  position: 'absolute',
  inset: 0,
  opacity: interpolate(frame, [start, start + 8, end - 8, end], [0, 1, 1, 0], clamp),
  transform: `translateY(${interpolate(frame, [start, start + 12], [20, 0], clamp)}px)`,
});

const Lettering: React.FC<{children: React.ReactNode; color?: string; size?: number; style?: React.CSSProperties}> = ({children, color = brand.deep, size = 30, style}) => (
  <text fill={color} fontFamily="Arial, Segoe UI, sans-serif" fontSize={size} fontWeight="800" letterSpacing="2" style={style}>{children}</text>
);

const FuelVisual: React.FC<{frame: number}> = ({frame}) => {
  const arrowOpacity = interpolate(frame, [84, 97, 139, 158], [0, 1, 1, 0.25], clamp);
  return (
    <svg viewBox="0 0 920 720" width="100%" height="100%">
      <rect x="34" y="36" width="852" height="648" rx="42" fill={brand.deep} />
      <Lettering color={brand.lime} size={25}><tspan x="78" y="103">CUADRO DE INSTRUMENTOS</tspan></Lettering>
      <rect x="88" y="152" width="744" height="426" rx="30" fill="#0d251f" stroke="#496a5c" strokeWidth="4" />
      <path d="M 247 435 A 136 136 0 1 1 489 435" fill="none" stroke="#638275" strokeWidth="16" strokeLinecap="round" />
      <path d="M 277 402 A 102 102 0 1 1 459 402" fill="none" stroke={brand.lime} strokeWidth="5" strokeDasharray="8 20" />
      <text x="252" y="472" fill="#ffffff" fontSize="31" fontFamily="Arial" fontWeight="700">E</text>
      <text x="468" y="472" fill="#ffffff" fontSize="31" fontFamily="Arial" fontWeight="700">F</text>
      <g transform={`rotate(${interpolate(frame, [78, 107], [-48, -4], clamp)} 370 390)`}>
        <path d="M 367 392 L 291 305" stroke={brand.lime} strokeWidth="13" strokeLinecap="round" />
        <circle cx="370" cy="390" r="23" fill={brand.lime} />
      </g>
      <g transform={`translate(0 ${interpolate(frame, [84, 101], [10, 0], clamp)})`}>
        <path d="M 613 288 h77 v144 h-77 z" fill="none" stroke="#f7f8f5" strokeWidth="10" strokeLinejoin="round" />
        <path d="M 630 271 v-45 h44 v45 M 690 308 h24 v72 h-24 M 626 432 h58" fill="none" stroke="#f7f8f5" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 727 343 h64" stroke={brand.lime} strokeWidth="10" strokeLinecap="round" opacity={arrowOpacity} />
        <path d="M 777 320 l28 23 -28 23" fill="none" stroke={brand.lime} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity={arrowOpacity} />
      </g>
      <rect x="205" y="536" width="510" height="72" rx="28" fill={brand.lime} />
      <text x="460" y="583" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="27" fontWeight="800">LA FLECHA SEÑALA EL LADO</text>
    </svg>
  );
};

const AirVisual: React.FC<{frame: number}> = ({frame}) => {
  const flow = interpolate(frame, [187, 210, 299, 320], [0, 1, 1, 0.2], clamp);
  return (
    <svg viewBox="0 0 920 720" width="100%" height="100%">
      <rect x="34" y="36" width="852" height="648" rx="42" fill={brand.deep} />
      <Lettering color={brand.lime} size={25}><tspan x="78" y="103">AIRE EN EL HABITÁCULO</tspan></Lettering>
      <rect x="92" y="154" width="330" height="420" rx="32" fill="#f7f8f5" />
      <text x="257" y="208" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="24" fontWeight="800">RECIRCULACIÓN</text>
      <rect x="139" y="243" width="236" height="236" rx="38" fill={brand.wash} />
      <g transform={`rotate(${interpolate(frame, [191, 226, 299], [0, 16, 35], clamp)} 257 360)`}>
        <path d="M 174 354 C 182 300 233 278 276 298 C 299 308 314 329 317 353" fill="none" stroke={brand.green} strokeWidth="14" strokeLinecap="round" />
        <path d="M 294 328 l26 27 -36 7" fill={brand.green} />
        <path d="M 339 368 C 331 421 280 444 237 424 C 214 414 199 393 196 369" fill="none" stroke={brand.green} strokeWidth="14" strokeLinecap="round" />
        <path d="M 219 394 l-26 -27 36 -7" fill={brand.green} />
      </g>
      <rect x="139" y="510" width="236" height="42" rx="18" fill={brand.lime} />
      <text x="257" y="539" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="20" fontWeight="800">RECIRCULA EL AIRE</text>
      <path d="M 452 347 H 545" stroke={brand.lime} strokeWidth="12" strokeLinecap="round" strokeDasharray="18 24" opacity={flow} />
      <path d="M 526 318 l34 29 -34 29" fill="none" stroke={brand.lime} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity={flow} />
      <rect x="572" y="154" width="258" height="420" rx="32" fill="#f7f8f5" />
      <text x="701" y="208" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="23" fontWeight="800">DESEMPAÑADO</text>
      <path d="M 615 421 Q 701 257 787 421 Z" fill={brand.wash} stroke={brand.green} strokeWidth="10" />
      <path d="M 661 378 l16 -47 M 701 363 v-54 M 741 378 l-16 -47" stroke={brand.green} strokeWidth="8" strokeLinecap="round" />
      <path d="M 629 455 Q 701 478 773 455" fill="none" stroke={brand.lime} strokeWidth="12" strokeLinecap="round" />
      <text x="701" y="532" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="21" fontWeight="700">AIRE EXTERIOR</text>
    </svg>
  );
};

const MirrorVisual: React.FC<{frame: number}> = ({frame}) => {
  const heat = interpolate(frame, [322, 339, 413, 431], [0.2, 1, 1, 0.25], clamp);
  return (
    <svg viewBox="0 0 920 720" width="100%" height="100%">
      <rect x="34" y="36" width="852" height="648" rx="42" fill={brand.deep} />
      <Lettering color={brand.lime} size={25}><tspan x="78" y="103">RETROVISOR CALEFACTADO</tspan></Lettering>
      <rect x="90" y="165" width="256" height="386" rx="32" fill="#f7f8f5" />
      <text x="218" y="218" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="21" fontWeight="800">LUNETA TÉRMICA</text>
      <rect x="140" y="259" width="156" height="206" rx="36" fill={brand.wash} stroke={brand.green} strokeWidth="8" />
      <path d="M 172 365 H 264 L 254 417 H 182 Z" fill="none" stroke={brand.deep} strokeWidth="8" strokeLinejoin="round" />
      <path d="M 194 401 v-23 m0 0 -9 10 m9-10 9 10 M 218 401 v-34 m0 0 -9 10 m9-10 9 10 M 242 401 v-23 m0 0 -9 10 m9-10 9 10" fill="none" stroke={brand.green} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity={heat} />
      <path d="M 366 363 H 470" stroke={brand.lime} strokeWidth="12" strokeDasharray="17 20" strokeLinecap="round" />
      <path d="M 452 335 l34 28 -34 28" fill="none" stroke={brand.lime} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 532 330 Q 575 249 697 260 Q 789 268 804 340 L 787 418 Q 770 463 700 469 L 579 458 Q 522 444 512 396 Z" fill="#edf1eb" stroke="#ffffff" strokeWidth="16" />
      <path d="M 575 432 L 526 503 L 490 507 L 535 420" fill="#9ab4a8" stroke="#ffffff" strokeWidth="12" strokeLinejoin="round" />
      <path d="M 627 341 q21 -31 0 -62 M 675 354 q25 -47 0 -94 M 723 341 q21 -31 0 -62" fill="none" stroke={brand.lime} strokeWidth="12" strokeLinecap="round" opacity={heat} />
      <text x="664" y="548" textAnchor="middle" fill="#ffffff" fontFamily="Arial" fontSize="26" fontWeight="800">RETROVISORES</text>
    </svg>
  );
};

const PressureVisual: React.FC<{frame: number}> = ({frame}) => {
  const glow = interpolate(frame, [432, 449, 551, 565], [0.3, 1, 1, 0.4], clamp);
  return (
    <svg viewBox="0 0 920 720" width="100%" height="100%">
      <rect x="34" y="36" width="852" height="648" rx="42" fill={brand.deep} />
      <Lettering color={brand.lime} size={25}><tspan x="78" y="103">ETIQUETA DE PRESIONES</tspan></Lettering>
      <path d="M 180 202 H 495 L 575 282 V 570 H 180 Z" fill="#f7f8f5" />
      <path d="M 495 202 V 282 H 575" fill="#d7e2d9" stroke="#d7e2d9" strokeWidth="5" />
      <text x="221" y="260" fill={brand.green} fontFamily="Arial" fontSize="20" fontWeight="800">PRESIÓN RECOMENDADA</text>
      <rect x="220" y="294" width="326" height="216" rx="16" fill={brand.wash} />
      <path d="M 258 352 H 516 M 258 402 H 516 M 258 452 H 516" stroke="#bacdc1" strokeWidth="4" />
      <rect x="246" y="362" width="278" height="41" rx="12" fill={brand.lime} opacity={glow} />
      <text x="260" y="340" fill={brand.muted} fontFamily="Arial" fontSize="20" fontWeight="800">USO NORMAL</text>
      <text x="260" y="390" fill={brand.deep} fontFamily="Arial" fontSize="20" fontWeight="900">VEHÍCULO CARGADO</text>
      <text x="260" y="440" fill={brand.muted} fontFamily="Arial" fontSize="20" fontWeight="800">MEDIDA DEL NEUMÁTICO</text>
      <circle cx="755" cy="455" r="69" fill="#f7f8f5" stroke="#9ab4a8" strokeWidth="16" />
      <circle cx="755" cy="455" r="25" fill={brand.deep} />
      <path d="M 755 386 V 404 M 686 455 H 704 M 806 455 H 824 M 755 506 V 524" stroke={brand.deep} strokeWidth="7" strokeLinecap="round" />
      <path d="M 755 455 L 791 423" stroke={brand.lime} strokeWidth="10" strokeLinecap="round" />
      <text x="755" y="559" textAnchor="middle" fill="#ffffff" fontFamily="Arial" fontSize="20" fontWeight="800">NEUMÁTICO</text>
    </svg>
  );
};

const KeyVisual: React.FC<{frame: number}> = ({frame}) => {
  const keyX = interpolate(frame, [566, 598, 676, 696], [0, 112, 112, 10], clamp);
  return (
    <svg viewBox="0 0 920 720" width="100%" height="100%">
      <rect x="34" y="36" width="852" height="648" rx="42" fill={brand.deep} />
      <Lettering color={brand.lime} size={25}><tspan x="78" y="103">LLAVE MECÁNICA DE EMERGENCIA</tspan></Lettering>
      <rect x="222" y="207" width="316" height="365" rx="72" fill="#f7f8f5" />
      <rect x="263" y="253" width="234" height="261" rx="52" fill={brand.wash} stroke="#9ab4a8" strokeWidth="7" />
      <circle cx="380" cy="340" r="52" fill={brand.deep} />
      <circle cx="380" cy="340" r="15" fill={brand.lime} />
      <path d="M 325 428 Q 380 388 435 428" fill="none" stroke={brand.green} strokeWidth="10" strokeLinecap="round" />
      <rect x="335" y="538" width="90" height="14" rx="7" fill={brand.muted} />
      <g transform={`translate(${keyX} 0)`}>
        <path d="M 414 513 H 652 V 478 H 706 V 500 H 749 V 526 H 706 V 550 H 666 V 535 H 414 Z" fill="#d8dde0" stroke="#87969b" strokeWidth="5" strokeLinejoin="round" />
        <circle cx="434" cy="524" r="15" fill={brand.deep} />
      </g>
      <path d="M 578 604 H 741" stroke={brand.lime} strokeWidth="8" strokeDasharray="13 17" strokeLinecap="round" />
      <text x="460" y="638" textAnchor="middle" fill="#ffffff" fontFamily="Arial" fontSize="24" fontWeight="800">PULSA EL SEGURO Y DESLIZA</text>
    </svg>
  );
};

const ChildLockVisual: React.FC<{frame: number}> = ({frame}) => {
  const active = interpolate(frame, [700, 723, 792, 808], [0, 1, 1, 0.3], clamp);
  return (
    <svg viewBox="0 0 920 720" width="100%" height="100%">
      <rect x="34" y="36" width="852" height="648" rx="42" fill={brand.deep} />
      <Lettering color={brand.lime} size={25}><tspan x="78" y="103">CANTO DE LA PUERTA TRASERA</tspan></Lettering>
      <path d="M 203 194 H 600 Q 645 194 645 239 V 538 Q 645 576 608 576 H 203 Q 166 576 166 538 V 232 Q 166 194 203 194 Z" fill="#f7f8f5" />
      <path d="M 219 223 H 552 Q 581 223 581 252 V 389 H 219 Z" fill="#dfe8e1" stroke="#9ab4a8" strokeWidth="7" />
      <path d="M 582 390 H 640 V 520 H 582 Z" fill="#9ab4a8" />
      <rect x="635" y="408" width="92" height="117" rx="18" fill="#f7f8f5" />
      <rect x="655" y="429" width="54" height="72" rx="13" fill={brand.wash} stroke={brand.green} strokeWidth="6" />
      <circle cx="682" cy="450" r="9" fill={brand.green} />
      <path d="M 682 459 v22" stroke={brand.green} strokeWidth="7" strokeLinecap="round" />
      <text x="682" y="557" textAnchor="middle" fill="#ffffff" fontFamily="Arial" fontSize="18" fontWeight="800">SEGURO</text>
      <rect x="724" y="286" width="107" height="68" rx="25" fill={brand.lime} />
      <path d="M 752 320 H 795" stroke={brand.deep} strokeWidth="8" strokeLinecap="round" />
      <circle cx={interpolate(frame, [700, 733, 780], [758, 790, 790], clamp)} cy="320" r="20" fill={brand.deep} />
      <path d="M 745 389 C 712 379 705 352 710 327" fill="none" stroke={brand.lime} strokeWidth="8" strokeDasharray="10 13" strokeLinecap="round" opacity={active} />
      <text x="448" y="628" textAnchor="middle" fill="#ffffff" fontFamily="Arial" fontSize="24" fontWeight="800">LA UBICACIÓN VARÍA SEGÚN EL MODELO</text>
    </svg>
  );
};

const OpeningVisual: React.FC<{frame: number}> = ({frame}) => (
  <div style={{position: 'absolute', left: 92, top: 1040, width: 896, height: 330, borderRadius: 38, background: brand.paper, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', transform: `translateY(${interpolate(frame, [0, 21, 67], [30, 0, -12], clamp)}px)`}}>
    <svg width="320" height="230" viewBox="0 0 320 230">
      <rect x="60" y="35" width="125" height="163" rx="20" fill="none" stroke={brand.deep} strokeWidth="13" />
      <rect x="84" y="57" width="77" height="56" rx="8" fill={brand.lime} />
      <path d="M 183 70 h 24 q 22 0 22 22 v 62 q 0 18 17 18 q 16 0 16 -18 v -62 l-27 -28" fill="none" stroke={brand.green} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 83 145 h 80 M 102 159 v 22 M 144 159 v 22" stroke={brand.deep} strokeWidth="10" strokeLinecap="round" />
    </svg>
    <div style={{width: 4, height: 180, borderRadius: 5, background: brand.lime}} />
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: 25, color: brand.green, letterSpacing: 2, fontWeight: 900}}>CUADRO</div>
      <div style={{fontSize: 106, lineHeight: 1, color: brand.deep, fontWeight: 900}}>←</div>
      <div style={{fontSize: 23, color: brand.muted, fontWeight: 800}}>DEPÓSITO</div>
    </div>
  </div>
);

const VisualCard: React.FC<{scene: DetailScene; frame: number}> = ({scene, frame}) => {
  const Visual = scene.kind === 'fuel-arrow' ? FuelVisual
    : scene.kind === 'recirculation' ? AirVisual
    : scene.kind === 'heated-mirrors' ? MirrorVisual
    : scene.kind === 'tire-pressure' ? PressureVisual
    : scene.kind === 'hidden-key' ? KeyVisual
    : scene.kind === 'child-lock' ? ChildLockVisual
    : null;
  return (
    <div style={{position: 'absolute', left: 58, top: 360, width: 964, height: 805, borderRadius: 44, background: brand.paper, padding: 18, boxSizing: 'border-box', boxShadow: '0 24px 62px #081d1770'}}>
      {Visual ? <Visual frame={frame} /> : null}
      {scene.note ? <div style={{position: 'absolute', left: 41, right: 41, bottom: 38, background: '#0c281f', color: brand.lime, borderRadius: 19, padding: '15px 20px', textAlign: 'center', fontSize: 22, lineHeight: 1.18, fontWeight: 800, letterSpacing: 0.4}}>{scene.note}</div> : null}
      <div style={{position: 'absolute', top: 31, right: 32, background: brand.deep, color: brand.lime, borderRadius: 12, padding: '7px 12px', fontSize: 16, letterSpacing: 1, fontWeight: 900}}>ESQUEMA VISUAL</div>
    </div>
  );
};

const DetailSceneView: React.FC<{scene: DetailScene; index: number; frame: number; fps: number}> = ({scene, index, frame, fps}) => {
  const start = scene.startSeconds * fps;
  const end = scene.endSeconds * fps;
  if (scene.kind === 'hook') {
    return (
      <div style={sceneStyle(frame, start, end)}>
        <div style={{position: 'absolute', inset: 0, background: brand.deep}} />
        <div style={{position: 'absolute', top: 130, left: 0, right: 0, display: 'grid', placeItems: 'center'}}>
          <Img src={staticFile('logo-marca-kilometro-claro.png')} style={{width: 270, height: 270, objectFit: 'contain', borderRadius: '50%', filter: 'drop-shadow(0 18px 30px #071c1688)'}} />
        </div>
        <div style={{position: 'absolute', top: 490, left: 70, right: 70, textAlign: 'center', color: brand.white, fontSize: 86, lineHeight: 1.02, fontWeight: 900, letterSpacing: -3}}>{scene.headline}</div>
        <OpeningVisual frame={frame} />
        <div style={{position: 'absolute', top: 1480, left: 80, right: 80, background: '#f7f8f5', color: brand.deep, borderRadius: 24, padding: '28px 34px', fontSize: 36, lineHeight: 1.18, fontWeight: 750, textAlign: 'center'}}>{scene.voiceover}</div>
      </div>
    );
  }
  if (scene.kind === 'cta') {
    return (
      <div style={sceneStyle(frame, start, end)}>
        <div style={{position: 'absolute', inset: 0, background: brand.lime}} />
        <div style={{position: 'absolute', top: 275, left: 0, right: 0, display: 'grid', placeItems: 'center'}}>
          <Img src={staticFile('logo-marca-kilometro-claro.png')} style={{width: 310, height: 310, objectFit: 'contain', borderRadius: '50%', filter: 'drop-shadow(0 18px 36px #173d3438)'}} />
        </div>
        <div style={{position: 'absolute', top: 670, left: 80, right: 80, textAlign: 'center', color: brand.deep, fontSize: 76, lineHeight: 1.05, fontWeight: 900, letterSpacing: -2}}>{scene.headline}</div>
        <div style={{position: 'absolute', top: 1012, left: 285, width: 510, height: 88, borderRadius: 24, background: brand.deep, color: brand.paper, display: 'grid', placeItems: 'center', fontSize: 31, fontWeight: 800, letterSpacing: 0.2}}>KILÓMETRO CLARO</div>
        <div style={{position: 'absolute', top: 1510, left: 80, right: 80, background: brand.deep, color: brand.lime, borderRadius: 24, padding: '26px 32px', fontSize: 37, lineHeight: 1.18, fontWeight: 750, textAlign: 'center'}}>{scene.voiceover}</div>
      </div>
    );
  }
  return (
    <div style={sceneStyle(frame, start, end)}>
      <div style={{position: 'absolute', inset: 0, background: brand.deep}} />
      <BrandLogo style={{left: 48, top: 38, transform: 'scale(0.62)', transformOrigin: 'top left'}} />
      <div style={{position: 'absolute', top: 63, right: 55, color: brand.lime, fontSize: 26, fontWeight: 900, letterSpacing: 1.5}}>{String(index).padStart(2, '0')} / 06</div>
      <div style={{position: 'absolute', left: 68, top: 226, color: brand.lime, fontSize: 25, fontWeight: 850, letterSpacing: 2.5}}>DETALLE {String(index).padStart(2, '0')} · 06</div>
      <VisualCard scene={scene} frame={frame} />
      <div style={{position: 'absolute', left: 70, right: 70, top: 1200, minHeight: 134, color: brand.white, fontSize: 57, lineHeight: 1.06, fontWeight: 900, letterSpacing: -1.4, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{scene.headline}</div>
      <div style={{position: 'absolute', top: 1428, left: 70, right: 70, minHeight: 136, boxSizing: 'border-box', background: brand.paper, color: brand.deep, borderRadius: 25, padding: '24px 32px', fontSize: 33, lineHeight: 1.2, fontWeight: 720, textAlign: 'center', display: 'grid', placeItems: 'center'}}>{scene.voiceover}</div>
      <div style={{position: 'absolute', left: 72, right: 72, bottom: 95, color: '#d3e4d9', textAlign: 'center', fontSize: 20, lineHeight: 1.2, fontWeight: 600}}>Ilustración orientativa · consulta el manual de tu vehículo</div>
    </div>
  );
};

export const HiddenCarDetails: React.FC<HiddenDetailsSpec> = (spec) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{background: brand.deep, overflow: 'hidden', fontFamily: brand.font}}>
      <div style={{position: 'absolute', width: 1000, height: 1000, right: -560, top: 620, border: '2px solid #ffffff16', borderRadius: '50%', boxShadow: '0 0 0 95px #ffffff08, 0 0 0 190px #ffffff05'}} />
      {spec.scenes.map((scene, sceneIndex) => (
        <DetailSceneView key={scene.id} scene={scene} index={scene.kind === 'hook' || scene.kind === 'cta' ? 0 : sceneIndex} frame={frame} fps={spec.fps} />
      ))}
      <Audio src={staticFile('audio/voice-video-003.wav')} playbackRate={1} volume={1} />
    </AbsoluteFill>
  );
};
