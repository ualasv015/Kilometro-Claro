import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from '../components/BrandLogo';

type CaptionCue = {startSeconds: number; endSeconds: number; text: string};
export type MissionSPromoSpec = {
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
type SceneId = 'hook' | 'question' | 'addition' | 'architecture' | 'references' | 'unknowns' | 'production' | 'cta';
const scenes: {id: SceneId; start: number; end: number}[] = [
  {id: 'hook', start: 0, end: 5.46},
  {id: 'question', start: 5.46, end: 7.04},
  {id: 'addition', start: 7.04, end: 11.48},
  {id: 'architecture', start: 11.48, end: 17.34},
  {id: 'references', start: 17.34, end: 23.06},
  {id: 'unknowns', start: 23.06, end: 26.74},
  {id: 'production', start: 26.74, end: 30.1},
  {id: 'cta', start: 30.1, end: 36.92},
];

const PhotoPanel: React.FC<{frame: number; interior?: boolean; top?: number; height?: number; compact?: boolean}> = ({frame, interior = false, top = 590, height = 548, compact = false}) => {
  const z = interpolate(frame, [0, 45, 95], [1.025, 1.12, 1.07], clamp);
  const pan = interpolate(frame, [0, 90], [-21, 24], clamp);
  return (
    <div style={{position: 'absolute', left: 54, right: 54, top, height, borderRadius: compact ? 30 : 38, overflow: 'hidden', border: '3px solid ' + brand.lime, background: '#101d19', boxShadow: '0 32px 82px #06140f85', transform: 'translateY(' + (Math.sin(frame / 12) * 5) + 'px)'}}>
      <Img
        src={staticFile(interior ? 'images/porsche-mission-s-interior.jpg' : 'images/porsche-mission-s-exterior.jpg')}
        alt={interior ? 'Interior del modelo de visión Porsche Mission S' : 'Modelo de visión Porsche Mission S'}
        style={{width: '100%', height: '100%', objectFit: 'cover', transform: 'translateX(' + pan + 'px) scale(' + z + ')'}}
      />
      <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #081b1420 35%, #081b1490 100%)'}} />
      <div style={{position: 'absolute', left: 22, bottom: 20, padding: '12px 17px', borderRadius: 14, background: '#f7f8f5ed', color: brand.deep, fontSize: 20, fontWeight: 900, letterSpacing: 1}}>MODELO DE VISIÓN</div>
    </div>
  );
};

const FloatCard: React.FC<{children: React.ReactNode; frame: number; delay?: number; style?: React.CSSProperties; dark?: boolean}> = ({children, frame, delay = 0, style, dark = false}) => {
  const y = interpolate(frame - delay, [0, 14], [80, 0], clamp);
  const opacity = interpolate(frame - delay, [0, 8], [0, 1], clamp);
  return (
    <div style={{position: 'absolute', opacity, transform: 'translateY(' + y + 'px)', borderRadius: 28, background: dark ? brand.deep : brand.paper, color: dark ? brand.lime : brand.deep, boxShadow: '0 22px 52px #06140f65', ...style}}>
      {children}
    </div>
  );
};

const SceneContent: React.FC<{id: SceneId; seconds: number; frame: number; spec: MissionSPromoSpec}> = ({id, seconds, frame, spec}) => {
  const local = Math.max(0, frame - Math.round((scenes.find((scene) => scene.id === id)?.start ?? 0) * spec.fps));
  if (id === 'hook') {
    return <>
      <div style={{position: 'absolute', left: 70, right: 70, top: 280, color: brand.paper, fontSize: 76, lineHeight: 0.98, fontWeight: 950, letterSpacing: -2.5, textAlign: 'center', textShadow: '0 8px 28px #06140f80', transform: 'scale(' + interpolate(local, [0, 25], [0.91, 1], clamp) + ')'}}>
        ¿OTRO POR ENCIMA<br /><span style={{color: brand.lime}}>DEL 911?</span>
      </div>
      <PhotoPanel frame={local} top={610} />
      {seconds >= 4.45 ? <div style={{position: 'absolute', top: 1110, right: 65, padding: '14px 30px', borderRadius: 22, background: brand.lime, color: brand.deep, fontSize: 58, lineHeight: 1, fontWeight: 950, transform: 'rotate(-7deg) scale(' + interpolate(local, [125, 140], [0.65, 1], clamp) + ')', boxShadow: '0 18px 45px #06140f70'}}>¡SÍ!</div> : null}
    </>;
  }
  if (id === 'question') {
    return <>
      <PhotoPanel frame={local + 30} top={490} height={570} compact />
      <div style={{position: 'absolute', top: 310, left: 70, right: 70, textAlign: 'center', fontSize: 72, fontWeight: 950, color: brand.paper, letterSpacing: -2}}>¿SU RELEVO?</div>
      {seconds >= 6.36 ? <div style={{position: 'absolute', left: 305, top: 1065, width: 470, height: 186, borderRadius: 40, display: 'grid', placeItems: 'center', background: brand.lime, color: brand.deep, fontSize: 112, fontWeight: 950, transform: 'rotate(-4deg) scale(' + interpolate(local, [24, 36], [0.65, 1], clamp) + ')', boxShadow: '0 25px 60px #06140f75'}}>NO</div> : null}
    </>;
  }
  if (id === 'addition') {
    const drift = Math.sin(local / 8) * 8;
    return <>
      <div style={{position: 'absolute', top: 300, left: 66, right: 66, textAlign: 'center', color: brand.lime, fontSize: 48, fontWeight: 950, letterSpacing: 2}}>UNA NUEVA OFERTA</div>
      <div style={{position: 'absolute', top: 390, left: 66, right: 66, textAlign: 'center', color: brand.paper, fontFamily: 'Georgia, serif', fontSize: 58, fontWeight: 800, lineHeight: 1.06}}>ADICIONAL<br />Y PERMANENTE</div>
      <div style={{position: 'absolute', left: 97, right: 97, top: 690, height: 165, borderRadius: 30, background: '#f7f8f5', color: brand.deep, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 23, fontSize: 54, fontWeight: 950, transform: 'translateX(' + interpolate(local, [0, 18], [-150, 0], clamp) + 'px)'}}>
        <span style={{color: brand.green}}>911</span><span style={{fontSize: 35, color: brand.muted}}>· ACTUAL</span>
      </div>
      <div style={{position: 'absolute', left: 526, top: 855, width: 5, height: 86, background: brand.lime, transform: 'translateY(' + drift + 'px)'}} />
      <div style={{position: 'absolute', left: 97, right: 97, top: 960, height: 215, borderRadius: 34, border: '3px solid ' + brand.lime, background: brand.green, color: brand.paper, display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 40, lineHeight: 1.1, fontWeight: 900, padding: '10px 34px', boxSizing: 'border-box', transform: 'translateX(' + interpolate(local, [5, 24], [170, 0], clamp) + 'px)' }}>
        FUTURA GAMA<br /><span style={{color: brand.lime}}>MOTOR CENTRAL</span>
      </div>
      <div style={{position: 'absolute', top: 1220, left: 140, right: 140, textAlign: 'center', color: brand.paper, fontSize: 25, fontWeight: 800, letterSpacing: 1.5}}>POR ENCIMA DEL 911</div>
    </>;
  }
  if (id === 'architecture') {
    const zoom = interpolate(local, [0, 36, 82, 145, 176], [1.02, 1.13, 1.07, 1.16, 1.1], clamp);
    const panX = interpolate(local, [0, 85, 175], [-24, 16, 31], clamp);
    const pulse = 1 + Math.sin(local / 7) * 0.12;
    return <>
      <div style={{position: 'absolute', top: 280, left: 64, right: 64, textAlign: 'center', color: brand.paper, fontSize: 48, fontWeight: 950, letterSpacing: 1}}>UNA NUEVA PLATAFORMA<br /><span style={{color: brand.lime}}>DE MOTOR CENTRAL</span></div>
      <div style={{position: 'absolute', left: 55, right: 55, top: 510, height: 565, borderRadius: 34, overflow: 'hidden', border: '2px solid ' + brand.lime, boxShadow: '0 30px 75px #06140f7a'}}>
        <Img src={staticFile('images/porsche-mission-s-exterior.jpg')} alt="Porsche Mission S, modelo de visión, vista lateral" style={{width: '100%', height: '100%', objectFit: 'cover', transform: 'translateX(' + panX + 'px) scale(' + zoom + ')'}} />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #071b1435 0%, transparent 42%, #071b1490 100%)'}} />
        <div style={{position: 'absolute', top: 22, left: 22, padding: '12px 17px', borderRadius: 14, background: '#f7f8f5ed', color: brand.deep, fontSize: 20, fontWeight: 950, letterSpacing: 0.8}}>MISSION S · MODELO DE VISIÓN</div>
        <div style={{position: 'absolute', left: '50%', top: '58%', width: 24, height: 24, marginLeft: -12, marginTop: -12, borderRadius: 50, background: brand.lime, border: '5px solid #102b23', boxShadow: '0 0 0 ' + (15 + pulse * 16) + 'px #d7f36a45'}} />
        <div style={{position: 'absolute', left: '50%', top: '58%', width: 3, height: 138, background: brand.lime, transformOrigin: 'top center'}} />
        <div style={{position: 'absolute', left: '50%', bottom: 23, padding: '14px 20px', borderRadius: 16, background: brand.lime, color: brand.deep, fontSize: 22, fontWeight: 950, letterSpacing: 0.6, whiteSpace: 'nowrap', transform: 'translateX(-50%)'}}>MOTOR CENTRAL · ENTRE EJES</div>
      </div>
      <FloatCard frame={local} delay={20} style={{left: 100, right: 100, top: 1130, minHeight: 135, display: 'grid', placeItems: 'center', padding: '20px 24px', boxSizing: 'border-box', textAlign: 'center', fontSize: 31, lineHeight: 1.1, fontWeight: 900}}>
        ADELANTO DE UNA NUEVA GAMA DE SUPERDEPORTIVOS
      </FloatCard>
      <div style={{position: 'absolute', top: 1300, left: 80, right: 80, textAlign: 'center', color: '#dbe8e0', fontSize: 20, fontWeight: 750}}>El Mission S es un modelo de visión, no una ficha de producción.</div>
    </>;
  }
  if (id === 'references') {
    const names = ['FERRARI', 'LAMBORGHINI', 'McLAREN'];
    const active = Math.min(2, Math.floor(local / 54));
    return <>
      <div style={{position: 'absolute', top: 290, left: 58, right: 58, color: brand.paper, fontSize: 50, lineHeight: 1.02, fontWeight: 950, textAlign: 'center'}}>¿CON QUIÉN PODRÍA<br /><span style={{color: brand.lime}}>MEDIRSE?</span></div>
      <div style={{position: 'absolute', top: 565, left: 76, right: 76, height: 75, display: 'grid', placeItems: 'center', color: brand.deep, background: brand.lime, borderRadius: 20, fontSize: 27, fontWeight: 950, letterSpacing: 1.6}}>REFERENCIAS POSIBLES</div>
      {names.map((name, index) => {
        const targetY = 680 + index * 190;
        const shift = interpolate(local - index * 18, [0, 18], [140, 0], clamp);
        const emphasized = active === index;
        return <div key={name} style={{position: 'absolute', left: 100, right: 100, top: targetY, height: 148, borderRadius: 26, display: 'flex', alignItems: 'center', padding: '0 30px', boxSizing: 'border-box', background: emphasized ? brand.paper : '#1d5d4e', color: emphasized ? brand.deep : '#d8e4dc', border: '2px solid ' + (emphasized ? brand.lime : '#ffffff24'), boxShadow: emphasized ? '0 22px 50px #06140f65' : 'none', fontSize: name === 'LAMBORGHINI' ? 31 : 39, fontWeight: 950, letterSpacing: name === 'McLAREN' ? 1 : 0.4, opacity: interpolate(local - index * 13, [0, 11], [0.4, 1], clamp), transform: 'translateX(' + shift + 'px) scale(' + (emphasized ? 1.02 : 0.96) + ')'}}>
          <span style={{width: 17, height: 76, borderRadius: 12, background: brand.lime, marginRight: 23}} />{name}
        </div>;
      })}
      <div style={{position: 'absolute', top: 1337, left: 170, right: 170, textAlign: 'center', color: brand.lime, fontSize: 22, fontWeight: 950, letterSpacing: 1.2}}>NO SON RIVALES CONFIRMADOS</div>
    </>;
  }
  if (id === 'unknowns') {
    const questions = ['MOTOR', 'POTENCIA', 'PRECIO', 'FECHA'];
    return <>
      <div style={{position: 'absolute', top: 290, left: 65, right: 65, textAlign: 'center', color: brand.paper, fontSize: 50, fontWeight: 950}}>LO QUE FALTA<br /><span style={{color: brand.lime}}>POR SABER</span></div>
      {questions.map((label, index) => {
        const delay = index * 8;
        const x = index % 2 === 0 ? 70 : 552;
        const y = 580 + Math.floor(index / 2) * 300;
        const inX = interpolate(local - delay, [0, 16], [index % 2 === 0 ? -220 : 220, 0], clamp);
        const number = index + 1;
        return <div key={label} style={{position: 'absolute', left: x, top: y, width: 458, height: 225, borderRadius: 31, background: index === 2 ? brand.lime : brand.paper, color: brand.deep, padding: '26px 30px', boxSizing: 'border-box', boxShadow: '0 20px 50px #06140f58', transform: 'translateX(' + inX + 'px) rotate(' + (index % 2 === 0 ? -2 : 2) + 'deg)'}}>
          <div style={{fontSize: 21, color: brand.green, fontWeight: 900, letterSpacing: 2}}>0{number} · {label}</div>
          <div style={{marginTop: 12, fontSize: 96, lineHeight: 0.9, fontWeight: 950, textAlign: 'right', color: brand.deep}}>?</div>
        </div>;
      })}
    </>;
  }
  if (id === 'production') {
    return <>
      <PhotoPanel frame={local + 80} interior top={500} height={490} compact />
      <FloatCard frame={local} delay={16} dark style={{left: 82, right: 82, top: 1075, minHeight: 195, display: 'grid', placeItems: 'center', textAlign: 'center', padding: 28, boxSizing: 'border-box', border: '3px solid ' + brand.lime, fontSize: 42, lineHeight: 1.04, fontWeight: 950, transform: 'rotate(-2deg)'}}>
        TODAVÍA SIN FICHA<br />DE PRODUCCIÓN
      </FloatCard>
      <div style={{position: 'absolute', top: 1305, left: 90, right: 90, textAlign: 'center', color: brand.paper, fontSize: 23, fontWeight: 800}}>Sin motor, potencia, precio ni fecha confirmados.</div>
    </>;
  }
  return <>
    <div style={{position: 'absolute', top: 250, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
      <Img src={staticFile('logo-marca-kilometro-claro.png')} alt="Logotipo oficial de Kilómetro Claro" style={{width: 186, height: 186, objectFit: 'contain', filter: 'drop-shadow(0 14px 28px #06140f70)'}} />
    </div>
    <div style={{position: 'absolute', top: 485, left: 70, right: 70, textAlign: 'center', color: brand.paper, fontSize: 43, fontWeight: 950, letterSpacing: 1}}>LA GUÍA COMPLETA<br /><span style={{color: brand.lime}}>DEL MISSION S</span></div>
    <div style={{position: 'absolute', left: 58, right: 58, top: 760, borderRadius: 38, overflow: 'hidden', border: '3px solid ' + brand.lime, boxShadow: '0 30px 75px #06140f6b', transform: 'scale(' + (1 + Math.sin(local / 8) * 0.012) + ')'}}>
      <Img src={staticFile('images/porsche-mission-s-exterior.jpg')} alt="Porsche Mission S, modelo de visión" style={{display: 'block', width: '100%', height: 510, objectFit: 'cover', objectPosition: 'center'}} />
    </div>
    <div style={{position: 'absolute', left: 65, right: 65, top: 1250, padding: '25px 18px', borderRadius: 27, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 45, fontWeight: 950, letterSpacing: -0.5, boxShadow: '0 22px 55px #06140f70', transform: 'scale(' + interpolate(local, [0, 18], [0.94, 1], clamp) + ')'}}>KILOMETROCLARO.COM</div>
    <div style={{position: 'absolute', left: 85, right: 85, top: 1410, textAlign: 'center', color: brand.paper, fontSize: 24, fontWeight: 850}}>BUSCA LA GUÍA DEL PORSCHE MISSION S&nbsp; ↗</div>
  </>;
};

export const MissionSPromo: React.FC<MissionSPromoSpec> = (spec) => {
  const frame = useCurrentFrame();
  const seconds = frame / spec.fps;
  const active = scenes.find((scene) => seconds >= scene.start && seconds < scene.end) ?? scenes[scenes.length - 1];
  const local = Math.max(0, frame - Math.round(active.start * spec.fps));
  const transition = interpolate(local, [0, 9], [0, 1], clamp);
  const caption = spec.captions.find((cue) => seconds >= cue.startSeconds && seconds < cue.endSeconds);
  const captionOpacity = caption ? interpolate(frame, [caption.startSeconds * spec.fps, caption.startSeconds * spec.fps + 4, caption.endSeconds * spec.fps - 4, caption.endSeconds * spec.fps], [0, 1, 1, 0], clamp) : 0;
  const captionSize = caption ? (caption.text.length > 78 ? 29 : caption.text.length > 60 ? 32 : caption.text.length > 46 ? 35 : 39) : 36;
  const grid = (frame * 0.45) % 80;
  return (
    <AbsoluteFill style={{background: brand.deep, overflow: 'hidden', fontFamily: brand.font}}>
      <Img src={staticFile('images/porsche-mission-s-exterior.jpg')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'blur(18px) brightness(0.24) saturate(0.65)', transform: 'scale(1.18)', opacity: 0.78}} />
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at 54% 42%, #1d5d4eaf 0%, #173d34e8 48%, #0a211aeF 100%)'}} />
      <div style={{position: 'absolute', inset: 0, opacity: 0.14, backgroundImage: 'linear-gradient(#d7f36a 1px, transparent 1px), linear-gradient(90deg, #d7f36a 1px, transparent 1px)', backgroundSize: '80px 80px', backgroundPosition: grid + 'px ' + (-grid) + 'px', maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)'}} />
      <div style={{position: 'absolute', top: -160, right: -190, width: 560, height: 560, borderRadius: '50%', background: brand.lime, opacity: 0.11, transform: 'translateY(' + (Math.sin(frame / 24) * 20) + 'px)'}} />
      <div style={{position: 'absolute', bottom: 210, left: -240, width: 560, height: 560, borderRadius: '50%', background: brand.green, opacity: 0.4, transform: 'translateY(' + (Math.cos(frame / 27) * 25) + 'px)'}} />
      <SceneContent id={active.id} seconds={seconds} frame={frame} spec={spec} />
      <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: transition, background: 'linear-gradient(120deg, transparent 0%, #d7f36a10 50%, transparent 100%)'}} />
      <BrandLogo style={{top: 42, left: 48, transform: 'scale(0.7)', transformOrigin: 'top left', zIndex: 30}} />
      <div style={{position: 'absolute', top: 57, right: 48, padding: '13px 18px', borderRadius: 16, background: '#f7f8f5e8', color: brand.deep, fontSize: 19, fontWeight: 900, letterSpacing: 1, zIndex: 28}}>MISSION S · 2026</div>
      {caption ? <div style={{position: 'absolute', left: 55, right: 55, bottom: 215, minHeight: 150, padding: '24px 29px', boxSizing: 'border-box', display: 'grid', placeItems: 'center', borderRadius: 32, background: brand.paper, color: brand.deep, fontSize: captionSize, lineHeight: 1.13, fontWeight: 850, textAlign: 'center', boxShadow: '0 20px 50px #06140f95', opacity: captionOpacity, whiteSpace: 'pre-line', zIndex: 25}}>{caption.text}</div> : null}
      <div style={{position: 'absolute', bottom: 54, left: 68, right: 68, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#e5eee8', fontSize: 17, fontWeight: 750, letterSpacing: 0.7, zIndex: 19}}>
        <span>IMÁGENES OFICIALES: PORSCHE AG</span>
        <span>{String(Math.min(spec.durationSeconds, seconds).toFixed(1)).replace('.', ',')} s</span>
      </div>
      <Audio src={staticFile('audio/voice-video-006.wav')} volume={1} />
    </AbsoluteFill>
  );
};
