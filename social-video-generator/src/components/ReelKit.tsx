import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile} from 'remotion';
import {brand} from '../brand/tokens';
import {BrandLogo} from './BrandLogo';

// Shared building blocks for the audio-led reels (header, photo stages, diagrams, chrome).
// Extracted from the reel 021 (MatrixZonesPromo), which set the quality bar.

/** Optional `words` (with start times) turn the caption into a karaoke line: each word lights up as it is spoken. */
export type CaptionCue = {startSeconds: number; endSeconds: number; text: string; words?: {text: string; start: number}[]};
export type ReelScene<Id extends string = string> = {id: Id; start: number; end: number; label: string; credit: string};

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const Heading: React.FC<{frame: number; title: string; eyebrow?: string; sub?: string; subFrom?: number; compact?: boolean}> = ({frame, title, eyebrow, sub, subFrom = 0, compact = false}) => {
  const p = interpolate(frame, [0, 9], [0.3, 1], clamp);
  const s = interpolate(frame, [subFrom, subFrom + 7], [0, 1], clamp);
  return <div style={{position: 'absolute', top: 222, left: 50, right: 50, textAlign: 'center', opacity: p, transform: `translateY(${interpolate(p, [0, 1], [26, 0])}px) scale(${interpolate(p, [0, 1], [0.95, 1])})`, zIndex: 4}}>
    {eyebrow ? <div style={{marginBottom: 10, color: '#e1ebdf', fontSize: 21, lineHeight: 1, fontWeight: 900, letterSpacing: 3}}>{eyebrow}</div> : null}
    <div style={{color: brand.lime, fontSize: compact || title.length > 24 ? 52 : 66, lineHeight: 0.99, fontWeight: 1000, letterSpacing: -2.2, textShadow: '0 7px 24px #06140f70'}}>{title}</div>
    {sub ? <div style={{marginTop: 12, color: brand.paper, fontSize: 28, lineHeight: 1.1, fontWeight: 900, opacity: s, transform: `translateY(${interpolate(s, [0, 1], [14, 0])}px)`}}>{sub}</div> : null}
  </div>;
};

// Photographs stay clean: nothing is drawn on top of them.
export const PhotoStage: React.FC<{frame: number; src: string; alt: string; top?: number; height?: number; position?: string; origin?: string; zoomFrom?: number; zoomTo?: number; zoomFrames?: number; pan?: number; fit?: 'cover' | 'contain'; bg?: string; brightnessIn?: number; snap?: boolean; instant?: boolean}> = ({frame, src, alt, top = 470, height = 720, position = 'center', origin = 'center', zoomFrom = 1.04, zoomTo = 1.12, zoomFrames = 110, pan = 0, fit = 'cover', bg = brand.deep, brightnessIn = 0, snap = false, instant = false}) => {
  const entrance = instant ? 1 : interpolate(frame, [0, snap ? 4 : 10], [0.3, 1], clamp);
  const scale = snap ? interpolate(frame, [0, 10, zoomFrames], [zoomFrom + 0.16, zoomFrom, zoomTo], clamp) : interpolate(frame, [0, zoomFrames], [zoomFrom, zoomTo], clamp);
  const drift = interpolate(frame, [0, zoomFrames], [-pan, pan], clamp);
  const bright = brightnessIn ? interpolate(frame, [0, brightnessIn], [0.12, 1], clamp) : 1;
  return <div style={{position: 'absolute', top, left: 48, right: 48, height, overflow: 'hidden', borderRadius: 30, opacity: entrance, transform: `translateY(${interpolate(entrance, [0, 1], [22, 0])}px)`, boxShadow: '0 26px 65px #06140f70', background: bg, zIndex: 2}}>
    <Img src={staticFile(src)} alt={alt} style={{width: '100%', height: '100%', objectFit: fit, objectPosition: position, transformOrigin: origin, transform: `translateX(${drift}px) scale(${scale})`, filter: `brightness(${bright})`}} />
  </div>;
};

export const Strap: React.FC<{frame: number; text: string; top?: number; from?: number; lime?: boolean}> = ({frame, text, top = 1218, from = 6, lime = false}) => {
  const p = interpolate(frame, [from, from + 8], [0, 1], clamp);
  return <div style={{position: 'absolute', top, left: 60, right: 60, textAlign: 'center', color: lime ? brand.lime : brand.paper, fontSize: 27, lineHeight: 1.1, fontWeight: 900, letterSpacing: 1, opacity: p, transform: `translateY(${interpolate(p, [0, 1], [12, 0])}px)`, zIndex: 4}}>{text}</div>;
};

