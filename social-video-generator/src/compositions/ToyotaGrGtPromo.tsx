import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from '../components/BrandLogo';

type CaptionCue = {startSeconds: number; endSeconds: number; text: string};
export type ToyotaGrGtSpec = {
  schemaVersion: number;
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  narration: string;
  requiresHumanReview: boolean;
  imageCredit: string;
  captions: CaptionCue[];
};

type SceneId = 'hook' | 'reveal' | 'hybrid' | 'drive' | 'balance' | 'prototype' | 'launch' | 'cta';
const scenes: {id: SceneId; start: number; end: number; label: string}[] = [
  {id: 'hook', start: 0, end: 3.75, label: 'EL RETO'},
  {id: 'reveal', start: 3.75, end: 7.39, label: 'EL PROTAGONISTA'},
  {id: 'hybrid', start: 7.39, end: 13.88, label: 'MOTOR HÍBRIDO'},
  {id: 'drive', start: 13.88, end: 19.83, label: 'TRACCIÓN'},
  {id: 'balance', start: 19.83, end: 24.58, label: 'REPARTO DE PESO'},
  {id: 'prototype', start: 24.58, end: 28.44, label: 'PROTOTIPO'},
  {id: 'launch', start: 28.44, end: 31.67, label: 'A FUTURO'},
  {id: 'cta', start: 31.67, end: 35.36, label: 'DESCÚBRELO'},
];
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const Heading: React.FC<{frame: number; title: string; sub?: string; eyebrow?: string; compact?: boolean}> = ({frame, title, sub, eyebrow, compact = false}) => {
  const progress = interpolate(frame, [0, 10], [0, 1], clamp);
  return <div style={{position: 'absolute', top: 232, left: 52, right: 52, textAlign: 'center', opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [28, 0], clamp)}px) scale(${interpolate(progress, [0, 1], [0.95, 1], clamp)})`, zIndex: 4}}>
    {eyebrow ? <div style={{marginBottom: 10, color: '#e1ebdf', fontSize: 20, lineHeight: 1, fontWeight: 900, letterSpacing: 3}}>{eyebrow}</div> : null}
    <div style={{color: brand.lime, fontSize: compact || title.length > 25 ? 50 : 66, lineHeight: 0.99, fontWeight: 1000, letterSpacing: -2.3, textShadow: '0 7px 24px #06140f70'}}>{title}</div>
    {sub ? <div style={{marginTop: 12, color: brand.paper, fontSize: 27, lineHeight: 1.1, fontWeight: 850, letterSpacing: -0.3}}>{sub}</div> : null}
  </div>;
};

// Keep photographs clean: no labels, markers, badges or graphics sit over them.
const PhotoStage: React.FC<{frame: number; file: string; alt: string; top: number; height: number; zoom?: number; pan?: number}> = ({frame, file, alt, top, height, zoom = 1.06, pan = 20}) => {
  const entrance = interpolate(frame, [0, 12], [0, 1], clamp);
  const scale = zoom + interpolate(frame, [0, 100], [0, 0.055], clamp);
  const drift = Math.sin(frame / 25) * pan;
  return <div style={{position: 'absolute', top, left: 48, right: 48, height, overflow: 'hidden', borderRadius: 30, opacity: entrance, transform: `translateY(${interpolate(entrance, [0, 1], [24, 0], clamp)}px)`, boxShadow: '0 26px 65px #06140f70', background: brand.deep, zIndex: 2}}>
    <Img src={staticFile(`images/toyota-gr-gt/${file}`)} alt={alt} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: `translateX(${drift}px) scale(${scale})`}} />
  </div>;
};

const InfoCard: React.FC<{frame: number; top: number; left: number; width: number; title: string; detail: string; delay?: number; dark?: boolean}> = ({frame, top, left, width, title, detail, delay = 0, dark = false}) => {
  const progress = interpolate(frame - delay, [0, 10], [0, 1], clamp);
  return <div style={{position: 'absolute', top, left, width, minHeight: 154, boxSizing: 'border-box', padding: '22px 18px', borderRadius: 24, background: dark ? brand.deep : brand.lime, color: dark ? brand.lime : brand.deep, textAlign: 'center', opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [32, 0], clamp) + Math.sin((frame + delay) / 7) * 3}px)`, boxShadow: '0 16px 36px #06140f50', zIndex: 5}}>
    <div style={{fontSize: title.length > 17 ? 26 : 33, lineHeight: 1.02, fontWeight: 1000, letterSpacing: -0.5}}>{title}</div>
    <div style={{marginTop: 14, fontSize: 22, lineHeight: 1.05, fontWeight: 850}}>{detail}</div>
  </div>;
};

