import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from '../components/BrandLogo';

type CaptionCue = {startSeconds: number; endSeconds: number; text: string};
type Scene = {
  id: string;
  kind: string;
  visual: string;
  startSeconds: number;
  endSeconds: number;
  kicker: string;
  headline: string;
  narration: string;
  note: string;
  captions: CaptionCue[];
};
export type DrivetrainSpec = {
  schemaVersion: number;
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  scenes: Scene[];
};

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const Wheel: React.FC<{x: number; y: number; active: boolean; horizontal?: boolean; phase?: number}> = ({x, y, active, horizontal = false, phase = 0}) => (
  <g transform={`translate(${x} ${y}) rotate(${horizontal ? 90 : 0})`}>
    {active ? <>
      <circle cx="0" cy="0" r="74" fill={brand.lime} opacity={0.16 + Math.sin(phase / 12) * 0.05} />
      <circle cx="0" cy="0" r="58" fill="none" stroke={brand.lime} strokeWidth="5" opacity="0.85" />
    </> : null}
    <rect x="-37" y="-65" width="74" height="130" rx="24" fill={active ? brand.lime : '#0b1714'} stroke={active ? '#efffb0' : '#789087'} strokeWidth="5" />
    <path d="M -22 -48 H 22 M -24 -26 H 24 M -24 0 H 24 M -24 26 H 24 M -22 48 H 22" stroke={active ? brand.deep : '#6d8279'} strokeWidth="5" strokeLinecap="round" opacity="0.8" />
    {active ? <circle cx="0" cy="0" r="11" fill={brand.deep} /> : null}
  </g>
);