export const IllustrativeBadge: React.FC<{text?: string; width?: number}> = ({text = 'ANIMACIÓN ILUSTRATIVA', width = 320}) => <g>
  <rect x="24" y="22" width={width} height="44" rx="22" fill="#0a211acc" stroke={brand.lime} strokeWidth="2" />
  <text x={24 + width / 2} y="51" textAnchor="middle" fill={brand.lime} fontSize="18" fontWeight="900" letterSpacing="1.2">{text}</text>
</g>;

export const DiagramStage: React.FC<{frame: number; children: React.ReactNode; wipe?: boolean; top?: number; height?: number; punch?: boolean}> = ({frame, children, wipe = false, top = 470, height = 720, punch = false}) => {
  const entrance = interpolate(frame, [0, 9], [0.3, 1], clamp);
  const r = interpolate(frame, [0, 12], [8, 130], clamp);
  const scale = punch ? interpolate(frame, [0, 8], [1.08, 1], clamp) : interpolate(entrance, [0, 1], [0.96, 1]);
  return <div style={{position: 'absolute', top, left: 48, right: 48, height, overflow: 'hidden', borderRadius: 30, boxShadow: '0 26px 65px #06140f70', background: '#061410', zIndex: 2, opacity: wipe ? 1 : entrance, transform: wipe ? undefined : `scale(${scale})`, clipPath: wipe ? `circle(${r}% at 50% 40%)` : undefined}}>{children}</div>;
};

export const Backdrop: React.FC<{frame: number}> = ({frame}) => {
  const gridOffset = (frame * 0.58) % 92;
  return <>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at 52% 45%, #1d5d4e 0%, #173d34 42%, #0a211a 100%)'}} />
    <div style={{position: 'absolute', inset: 0, opacity: 0.13, backgroundImage: 'linear-gradient(#d7f36a 1px, transparent 1px), linear-gradient(90deg, #d7f36a 1px, transparent 1px)', backgroundSize: '92px 92px', backgroundPosition: `${gridOffset}px ${-gridOffset}px`, maskImage: 'linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)'}} />
    <div style={{position: 'absolute', top: 390, right: -270, width: 670, height: 670, border: '2px solid #d7f36a35', borderRadius: '50%', transform: `translateY(${Math.sin(frame / 22) * 30}px)`}} />
    <div style={{position: 'absolute', bottom: 200, left: -260, width: 560, height: 560, borderRadius: '50%', background: brand.green, opacity: 0.42, transform: `translateY(${Math.cos(frame / 25) * 28}px)`}} />
  </>;
};

export const BrandCircle: React.FC<{size: number}> = ({size}) => <div style={{width: size, height: size, borderRadius: '50%', overflow: 'hidden', background: brand.deep, boxShadow: '0 18px 30px #06140f70'}}>
  <Img src={staticFile('logo-marca-kilometro-claro.png')} alt="Símbolo C lima oficial de Kilómetro Claro" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
</div>;

export const CtaCard: React.FC<{frame: number; guide: string; detail: React.ReactNode}> = ({frame, guide, detail}) => <>
  <div style={{position: 'absolute', top: 262, left: 0, right: 0, display: 'flex', justifyContent: 'center', opacity: interpolate(frame, [0, 10], [0.3, 1], clamp), transform: `scale(${interpolate(frame, [0, 10], [0.8, 1], clamp) + Math.sin(frame / 6) * 0.02})`, zIndex: 5}}>
    <BrandCircle size={230} />
  </div>
  <div style={{position: 'absolute', top: 545, left: 55, right: 55, textAlign: 'center', color: brand.paper, fontSize: 56, lineHeight: 1.02, fontWeight: 1000, letterSpacing: -1.8, opacity: interpolate(frame, [5, 15], [0.3, 1], clamp)}}>BUSCA LA GUÍA<br /><span style={{color: brand.lime}}>{guide}</span></div>
  <div style={{position: 'absolute', top: 790, left: 70, right: 70, padding: '26px 18px', borderRadius: 24, background: brand.lime, color: brand.deep, textAlign: 'center', fontSize: 44, lineHeight: 1, fontWeight: 1000, letterSpacing: -0.5, boxShadow: '0 20px 45px #06140f6e', transform: `scale(${interpolate(frame, [12, 22], [0.92, 1], clamp)})`, opacity: interpolate(frame, [12, 18], [0, 1], clamp)}}>KILOMETROCLARO.COM</div>
  <div style={{position: 'absolute', top: 905, left: 80, right: 80, textAlign: 'center', color: '#e7efe9', fontSize: 25, lineHeight: 1.15, fontWeight: 850, letterSpacing: 1, opacity: interpolate(frame, [20, 28], [0, 1], clamp)}}>{detail}</div>
