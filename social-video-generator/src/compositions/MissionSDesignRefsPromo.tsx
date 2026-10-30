import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from '../components/BrandLogo';

type CaptionCue = {startSeconds: number; endSeconds: number; text: string};
export type MissionSDesignRefsSpec = {
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

type SceneId = 'hook' | 'set' | '911' | 'gt1' | '959' | '917' | '928' | 'identity' | 'platform' | 'vision' | 'cta';
const scenes: {id: SceneId; start: number; end: number}[] = [
  {id: 'hook', start: 0, end: 4.3},
  {id: 'set', start: 4.3, end: 7.85},
  {id: '911', start: 7.85, end: 11.2},
  {id: 'gt1', start: 11.2, end: 12.5},
  {id: '959', start: 12.5, end: 17.6},
  {id: '917', start: 17.6, end: 19.05},
  {id: '928', start: 19.05, end: 25.1},
  {id: 'identity', start: 25.1, end: 28.1},
  {id: 'platform', start: 28.1, end: 34.3},
  {id: 'vision', start: 34.3, end: 40.25},
  {id: 'cta', start: 40.25, end: 45.76},
];
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const PhotoStage: React.FC<{frame: number; top?: number; height?: number; spotX?: number; spotY?: number; zoom?: number; file?: string; label?: string | null; shade?: boolean}> = ({frame, top = 505, height = 610, spotX, spotY = 0.58, zoom = 1.18, file = 'porsche-mission-s-exterior.jpg', label = 'MISSION S · MODELO DE VISIÓN', shade = true}) => {
  const scale = zoom + Math.sin(frame / 19) * 0.055;
  const panX = Math.sin(frame / 31) * 52;
  const markerScale = 1 + Math.sin(frame / 6) * 0.08;
  return <div style={{position: 'absolute', top, left: 50, right: 50, height, overflow: 'hidden', borderRadius: 34, border: '2px solid ' + brand.lime, background: brand.deep, boxShadow: '0 28px 70px #06140f8c'}}>
    <Img src={staticFile('images/' + file)} alt="Porsche Mission S, modelo de visión" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'translateX(' + panX + 'px) scale(' + scale + ')'}} />
    {shade ? <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #071b141c 32%, #071b1499 100%)'}} /> : null}
    {label ? <div style={{position: 'absolute', top: 18, left: 18, padding: '10px 14px', borderRadius: 12, background: '#f7f8f5ef', color: brand.deep, fontSize: 18, fontWeight: 950, letterSpacing: 0.6}}>{label}</div> : null}
    {spotX !== undefined ? <div style={{position: 'absolute', left: (spotX * 100) + '%', top: (spotY * 100) + '%', width: 118, height: 118, marginLeft: -59, marginTop: -59, border: '4px solid ' + brand.lime, borderRadius: '50%', boxShadow: '0 0 0 13px #d7f36a40, 0 0 38px #d7f36aa0', transform: 'scale(' + markerScale + ')'}} /> : null}
  </div>;
};

const BigHeading: React.FC<{eyebrow?: string; title: string; sub?: string; frame: number}> = ({eyebrow, title, sub, frame}) => {
  const progress = interpolate(frame, [0, 9], [0, 1], clamp);
  return <div style={{position: 'absolute', top: 245, left: 52, right: 52, textAlign: 'center', opacity: progress, transform: 'translateY(' + interpolate(progress, [0, 1], [30, 0], clamp) + 'px) scale(' + interpolate(progress, [0, 1], [0.94, 1], clamp) + ')'}}>
    {eyebrow ? <div style={{color: '#dbe8e0', fontSize: 23, fontWeight: 900, letterSpacing: 3}}>{eyebrow}</div> : null}
    <div style={{color: brand.lime, fontSize: title.length > 22 ? 47 : 62, lineHeight: 1.03, fontWeight: 950, letterSpacing: -1.5, textShadow: '0 8px 28px #06140f85'}}>{title}</div>
    {sub ? <div style={{marginTop: 10, color: brand.paper, fontSize: 27, lineHeight: 1.12, fontWeight: 850}}>{sub}</div> : null}
  </div>;
};