const TopDownCar: React.FC<{frame: number; drive: 'front' | 'rear' | 'all'; color?: string; x?: number; y?: number; scale?: number; rotate?: number}> = ({frame, drive, color = '#e7efe9', x = 0, y = 0, scale = 1, rotate = 0}) => {
  const front = drive === 'front' || drive === 'all';
  const rear = drive === 'rear' || drive === 'all';
  const pulse = frame;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotate} 150 190)`}>
      <path d="M 150 24 C 112 24 95 51 87 91 L 75 161 L 75 294 Q 77 343 150 368 Q 223 343 225 294 L 225 161 L 213 91 C 205 51 188 24 150 24 Z" fill={color} stroke="#ffffff" strokeWidth="7" />
      <path d="M 105 101 Q 150 71 195 101 L 205 157 H 95 Z" fill="#638276" stroke="#dff0e7" strokeWidth="5" />
      <path d="M 96 174 H 204 V 260 H 96 Z" fill="#c4d3ca" opacity="0.86" />
      <path d="M 103 278 H 197 L 185 319 Q 150 342 115 319 Z" fill="#718b80" stroke="#ffffff" strokeWidth="4" />
      <path d="M 104 82 L 94 58 M 196 82 L 206 58" stroke={brand.lime} strokeWidth="12" strokeLinecap="round" />
      <path d="M 108 328 L 98 347 M 192 328 L 202 347" stroke="#e9d78d" strokeWidth="10" strokeLinecap="round" />
      <Wheel x={34} y={130} active={front} phase={pulse} />
      <Wheel x={266} y={130} active={front} phase={pulse} />
      <Wheel x={34} y={278} active={rear} phase={pulse} />
      <Wheel x={266} y={278} active={rear} phase={pulse} />
      {(front || rear) ? <>
        {front ? <path d="M 122 126 C 82 104 64 94 46 78 M 178 126 C 218 104 236 94 254 78" fill="none" stroke={brand.lime} strokeWidth="8" strokeDasharray="12 12" strokeDashoffset={-frame * 2} strokeLinecap="round" /> : null}
        {rear ? <path d="M 122 281 C 82 302 64 315 46 333 M 178 281 C 218 302 236 315 254 333" fill="none" stroke={brand.lime} strokeWidth="8" strokeDasharray="12 12" strokeDashoffset={-frame * 2} strokeLinecap="round" /> : null}
      </> : null}
    </g>
  );
};

const OpenWheelCar: React.FC<{frame: number; reveal?: boolean}> = ({frame, reveal = false}) => {
  const drift = interpolate(frame, [0, 25, 58, 100], [2, 2, -17, -10], clamp);
  const slide = interpolate(frame, [0, 18, 42, 105], [260, 80, 0, -40], clamp);
  const smoke = interpolate(frame, [12, 28, 76, 112], [0, 0.72, 0.9, 0.08], clamp);
  const turn = (x: number, y: number, active: boolean) => (
    <g transform={`translate(${x} ${y}) rotate(90)`}>
      {active ? <rect x="-82" y="-6" width="164" height="146" rx="33" fill={brand.lime} opacity="0.22" /> : null}
      <rect x="-62" y="-10" width="124" height="144" rx="34" fill="#07130f" stroke={active ? brand.lime : '#80958b'} strokeWidth="6" />
      <path d="M -43 28 H 43 M -43 66 H 43 M -43 104 H 43" stroke="#70867c" strokeWidth="6" strokeLinecap="round" />
    </g>
  );
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <defs>
        <linearGradient id="raceBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e9ff9a" /><stop offset="0.58" stopColor={brand.lime} /><stop offset="1" stopColor="#72b94c" /></linearGradient>
        <radialGradient id="driftSmoke"><stop offset="0" stopColor="#f4f7ef" stopOpacity="0.75" /><stop offset="1" stopColor="#c3d2c8" stopOpacity="0" /></radialGradient>
      </defs>
      <rect x="20" y="28" width="920" height="744" rx="38" fill="#0d241e" />
      <path d="M 40 632 H 920 M 40 671 H 920" stroke="#789087" strokeWidth="4" strokeDasharray="50 32" opacity="0.36" />
      <path d="M 0 570 C 210 486 330 692 520 592 S 770 500 960 590" fill="none" stroke="#b9c6bd" strokeWidth="7" opacity={smoke * 0.55} />
      <g opacity={smoke}>
        <ellipse cx="214" cy="422" rx="150" ry="120" fill="url(#driftSmoke)" />
        <ellipse cx="284" cy="506" rx="125" ry="95" fill="url(#driftSmoke)" />
        <ellipse cx="155" cy="534" rx="110" ry="82" fill="url(#driftSmoke)" />
      </g>
      <g transform={`translate(${slide} 0) rotate(${drift} 500 390)`}>
        {turn(284, 276, false)}
        {turn(284, 507, false)}
        {turn(690, 276, reveal)}
        {turn(690, 507, reveal)}
        <path d="M 225 285 L 308 285 L 343 318 L 343 464 L 307 499 L 225 499 L 246 463 L 246 320 Z" fill="#dae3dc" stroke="#f9fff9" strokeWidth="7" />
        <path d="M 274 317 H 668 Q 702 317 716 355 L 776 384 L 716 413 Q 702 451 668 451 H 274 L 314 413 V 355 Z" fill="url(#raceBody)" stroke="#f8ffeb" strokeWidth="7" />
        <path d="M 356 326 H 570 L 612 383 L 570 442 H 356 L 387 383 Z" fill="#173d34" stroke="#d9f28a" strokeWidth="6" />
        <path d="M 418 336 Q 466 294 519 336 L 540 384 L 519 431 Q 464 469 418 431 L 397 384 Z" fill="#0b211b" stroke="#a8c4b4" strokeWidth="5" />
        <path d="M 458 321 C 431 286 440 260 472 251 C 504 260 513 286 486 321" fill="none" stroke="#d9e6dd" strokeWidth="11" />
        <path d="M 736 290 L 857 270 L 876 295 L 835 311 L 822 329 L 768 328 Z M 736 478 L 857 498 L 876 473 L 835 457 L 822 439 L 768 440 Z" fill={brand.lime} stroke="#f8ffeb" strokeWidth="5" />
        <path d="M 208 264 H 336 V 293 H 208 Z M 208 491 H 336 V 520 H 208 Z" fill={brand.lime} stroke="#f8ffeb" strokeWidth="5" />
        <path d="M 489 378 L 686 378 L 740 384 L 686 391 H 489 Z" fill="#ffffff" opacity="0.8" />
        <text x="474" y="540" textAnchor="middle" fontFamily="Arial" fontSize="21" fontWeight="900" fill="#f7f8f5">MONOPLAZA · SIN MARCA</text>
      </g>
      <text x="62" y="88" fill={brand.lime} fontFamily="Arial" fontSize="23" fontWeight="900" letterSpacing="2">DERREPE CONTROLADO · CIRCUITO CERRADO</text>
      <text x="794" y="728" textAnchor="end" fill="#dfe8e1" fontFamily="Arial" fontSize="18" fontWeight="700">RECREACIÓN ANIMADA</text>
    </svg>
  );
};

const AxleDiagram: React.FC<{frame: number; drive: 'front' | 'rear' | 'all'; compare?: boolean}> = ({frame, drive, compare = false}) => (
  <svg viewBox="0 0 960 800" width="100%" height="100%">
    <defs>
      <linearGradient id="axleBg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f8faf6" /><stop offset="1" stopColor="#dfe9e2" /></linearGradient>
      <radialGradient id="axleGlow"><stop stopColor="#d7f36a" stopOpacity="0.62" /><stop offset="1" stopColor="#d7f36a" stopOpacity="0" /></radialGradient>
    </defs>
    <rect x="24" y="24" width="912" height="752" rx="36" fill="url(#axleBg)" />
    <circle cx="480" cy="408" r="310" fill="url(#axleGlow)" />
    <text x="480" y="93" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="24" fontWeight="900" letterSpacing="2">VISTA DESDE ARRIBA</text>
    <g transform={`translate(${interpolate(frame, [0, 42, 112, 190], [-34, 20, -12, 28], clamp)} ${interpolate(frame, [0, 88, 190], [10, -24, 18], clamp)}) rotate(${drive === 'rear' ? interpolate(frame, [0, 70, 150], [-2, 5, -3], clamp) : drive === 'front' ? interpolate(frame, [0, 70, 150], [2, -5, 2], clamp) : 0} 480 400)`}>
      <TopDownCar frame={frame} drive={drive} x={330} y={123} scale={1.03} color="#fdfefc" />
    </g>
    <text x="480" y="729" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="24" fontWeight="900" letterSpacing="1.5">{drive === 'front' ? 'EJE DELANTERO MOTRIZ' : drive === 'rear' ? 'EJE TRASERO MOTRIZ' : 'LOS DOS EJES PUEDEN SER MOTRICES'}</text>
    <text x="480" y="165" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="18" fontWeight="800">DELANTE</text>
    <text x="480" y="706" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="18" fontWeight="800">DETRÁS</text>
    {!compare ? <g transform="translate(718 340)">
      <circle cx="0" cy="0" r="106" fill={brand.deep} />
      <path d="M -61 0 H 61 M 38 -22 L 61 0 L 38 22" fill="none" stroke={brand.lime} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
      <text x="0" y="157" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="19" fontWeight="900">FUERZA</text>
    </g> : null}
  </svg>
);

type MotionShot = (frame: number) => React.ReactNode;
const cutAtCaption = (scene: Scene, fps: number, cueIndexes: number[]) => cueIndexes.map((index) => (scene.captions[index].startSeconds - scene.startSeconds) * fps);

const MotionSequence: React.FC<{frame: number; durationFrames: number; shots: MotionShot[]; cuts?: number[]}> = ({frame, durationFrames, shots, cuts = []}) => {
  const ends = [...cuts, durationFrames];
  const index = Math.min(shots.length - 1, Math.max(0, ends.findIndex((end) => frame < end)));
  const segmentStart = index === 0 ? 0 : ends[index - 1];
  const segmentFrames = ends[index] - segmentStart;
  const localFrame = Math.max(0, frame - segmentStart);
  const fadeFrames = 8;
  const fadeStart = segmentStart + segmentFrames - fadeFrames;
  const blend = index < shots.length - 1
    ? interpolate(frame, [fadeStart, segmentStart + segmentFrames], [0, 1], clamp)
    : 0;
  const nextLocalFrame = index < shots.length - 1
    ? Math.max(0, frame - (segmentStart + segmentFrames) + fadeFrames)
    : 0;
  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden', background: brand.deep}}>
      <div style={{position: 'absolute', inset: 0, opacity: 1 - blend, transform: `scale(${1 + blend * 0.045})`}}>{shots[index](localFrame)}</div>
      {index < shots.length - 1 ? <div style={{position: 'absolute', inset: 0, opacity: blend, transform: `scale(${1.045 - blend * 0.045})`}}>{shots[index + 1](nextLocalFrame)}</div> : null}
    </div>
  );
};

const TorqueShot: React.FC<{frame: number; drive: 'front' | 'rear'}> = ({frame, drive}) => {
  const offset = interpolate(frame, [0, 120], [42, -42], clamp);
  const front = drive === 'front';
  const axleY = front ? 267 : 552;
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <defs><radialGradient id="torqueGlow"><stop stopColor={brand.lime} stopOpacity="0.5" /><stop offset="1" stopColor={brand.lime} stopOpacity="0" /></radialGradient></defs>
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#102a22" />
      <path d="M 60 650 H 900 M 60 700 H 900" stroke="#779087" strokeWidth="5" strokeDasharray="30 26" strokeDashoffset={-frame * 2} opacity="0.6" />
      <ellipse cx="480" cy={axleY} rx="340" ry="180" fill="url(#torqueGlow)" />
      <g transform={`translate(${offset} 0)`}><TopDownCar frame={frame} drive={drive} x={330} y={126} scale={1.04} color="#f7faf6" /></g>
      <rect x="380" y="92" width="200" height="64" rx="22" fill={brand.deep} stroke={brand.lime} strokeWidth="4" />
      <text x="480" y="134" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="23" fontWeight="900">MOTOR</text>
      <path d={`M 480 166 C 520 205 540 ${axleY - 115} 480 ${axleY - 50}`} fill="none" stroke={brand.lime} strokeWidth="12" strokeDasharray="22 14" strokeDashoffset={-frame * 3} strokeLinecap="round" />
      <path d={`M 462 ${axleY - 80} L 480 ${axleY - 50} L 498 ${axleY - 80}`} fill="none" stroke={brand.lime} strokeWidth="11" strokeLinejoin="round" />
      <rect x="178" y="664" width="604" height="62" rx="24" fill={brand.paper} />
      <text x="480" y="704" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="22" fontWeight="900">{front ? 'EL EJE DELANTERO RECIBE EL IMPULSO' : 'EL EJE TRASERO RECIBE EL IMPULSO'}</text>
    </svg>
  );
};

const RearDriftShot: React.FC<{frame: number}> = ({frame}) => {
  const slide = interpolate(frame, [0, 28, 76, 118], [210, 150, 45, 0], clamp);
  const yaw = interpolate(frame, [0, 32, 68, 118], [0, -3, -20, -14], clamp);
  const smoke = interpolate(frame, [0, 28, 78, 118], [0.12, 0.65, 0.85, 0.24], clamp);
  const dash = -frame * 4;
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <defs><radialGradient id="rearSmoke"><stop stopColor="#f4f7ef" stopOpacity="0.72" /><stop offset="1" stopColor="#c3d2c8" stopOpacity="0" /></radialGradient></defs>
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#112c24" />
      <path d="M 42 630 H 918 M 42 680 H 918" stroke="#869990" strokeWidth="5" strokeDasharray="46 30" strokeDashoffset={dash} opacity="0.55" />
      <path d={`M 130 605 C 280 560 285 405 441 421 S 700 570 880 475`} fill="none" stroke={brand.lime} strokeWidth="11" strokeDasharray="24 18" strokeDashoffset={dash} opacity="0.7" />
      <g opacity={smoke}>
        <ellipse cx={250 - slide * 0.32} cy="489" rx="130" ry="92" fill="url(#rearSmoke)" />
        <ellipse cx={309 - slide * 0.24} cy="543" rx="112" ry="76" fill="url(#rearSmoke)" />
        <ellipse cx={203 - slide * 0.18} cy="570" rx="90" ry="63" fill="url(#rearSmoke)" />
      </g>
      <g transform={`translate(${slide} 0) rotate(${yaw} 500 468)`}>
        <path d="M 221 440 Q 256 362 342 354 L 620 354 Q 708 366 759 432 L 792 474 L 757 532 H 212 L 174 489 Z" fill={brand.lime} stroke="#f7fff0" strokeWidth="8" />
        <path d="M 342 365 L 401 306 H 581 L 641 365 Z" fill="#173d34" stroke="#e7f4e9" strokeWidth="7" />
        <path d="M 414 317 H 492 V 358 H 376 Z M 510 317 H 576 L 615 358 H 510 Z" fill="#7f9d8f" />
        <path d="M 214 455 H 750" stroke="#173d34" strokeWidth="12" opacity="0.4" />
        {[302, 666].map((x, i) => {
          const driven = i === 0;
          const spin = driven ? frame * 12 : frame * 3;
          return <g key={x}>
            <circle cx={x} cy="532" r="71" fill="#07130f" stroke={driven ? brand.lime : '#82978d'} strokeWidth={driven ? 14 : 8} />
            <g transform={`rotate(${spin} ${x} 532)`} stroke="#b8c8bf" strokeWidth="9" strokeLinecap="round">
              <path d={`M ${x} 490 V 574 M ${x - 42} 532 H ${x + 42} M ${x - 30} 502 L ${x + 30} 562 M ${x + 30} 502 L ${x - 30} 562`} />
            </g>
            <circle cx={x} cy="532" r="17" fill={driven ? brand.lime : '#8ca097'} />
          </g>;
        })}
      </g>
      <text x="480" y="119" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="25" fontWeight="900" letterSpacing="2">EL EJE TRASERO EMPUJA</text>
      <text x="480" y="730" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="20" fontWeight="900">ACELERÓN BRUSCO + POCO AGARRE = PUEDE HABER DESLIZAMIENTO</text>
    </svg>
  );
};

const PopularFrontDriveShot: React.FC<{frame: number}> = ({frame}) => {
  const entries = [0, 1, 2].map((index) => interpolate(frame, [index * 12, index * 12 + 24], [170, 0], clamp));
  const cars = [
    {x: 210, label: 'URBANO'}, {x: 480, label: 'COMPACTO'}, {x: 750, label: 'FAMILIAR'},
  ];
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#eaf2e6" />
      <text x="480" y="112" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="28" fontWeight="900" letterSpacing="2">MUY HABITUAL EN TURISMOS</text>
      {cars.map((car, index) => <g key={car.label} transform={`translate(${entries[index]} 0)`}>
        <rect x={car.x - 108} y="250" width="216" height="342" rx="42" fill={index === 1 ? brand.lime : brand.paper} stroke={brand.deep} strokeWidth="5" />
        <TopDownCar frame={frame + index * 21} drive="front" x={car.x - 150 * 0.68} y={286} scale={0.68} color="#ffffff" />
        <text x={car.x} y="548" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="21" fontWeight="900">{car.label}</text>
        <rect x={car.x - 45} y="565" width="90" height="12" rx="6" fill={brand.green} />
      </g>)}
      <path d={`M 168 660 H ${792 - (frame % 100) * 0.5}`} stroke={brand.green} strokeWidth="8" strokeDasharray="24 18" />
      <text x="480" y="718" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="21" fontWeight="900">DOS RUEDAS IMPULSAN Y TAMBIÉN DIRIGEN</text>
    </svg>
  );
};

const FrontGripShot: React.FC<{frame: number}> = ({frame}) => {
  const climb = interpolate(frame, [0, 32, 112], [0, 148, 236], clamp);
  const droplets = Array.from({length: 10}, (_, i) => {
    const x = (i * 71 + 80) % 910;
    const y = ((i * 97 + frame * 4) % 700) + 36;
    return <path key={i} d={`M ${x} ${y} l -10 23`} stroke="#9ec9d0" strokeWidth="4" opacity="0.55" />;
  });
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#b9d1c8" />
      {droplets}
      <path d="M 80 660 L 885 360 L 912 752 H 80 Z" fill="#344b44" />
      <path d="M 90 629 L 882 333" stroke={brand.lime} strokeWidth="9" strokeDasharray="26 20" strokeDashoffset={-frame * 3} />
      <g transform={`translate(${climb} ${-climb * 0.37}) rotate(-20 470 450)`}>
        <path d="M 233 435 Q 265 367 348 361 H 624 Q 694 366 744 428 L 778 472 L 746 529 H 207 L 177 486 Z" fill="#f7f8f5" stroke={brand.deep} strokeWidth="9" />
        <path d="M 343 370 L 404 310 H 576 L 635 370 Z" fill="#507365" stroke="#f7f8f5" strokeWidth="6" />
        <circle cx="302" cy="531" r="67" fill="#07130f" stroke="#82958b" strokeWidth="9" />
        <circle cx="664" cy="531" r="67" fill="#07130f" stroke={brand.lime} strokeWidth="15" />
        <g transform={`rotate(${frame * 12} 664 531)`} stroke="#c1d0c7" strokeWidth="9"><path d="M 664 484 V 578 M 617 531 H 711 M 631 498 L 697 564 M 697 498 L 631 564" /></g>
        <circle cx="664" cy="531" r="18" fill={brand.lime} />
      </g>
      <path d="M 638 368 C 720 345 765 329 820 306" fill="none" stroke={brand.lime} strokeWidth="11" strokeDasharray="18 12" strokeDashoffset={-frame * 2} />
      <text x="480" y="112" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="24" fontWeight="900">EL PESO SOBRE EL EJE PUEDE AYUDAR AL ARRANCAR</text>
      <text x="480" y="720" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="21" fontWeight="900">NO SUSTITUYE A UNOS BUENOS NEUMÁTICOS NI A LA PRUDENCIA</text>
    </svg>
  );
};

const AllWheelRampShot: React.FC<{frame: number}> = ({frame}) => {
  const climb = interpolate(frame, [0, 20, 120, 170], [0, 18, 178, 202], clamp);
  const stones = Array.from({length: 9}, (_, i) => {
    const x = i * 95 + 55;
    const y = 630 - x * 0.34;
    return <ellipse key={i} cx={x} cy={y} rx="18" ry="9" fill="#72847a" opacity="0.78" />;
  });
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#dcebdc" />
      <circle cx="818" cy="166" r="57" fill={brand.lime} opacity="0.8" />
      {stones}
      <path d="M 54 672 L 908 364 L 910 770 H 54 Z" fill="#455d51" />
      <path d="M 66 648 L 892 349" stroke={brand.lime} strokeWidth="9" strokeDasharray="25 17" strokeDashoffset={-frame * 2} />
      <g transform={`translate(${climb} ${-climb * 0.36 + Math.sin(frame / 7) * 3}) rotate(-20 480 470)`}>
        <path d="M 238 445 Q 268 372 349 365 H 623 Q 700 373 748 436 L 780 484 L 747 539 H 207 L 176 490 Z" fill={brand.deep} stroke="#f6fff5" strokeWidth="9" />
        <path d="M 349 373 L 405 310 H 577 L 638 373 Z" fill="#cfe0d6" stroke={brand.deep} strokeWidth="8" />
        <path d="M 420 320 H 493 V 364 H 384 Z M 511 320 H 574 L 620 364 H 511 Z" fill="#648677" />
        <rect x="209" y="450" width="536" height="30" rx="14" fill={brand.lime} />
        {[293, 663].map((x) => <g key={x}>
          <circle cx={x} cy="540" r="66" fill="#07130f" stroke={brand.lime} strokeWidth="13" />
          <g transform={`rotate(${frame * 10} ${x} 540)`} stroke="#d3e1d7" strokeWidth="8"><path d={`M ${x} 494 V 586 M ${x - 46} 540 H ${x + 46} M ${x - 32} 508 L ${x + 32} 572 M ${x + 32} 508 L ${x - 32} 572`} /></g>
          <circle cx={x} cy="540" r="18" fill={brand.lime} />
        </g>)}
      </g>
      <rect x="276" y="91" width="408" height="75" rx="26" fill={brand.deep} />
      <text x="480" y="139" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="25" fontWeight="900">AWD · LAS CUATRO PUEDEN EMPUJAR</text>
      <text x="480" y="721" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="21" fontWeight="900">MÁS CAPACIDAD PARA AVANZAR · SEGÚN EL SISTEMA Y EL FIRME</text>
    </svg>
  );
};

const BrakingCautionShot: React.FC<{frame: number}> = ({frame}) => {
  const move = interpolate(frame, [0, 50, 135], [0, 54, 34], clamp);
  const brakePulse = 0.82 + Math.sin(frame / 7) * 0.18;
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#e9f1e9" />
      <path d="M 80 555 H 882 M 80 612 H 882" stroke="#72877b" strokeWidth="6" strokeDasharray="30 24" strokeDashoffset={-frame * 2} />
      <g transform={`translate(${move} 0)`}>
        <path d="M 210 476 Q 246 409 321 400 H 557 Q 628 407 669 468 L 700 508 L 674 544 H 183 L 159 512 Z" fill={brand.deep} stroke="#fafff6" strokeWidth="7" />
        <path d="M 320 407 L 369 350 H 511 L 564 407 Z" fill="#91ab9d" stroke="#f7f8f5" strokeWidth="5" />
        {[277, 602].map((x) => <g key={x}><circle cx={x} cy="538" r="51" fill="#07130f" stroke={brand.lime} strokeWidth="11" /><circle cx={x} cy="538" r="16" fill={brand.lime} /></g>)}
      </g>
      <path d="M 710 496 H 826" stroke="#c83d34" strokeWidth="10" strokeDasharray="12 10" opacity={brakePulse} />
      <path d="M 826 465 V 529 M 846 465 V 529 M 866 465 V 529" stroke="#c83d34" strokeWidth="9" strokeLinecap="round" opacity={brakePulse} />
      <rect x="172" y="111" width="616" height="132" rx="31" fill={brand.deep} />
      <text x="480" y="165" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="31" fontWeight="900">TRACCIÓN ≠ FRENADA</text>
      <text x="480" y="208" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="20" fontWeight="800">AWD no reduce por sí sola la distancia de frenado</text>
      <text x="480" y="721" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="21" fontWeight="900">NEUMÁTICOS Y VELOCIDAD SIGUEN IMPORTANDO</text>
    </svg>
  );
};

const DriveLabelsShot: React.FC<{frame: number; manual?: boolean}> = ({frame, manual = false}) => {
  const pulse = 0.78 + Math.sin(frame / 8) * 0.18;
  const lift = interpolate(frame, [0, 16, 75], [38, 0, -8], clamp);
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#eaf2e7" />
      <rect x="151" y="148" width="658" height="503" rx="44" fill="#f8fbf7" stroke="#cadbd0" strokeWidth="5" />
      <g transform={`translate(0 ${lift})`}>
        <rect x="212" y="237" width="235" height="98" rx="28" fill={brand.deep} opacity={pulse} />
        <text x="329" y="298" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="29" fontWeight="900">AWD / TOTAL</text>
        <rect x="513" y="237" width="235" height="98" rx="28" fill={brand.green} opacity={1.12 - pulse * 0.12} />
        <text x="630" y="298" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="29" fontWeight="900">4x4</text>
        <path d="M 332 363 C 332 438 628 438 628 363" fill="none" stroke={brand.lime} strokeWidth="12" strokeDasharray="19 14" strokeDashoffset={-frame * 2} />
        <rect x="261" y="433" width="438" height="83" rx="26" fill={brand.lime} />
        <text x="480" y="485" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="27" fontWeight="900">{manual ? 'COMPRUEBA LA VERSIÓN' : 'LAS CUATRO RUEDAS MOTRICES'}</text>
        {manual ? <g>
          <rect x="385" y="545" width="190" height="68" rx="16" fill={brand.deep} />
          <path d="M 422 545 V 518 Q 422 493 444 493 H 526 Q 548 493 548 518 V 545" fill="none" stroke={brand.deep} strokeWidth="12" />
          <text x="480" y="589" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="22" fontWeight="900">MANUAL</text>
        </g> : <text x="480" y="575" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="20" fontWeight="900">LA ETIQUETA CAMBIA SEGÚN EL FABRICANTE</text>}
      </g>
    </svg>
  );
};

const WetComparison: React.FC<{frame: number}> = ({frame}) => {
  const progress = interpolate(frame, [0, 24, 360, 430], [0, 0.04, 0.96, 1], clamp);
  const rain = Array.from({length: 12}, (_, index) => {
    const x = 40 + ((index * 83) % 880);
    const y = ((index * 127 + Math.floor(frame * 3)) % 790);
    return <path key={index} d={`M ${x} ${y} l -18 48`} stroke="#c6e9ea" strokeWidth="4" opacity="0.4" />;
  });
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <rect x="24" y="24" width="912" height="752" rx="36" fill="#173b3c" />
      <path d="M 480 94 V 706" stroke="#d9eee2" strokeWidth="7" strokeDasharray="28 22" opacity="0.65" />
      <path d="M 58 706 H 902" stroke="#a1b9ac" strokeWidth="8" opacity="0.4" />
      {rain}
      <rect x="70" y="74" width="340" height="72" rx="24" fill={brand.deep} />
      <text x="240" y="121" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="25" fontWeight="900">TRACCIÓN TRASERA</text>
      <rect x="550" y="74" width="340" height="72" rx="24" fill={brand.deep} />
      <text x="720" y="121" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="25" fontWeight="900">TRACCIÓN DELANTERA</text>
      <path d="M 105 665 Q 170 570 137 465 T 166 232" fill="none" stroke="#d7f36a" strokeWidth="7" strokeDasharray="22 18" opacity="0.58" />
      <path d="M 825 668 Q 756 540 802 422 T 777 210" fill="none" stroke="#f7f8f5" strokeWidth="7" strokeDasharray="22 18" opacity="0.48" />
      <path d={`M ${143 + progress * 6} 562 C ${211 + progress * 35} 493 ${214 - progress * 8} 428 ${163 + progress * 19} 365`} fill="none" stroke="#d7f36a" strokeWidth="11" strokeDasharray="18 14" strokeDashoffset={-frame * 2.2} opacity="0.9" />
      <TopDownCar frame={frame} drive="rear" x={112 + progress * 38} y={284 - progress * 22} scale={0.7} rotate={-6 - 19 * progress} color="#f3ead7" />
      <TopDownCar frame={frame} drive="front" x={590 + progress * 11} y={376 - progress * 215} scale={0.7} rotate={interpolate(frame, [0, 210, 430], [0, 2, 0], clamp)} color={brand.lime} />
      <path d={`M ${610 + progress * 8} ${242 - progress * 70} H ${838 + progress * 6}`} stroke={brand.lime} strokeWidth="8" strokeLinecap="round" strokeDasharray="22 12" strokeDashoffset={-frame * 2} />
      <path d={`M ${818 + progress * 6} ${220 - progress * 70} L ${842 + progress * 6} ${242 - progress * 70} L ${818 + progress * 6} ${264 - progress * 70}`} fill="none" stroke={brand.lime} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <g opacity={0.5 + Math.sin(frame / 8) * 0.18}>
        <circle cx={125 + progress * 50} cy={375 - progress * 25} r="26" fill="#eaf4ee" />
        <circle cx={160 + progress * 54} cy={399 - progress * 28} r="18" fill="#eaf4ee" />
      </g>
      <text x="480" y="745" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="20" fontWeight="800">COMPARACIÓN ILUSTRATIVA · NO IMITAR EN CARRETERA</text>
    </svg>
  );
};

const AllWheelVisual: React.FC<{frame: number}> = ({frame}) => {
  const phase = interpolate(frame, [0, 24, 505, 550], [0, 1, 1, 2], clamp);
  const camera = interpolate(frame, [0, 260, 550], [0, -32, 0], clamp);
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <defs><linearGradient id="awdBg" x1="0" y1="0" x2="0.9" y2="1"><stop stopColor="#e9f3e7" /><stop offset="1" stopColor="#c5e876" /></linearGradient></defs>
      <rect x="24" y="24" width="912" height="752" rx="36" fill="url(#awdBg)" />
      <circle cx="480" cy="397" r="298" fill="none" stroke="#b3c9b7" strokeWidth="8" strokeDasharray="24 20" />
      <text x="480" y="93" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="24" fontWeight="900" letterSpacing="2">VISTA DESDE ARRIBA</text>
      <g transform={`translate(${interpolate(frame, [0, 180, 360, 550], [0, -9, 10, 0], clamp)} ${camera}) rotate(${interpolate(frame, [0, 220, 550], [0, 1.5, 0], clamp)} 480 400)`}><TopDownCar frame={frame} drive="all" x={330} y={123} scale={1.03} color="#fdfefc" /></g>
      <g transform="translate(704 110)">
        <rect x="-108" y="-44" width="216" height="88" rx="25" fill={brand.deep} />
        <text x="0" y="12" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="28" fontWeight="900">AWD / TOTAL</text>
      </g>
      <g transform="translate(144 579)">
        <rect x="-83" y="-48" width="166" height="96" rx="24" fill={brand.paper} stroke={brand.green} strokeWidth="4" />
        <text x="0" y="-7" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="17" fontWeight="900">REPARTO</text>
        <text x="0" y="22" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="18" fontWeight="900">VARIABLE</text>
      </g>
      <path d={`M 180 577 C 260 640 300 ${610 - phase * 28} 360 620`} fill="none" stroke={brand.green} strokeWidth="7" strokeDasharray="12 12" strokeDashoffset={-frame * 1.5} />
      <text x="480" y="732" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="19" fontWeight="900">PUEDE SER PERMANENTE O CONECTARSE BAJO DEMANDA</text>
    </svg>
  );
};

const OffRoadVisual: React.FC<{frame: number}> = ({frame}) => {
  const progress = interpolate(frame, [0, 8, 112, 150], [0, 0.08, 0.92, 1], clamp);
  const dust = interpolate(frame, [8, 22, 112, 150], [0.08, 0.84, 0.68, 0.12], clamp);
  return (
    <svg viewBox="0 0 960 800" width="100%" height="100%">
      <defs><linearGradient id="hillSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#eaf4e5" /><stop offset="1" stopColor="#c6e782" /></linearGradient></defs>
      <rect x="24" y="24" width="912" height="752" rx="36" fill="url(#hillSky)" />
      <path d="M 50 700 L 910 335 L 910 776 L 50 776 Z" fill="#52665b" />
      <path d="M 72 688 L 905 336" stroke="#d7f36a" strokeWidth="8" strokeDasharray="22 18" opacity="0.85" />
      <path d="M 84 737 L 918 383 M 84 768 L 918 414" stroke="#738176" strokeWidth="7" strokeDasharray="9 19" opacity="0.65" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 120 + i * 104;
        const y = 672 - i * 44;
        return <g key={i} opacity="0.8"><ellipse cx={x} cy={y} rx="27" ry="13" fill="#68746c" /><path d={`M ${x - 20} ${y} l 11 -12 h 19 l 12 12 z`} fill="#95a08f" /></g>;
      })}
      <g opacity={dust}>
        <circle cx={238 - progress * 24} cy={564 - progress * 20} r="70" fill="#e7e0c1" opacity="0.68" />
        <circle cx={294 - progress * 18} cy={536 - progress * 18} r="53" fill="#f5f0d7" opacity="0.78" />
        <circle cx={349 - progress * 20} cy={510 - progress * 18} r="38" fill="#e7e0c1" opacity="0.62" />
      </g>
      <g transform={`translate(${progress * 218} ${-progress * 93 + interpolate(frame, [0, 40, 100, 150], [0, -2, 2, 0], clamp)}) rotate(-21 500 492)`}>
        <ellipse cx="499" cy="567" rx="233" ry="35" fill="#102a22" opacity="0.25" />
        <rect x="285" y="398" width="418" height="160" rx="47" fill={brand.deep} stroke="#f7f8f5" strokeWidth="8" />
        <path d="M 349 399 L 398 319 H 590 L 651 399 Z" fill="#eaf2e7" stroke={brand.deep} strokeWidth="9" />
        <path d="M 416 337 H 490 V 392 H 379 Z M 510 337 H 580 L 619 392 H 510 Z" fill="#668477" stroke="#f7f8f5" strokeWidth="5" />
        <rect x="300" y="447" width="386" height="31" rx="14" fill={brand.lime} />
        <path d="M 701 448 H 768 V 504 H 701 Z" fill={brand.deep} stroke="#f7f8f5" strokeWidth="7" />
        <g>
          {[389, 630].map((x) => <g key={x}>
            <circle cx={x} cy="550" r="69" fill="#0b1714" stroke={brand.lime} strokeWidth="13" />
            <circle cx={x} cy="550" r="30" fill="#91a399" />
            <g transform={`rotate(${frame * 8} ${x} 550)`} stroke="#c7d3cc" strokeWidth="8" strokeLinecap="round"><path d={`M ${x} 505 V 530 M ${x - 22} 550 H ${x + 22} M ${x - 20} 530 L ${x + 20} 570 M ${x + 20} 530 L ${x - 20} 570`} /></g>
          </g>)}
        </g>
        <path d="M 350 398 H 624" stroke="#ecf4ec" strokeWidth="12" opacity="0.8" />
      </g>
      <g transform="translate(760 130)">
        <rect x="-118" y="-51" width="236" height="102" rx="26" fill={brand.deep} />
        <text x="0" y="-8" textAnchor="middle" fill="#d8f47a" fontFamily="Arial" fontSize="25" fontWeight="900">ALGUNOS 4x4</text>
        <text x="0" y="25" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="21" fontWeight="800">4L · REDUCTORA</text>
      </g>
      <text x="480" y="739" textAnchor="middle" fill="#f7f8f5" fontFamily="Arial" fontSize="20" fontWeight="900">LA REDUCTORA NO ESTÁ EN TODOS LOS 4x4</text>
    </svg>
  );
};

const MiniSummary: React.FC<{x: number; label: string; drive: 'front' | 'rear' | 'all'; frame: number; delay: number}> = ({x, label, drive, frame, delay}) => {
  const active = (position: 'front' | 'rear') => drive === 'all' || drive === position;
  const entrance = interpolate(frame - delay, [0, 18], [64, 0], clamp);
  const pulse = 0.72 + Math.sin((frame - delay) / 8) * 0.18;
  return (
    <g transform={`translate(${x} ${entrance})`} opacity={interpolate(frame - delay, [0, 12], [0.2, 1], clamp)}>
      <rect x="0" y="0" width="276" height="570" rx="30" fill="#f7f8f5" />
      <text x="138" y="62" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="22" fontWeight="900">{label}</text>
      <text x="138" y="101" textAnchor="middle" fill={brand.green} fontFamily="Arial" fontSize="16" fontWeight="800">RUEDAS MOTRICES</text>
      <rect x="75" y="145" width="126" height="310" rx="61" fill="#dfe9e2" stroke={brand.green} strokeWidth="6" />
      <path d="M 91 217 H 185 V 313 H 91 Z" fill="#a6bdb0" />
      <path d="M 89 358 H 187" stroke={brand.green} strokeWidth="5" />
      <g opacity={active('front') ? pulse : 1}><rect x="34" y="190" width="35" height="92" rx="14" fill={active('front') ? brand.lime : brand.deep} /><rect x="207" y="190" width="35" height="92" rx="14" fill={active('front') ? brand.lime : brand.deep} /></g>
      <g opacity={active('rear') ? pulse : 1}><rect x="34" y="344" width="35" height="92" rx="14" fill={active('rear') ? brand.lime : brand.deep} /><rect x="207" y="344" width="35" height="92" rx="14" fill={active('rear') ? brand.lime : brand.deep} /></g>
      <text x="138" y="510" textAnchor="middle" fill={brand.deep} fontFamily="Arial" fontSize="18" fontWeight="900">{drive === 'front' ? 'DOS DELANTE' : drive === 'rear' ? 'DOS DETRÁS' : 'LAS CUATRO'}</text>
    </g>
  );
};

const SummaryVisual: React.FC<{frame: number}> = ({frame}) => (
  <svg viewBox="0 0 960 800" width="100%" height="100%">
    <rect x="24" y="24" width="912" height="752" rx="36" fill={brand.deep} />
    <MiniSummary x={45} label="DELANTERA" drive="front" frame={frame} delay={0} />
    <MiniSummary x={342} label="TRASERA" drive="rear" frame={frame} delay={17} />
    <MiniSummary x={639} label="AWD / 4x4" drive="all" frame={frame} delay={34} />
    <text x="480" y="669" textAnchor="middle" fill={brand.lime} fontFamily="Arial" fontSize="20" fontWeight="900">MOTRICES = RECIBEN Y TRANSMITEN LA FUERZA</text>
    <text x="480" y="709" textAnchor="middle" fill="#e5eee7" fontFamily="Arial" fontSize="18" fontWeight="700">Los nombres y modos concretos varían según el modelo</text>
  </svg>
);

const sceneBackground: Record<string, string> = {
  hook: '#08221b', answer: '#10382e', 'rear-drive': '#10382e', 'front-drive': '#d4f17b',
  'wet-comparison': '#103237', awd: '#bedd75', '4x4': '#cadf91', recap: '#0c2b22',
};

const Visual: React.FC<{scene: Scene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const localFrame = Math.max(0, frame - scene.startSeconds * fps);
  const durationFrames = (scene.endSeconds - scene.startSeconds) * fps;
  if (scene.id === 'hook') return <OpenWheelCar frame={localFrame} />;
  if (scene.id === 'answer') return <MotionSequence frame={localFrame} durationFrames={durationFrames} shots={[
    (f) => <OpenWheelCar frame={f} reveal />,
    (f) => <TorqueShot frame={f} drive="rear" />,
    (f) => <AxleDiagram frame={f} drive="rear" />,
  ]} cuts={cutAtCaption(scene, fps, [1, 2])} />;
  if (scene.id === 'rear-drive') return <MotionSequence frame={localFrame} durationFrames={durationFrames} shots={[
    (f) => <OpenWheelCar frame={f} reveal />,
    (f) => <TorqueShot frame={f} drive="rear" />,
    (f) => <RearDriftShot frame={f} />,
    (f) => <OpenWheelCar frame={f} reveal />,
  ]} cuts={cutAtCaption(scene, fps, [2, 3, 4])} />;
  if (scene.id === 'front-drive') return <MotionSequence frame={localFrame} durationFrames={durationFrames} shots={[
    (f) => <AxleDiagram frame={f} drive="front" />,
    (f) => <PopularFrontDriveShot frame={f} />,
    (f) => <FrontGripShot frame={f} />,
    (f) => <FrontGripShot frame={f + 30} />,
  ]} cuts={cutAtCaption(scene, fps, [1, 2, 3])} />;
  if (scene.id === 'wet-comparison') return <MotionSequence frame={localFrame} durationFrames={durationFrames} shots={[
    (f) => <WetComparison frame={f} />,
    (f) => <RearDriftShot frame={f + 20} />,
  ]} cuts={cutAtCaption(scene, fps, [2])} />;
  if (scene.id === 'awd') return <MotionSequence frame={localFrame} durationFrames={durationFrames} shots={[
    (f) => <AllWheelVisual frame={f} />,
    (f) => <AxleDiagram frame={f} drive="all" />,
    (f) => <AllWheelRampShot frame={f} />,
    (f) => <BrakingCautionShot frame={f} />,
  ]} cuts={cutAtCaption(scene, fps, [2, 4, 5])} />;
  if (scene.id === '4x4') return <MotionSequence frame={localFrame} durationFrames={durationFrames} shots={[
    (f) => <AxleDiagram frame={f} drive="all" />,
    (f) => <OffRoadVisual frame={f} />,
    (f) => <DriveLabelsShot frame={f} />,
    (f) => <DriveLabelsShot frame={f} manual />,
  ]} cuts={cutAtCaption(scene, fps, [1, 4, 5])} />;
  return <MotionSequence frame={localFrame} durationFrames={durationFrames} shots={[
    (f) => <AxleDiagram frame={f} drive="front" />,
    (f) => <AxleDiagram frame={f} drive="rear" />,
    (f) => <AxleDiagram frame={f} drive="all" />,
    (f) => <SummaryVisual frame={f} />,
    (f) => <DriveLabelsShot frame={f} manual />,
  ]} cuts={cutAtCaption(scene, fps, [1, 2, 3, 4])} />;
};

const DrivetrainScene: React.FC<{scene: Scene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const start = scene.startSeconds * fps;
  const end = scene.endSeconds * fps;
  const dark = ['hook', 'answer', 'rear-drive', 'wet-comparison', 'recap'].includes(scene.id);
  const titleColor = dark ? brand.white : brand.deep;
  const kickerColor = dark ? brand.lime : brand.green;
  const localFrame = Math.max(0, frame - start);
  const localDuration = (scene.endSeconds - scene.startSeconds) * fps;
  const cameraZoom = interpolate(localFrame, [0, localDuration * 0.55, localDuration], [1.012, 1.033, 1.018], clamp);
  const cameraX = interpolate(localFrame, [0, localDuration * 0.5, localDuration], [0, -6, 0], clamp);
  return (
    <div style={{position: 'absolute', inset: 0, opacity: interpolate(frame, [start, start + 10, end - 10, end], [0, 1, 1, 0], clamp), transform: `translateY(${interpolate(frame, [start, start + 14], [18, 0], clamp)}px)`, background: sceneBackground[scene.id] ?? brand.deep}}>
      <div style={{position: 'absolute', left: 56, right: 56, top: 192, textAlign: 'center', color: kickerColor, fontSize: 24, fontWeight: 900, letterSpacing: 3}}>{scene.kicker}</div>
      <div style={{position: 'absolute', left: 60, right: 60, top: 234, height: 160, display: 'grid', placeItems: 'center', color: titleColor, textAlign: 'center', fontSize: scene.id === 'hook' ? 72 : 57, fontWeight: 900, lineHeight: 1.02, letterSpacing: -1.9, whiteSpace: 'pre-line', textShadow: dark ? '0 4px 24px #061a14aa' : 'none'}}>{scene.headline}</div>
      <div style={{position: 'absolute', left: 48, top: 408, width: 984, height: 870, borderRadius: 44, overflow: 'hidden', background: brand.paper, boxShadow: '0 24px 62px #071c1640', border: '3px solid #ffffff66'}}>
        <div style={{position: 'absolute', inset: 0, transform: `translateX(${cameraX}px) scale(${cameraZoom})`, transformOrigin: 'center'}}><Visual scene={scene} frame={frame} fps={fps} /></div>
      </div>
      <div style={{position: 'absolute', left: 78, right: 78, top: 1300, minHeight: 70, display: 'grid', placeItems: 'center', textAlign: 'center', color: kickerColor, fontSize: 21, fontWeight: 850, letterSpacing: 0.5}}>{scene.note}</div>
    </div>
  );
};

export const DrivetrainExplainer: React.FC<DrivetrainSpec> = (spec) => {
  const frame = useCurrentFrame();
  const caption = spec.scenes.flatMap((scene) => scene.captions).find((cue) => frame >= cue.startSeconds * spec.fps && frame < cue.endSeconds * spec.fps);
  const captionStart = caption ? caption.startSeconds * spec.fps : 0;
  const captionEnd = caption ? caption.endSeconds * spec.fps : 0;
  const captionOpacity = caption ? interpolate(frame, [captionStart, captionStart + 3, captionEnd - 3, captionEnd], [0, 1, 1, 0], clamp) : 0;
  const progress = interpolate(frame, [0, spec.durationSeconds * spec.fps], [0, 1], clamp);
  return (
    <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
      {spec.scenes.filter((scene) => frame >= scene.startSeconds * spec.fps - 10 && frame <= scene.endSeconds * spec.fps + 10).map((scene) => (
        <DrivetrainScene key={scene.id} scene={scene} frame={frame} fps={spec.fps} />
      ))}
      <BrandLogo style={{left: 40, top: 24, transform: 'scale(0.64)', transformOrigin: 'top left', zIndex: 10}} />
      <div style={{position: 'absolute', top: 54, right: 47, zIndex: 11, background: brand.deep, color: brand.lime, borderRadius: 18, padding: '13px 19px', fontSize: 19, fontWeight: 900, letterSpacing: 1.2}}>GUÍA · TRACCIÓN</div>
      <div style={{position: 'absolute', top: 126, left: 42, right: 42, zIndex: 11, height: 7, borderRadius: 99, background: '#ffffff33', overflow: 'hidden'}}>
        <div style={{height: '100%', width: '100%', borderRadius: 99, background: brand.lime, transform: `scaleX(${progress})`, transformOrigin: 'left'}} />
      </div>
      {caption ? <div style={{position: 'absolute', left: 58, right: 58, bottom: 202, zIndex: 12, minHeight: 124, padding: '24px 32px', boxSizing: 'border-box', display: 'grid', placeItems: 'center', borderRadius: 30, background: '#f7f8f5', color: brand.deep, fontSize: caption.text.length > 66 ? 30 : 35, lineHeight: 1.13, fontWeight: 800, textAlign: 'center', boxShadow: '0 16px 44px #061a1490', opacity: captionOpacity, whiteSpace: 'pre-line'}}>{caption.text}</div> : null}
      <div style={{position: 'absolute', left: '50%', bottom: 70, zIndex: 11, width: 650, boxSizing: 'border-box', transform: 'translateX(-50%)', padding: '10px 20px', borderRadius: 16, background: brand.deep, color: brand.lime, textAlign: 'center', fontSize: 16, fontWeight: 800, letterSpacing: 0.4}}>KilometroClaro.com · Ilustraciones orientativas</div>
      <Audio src={staticFile('audio/voice-video-004.wav')} volume={1} />
    </AbsoluteFill>
  );
};

