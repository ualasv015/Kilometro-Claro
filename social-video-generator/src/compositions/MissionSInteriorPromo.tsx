import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from '../components/BrandLogo';

type CaptionCue = {startSeconds: number; endSeconds: number; text: string};
export type MissionSInteriorSpec = {
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

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
type SceneId = 'hook' | 'instruments' | 'tach' | 'navigation' | 'focus' | 'vision' | 'cta';
const scenes: {id: SceneId; start: number; end: number}[] = [
  {id: 'hook', start: 0, end: 5.9},
  {id: 'instruments', start: 5.9, end: 12.94},
  {id: 'tach', start: 12.94, end: 18.82},
  {id: 'navigation', start: 18.82, end: 24.04},
  {id: 'focus', start: 24.04, end: 29.42},
  {id: 'vision', start: 29.42, end: 35.16},
  {id: 'cta', start: 35.16, end: 39.2},
];

const PhotoPanel: React.FC<{frame: number; file: string; alt: string; top?: number; height?: number; zoomTo?: number}> = ({frame, file, alt, top = 510, height = 560, zoomTo = 1.14}) => {
  const scale = interpolate(frame, [0, 42, 86, 145, 185], [1.015, zoomTo, zoomTo - 0.035, zoomTo + 0.015, 1.06], clamp);
  const pan = interpolate(frame, [0, 90, 185], [-24, 22, -8], clamp);
  return (
    <div style={{position: 'absolute', left: 52, right: 52, top, height, borderRadius: 34, overflow: 'hidden', border: '2px solid ' + brand.lime, background: '#111b18', boxShadow: '0 30px 76px #06140f75'}}>
      <Img src={staticFile('images/' + file)} alt={alt} style={{width: '100%', height: '100%', objectFit: 'cover', transform: 'translateX(' + pan + 'px) scale(' + scale + ')'}} />
      <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #071b1420 35%, #071b148f 100%)'}} />
      <div style={{position: 'absolute', left: 20, top: 19, padding: '11px 15px', borderRadius: 13, background: '#f7f8f5ed', color: brand.deep, fontSize: 19, fontWeight: 950, letterSpacing: 0.7}}>MISSION S · MODELO DE VISIÓN</div>
    </div>
  );
};

const PopCard: React.FC<{frame: number; delay?: number; children: React.ReactNode; dark?: boolean; style?: React.CSSProperties}> = ({frame, delay = 0, children, dark = false, style}) => {
  const progress = interpolate(frame - delay, [0, 14], [0, 1], clamp);
  return <div style={{position: 'absolute', opacity: progress, transform: 'translateY(' + interpolate(progress, [0, 1], [54, 0], clamp) + 'px) scale(' + interpolate(progress, [0, 1], [0.94, 1], clamp) + ')', borderRadius: 25, background: dark ? brand.deep : brand.paper, color: dark ? brand.lime : brand.deep, boxShadow: '0 20px 48px #06140f65', ...style}}>{children}</div>;
};

const SceneContent: React.FC<{id: SceneId; frame: number; seconds: number; spec: MissionSInteriorSpec}> = ({id, frame, seconds, spec}) => {
  const local = Math.max(0, frame - Math.round((scenes.find((scene) => scene.id === id)?.start ?? 0) * spec.fps));
  if (id === 'hook') {
    return <>
      <div style={{position: 'absolute', top: 260, left: 52, right: 52, color: brand.paper, textAlign: 'center', fontSize: 67, lineHeight: 1.02, fontWeight: 950, letterSpacing: -2, transform: 'scale(' + interpolate(local, [0, 23], [0.9, 1], clamp) + ')'}}>¿SIN PANTALLA<br /><span style={{color: brand.lime}}>CENTRAL FIJA?</span></div>
      <PhotoPanel frame={local} file="porsche-mission-s-interior.jpg" alt="Habitáculo del modelo de visión Porsche Mission S" top={560} height={560} zoomTo={1.17} />
      <div style={{position: 'absolute', top: 1170, left: 155, right: 155, padding: '20px 22px', borderRadius: 23, textAlign: 'center', background: brand.lime, color: brand.deep, fontSize: 31, fontWeight: 950, transform: 'translateY(' + interpolate(local, [75, 92], [48, 0], clamp) + 'px)'}}>EN EL MISSION S, SÍ</div>
    </>;
  }
  if (id === 'instruments') {
    const dials = seconds < 8.22;
    const highlightIndex = Math.min(4, Math.floor(Math.max(0, seconds - 5.9) / 0.46));
    if (dials) {
      const xPositions = [12, 29, 50, 70, 87];
      return <>
        <div style={{position: 'absolute', top: 278, left: 64, right: 64, color: brand.paper, textAlign: 'center', fontSize: 48, lineHeight: 1.05, fontWeight: 950}}>CINCO INSTRUMENTOS<br /><span style={{color: brand.lime}}>REDONDOS</span></div>
        <PhotoPanel frame={local} file="porsche-mission-s-controls.jpg" alt="Cinco instrumentos redondos en el salpicadero del Mission S" top={510} height={560} zoomTo={1.18} />
        {xPositions.map((x, index) => <div key={index} style={{position: 'absolute', left: 52 + 976 * x / 100 - 42, top: 510 + 560 * 0.64 - 42, width: 84, height: 84, borderRadius: 50, border: '4px solid ' + (highlightIndex === index ? brand.lime : '#f7f8f5aa'), boxShadow: highlightIndex === index ? '0 0 0 13px #d7f36a40' : 'none', transform: 'scale(' + (highlightIndex === index ? 1.08 : 0.9) + ')'}} />)}
        <div style={{position: 'absolute', left: 335, right: 335, top: 1150, padding: '17px 20px', borderRadius: 20, textAlign: 'center', background: brand.deep, color: brand.lime, fontSize: 29, fontWeight: 950}}>MANDOS FÍSICOS + FUNCIONES DIGITALES</div>
      </>;
    }
    return <>
      <div style={{position: 'absolute', top: 300, left: 64, right: 64, color: brand.paper, textAlign: 'center', fontSize: 48, fontWeight: 950}}>MANDOS FÍSICOS</div>
      <PhotoPanel frame={local + 75} file="porsche-mission-s-dials.jpg" alt="Selector y mandos físicos en el interior del Mission S" top={510} height={560} zoomTo={1.2} />
      <PopCard frame={local} delay={16} style={{left: 115, right: 115, top: 1140, padding: '19px 23px', textAlign: 'center', fontSize: 29, fontWeight: 950}}>ANALÓGICO Y DIGITAL, JUNTOS</PopCard>
    </>;
  }
  if (id === 'tach') {
    return <>
      <div style={{position: 'absolute', top: 280, left: 55, right: 55, color: brand.paper, textAlign: 'center', fontSize: 48, fontWeight: 950}}>EL CUENTARREVOLUCIONES<br /><span style={{color: brand.lime}}>EN EL CENTRO</span></div>
      <PhotoPanel frame={local + 40} file="porsche-mission-s-controls.jpg" alt="Cuentarrevoluciones central con aguja analógica y pantalla detrás" top={510} height={560} zoomTo={1.5} />
      <div style={{position: 'absolute', left: '50%', top: 510 + 560 * 0.61, width: 220, height: 220, marginLeft: -110, marginTop: -110, borderRadius: '50%', border: '5px solid ' + brand.lime, boxShadow: '0 0 0 15px #d7f36a40', transform: 'scale(' + (1 + Math.sin(local / 7) * 0.045) + ')'}} />
      <PopCard frame={local} delay={20} style={{left: 145, right: 145, top: 1150, padding: '18px 20px', textAlign: 'center', fontSize: 29, fontWeight: 950}}>AGUJA ANALÓGICA · PANTALLA DETRÁS</PopCard>
    </>;
  }
  if (id === 'navigation') {
    const phoneY = interpolate(local, [0, 18, 92, 135], [465, 0, 0, -90], clamp);
    const phoneScale = interpolate(local, [0, 18, 130], [0.78, 1, 1.03], clamp);
    return <>
      <div style={{position: 'absolute', top: 280, left: 62, right: 62, textAlign: 'center', color: brand.paper, fontSize: 48, fontWeight: 950}}>¿Y LA NAVEGACIÓN?</div>
      <PhotoPanel frame={local + 25} file="porsche-mission-s-interior.jpg" alt="Consola central del Mission S" top={540} height={525} zoomTo={1.22} />
      <div style={{position: 'absolute', left: 360, top: 645, width: 360, height: 590, borderRadius: 48, padding: 13, boxSizing: 'border-box', background: '#101916', border: '5px solid #f7f8f5', boxShadow: '0 35px 75px #06140fa8', transform: 'translateY(' + phoneY + 'px) scale(' + phoneScale + ')'}}>
        <div style={{position: 'absolute', left: 118, right: 118, top: 13, height: 20, borderRadius: 20, background: '#60716b'}} />
        <div style={{position: 'absolute', inset: 18, borderRadius: 31, overflow: 'hidden', background: '#e5ede6'}}>
          <div style={{position: 'absolute', top: 27, left: 24, right: 24, height: 44, borderRadius: 16, background: brand.paper, color: brand.deep, fontSize: 18, fontWeight: 900, display: 'grid', placeItems: 'center'}}>NAVEGACIÓN</div>
          <svg viewBox="0 0 300 390" style={{position: 'absolute', inset: '76px 0 0', width: '100%', height: '78%'}}>
            <path d="M28 280 C72 230 66 184 124 170 C183 156 175 114 257 80" fill="none" stroke={brand.green} strokeWidth="18" strokeLinecap="round" strokeDasharray="3 24" />
            <path d="M25 80 L90 127 L158 97 L235 161 L278 132" fill="none" stroke="#bac9bf" strokeWidth="7" strokeLinecap="round" />
            <circle cx="28" cy="280" r="18" fill={brand.lime} stroke={brand.deep} strokeWidth="7" />
            <path d="M257 59 L276 97 L238 89 Z" fill={brand.deep} />
          </svg>
        </div>
      </div>
      <div style={{position: 'absolute', top: 1255, left: 120, right: 120, display: 'flex', justifyContent: 'center'}}>
        <div style={{padding: '17px 25px', borderRadius: 19, background: brand.lime, color: brand.deep, fontSize: 30, fontWeight: 950}}>SOPORTE RETRÁCTIL · MAGSAFE</div>
      </div>
      <div style={{position: 'absolute', top: 1365, left: 120, right: 120, color: '#e8eee9', textAlign: 'center', fontSize: 20, fontWeight: 800}}>Esquema gráfico; no representa el salpicadero real.</div>
    </>;
  }
  if (id === 'focus') {
    const cards = [
      {label: 'PANTALLAS FIJAS', value: 'MENOS', color: brand.paper, text: brand.deep},
      {label: 'ATENCIÓN AL VOLANTE', value: 'MÁS', color: brand.lime, text: brand.deep},
    ];
    return <>
      <div style={{position: 'absolute', top: 285, left: 64, right: 64, textAlign: 'center', color: brand.paper, fontSize: 47, lineHeight: 1.05, fontWeight: 950}}>¿QUÉ BUSCA ESTE<br /><span style={{color: brand.lime}}>DISEÑO?</span></div>
      <PhotoPanel frame={local + 90} file="porsche-mission-s-interior.jpg" alt="Puesto de conducción orientado al conductor" top={510} height={520} zoomTo={1.18} />
      {cards.map((card, index) => {
        const y = interpolate(local - index * 22, [0, 20], [100, 0], clamp);
        return <div key={card.label} style={{position: 'absolute', left: 100, right: 100, top: 1080 + index * 145, height: 112, borderRadius: 25, padding: '0 27px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 21, background: card.color, color: card.text, boxShadow: '0 17px 40px #06140f60', transform: 'translateY(' + y + 'px)'}}>
          <strong style={{fontSize: 46, fontWeight: 950, color: brand.green}}>{card.value}</strong><span style={{fontSize: 24, fontWeight: 950, letterSpacing: 0.4}}>{card.label}</span>
        </div>;
      })}
    </>;
  }
  if (id === 'vision') {
    return <>
      <div style={{position: 'absolute', top: 290, left: 60, right: 60, textAlign: 'center', color: brand.paper, fontSize: 47, lineHeight: 1.04, fontWeight: 950}}>PERO OJO:<br /><span style={{color: brand.lime}}>ES UN MODELO DE VISIÓN</span></div>
      <PhotoPanel frame={local + 125} file="porsche-mission-s-exterior.jpg" alt="Porsche Mission S, modelo de visión" top={540} height={540} zoomTo={1.16} />
      <PopCard frame={local} delay={15} dark style={{left: 100, right: 100, top: 1150, minHeight: 150, display: 'grid', placeItems: 'center', padding: '18px 24px', boxSizing: 'border-box', textAlign: 'center', border: '2px solid ' + brand.lime, fontSize: 37, lineHeight: 1.07, fontWeight: 950}}>¿QUÉ LLEGARÁ<br />A PRODUCCIÓN?</PopCard>
    </>;
  }
  return <>
    <div style={{position: 'absolute', top: 235, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
      <Img src={staticFile('logo-marca-kilometro-claro.png')} alt="Logotipo oficial de Kilómetro Claro" style={{width: 176, height: 176, objectFit: 'contain', filter: 'drop-shadow(0 14px 28px #06140f70)'}} />
    </div>
    <div style={{position: 'absolute', top: 460, left: 75, right: 75, color: brand.paper, textAlign: 'center', fontSize: 48, fontWeight: 950}}>LA GUÍA DEL<br /><span style={{color: brand.lime}}>PORSCHE MISSION S</span></div>
    <div style={{position: 'absolute', left: 65, right: 65, top: 760, height: 440, borderRadius: 34, overflow: 'hidden', border: '2px solid ' + brand.lime, boxShadow: '0 30px 75px #06140f70'}}>
      <Img src={staticFile('images/porsche-mission-s-interior.jpg')} alt="Habitáculo del modelo de visión Porsche Mission S" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    </div>
    <div style={{position: 'absolute', left: 65, right: 65, top: 1240, padding: '24px 18px', borderRadius: 27, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 43, fontWeight: 950, boxShadow: '0 22px 55px #06140f70'}}>KILOMETROCLARO.COM</div>
    <div style={{position: 'absolute', left: 85, right: 85, top: 1386, textAlign: 'center', color: brand.paper, fontSize: 25, fontWeight: 900}}>BUSCA LA GUÍA Y DESCUBRE QUÉ SABEMOS&nbsp; ↗</div>
  </>;
};

export const MissionSInteriorPromo: React.FC<MissionSInteriorSpec> = (spec) => {
  const frame = useCurrentFrame();
  const seconds = frame / spec.fps;
  const active = scenes.find((scene) => seconds >= scene.start && seconds < scene.end) ?? scenes[scenes.length - 1];
  const local = Math.max(0, frame - Math.round(active.start * spec.fps));
  const caption = spec.captions.find((cue) => seconds >= cue.startSeconds && seconds < cue.endSeconds);
  const captionOpacity = caption ? interpolate(frame, [caption.startSeconds * spec.fps, caption.startSeconds * spec.fps + 4, caption.endSeconds * spec.fps - 4, caption.endSeconds * spec.fps], [0, 1, 1, 0], clamp) : 0;
  const captionSize = caption ? (caption.text.length > 88 ? 28 : caption.text.length > 65 ? 31 : caption.text.length > 48 ? 35 : 39) : 36;
  const grid = (frame * 0.45) % 80;
  return (
    <AbsoluteFill style={{background: brand.deep, overflow: 'hidden', fontFamily: brand.font}}>
      <Img src={staticFile('images/porsche-mission-s-interior.jpg')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'blur(18px) brightness(0.24) saturate(0.65)', transform: 'scale(1.18)', opacity: 0.78}} />
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at 54% 42%, #1d5d4eaf 0%, #173d34e8 48%, #0a211aef 100%)'}} />
      <div style={{position: 'absolute', inset: 0, opacity: 0.14, backgroundImage: 'linear-gradient(#d7f36a 1px, transparent 1px), linear-gradient(90deg, #d7f36a 1px, transparent 1px)', backgroundSize: '80px 80px', backgroundPosition: grid + 'px ' + (-grid) + 'px', maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)'}} />
      <div style={{position: 'absolute', top: -160, right: -190, width: 560, height: 560, borderRadius: '50%', background: brand.lime, opacity: 0.11, transform: 'translateY(' + (Math.sin(frame / 24) * 20) + 'px)'}} />
      <div style={{position: 'absolute', bottom: 210, left: -240, width: 560, height: 560, borderRadius: '50%', background: brand.green, opacity: 0.4, transform: 'translateY(' + (Math.cos(frame / 27) * 25) + 'px)'}} />
      <SceneContent id={active.id} frame={frame} seconds={seconds} spec={spec} />
      <BrandLogo style={{top: 42, left: 48, transform: 'scale(0.7)', transformOrigin: 'top left', zIndex: 30}} />
      <div style={{position: 'absolute', top: 57, right: 48, padding: '13px 18px', borderRadius: 16, background: '#f7f8f5e8', color: brand.deep, fontSize: 19, fontWeight: 900, letterSpacing: 1, zIndex: 28}}>MISSION S · 2026</div>
      {caption ? <div style={{position: 'absolute', left: 55, right: 55, bottom: 215, minHeight: 150, padding: '24px 29px', boxSizing: 'border-box', display: 'grid', placeItems: 'center', borderRadius: 32, background: brand.paper, color: brand.deep, fontSize: captionSize, lineHeight: 1.13, fontWeight: 850, textAlign: 'center', boxShadow: '0 20px 50px #06140f95', opacity: captionOpacity, whiteSpace: 'pre-line', zIndex: 25}}>{caption.text}</div> : null}
      <div style={{position: 'absolute', bottom: 54, left: 68, right: 68, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#e5eee8', fontSize: 17, fontWeight: 750, letterSpacing: 0.7, zIndex: 19}}>
        <span>IMÁGENES OFICIALES: PORSCHE AG</span>
        <span>{String(Math.min(spec.durationSeconds, seconds).toFixed(1)).replace('.', ',')} s</span>
      </div>
      <Audio src={staticFile('audio/voice-video-007.wav')} volume={1} />
    </AbsoluteFill>
  );
};