</>;

/** Logo, topic tag, proportional progress bar, scene counter, captions, credit footer and voice track. */
export const ReelChrome: React.FC<{frame: number; fps: number; real: number; durationSeconds: number; scenes: ReelScene[]; activeIndex: number; tag: string; captions: CaptionCue[]; audioFile: string}> = ({frame, fps, real, durationSeconds, scenes, activeIndex, tag, captions, audioFile}) => {
  const active = scenes[activeIndex];
  const caption = captions.find((c) => real >= c.startSeconds && real < c.endSeconds);
  const captionOpacity = caption ? interpolate(frame, [caption.startSeconds * fps, caption.startSeconds * fps + 3, caption.endSeconds * fps - 3, caption.endSeconds * fps], [caption.startSeconds === 0 ? 1 : 0, 1, 1, 0], clamp) : 0;
  const captionSize = caption ? (caption.text.length > 62 ? 32 : caption.text.length > 45 ? 35 : 39) : 36;
  return <>
    <BrandLogo style={{top: 28, left: 38, transform: 'scale(0.59)', transformOrigin: 'top left', zIndex: 30}} />
    <div style={{position: 'absolute', top: 42, right: 42, padding: '12px 16px', borderRadius: 14, background: '#f7f8f5e8', color: brand.deep, fontSize: 18, fontWeight: 900, letterSpacing: 0.7, zIndex: 29}}>{tag}</div>
    <div style={{position: 'absolute', top: 118, left: 48, right: 48, display: 'flex', gap: 7, zIndex: 30}}>
      {scenes.map((s, i) => {
        const prog = i < activeIndex ? 1 : i > activeIndex ? 0 : interpolate(real, [s.start, s.end], [0, 1], clamp);
        return <div key={s.id} style={{height: 8, flex: s.end - s.start, overflow: 'hidden', borderRadius: 8, background: '#f7f8f53b'}}><div style={{width: `${prog * 100}%`, height: '100%', borderRadius: 8, background: brand.lime, boxShadow: i === activeIndex ? '0 0 12px #d7f36a90' : 'none'}} /></div>;
      })}
    </div>
    <div style={{position: 'absolute', top: 145, left: 50, right: 50, display: 'flex', justifyContent: 'space-between', color: '#e7efe9', fontSize: 18, lineHeight: 1, fontWeight: 900, letterSpacing: 1, zIndex: 28}}>
      <span>{String(activeIndex + 1).padStart(2, '0')} / {String(scenes.length).padStart(2, '0')} · {active.label}</span>
      <span>QUEDAN {Math.max(0, durationSeconds - real).toFixed(1).replace('.', ',')} s</span>
    </div>
    {caption ? <div style={{position: 'absolute', left: 54, right: 54, bottom: 203, minHeight: 148, padding: '22px 27px', boxSizing: 'border-box', display: 'grid', placeItems: 'center', borderRadius: 28, background: brand.paper, color: brand.deep, fontSize: captionSize, lineHeight: 1.12, fontWeight: 850, textAlign: 'center', boxShadow: '0 20px 50px #06140f95', opacity: captionOpacity, zIndex: 35}}>{caption.words ? <div>{caption.words.map((w, i) => {
      const spoken = real >= w.start;
      const next = caption.words![i + 1];
      const current = spoken && (!next || real < next.start);
      return <React.Fragment key={i}>{i ? ' ' : ''}<span style={{opacity: spoken ? 1 : 0.34, background: current ? brand.lime : 'transparent', borderRadius: 9, padding: '0 5px', margin: '0 -5px', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone'}}>{w.text}</span></React.Fragment>;
    })}</div> : caption.text}</div> : null}
    <div style={{position: 'absolute', bottom: 48, left: 54, right: 54, display: 'flex', justifyContent: 'space-between', color: '#dfe9e2', fontSize: 15, fontWeight: 750, letterSpacing: 0.5, zIndex: 25}}>
      <span>{active.credit}</span>
      <span>{Math.min(durationSeconds, real).toFixed(1).replace('.', ',')} s</span>
    </div>
    <Audio src={staticFile(audioFile)} volume={1} />
  </>;
};
