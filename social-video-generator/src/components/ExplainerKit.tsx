import React from 'react';
import {AbsoluteFill, Easing, interpolate, interpolateColors} from 'remotion';
import {brand} from '../brand/tokens';
import {Backdrop, type CaptionCue, clamp, CtaCard, ReelChrome, type ReelScene} from './ReelKit';

// Shared pieces of the «cómo funciona» reels: one rendered world, a keyframed camera, labels, wires with pulses,
// chapter titles and the overlay shell. Extracted from reel 024 (AcceleratorPromo, which keeps its own copy).

export const PAPER = '#f7f8f5';
export const ease = Easing.inOut(Easing.cubic);
export const at = (t: number, from: number, dur = 0.3) => interpolate(t, [from, from + dur], [0, 1], {...clamp, easing: ease});
/** 1 inside [a, b] with soft edges. */
export const win = (t: number, a: number, b: number, fade = 0.15) => Math.min(at(t, a, fade), 1 - at(t, b, fade));
/** Eased keyframe interpolation (per segment). */
export const kf = (t: number, pts: [number, number][]) => interpolate(t, pts.map((p) => p[0]), pts.map((p) => p[1]), {...clamp, easing: ease});
export const rnd = (i: number, k: number) => { const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); };

export type Pt = [number, number];
export const bez = (p: Pt[], u: number): Pt => {
  const m = 1 - u;
  return [0, 1].map((k) => m * m * m * p[0][k] + 3 * m * m * u * p[1][k] + 3 * m * u * u * p[2][k] + u * u * u * p[3][k]) as Pt;
};
export const bezD = (p: Pt[]) => `M${p[0][0]} ${p[0][1]} C${p[1][0]} ${p[1][1]} ${p[2][0]} ${p[2][1]} ${p[3][0]} ${p[3][1]}`;

// ---------- Camera --------------------------------------------------------------------------------
export type CamKey = [number, number, number, number]; // [time, centreX, centreY, zoom]
export type Cam = {cx: number; cy: number; z: number};
/** Eased camera between keyframes; zoom interpolates in log space so push-ins feel even. */
export const makeCamera = (keys: CamKey[]) => (t: number): Cam => {
  if (t <= keys[0][0]) return {cx: keys[0][1], cy: keys[0][2], z: keys[0][3]};
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, x0, y0, z0] = keys[i], [t1, x1, y1, z1] = keys[i + 1];
    if (t <= t1) {
      const e = ease((t - t0) / (t1 - t0));
      return {cx: x0 + (x1 - x0) * e, cy: y0 + (y1 - y0) * e, z: Math.exp(Math.log(z0) + (Math.log(z1) - Math.log(z0)) * e)};
    }
  }
  const l = keys[keys.length - 1];
  return {cx: l[1], cy: l[2], z: l[3]};
};
/** Screen-space velocity of the camera (px per frame), for directional motion blur on fast pans. */
export const camVelocity = (cam: (t: number) => Cam, t: number, fps = 30, centerY = 1000) => {
  const a = cam(Math.max(0, t - 1 / fps)), b = cam(t);
  return {vx: (540 - b.cx * b.z) - (540 - a.cx * a.z), vy: (centerY - b.cy * b.z) - (centerY - a.cy * a.z)};
};

// ---------- World pieces ------------------------------------------------------------------------------
export const WPill: React.FC<{x: number; y: number; text: string; o?: number; dark?: boolean; color?: string; size?: number}> = ({x, y, text, o = 1, dark = false, color = brand.lime, size = 28}) => {
  if (o <= 0.01) return null;
  const w = text.length * size * 0.68 + 56, h = size * 1.9;
  return <g opacity={o} transform={`translate(${x} ${y}) scale(${0.85 + 0.15 * o})`}>
    <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2} fill={dark ? '#071612ee' : color} stroke={dark ? color : '#071612'} strokeWidth="3" />
    <text y={size * 0.36} textAnchor="middle" fill={dark ? color : brand.deep} fontSize={size} fontWeight="1000" letterSpacing="1">{text}</text>
  </g>;
};

