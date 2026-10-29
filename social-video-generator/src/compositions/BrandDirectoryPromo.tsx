import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';

type CaptionCue = {startSeconds: number; endSeconds: number; text: string};
type Scene = {
  id: string;
  startSeconds: number;
  endSeconds: number;
  headline: string;
  visual: string;
  captions: CaptionCue[];
};
export type BrandDirectorySpec = {
  schemaVersion: number;
  id: string;
  title: string;
  durationSeconds: number;
  fps: number;
  articleUrl: string;
  narration: string;
  requiresHumanReview: boolean;
  scenes: Scene[];
};

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const makes = ['Toyota', 'Renault', 'Volkswagen', 'Hyundai', 'SEAT', 'Dacia', 'Kia', 'Peugeot', 'BMW', 'BYD', 'MG', 'JAECOO'];
const models = [
  {name: 'Yaris Cross', kind: 'SUV · HÍBRIDO', color: '#d7f36a'},
  {name: 'Corolla', kind: 'COMPACTO · HÍBRIDO', color: '#e5ede6'},
  {name: 'bZ4X', kind: 'SUV · ELÉCTRICO', color: '#1d5d4e'},
];

const BrandPill: React.FC<{label: string; index: number; frame: number}> = ({label, index, frame}) => {
  const x = interpolate(frame, [index * 2, index * 2 + 16], [460 + index * 24, 0], clamp);
  const y = index % 2 ? 0 : 8;
  return <div style={{transform: `translate(${x}px, ${y}px) rotate(${(index % 3 - 1) * 2}deg)`, padding: '18px 23px', minWidth: 168, borderRadius: 24, background: index % 3 === 0 ? brand.paper : index % 3 === 1 ? brand.lime : brand.green, color: index % 3 === 2 ? brand.paper : brand.deep, fontFamily: brand.font, fontWeight: 900, fontSize: 28, textAlign: 'center', boxShadow: '0 15px 34px #071b1555'}}>{label}</div>;
};

const CarGlyph: React.FC<{color: string; frame: number; compact?: boolean}> = ({color, frame, compact = false}) => {
  const bob = Math.sin(frame / 5) * 5;
  return <svg viewBox="0 0 500 240" width={compact ? 278 : 420} height={compact ? 134 : 202} style={{overflow: 'visible', transform: `translateY(${bob}px)`}}>
    <ellipse cx="252" cy="208" rx="190" ry="18" fill="#061c1660" />
    <path d="M55 150 Q74 120 133 113 L190 58 Q212 42 263 43 L328 51 Q358 55 384 103 L421 117 Q448 127 452 155 L445 177 H51 Z" fill={color} stroke={brand.paper} strokeWidth="7" strokeLinejoin="round" />
    <path d="M152 108 L206 62 Q218 53 260 54 L309 60 Q334 64 355 107 Z" fill="#23493f" stroke="#f7f8f5" strokeWidth="5" />
    <path d="M264 57 L263 105" stroke="#dbe6df" strokeWidth="5" />
    <path d="M70 151 H430" stroke={brand.deep} strokeWidth="9" opacity="0.48" />
    {[132, 367].map((x) => <g key={x}><circle cx={x} cy="173" r="39" fill="#0a1713" stroke="#f4f8f2" strokeWidth="7" /><circle cx={x} cy="173" r="15" fill={brand.lime} /></g>)}
    <path d="M421 133 H449" stroke={brand.lime} strokeWidth="9" strokeLinecap="round" />
  </svg>;
};