const SceneContent: React.FC<{id: SceneId; frame: number}> = ({id, frame}) => {
  if (id === 'hook') return <>
    <Heading frame={frame} eyebrow="UNA PREGUNTA RÁPIDA" title="¿HÍBRIDO Y TRACCIÓN TRASERA?" compact />
    <PhotoStage frame={frame} file="toyota-gr-gt-rear.jpg" alt="Vista trasera del prototipo Toyota GR GT" top={490} height={700} zoom={1.035} pan={16} />
    <div style={{position: 'absolute', top: 1220, left: 78, right: 78, color: brand.paper, textAlign: 'center', fontSize: 30, lineHeight: 1.05, fontWeight: 900, letterSpacing: 0.5, opacity: interpolate(frame, [15, 24], [0, 1], clamp)}}>¿QUÉ RUEDAS CREES QUE LO IMPULSAN?</div>
  </>;
  if (id === 'reveal') return <>
    <Heading frame={frame} eyebrow="ESTE ES EL" title="TOYOTA GR GT" sub="UN GRAN TURISMO DEPORTIVO" />
    <PhotoStage frame={frame} file="toyota-gr-gt-front.jpg" alt="Vista delantera del prototipo Toyota GR GT" top={500} height={700} zoom={1.035} pan={24} />
    <div style={{position: 'absolute', top: 1230, left: 100, right: 100, textAlign: 'center', color: brand.lime, fontSize: 28, lineHeight: 1.05, fontWeight: 950, letterSpacing: 1}}>V8 BITURBO · MOTOR ELÉCTRICO</div>
  </>;
  if (id === 'hybrid') return <>
    <Heading frame={frame} eyebrow="DOS FUENTES DE POTENCIA" title="V8 + MOTOR ELÉCTRICO" compact />
    <PhotoStage frame={frame} file="toyota-gr-gt-powertrain.jpg" alt="Vista técnica del conjunto motriz del Toyota GR GT" top={440} height={590} zoom={1.025} pan={25} />
    <InfoCard frame={frame} top={1080} left={58} width={464} title="V8 BITURBO" detail="DELANTE" delay={7} />
    <InfoCard frame={frame} top={1080} left={558} width={464} title="MOTOR ELÉCTRICO" detail="EN LA TRANSMISIÓN TRASERA" delay={13} dark />
  </>;
  if (id === 'drive') return <>
    <Heading frame={frame} eyebrow="¿QUÉ SIGNIFICA TRACCIÓN?" title="EMPUJAN LAS DE ATRÁS" compact />
    <PhotoStage frame={frame} file="toyota-gr-gt-transaxle.jpg" alt="Corte técnico de la transmisión trasera del Toyota GR GT" top={435} height={465} zoom={1.04} pan={16} />
    <div style={{position: 'absolute', top: 930, left: 0, right: 0, textAlign: 'center', color: brand.paper, fontSize: 27, fontWeight: 900, letterSpacing: 0.8, opacity: interpolate(frame, [10, 18], [0, 1], clamp)}}>LAS RUEDAS MOTRICES SON LAS QUE RECIBEN LA FUERZA</div>
    <svg viewBox="0 0 900 355" style={{position: 'absolute', top: 1010, left: 90, width: 900, height: 355, overflow: 'visible', zIndex: 4}}>
      <text x="244" y="48" textAnchor="middle" fill={brand.lime} fontSize="24" fontWeight="900" letterSpacing="2">TRASERAS · MOTRICES</text>
      <text x="658" y="48" textAnchor="middle" fill="#f7f8f5" fontSize="24" fontWeight="900" letterSpacing="2">DELANTERAS · ORIENTAN</text>
      <rect x="172" y="102" width="560" height="154" rx="74" fill="#f7f8f510" stroke="#f7f8f560" strokeWidth="3" />
      <path d="M310 104 L375 57 L545 57 L603 104" fill="#f7f8f512" stroke="#f7f8f550" strokeWidth="3" />
      <rect x="264" y="244" width="66" height="42" rx="18" fill={brand.lime} transform={`translate(0 ${Math.sin(frame / 3) * 3})`} />
      <rect x="608" y="244" width="66" height="42" rx="18" fill="#f7f8f5" transform={`translate(0 ${Math.sin(frame / 3 + 1) * 3})`} />
      <rect x="264" y="72" width="66" height="42" rx="18" fill={brand.lime} transform={`translate(0 ${Math.sin(frame / 3) * 3})`} />
      <rect x="608" y="72" width="66" height="42" rx="18" fill="#f7f8f5" transform={`translate(0 ${Math.sin(frame / 3 + 1) * 3})`} />
      <path d="M600 312 H335" fill="none" stroke={brand.lime} strokeWidth="7" strokeLinecap="round" strokeDasharray="22 17" strokeDashoffset={frame * 4} />
      <path d="M327 298 L305 312 L327 326 Z" fill={brand.lime} />
      <text x="450" y="350" textAnchor="middle" fill={brand.lime} fontSize="22" fontWeight="900" letterSpacing="2">FUERZA HACIA LAS RUEDAS TRASERAS</text>
    </svg>
  </>;
  if (id === 'balance') return <>
    <Heading frame={frame} eyebrow="OBJETIVO DE DISEÑO" title="45% DELANTE · 55% DETRÁS" compact />
    <PhotoStage frame={frame} file="toyota-gr-gt-weight-layout.jpg" alt="Esquema del empaquetado y centro de gravedad del Toyota GR GT" top={425} height={520} zoom={1.025} pan={14} />
    <div style={{position: 'absolute', top: 990, left: 72, right: 72, display: 'flex', justifyContent: 'space-between', gap: 20, zIndex: 5}}>
      <div style={{width: '45%', padding: '16px 12px', borderRadius: 18, background: brand.paper, color: brand.deep, textAlign: 'center', fontSize: 20, fontWeight: 900, letterSpacing: 1}}>DELANTE</div>
      <div style={{width: '55%', padding: '16px 12px', borderRadius: 18, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 20, fontWeight: 900, letterSpacing: 1}}>DETRÁS</div>
    </div>
    <div style={{position: 'absolute', top: 1060, left: 72, right: 72, height: 124, display: 'flex', overflow: 'hidden', borderRadius: 24, background: '#f7f8f526', zIndex: 5}}>
      <div style={{width: `${interpolate(frame, [5, 26], [0, 45], clamp)}%`, height: '100%', background: '#f7f8f5', display: 'grid', placeItems: 'center', color: brand.deep, fontSize: 53, fontWeight: 1000}}>45%</div>
      <div style={{width: `${interpolate(frame, [5, 26], [0, 55], clamp)}%`, height: '100%', background: brand.lime, display: 'grid', placeItems: 'center', color: brand.deep, fontSize: 53, fontWeight: 1000}}>55%</div>
    </div>
  </>;
  if (id === 'prototype') return <>
    <Heading frame={frame} eyebrow="UNA CIFRA EN DESARROLLO" title="OJO: ES UN OBJETIVO" compact />
    <PhotoStage frame={frame} file="toyota-gr-gt-prototypes.jpg" alt="Prototipos Toyota GR GT y GR GT3" top={490} height={650} zoom={1.035} pan={18} />
    <div style={{position: 'absolute', top: 1180, left: 70, right: 70, padding: '18px 20px', borderRadius: 20, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 27, lineHeight: 1.05, fontWeight: 950, opacity: interpolate(frame, [12, 20], [0, 1], clamp)}}>PROTOTIPO · ESPECIFICACIONES EN DESARROLLO</div>
  </>;
  if (id === 'launch') return <>
    <div style={{position: 'absolute', top: 330, left: 40, right: 40, textAlign: 'center', color: '#f7f8f5', fontSize: 25, fontWeight: 900, letterSpacing: 4, opacity: interpolate(frame, [0, 8], [0, 1], clamp)}}>LLEGADA PLANTEADA</div>
    <div style={{position: 'absolute', top: 455, left: 0, right: 0, textAlign: 'center', color: brand.lime, fontSize: 188, lineHeight: 0.9, fontWeight: 1000, letterSpacing: -10, transform: `translateX(${Math.sin(frame / 3) * 12}px) scale(${interpolate(frame, [0, 12], [0.8, 1], clamp)})`, textShadow: '0 16px 50px #06140f70'}}>2027</div>
    <div style={{position: 'absolute', top: 750, left: 120, right: 120, height: 10, borderRadius: 8, background: '#f7f8f530'}} />
    <div style={{position: 'absolute', top: 736, left: 120, width: `${interpolate(frame, [0, 65], [4, 82], clamp)}%`, maxWidth: 820, height: 38, borderRadius: 20, background: brand.lime, boxShadow: '0 0 34px #d7f36a90'}} />
    <div style={{position: 'absolute', top: 820, left: 55, right: 55, textAlign: 'center', color: brand.paper, fontSize: 31, lineHeight: 1.15, fontWeight: 900}}>SU LLEGADA SE PLANTEA<br /><span style={{color: brand.lime}}>ALREDEDOR DE 2027</span></div>
    <div style={{position: 'absolute', top: 1040, left: 160, right: 160, height: 3, background: '#d7f36a65'}} />
  </>;
  return <>
    <div style={{position: 'absolute', top: 252, left: 0, right: 0, display: 'flex', justifyContent: 'center', opacity: interpolate(frame, [0, 10], [0, 1], clamp), transform: `scale(${1 + Math.sin(frame / 5) * 0.025})`, zIndex: 5}}>
      <div style={{width: 225, height: 225, borderRadius: '50%', overflow: 'hidden', background: brand.deep, boxShadow: '0 18px 30px #06140f70'}}>
        <Img src={staticFile('logo-marca-kilometro-claro.png')} alt="Símbolo C lima oficial de Kilómetro Claro" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
      </div>
    </div>
    <div style={{position: 'absolute', top: 535, left: 55, right: 55, textAlign: 'center', color: brand.paper, fontSize: 54, lineHeight: 1.02, fontWeight: 1000, letterSpacing: -1.8, opacity: interpolate(frame, [5, 16], [0, 1], clamp)}}>¿TE CONVENCE?<br /><span style={{color: brand.lime}}>DESCUBRE LA GUÍA</span></div>
    <div style={{position: 'absolute', top: 790, left: 65, right: 65, padding: '24px 18px', borderRadius: 24, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 41, lineHeight: 1, fontWeight: 1000, letterSpacing: -0.5, boxShadow: '0 20px 45px #06140f6e', transform: `scale(${interpolate(frame, [15, 24], [0.94, 1], clamp)})`}}>KILOMETROCLARO.COM</div>
    <div style={{position: 'absolute', top: 885, left: 80, right: 80, textAlign: 'center', color: '#e7efe9', fontSize: 23, lineHeight: 1.1, fontWeight: 850, letterSpacing: 1}}>LEE EL ANÁLISIS COMPLETO DEL TOYOTA GR GT</div>
  </>;
};