const SceneContent: React.FC<{id: SceneId; frame: number; seconds: number}> = ({id, frame, seconds}) => {
  if (id === 'hook') return <>
    <div style={{position: 'absolute', top: 260, left: 46, right: 46, color: brand.paper, textAlign: 'center', fontSize: 59, lineHeight: 1.02, fontWeight: 950, letterSpacing: -1.8, transform: 'scale(' + interpolate(frame, [0, 18], [0.88, 1], clamp) + ')'}}>¿CUÁNTOS PORSCHE<br /><span style={{color: brand.lime}}>RECONOCES?</span></div>
    <PhotoStage frame={frame} top={540} height={600} zoom={1.08} />
    <div style={{position: 'absolute', top: 1190, left: 120, right: 120, padding: '20px 24px', borderRadius: 24, color: brand.deep, background: brand.lime, textAlign: 'center', fontSize: 34, fontWeight: 950, transform: 'translateY(' + interpolate(frame, [26, 38], [48, 0], clamp) + 'px)'}}>5 GUIÑOS ESCONDIDOS EN UNO</div>
  </>;
  if (id === 'set') return <>
    <BigHeading eyebrow="DISEÑO CON MEMORIA" title="CINCO GUIÑOS HISTÓRICOS" frame={frame} />
    <PhotoStage frame={frame} top={520} height={590} zoom={1.13} />
    <div style={{position: 'absolute', top: 1180, left: 54, right: 54, display: 'flex', justifyContent: 'center', gap: 10}}>
      {['911', 'GT1', '959', '917', '928'].map((name, i) => <div key={name} style={{padding: '17px 18px', borderRadius: 18, color: brand.deep, background: i % 2 === 0 ? brand.lime : brand.paper, fontSize: 31, fontWeight: 950, transform: 'translateY(' + (Math.sin((frame + i * 8) / 5) * 10) + 'px) scale(' + (0.96 + Math.sin((frame + i * 9) / 7) * 0.04) + ')'}}>{name}</div>)}
    </div>
  </>;
  if (id === '911') return <>
    <BigHeading eyebrow="FAROS Y ALETAS" title="911" sub="EL GUIÑO MÁS RECONOCIBLE" frame={frame} />
    <PhotoStage frame={frame} top={520} height={590} spotX={0.17} spotY={0.52} zoom={1.23} />
    <div style={{position: 'absolute', top: 1190, left: 120, right: 120, padding: '18px 24px', borderRadius: 22, textAlign: 'center', background: brand.deep, color: brand.lime, fontSize: 31, fontWeight: 950}}>FAROS REDONDOS · ALETAS TORPEDO</div>
  </>;
  if (id === 'gt1') return <>
    <div style={{position: 'absolute', inset: 0, background: brand.lime, opacity: 0.92}} />
    <div style={{position: 'absolute', top: 410, left: 48, right: 48, textAlign: 'center', color: brand.deep, fontSize: 100, lineHeight: 0.9, fontWeight: 1000, letterSpacing: -4, transform: 'translateX(' + (Math.sin(frame / 2) * 16) + 'px)'}}>GT1</div>
    <div style={{position: 'absolute', top: 555, left: 70, right: 70, textAlign: 'center', color: brand.deep, fontSize: 35, fontWeight: 950}}>FRONTAL PLANO</div>
    <div style={{position: 'absolute', left: 210, top: 660, width: 660, height: 260, border: '4px solid ' + brand.deep, borderRadius: '45% 45% 18% 18%', transform: 'perspective(550px) rotateX(58deg) scale(' + (1 + Math.sin(frame) * 0.035) + ')'}} />
    <div style={{position: 'absolute', top: 1000, left: 110, right: 110, textAlign: 'center', color: brand.deep, fontSize: 28, fontWeight: 900, letterSpacing: 1}}>EL MISSION S MIRA AL COCHE DE CARRERAS</div>
  </>;
  if (id === '959') return <>
    <BigHeading eyebrow="LÍNEA DE TECHO BAJO EL ALERÓN" title="959" sub="UNA SILUETA QUE MARCÓ ÉPOCA" frame={frame} />
    <PhotoStage frame={frame} top={520} height={590} spotX={0.57} spotY={0.27} zoom={1.16} />
    <svg viewBox="0 0 1000 250" style={{position: 'absolute', left: 70, top: 575, width: 940, height: 250, overflow: 'visible'}}>
      <path d="M120 205 C280 42, 525 35, 795 170" fill="none" stroke={brand.lime} strokeWidth="10" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset={interpolate(frame, [0, 25], [1000, 0], clamp)} />
      <circle cx="795" cy="170" r="18" fill={brand.lime} transform={'scale(' + (1 + Math.sin(frame / 4) * 0.12) + ') translate(' + (795 * (1 - 1 / (1 + Math.sin(frame / 4) * 0.12))) + ' ' + (170 * (1 - 1 / (1 + Math.sin(frame / 4) * 0.12))) + ')'} />
    </svg>
    <div style={{position: 'absolute', top: 1190, left: 125, right: 125, padding: '17px 22px', borderRadius: 21, textAlign: 'center', background: brand.lime, color: brand.deep, fontSize: 30, fontWeight: 950}}>LA REFERENCIA: PORSCHE 959</div>
  </>;
  if (id === '917') return <>
    <div style={{position: 'absolute', inset: 0, background: brand.deep}} />
    <PhotoStage frame={frame} top={490} height={640} spotX={0.78} spotY={0.53} zoom={1.2} />
    <div style={{position: 'absolute', top: 280, left: 48, right: 48, textAlign: 'center', color: brand.paper, fontSize: 29, fontWeight: 900, letterSpacing: 2}}>REFRIGERACIÓN TRASERA</div>
    <div style={{position: 'absolute', top: 325, left: 0, right: 0, textAlign: 'center', color: brand.lime, fontSize: 79, fontWeight: 1000, letterSpacing: -3}}>917</div>
    <svg viewBox="0 0 300 300" style={{position: 'absolute', left: 390, top: 665, width: 300, height: 300, transform: 'rotate(' + (frame * 8) + 'deg)', filter: 'drop-shadow(0 0 20px #d7f36a90)'}}>
      <circle cx="150" cy="150" r="120" fill="#0b231d" fillOpacity=".82" stroke={brand.lime} strokeWidth="8" />
      {[0, 45, 90, 135].map((angle) => <path key={angle} d="M150 42 C196 73 202 117 150 150 C117 130 111 88 150 42Z" fill={brand.lime} transform={'rotate(' + angle + ' 150 150)'} />)}
      <circle cx="150" cy="150" r="23" fill={brand.paper} />
    </svg>
    <div style={{position: 'absolute', top: 1200, left: 110, right: 110, textAlign: 'center', color: brand.paper, fontSize: 28, fontWeight: 950}}>EL VENTILADOR RINDE HOMENAJE AL 917</div>
  </>;
  if (id === '928') return <>
    <BigHeading eyebrow="DETALLE: LLANTAS LIGERAS" title="928" sub="EL DISEÑO TIPO DIAL, REINTERPRETADO" frame={frame} />
    <PhotoStage frame={frame} top={530} height={580} spotX={0.78} spotY={0.69} zoom={1.29} />
    <div style={{position: 'absolute', left: 661, top: 782, width: 296, height: 296, borderRadius: '50%', border: '5px dashed ' + brand.lime, boxShadow: '0 0 0 15px #d7f36a30', transform: 'rotate(' + (frame * 0.6) + 'deg) scale(' + (1 + Math.sin(frame / 7) * 0.035) + ')'}} />
    <div style={{position: 'absolute', top: 1190, left: 110, right: 110, padding: '17px 22px', borderRadius: 20, textAlign: 'center', background: brand.deep, color: brand.lime, fontSize: 30, fontWeight: 950}}>UNA REFERENCIA MUY DEPORTIVA</div>
  </>;
  if (id === 'identity') return <>
    <BigHeading eyebrow="CLÁSICO, PERO NO COPIA" title="UNA IDENTIDAD NUEVA" frame={frame} />
    <PhotoStage frame={frame} top={520} height={610} zoom={1.1} />
    <div style={{position: 'absolute', top: 1190, left: 100, right: 100, textAlign: 'center', color: brand.lime, fontSize: 33, fontWeight: 950, letterSpacing: 0.4}}>911 · GT1 · 959 · 917 · 928</div>
  </>;
  if (id === 'platform') return <>
    <BigHeading eyebrow="NO ES SOLO NOSTALGIA" title="MOTOR CENTRAL" sub="OTRAS PROPORCIONES · NUEVA LECTURA" frame={frame} />
    <PhotoStage frame={frame} top={520} height={590} zoom={1.06} file="porsche-mission-s-architecture.png" label={null} shade={false} />
    <div style={{position: 'absolute', top: 1190, left: 120, right: 120, padding: '18px 22px', borderRadius: 22, textAlign: 'center', background: brand.lime, color: brand.deep, fontSize: 29, fontWeight: 950}}>DIAGRAMA CONCEPTUAL · NO ES EL DISEÑO FINAL</div>
  </>;
  if (id === 'vision') return <>
    <BigHeading eyebrow="ANTES DE IMAGINARLO EN CARRETERA" title="MODELO DE VISIÓN" sub="EL COCHE DE SERIE PODRÍA CAMBIAR" frame={frame} />
    <PhotoStage frame={frame} top={520} height={610} zoom={1.11} />
    <div style={{position: 'absolute', top: 1200, left: 150, right: 150, padding: '18px 25px', borderRadius: 22, border: '2px solid ' + brand.lime, background: brand.deep, color: brand.paper, textAlign: 'center', fontSize: 29, fontWeight: 950}}>DISEÑO Y ESPECIFICACIONES DE SERIE: POR CONFIRMAR</div>
  </>;
  return <>
    <div style={{position: 'absolute', top: 215, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}><Img src={staticFile('logo-marca-kilometro-claro.png')} alt="Símbolo C oficial de Kilómetro Claro" style={{width: 186, height: 186, objectFit: 'contain', filter: 'drop-shadow(0 14px 28px #06140f70)'}} /></div>
    <div style={{position: 'absolute', top: 435, left: 65, right: 65, textAlign: 'center', color: brand.paper, fontSize: 47, lineHeight: 1.03, fontWeight: 950}}>CINCO GUIÑOS<br /><span style={{color: brand.lime}}>UNA HISTORIA POR DESCUBRIR</span></div>
    <div style={{position: 'absolute', left: 66, right: 66, top: 745, height: 440, borderRadius: 32, overflow: 'hidden', border: '2px solid ' + brand.lime, boxShadow: '0 28px 70px #06140f85'}}><Img src={staticFile('images/porsche-mission-s-exterior.jpg')} alt="Porsche Mission S, modelo de visión" style={{width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(' + (1.03 + Math.sin(frame / 15) * 0.025) + ')'}} /></div>
    <div style={{position: 'absolute', left: 68, right: 68, top: 1240, padding: '23px 18px', borderRadius: 25, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 43, fontWeight: 950}}>KILOMETROCLARO.COM</div>
    <div style={{position: 'absolute', left: 85, right: 85, top: 1382, textAlign: 'center', color: brand.paper, fontSize: 26, fontWeight: 900}}>DESCUBRE LA GUÍA COMPLETA&nbsp; ↗</div>
  </>;
};

export const MissionSDesignRefsPromo: React.FC<MissionSDesignRefsSpec> = (spec) => {
  const frame = useCurrentFrame();
  const seconds = frame / spec.fps;
  const active = scenes.find((scene) => seconds >= scene.start && seconds < scene.end) ?? scenes[scenes.length - 1];
  const local = Math.max(0, frame - Math.round(active.start * spec.fps));
  const caption = spec.captions.find((cue) => seconds >= cue.startSeconds && seconds < cue.endSeconds);
  const captionOpacity = caption ? interpolate(frame, [caption.startSeconds * spec.fps, caption.startSeconds * spec.fps + 4, caption.endSeconds * spec.fps - 4, caption.endSeconds * spec.fps], [0, 1, 1, 0], clamp) : 0;
  const captionSize = caption ? (caption.text.length > 88 ? 27 : caption.text.length > 68 ? 30 : caption.text.length > 48 ? 34 : 38) : 36;
  const grid = (frame * 0.56) % 80;
  return <AbsoluteFill style={{background: brand.deep, overflow: 'hidden', fontFamily: brand.font}}>
    <Img src={staticFile('images/porsche-mission-s-exterior.jpg')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'blur(18px) brightness(0.22) saturate(0.65)', transform: 'scale(1.18)', opacity: 0.82}} />
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 53% 42%, #1d5d4eac 0%, #173d34e8 49%, #0a211aef 100%)'}} />
    <div style={{position: 'absolute', inset: 0, opacity: 0.14, backgroundImage: 'linear-gradient(#d7f36a 1px, transparent 1px), linear-gradient(90deg, #d7f36a 1px, transparent 1px)', backgroundSize: '80px 80px', backgroundPosition: grid + 'px ' + (-grid) + 'px', maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)'}} />
    <div style={{position: 'absolute', top: -160, right: -190, width: 560, height: 560, borderRadius: '50%', background: brand.lime, opacity: 0.1, transform: 'translateY(' + (Math.sin(frame / 22) * 28) + 'px)'}} />
    <div style={{position: 'absolute', bottom: 200, left: -245, width: 560, height: 560, borderRadius: '50%', background: brand.green, opacity: 0.38, transform: 'translateY(' + (Math.cos(frame / 26) * 25) + 'px)'}} />
    <SceneContent id={active.id} frame={local} seconds={seconds} />
    <BrandLogo style={{top: 42, left: 48, transform: 'scale(0.7)', transformOrigin: 'top left', zIndex: 30}} />
    <div style={{position: 'absolute', top: 57, right: 48, padding: '13px 18px', borderRadius: 16, background: '#f7f8f5e8', color: brand.deep, fontSize: 18, fontWeight: 900, letterSpacing: 0.5, zIndex: 28}}>MISSION S · DISEÑO</div>
    {caption ? <div style={{position: 'absolute', left: 55, right: 55, bottom: 215, minHeight: 150, padding: '24px 29px', boxSizing: 'border-box', display: 'grid', placeItems: 'center', borderRadius: 32, background: brand.paper, color: brand.deep, fontSize: captionSize, lineHeight: 1.13, fontWeight: 850, textAlign: 'center', boxShadow: '0 20px 50px #06140f95', opacity: captionOpacity, zIndex: 25}}>{caption.text}</div> : null}
    <div style={{position: 'absolute', bottom: 54, left: 68, right: 68, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#e5eee8', fontSize: 16, fontWeight: 750, letterSpacing: 0.45, zIndex: 19}}>
      <span>IMÁGENES OFICIALES: PORSCHE AG</span>
      <span>{String(Math.min(spec.durationSeconds, seconds).toFixed(1)).replace('.', ',')} s</span>
    </div>
    <Audio src={staticFile('audio/voice-video-008.wav')} volume={1} />
  </AbsoluteFill>;
};