const BrowserWindow: React.FC<{frame: number; label?: string; x?: number; y?: number; scale?: number; rotate?: number; active?: boolean}> = ({frame, label = 'Modelos de coches', x = 0, y = 0, scale = 1, rotate = 0, active = true}) => {
  const float = Math.sin(frame / 7) * 7;
  const transform = `translate(-50%, -50%) translate(${x}px, ${y + float}px) scale(${scale}) rotate(${rotate}deg)`;
  const borderColor = active ? brand.lime : '#b4c5bb';
  return (
    <div style={{position: 'absolute', left: '50%', top: '50%', width: 810, height: 670, transform, transformOrigin: 'center', borderRadius: 34, overflow: 'hidden', background: brand.paper, border: `5px solid ${borderColor}`, boxShadow: '0 42px 100px #06130f80'}}>
      <div style={{height: 60, display: 'flex', alignItems: 'center', padding: '0 22px', gap: 10, background: '#e7ede7', borderBottom: `2px solid ${brand.line}`}}>
        {['#f17f70', '#efc15b', '#88bc86'].map((c) => <i key={c} style={{display: 'block', width: 15, height: 15, background: c, borderRadius: 20}} />)}
        <div style={{marginLeft: 14, flex: 1, height: 32, borderRadius: 18, background: brand.white, color: brand.muted, font: '600 16px Arial', display: 'flex', alignItems: 'center', paddingLeft: 18}}>kilometroclaro.com/marcas</div>
      </div>
      <div style={{padding: '36px 38px'}}>
        <div style={{font: `800 18px ${brand.font}`, color: brand.green, letterSpacing: 2}}>KILÓMETRO CLARO · MARCAS</div>
        <div style={{font: `900 38px ${brand.font}`, color: brand.deep, marginTop: 7}}>{label}</div>
        <div style={{display: 'flex', gap: 14, marginTop: 25}}>
          {['MARCA', 'CARROCERÍA', 'MOTORIZACIÓN'].map((f, i) => <div key={f} style={{height: 42, padding: '0 15px', borderRadius: 13, background: i === 2 ? brand.lime : '#edf2ec', display: 'grid', placeItems: 'center', color: brand.deep, font: `800 12px ${brand.font}`, letterSpacing: 0.5}}>{f}<span style={{marginLeft: 8, fontSize: 11}}>⌄</span></div>)}
        </div>
        <div style={{display: 'flex', gap: 14, marginTop: 30}}>
          {models.map((model, i) => (
            <div key={model.name} style={{flex: 1, height: 302, borderRadius: 20, background: i === 1 ? '#edf2ec' : '#f2f6f0', border: `2px solid ${brand.line}`, overflow: 'hidden'}}>
              <div style={{height: 145, display: 'grid', placeItems: 'center', background: i === 2 ? '#183d34' : '#e2eccf'}}><CarGlyph color={model.color} frame={frame + i * 19} compact /></div>
              <div style={{padding: '16px 14px'}}>
                <div style={{font: `900 21px ${brand.font}`, color: brand.deep}}>{model.name}</div>
                <div style={{font: `800 12px ${brand.font}`, color: brand.green, marginTop: 9}}>{model.kind}</div>
                <div style={{display: 'flex', gap: 4, marginTop: 13}}>{[0,1,2,3].map((n) => <span key={n} style={{height: 5, flex: 1, borderRadius: 4, background: n < 2 + i ? brand.lime : '#dce5df'}} />)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TabsScene: React.FC<{frame: number}> = ({frame}) => {
  const tabs = ['Modelos', 'SUV híbrido', 'Motorizaciones', 'Carrocerías', 'Web oficial', 'Marcas'];
  return <>
    <div style={{position: 'absolute', left: 70, right: 70, top: 265, textAlign: 'center', color: brand.paper, font: `900 70px/0.98 Georgia, serif`, letterSpacing: -2}}>¿Tantas pestañas<br />para encontrar coche?</div>
    {tabs.map((tab, i) => {
      const progress = interpolate(frame, [i * 2, i * 2 + 13], [240, 0], clamp);
      const rotations = [-10, -6, 7, 10, -3, 5];
      return <div key={tab} style={{position: 'absolute', width: 430, height: 125, left: i % 2 === 0 ? 73 : 578, top: 750 + i * 46, transform: `translate(${i % 2 === 0 ? -progress : progress}px, ${Math.sin((frame + i * 13) / 7) * 9}px) rotate(${rotations[i]}deg)`, background: i % 3 === 0 ? brand.lime : i % 3 === 1 ? brand.paper : brand.green, border: `3px solid ${brand.paper}`, borderRadius: 23, color: i % 3 === 2 ? brand.paper : brand.deep, boxShadow: '0 24px 50px #071b1555', display: 'flex', alignItems: 'center', padding: '0 25px', boxSizing: 'border-box', font: `800 25px ${brand.font}`}}><span style={{fontSize: 23, marginRight: 14, color: brand.lime}}>◉</span>{tab}<span style={{marginLeft: 'auto', opacity: 0.6}}>×</span></div>;
    })}
    <div style={{position: 'absolute', top: 1220, left: 330}}><CarGlyph color={brand.lime} frame={frame} /></div>
  </>;
};

const DirectoryScene: React.FC<{frame: number}> = ({frame}) => {
  const scale = interpolate(frame, [0, 10, 26, 45], [0.86, 1, 1.03, 1], clamp);
  return <>
    <div style={{position: 'absolute', top: 300, width: '100%', textAlign: 'center', color: brand.lime, font: `900 78px/0.95 ${brand.font}`, transform: `scale(${scale})`}}>16 MARCAS<br /><span style={{color: brand.paper}}>UN SOLO LUGAR</span></div>
    <BrowserWindow frame={frame} label="Busca por marca y descubre modelos" y={198} scale={0.89} />
  </>;
};

const BrandCarousel: React.FC<{frame: number}> = ({frame}) => {
  const stride = 205;
  const offset = (frame * 7) % (stride * makes.length);
  return <>
    <div style={{position: 'absolute', top: 330, width: '100%', textAlign: 'center', font: `900 60px ${brand.font}`, color: brand.paper}}>Marcas conocidas.<br /><span style={{color: brand.lime}}>Muchas opciones.</span></div>
    <div style={{position: 'absolute', top: 630, left: -180 - offset, display: 'flex', gap: 24}}>{[...makes, ...makes].map((make, i) => <BrandPill key={`${make}-${i}`} label={make} index={i % makes.length} frame={frame} />)}</div>
    <div style={{position: 'absolute', top: 840, left: -180 + offset * 0.72, display: 'flex', gap: 24}}>{[...makes.slice().reverse(), ...makes.slice().reverse()].map((make, i) => <BrandPill key={`${make}-b-${i}`} label={make} index={(i + 3) % makes.length} frame={frame} />)}</div>
    <div style={{position: 'absolute', top: 1110, width: '100%', display: 'flex', justifyContent: 'center', gap: 17, color: brand.deep, font: `900 20px ${brand.font}`}}>{['TOYOTA', 'RENAULT', 'VOLKSWAGEN', 'HYUNDAI'].map((t, i)=><span key={t} style={{padding: '15px 18px', borderRadius: 13, background: i === 1 ? brand.lime : brand.paper, boxShadow: '0 12px 24px #071b1530'}}>{t}</span>)}</div>
  </>;
};

const ModelScene: React.FC<{frame: number}> = ({frame}) => {
  const y = interpolate(frame, [0, 15, 37], [145, 0, -20], clamp);
  const filters = ['SUV', 'URBANO', 'COMPACTO', 'FAMILIAR', 'HÍBRIDO', 'ELÉCTRICO'];
  return <>
    <div style={{position: 'absolute', top: 302, width: '100%', textAlign: 'center', color: brand.paper, font: `900 64px ${brand.font}`}}>Busca a tu manera</div>
    <div style={{position: 'absolute', left: 70, right: 70, top: 500, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 15}}>{filters.map((filter,i)=><div key={filter} style={{padding: '16px 21px', borderRadius: 18, background: (i + Math.floor(frame / 9)) % 3 === 0 ? brand.lime : brand.paper, color: brand.deep, font: `900 20px ${brand.font}`, transform: `translateY(${Math.sin((frame + i * 9) / 6) * 5}px)`}}>{filter}</div>)}</div>
    <BrowserWindow frame={frame} label="Modelos que encajan contigo" y={150 + y} scale={0.91} />
    <div style={{position: 'absolute', top: 1405, width: '100%', textAlign: 'center', color: brand.lime, font: `900 25px ${brand.font}`, letterSpacing: 1}}>MODELOS · CARROCERÍAS · MOTORIZACIONES</div>
  </>;
};

const OfficialScene: React.FC<{frame: number}> = ({frame}) => {
  const cardY = interpolate(frame, [0, 13, 42], [100, 0, -10], clamp);
  return <>
    <div style={{position: 'absolute', top: 322, width: '100%', textAlign: 'center', color: brand.paper, font: `900 62px ${brand.font}`}}>¿Quieres saber más?</div>
    <div style={{position: 'absolute', left: 110, right: 110, top: 560, transform: `translateY(${cardY}px) rotate(-2deg)`, borderRadius: 38, overflow: 'hidden', background: brand.paper, border: `4px solid ${brand.lime}`, boxShadow: '0 40px 90px #071b1570'}}>
      <div style={{padding: 30, background: '#e9efe8', color: brand.green, font: `800 17px ${brand.font}`}}>KILÓMETRO CLARO · FICHA DE MARCA</div>
      <div style={{padding: 40}}><div style={{font: `900 48px Georgia, serif`, color: brand.deep}}>Toyota</div><div style={{font: `700 22px ${brand.font}`, color: brand.muted, marginTop: 8}}>Modelos · motores · carrocerías</div><div style={{marginTop: 36, height: 74, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 19, background: brand.deep, color: brand.lime, font: `900 22px ${brand.font}`, letterSpacing: 0.5}}>WEB OFICIAL DE TOYOTA <span style={{fontSize: 36, marginLeft: 15}}>↗</span></div></div>
    </div>
    <div style={{position: 'absolute', top: 1500, width: '100%', textAlign: 'center', color: brand.lime, font: `900 22px ${brand.font}`}}>Y COMPRUEBA VERSIONES Y DISPONIBILIDAD EN LA MARCA</div>
  </>;
};

const OneTabScene: React.FC<{frame: number}> = ({frame}) => {
  const cards = ['Modelos', 'Motorizaciones', 'SUV híbrido', 'Carrocerías', 'Web oficial'];
  const collapse = interpolate(frame, [0, 18, 58], [0, 1, 1], clamp);
  return <>
    <div style={{position: 'absolute', top: 310, width: '100%', textAlign: 'center', color: brand.lime, font: `900 62px/1 ${brand.font}`}}>Menos pestañas.<br /><span style={{color: brand.paper}}>Más claridad.</span></div>
    {cards.map((c,i)=>{
      const scatteredX = (i - 2) * 220;
      const scatteredY = (i % 2 ? 140 : -115);
      const scatteredR = (i - 2) * 9;
      const x = interpolate(collapse, [0,1], [scatteredX, 0], clamp);
      const y = interpolate(collapse, [0,1], [scatteredY, 0], clamp);
      const r = interpolate(collapse, [0,1], [scatteredR, 0], clamp);
      return <div key={c} style={{position: 'absolute', top: 690 + i * 9, left: '50%', width: 470, height: 94, borderRadius: 20, background: i === 2 ? brand.lime : brand.paper, color: brand.deep, transform: `translate(calc(-50% + ${x}px), ${y}px) rotate(${r}deg) scale(${1 - collapse * 0.12})`, display: 'flex', alignItems: 'center', padding: '0 28px', boxSizing: 'border-box', font: `900 25px ${brand.font}`, boxShadow: '0 20px 45px #061a1455'}}><span style={{marginRight: 16, color: brand.green}}>◉</span>{c}<span style={{marginLeft: 'auto'}}>›</span></div>;
    })}
    <div style={{position: 'absolute', top: 1330, width: '100%', textAlign: 'center', color: brand.paper, font: `800 23px ${brand.font}`}}>UNA SOLA BÚSQUEDA PARA ARRANCAR</div>
  </>;
};

const CtaScene: React.FC<{frame: number}> = ({frame}) => {
  const pulse = 1 + Math.sin(frame / 5) * 0.018;
  const carX = interpolate(frame, [0, 30, 95, 140], [-270, -110, 95, 250], clamp);
  return <>
    <div style={{position: 'absolute', left: 75, right: 75, top: 390, borderRadius: 48, background: brand.paper, padding: '66px 46px 58px', boxSizing: 'border-box', textAlign: 'center', transform: `scale(${pulse})`, boxShadow: '0 38px 100px #071b1560'}}>
      <div style={{font: `900 52px/1.05 Georgia, serif`, color: brand.deep}}>Tu próxima búsqueda,<br /><span style={{color: brand.green, fontStyle: 'italic'}}>más clara.</span></div>
      <div style={{margin: '40px auto 0', padding: '22px 22px', borderRadius: 18, background: brand.deep, color: brand.lime, font: `900 24px ${brand.font}`, letterSpacing: 0.1}}>kilometroclaro.com/marcas</div>
      <div style={{marginTop: 24, color: brand.green, font: `900 21px ${brand.font}`, letterSpacing: 1}}>ENTRA Y EMPIEZA A BUSCAR&nbsp; →</div>
    </div>
    <div style={{position: 'absolute', top: 1260, left: '50%', transform: `translateX(calc(-50% + ${carX}px))`}}><CarGlyph color={brand.lime} frame={frame} compact /></div>
  </>;
};

const VisualForScene: React.FC<{sceneId: string; frame: number}> = ({sceneId, frame}) => {
  switch (sceneId) {
    case 'hook': return <TabsScene frame={frame} />;
    case 'directory': return <DirectoryScene frame={frame} />;
    case 'brands': return <BrandCarousel frame={frame} />;
    case 'models': return <ModelScene frame={frame} />;
    case 'official': return <OfficialScene frame={frame} />;
    case 'one-tab': return <OneTabScene frame={frame} />;
    default: return <CtaScene frame={frame} />;
  }
};

export const BrandDirectoryPromo: React.FC<BrandDirectorySpec> = (spec) => {
  const frame = useCurrentFrame();
  const seconds = frame / spec.fps;
  const scene = spec.scenes.find((item) => seconds >= item.startSeconds && seconds < item.endSeconds) ?? spec.scenes.at(-1)!;
  const sceneFrame = Math.max(0, frame - scene.startSeconds * spec.fps);
  const caption = spec.scenes.flatMap((item) => item.captions).find((cue) => seconds >= cue.startSeconds && seconds < cue.endSeconds);
  const captionOpacity = caption ? interpolate(frame, [caption.startSeconds * spec.fps, caption.startSeconds * spec.fps + 4, caption.endSeconds * spec.fps - 4, caption.endSeconds * spec.fps], [0, 1, 1, 0], clamp) : 0;
  const sceneProgress = interpolate(sceneFrame, [0, 9], [28, 0], clamp);

  return <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 50% 56%, #245d4b 0%, #173d34 47%, #102b23 100%)'}} />
    <div style={{position: 'absolute', inset: 0, opacity: 0.12, backgroundImage: 'linear-gradient(#d7f36a 1px, transparent 1px), linear-gradient(90deg, #d7f36a 1px, transparent 1px)', backgroundSize: '74px 74px', maskImage: 'linear-gradient(to bottom, transparent, black 24%, black 77%, transparent)'}} />
    <div style={{position: 'absolute', top: -220, right: -140, width: 540, height: 540, borderRadius: '50%', background: brand.lime, opacity: 0.11, transform: `translateY(${Math.sin(frame / 23) * 18}px)`}} />
    <div style={{position: 'absolute', bottom: 120, left: -220, width: 500, height: 500, borderRadius: '50%', background: brand.green, opacity: 0.28, transform: `translateY(${Math.cos(frame / 27) * 24}px)`}} />
    <div style={{position: 'absolute', inset: 0, zIndex: 2, transform: `translateY(${sceneProgress}px)`}}><VisualForScene sceneId={scene.id} frame={sceneFrame} /></div>
    <div style={{position: 'absolute', top: 48, left: 52, zIndex: 9999, width: 456, height: 91, boxSizing: 'border-box', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 14, background: '#f7f8f5', borderRadius: 24, boxShadow: '0 12px 28px #173d3420', transform: 'scale(0.78)', transformOrigin: 'top left', pointerEvents: 'none'}}>
      <img src={staticFile('logo-marca-kilometro-claro.png')} alt="Símbolo C de Kilómetro Claro" style={{width: 72, height: 72, objectFit: 'contain', flex: '0 0 72px'}} />
      <div style={{fontFamily: 'Arial, "Segoe UI", sans-serif', fontSize: 31, lineHeight: 1, letterSpacing: -1.1, whiteSpace: 'nowrap'}}><span style={{color: brand.deep, fontWeight: 700}}>Kilómetro</span>{' '}<span style={{color: '#7b8781', fontWeight: 400}}>Claro</span></div>
    </div>
    {caption ? <div style={{position: 'absolute', left: 60, right: 60, bottom: 155, zIndex: 30, minHeight: 138, padding: '23px 34px', boxSizing: 'border-box', display: 'grid', placeItems: 'center', borderRadius: 32, background: brand.paper, color: brand.deep, fontSize: caption.text.length > 63 ? 30 : caption.text.length > 48 ? 34 : 38, lineHeight: 1.14, fontWeight: 800, textAlign: 'center', boxShadow: '0 18px 50px #061a14a8', opacity: captionOpacity, whiteSpace: 'pre-line'}}>{caption.text}</div> : null}
    <div style={{position: 'absolute', bottom: 50, left: 70, right: 70, display: 'flex', alignItems: 'center', gap: 8, zIndex: 18}}>{spec.scenes.map((item) => <div key={item.id} style={{flex: 1, height: 6, borderRadius: 8, background: seconds >= item.startSeconds ? brand.lime : '#c8d6cf55', opacity: seconds >= item.endSeconds ? 0.56 : 1}} />)}</div>
    <Audio src={staticFile('audio/voice-video-005.wav')} volume={1} />
  </AbsoluteFill>;
};