export const ToyotaGrGtPromo: React.FC<ToyotaGrGtSpec> = (spec) => {
  const frame = useCurrentFrame();
  const seconds = frame / spec.fps;
  const sceneIndex = scenes.findIndex((scene) => seconds >= scene.start && seconds < scene.end);
  const activeIndex = sceneIndex < 0 ? scenes.length - 1 : sceneIndex;
  const active = scenes[activeIndex];
  const localFrame = Math.max(0, frame - Math.round(active.start * spec.fps));
  const caption = spec.captions.find((cue) => seconds >= cue.startSeconds && seconds < cue.endSeconds);
  const captionOpacity = caption ? interpolate(frame, [caption.startSeconds * spec.fps, caption.startSeconds * spec.fps + 4, caption.endSeconds * spec.fps - 4, caption.endSeconds * spec.fps], [0, 1, 1, 0], clamp) : 0;
  const captionSize = caption ? (caption.text.length > 74 ? 29 : caption.text.length > 53 ? 33 : 38) : 36;
  const gridOffset = (frame * 0.58) % 92;
  return <AbsoluteFill style={{background: brand.deep, overflow: 'hidden', fontFamily: brand.font}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 52% 45%, #1d5d4e 0%, #173d34 42%, #0a211a 100%)'}} />
    <div style={{position: 'absolute', inset: 0, opacity: 0.13, backgroundImage: 'linear-gradient(#d7f36a 1px, transparent 1px), linear-gradient(90deg, #d7f36a 1px, transparent 1px)', backgroundSize: '92px 92px', backgroundPosition: `${gridOffset}px ${-gridOffset}px`, maskImage: 'linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)'}} />
    <div style={{position: 'absolute', top: 390, right: -270, width: 670, height: 670, border: '2px solid #d7f36a35', borderRadius: '50%', transform: `translateY(${Math.sin(frame / 22) * 30}px) scale(${1 + Math.sin(frame / 17) * 0.025})`}} />
    <div style={{position: 'absolute', bottom: 200, left: -260, width: 560, height: 560, borderRadius: '50%', background: brand.green, opacity: 0.42, transform: `translateY(${Math.cos(frame / 25) * 28}px)`}} />
    <SceneContent id={active.id} frame={localFrame} />
    <BrandLogo style={{top: 28, left: 38, transform: 'scale(0.59)', transformOrigin: 'top left', zIndex: 30}} />
    <div style={{position: 'absolute', top: 42, right: 42, padding: '12px 16px', borderRadius: 14, background: '#f7f8f5e8', color: brand.deep, fontSize: 18, fontWeight: 900, letterSpacing: 0.7, zIndex: 29}}>TOYOTA GR GT</div>
    <div style={{position: 'absolute', top: 118, left: 48, right: 48, display: 'flex', gap: 8, zIndex: 30}}>
      {scenes.map((scene, index) => {
        const progress = index < activeIndex ? 1 : index > activeIndex ? 0 : interpolate(seconds, [scene.start, scene.end], [0, 1], clamp);
        return <div key={scene.id} style={{height: 8, flex: 1, overflow: 'hidden', borderRadius: 8, background: '#f7f8f53b'}}><div style={{width: `${progress * 100}%`, height: '100%', borderRadius: 8, background: brand.lime, boxShadow: index === activeIndex ? '0 0 12px #d7f36a90' : 'none'}} /></div>;
      })}
    </div>
    <div style={{position: 'absolute', top: 145, left: 50, right: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#e7efe9', fontSize: 17, lineHeight: 1, fontWeight: 900, letterSpacing: 1, zIndex: 28}}>
      <span>{String(activeIndex + 1).padStart(2, '0')} / 08 · {active.label}</span>
      <span>{Math.max(0, spec.durationSeconds - seconds).toFixed(1).replace('.', ',')} s</span>
    </div>
    {caption ? <div style={{position: 'absolute', left: 54, right: 54, bottom: 203, minHeight: 148, padding: '22px 27px', boxSizing: 'border-box', display: 'grid', placeItems: 'center', borderRadius: 28, background: brand.paper, color: brand.deep, fontSize: captionSize, lineHeight: 1.12, fontWeight: 850, textAlign: 'center', boxShadow: '0 20px 50px #06140f95', opacity: captionOpacity, zIndex: 35}}>{caption.text}</div> : null}
    <div style={{position: 'absolute', bottom: 48, left: 54, right: 54, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#dfe9e2', fontSize: 15, fontWeight: 750, letterSpacing: 0.5, zIndex: 25}}>
      <span>IMÁGENES OFICIALES · TOYOTA MOTOR CORPORATION / TOYOTA GAZOO RACING</span>
      <span>{Math.min(spec.durationSeconds, seconds).toFixed(1).replace('.', ',')} s</span>
    </div>
    <Audio src={staticFile('audio/voice-video-009.wav')} volume={1} />
  </AbsoluteFill>;
};