export const Plate: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="44" fill="#08171280" stroke="#d7f36a30" strokeWidth="3" opacity={o} />;

/** Wire with travelling pulses: [start, end] or [start, end, reverse]. */
export const Wire: React.FC<{p: Pt[]; t: number; pulses: [number, number, boolean?][]; color?: string}> = ({p, t, pulses, color = brand.lime}) => {
  const lit = Math.max(0, ...pulses.map(([a, b]) => win(t, a, b + 0.6, 0.2)));
  return <g>
    <path d={bezD(p)} fill="none" stroke="#04100c" strokeWidth="26" strokeLinecap="round" />
    <path d={bezD(p)} fill="none" stroke={interpolateColors(lit, [0, 1], ['#2e4a41', color])} strokeWidth="9" strokeLinecap="round" />
    {pulses.map(([a, b, rev], i) => {
      if (t < a || t > b) return null;
      const u = (t - a) / (b - a);
      const [x, y] = bez(p, rev ? 1 - u : u);
      return <g key={i}><circle cx={x} cy={y} r="46" fill={color} opacity=".25" /><circle cx={x} cy={y} r="20" fill={color} /><circle cx={x} cy={y} r="8" fill={PAPER} /></g>;
    })}
  </g>;
};

/** The world canvas: background, parallax dust, grid in world units, camera transform, optional motion blur and vignette. */
export const WorldSvg: React.FC<{cam: Cam; centerY?: number; blur?: {vx: number; vy: number}; children: React.ReactNode; id?: string}> = ({cam: c, centerY = 1000, blur, children, id = 'w'}) => {
  const bx = blur ? Math.min(9, Math.abs(blur.vx) * 0.12) : 0, by = blur ? Math.min(9, Math.abs(blur.vy) * 0.12) : 0;
  const blurOn = bx > 0.6 || by > 0.6;
  return <svg viewBox="0 0 1080 1920" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', fontFamily: brand.font}}>
    <defs>
      <pattern id={`${id}Grid`} width="120" height="120" patternUnits="userSpaceOnUse"><path d="M120 0 H0 V120" fill="none" stroke={brand.lime} strokeWidth="2" opacity=".09" /></pattern>
      <radialGradient id={`${id}Vig`} cx="50%" cy="50%" r="70%"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".55" /></radialGradient>
      {blurOn ? <filter id={`${id}Blur`} x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation={`${bx.toFixed(2)} ${by.toFixed(2)}`} /></filter> : null}
    </defs>
    <rect width="1080" height="1920" fill="#0b1e19" />
    <g opacity=".5">{[...Array(40)].map((_, i) => {
      const x = (((rnd(i, 3) * 1400 - c.cx * 0.18) % 1400) + 1400) % 1400 - 160;
      const y = (((rnd(i, 4) * 2300 - c.cy * 0.18) % 2300) + 2300) % 2300 - 190;
      return <circle key={i} cx={x} cy={y} r={2 + rnd(i, 7) * 4} fill={brand.lime} opacity={0.12 + rnd(i, 8) * 0.2} />;
    })}</g>
    <g filter={blurOn ? `url(#${id}Blur)` : undefined}>
      <g transform={`translate(${540 - c.cx * c.z} ${centerY - c.cy * c.z}) scale(${c.z})`}>
        <rect x="-1200" y="-1200" width="6000" height="6400" fill={`url(#${id}Grid)`} />
        {children}
      </g>
    </g>
    <rect width="1080" height="1920" fill={`url(#${id}Vig)`} />
  </svg>;
};

// ---------- Overlay ------------------------------------------------------------------------------------
export type Chapter = {from: number; to: number; title: string; sub?: string; subAt?: number; alert?: boolean};
export const ChapterTitle: React.FC<{t: number; chapters: Chapter[]}> = ({t, chapters}) => {
  const ch = chapters.find((c) => t >= c.from && t < c.to);
  if (!ch) return null;
  const p = ch.from === 0 ? 1 : interpolate(t, [ch.from, ch.from + 0.28], [0.3, 1], {...clamp, easing: Easing.out(Easing.cubic)});
  const punch = ch.alert ? interpolate(t, [ch.from, ch.from + 0.1, ch.from + 0.23], [1.18, 0.97, 1], clamp) : 1;
  const s = ch.sub && ch.subAt !== undefined ? at(t, ch.subAt, 0.22) : 0;
  return <div style={{position: 'absolute', top: 196, left: 50, right: 50, zIndex: 6, opacity: p, transform: `translateX(${(1 - p) * -60}px)`}}>
    <div style={{display: 'flex', alignItems: 'stretch', gap: 18}}>
      <div style={{width: 10, borderRadius: 6, background: brand.lime, boxShadow: '0 0 18px #d7f36a90'}} />
      <div>
        <div style={{color: ch.alert ? '#ff8f7a' : brand.lime, fontSize: ch.title.length > 26 ? 47 : ch.title.length > 22 ? 54 : 62, lineHeight: 1, fontWeight: 1000, letterSpacing: -1.8, transform: `scale(${punch})`, transformOrigin: 'left center', textShadow: '0 6px 24px #06140fb0'}}>{ch.title}</div>
        {ch.sub ? <div style={{marginTop: 12, color: PAPER, fontSize: 28, lineHeight: 1.1, fontWeight: 900, letterSpacing: 1, opacity: s, transform: `translateY(${(1 - s) * 12}px)`}}>{ch.sub}</div> : null}
      </div>
    </div>
  </div>;
};

export const SchemaBadge: React.FC<{text: string}> = ({text}) => <div style={{position: 'absolute', left: 54, top: 1506, padding: '8px 16px', borderRadius: 18, border: `2px solid ${brand.lime}`, background: '#071612e6', color: brand.lime, fontSize: 17, fontWeight: 900, letterSpacing: 1.2, zIndex: 7}}>{text}</div>;

export type ExplainerSpec = {fps: number; durationSeconds: number; captions: CaptionCue[]; audioFile?: string};
/** Everything above the world: scrims, optional HUD, chapter titles, badge, closing card and the reel chrome. */
export const ExplainerShell: React.FC<{spec: ExplainerSpec; frame: number; t: number; scenes: ReelScene[]; tag: string; badge: string; chapters: Chapter[]; ctaFrom: number; ctaGuide: string; ctaDetail: React.ReactNode; defaultAudio: string; world: React.ReactNode; hud?: React.ReactNode}> = ({spec, frame, t, scenes, tag, badge, chapters, ctaFrom, ctaGuide, ctaDetail, defaultAudio, world, hud}) => {
  const found = scenes.findIndex((s) => t >= s.start && t < s.end);
  const activeIndex = found < 0 ? scenes.length - 1 : found;
  const cta = t >= ctaFrom;
  const dim = at(t, ctaFrom, 0.4);
  return <AbsoluteFill style={{background: '#0b1e19', overflow: 'hidden', fontFamily: brand.font}}>
    {world}
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(#0a211af5 0px, #0a211ae0 250px, #0a211a00 440px, #0a211a00 1380px, #0a211ad8 1560px, #0a211af2 1920px)', zIndex: 3}} />
    {hud}
    {cta ? <><div style={{position: 'absolute', inset: 0, opacity: dim * 0.92, zIndex: 8}}><Backdrop frame={frame} /></div><div style={{position: 'absolute', inset: 0, zIndex: 9, opacity: dim}}><CtaCard frame={Math.round((t - ctaFrom) * spec.fps)} guide={ctaGuide} detail={ctaDetail} /></div></> : null}
    <ChapterTitle t={t} chapters={chapters} />
    {!cta ? <SchemaBadge text={badge} /> : null}
    <ReelChrome frame={frame} fps={spec.fps} real={t} durationSeconds={spec.durationSeconds} scenes={scenes} activeIndex={activeIndex} tag={tag} captions={spec.captions} audioFile={spec.audioFile ?? defaultAudio} />
  </AbsoluteFill>;
};
