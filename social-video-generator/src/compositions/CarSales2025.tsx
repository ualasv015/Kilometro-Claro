import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {brand} from '../brand/tokens';
import type {RankingVideoSpec} from '../content/validate-ranking';
import {BrandLogo} from '../components/BrandLogo';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const integer = new Intl.NumberFormat('es-ES', {maximumFractionDigits: 0});

const sceneStyle = (frame: number, start: number, end: number): React.CSSProperties => ({
  position: 'absolute',
  inset: 0,
  opacity: interpolate(frame, [start, start + 14, end - 14, end], [0, 1, 1, 0], clamp),
  transform: `translateY(${interpolate(frame, [start, start + 18], [32, 0], clamp)}px)`,
});

const Header: React.FC<{periodLabel: string}> = ({periodLabel}) => (
  <>
    <BrandLogo style={{top: 52, left: 58}} />
    <div style={{position: 'absolute', top: 63, right: 64, width: 268, height: 72, borderRadius: 22, background: brand.deep, color: brand.lime, display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 800, letterSpacing: 1.2}}>
      {periodLabel}
    </div>
  </>
);

const Footer: React.FC<{sourceLabel: string}> = ({sourceLabel}) => (
  <div style={{position: 'absolute', left: 62, right: 62, bottom: 26, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: brand.deep, fontSize: 20, fontWeight: 700, letterSpacing: 0.8}}>
    <span>TURISMOS MATRICULADOS · ESPAÑA</span>
    <span>{sourceLabel}</span>
  </div>
);

const Kicker: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{fontSize: 27, fontWeight: 850, letterSpacing: 2.2, color: brand.green, textTransform: 'uppercase'}}>{children}</div>
);

const BrandRankingScene: React.FC<{spec: RankingVideoSpec; frame: number; start: number}> = ({spec, frame, start}) => (
  <div style={sceneStyle(frame, start, 300)}>
    <div style={{position: 'absolute', left: 72, top: 265}}>
      <Kicker>El ranking por marcas</Kicker>
      <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 76, lineHeight: 1.05, fontWeight: 800, color: brand.ink, marginTop: 18}}>Toyota quedó primera</div>
    </div>
    {spec.brandRanking.map((row, index) => {
      const rowTop = 490 + index * 226;
      const progress = interpolate(frame, [start + 14, start + 65], [0, row.registrations / spec.brandRanking[0].registrations], clamp);
      const countProgress = interpolate(frame, [start + 12, start + 62], [0, row.registrations], clamp);
      return (
        <div key={row.brand} style={{position: 'absolute', left: 72, top: rowTop, width: 936, height: 198, borderRadius: 30, background: brand.paper, padding: '24px 32px', boxSizing: 'border-box', boxShadow: '0 16px 32px #173d3424'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: 64, height: 64, borderRadius: 20, background: index === 0 ? brand.deep : brand.wash, color: index === 0 ? brand.lime : brand.green, display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 900}}>{String(row.rank).padStart(2, '0')}</div>
            <div style={{marginLeft: 22, fontSize: 43, fontWeight: 850, color: brand.ink}}>{row.brand}</div>
            <div style={{marginLeft: 'auto', fontSize: 43, fontWeight: 900, color: brand.green, fontVariantNumeric: 'tabular-nums'}}>{integer.format(Math.round(countProgress))}</div>
          </div>
          <div style={{position: 'absolute', left: 118, right: 32, bottom: 25, height: 22, borderRadius: 20, background: '#e6ebdf', overflow: 'hidden'}}>
            <div style={{width: `${progress * 100}%`, height: '100%', borderRadius: 20, background: index === 0 ? brand.lime : brand.green}} />
          </div>
        </div>
      );
    })}
    <div style={{position: 'absolute', left: 74, top: 1207, fontSize: 27, color: brand.deep, fontWeight: 700}}>El puesto de marca suma todos sus modelos.</div>
  </div>
);

const ModelLeaderScene: React.FC<{spec: RankingVideoSpec; frame: number; start: number}> = ({spec, frame, start}) => {
  const count = interpolate(frame, [start + 16, start + 82], [0, spec.modelLeader.registrations], clamp);
  const bar = interpolate(frame, [start + 24, start + 76], [0, 1], clamp);
  return (
    <div style={sceneStyle(frame, start, 475)}>
      <div style={{position: 'absolute', left: 72, top: 275}}>
        <Kicker>El ranking por modelos</Kicker>
        <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 72, lineHeight: 1.05, fontWeight: 800, color: brand.ink, marginTop: 18}}>El nº1 fue el Sandero</div>
      </div>
      <div style={{position: 'absolute', left: 72, top: 477, width: 936, height: 637, borderRadius: 38, background: brand.deep, color: brand.paper, padding: '46px 54px', boxSizing: 'border-box', overflow: 'hidden'}}>
        <div style={{fontSize: 27, color: brand.lime, letterSpacing: 2.2, fontWeight: 850}}>DACIA · MODELO MÁS MATRICULADO</div>
        <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 112, lineHeight: 1, fontWeight: 800, marginTop: 30}}>Sandero</div>
        <div style={{fontSize: 103, fontWeight: 900, color: brand.lime, fontVariantNumeric: 'tabular-nums', marginTop: 36}}>{integer.format(Math.round(count))}</div>
        <div style={{fontSize: 32, color: brand.paper, marginTop: 2}}>turismos matriculados en 2025</div>
        <div style={{position: 'absolute', left: 54, right: 54, bottom: 125, height: 16, borderRadius: 20, background: '#ffffff25'}}>
          <div style={{width: `${bar * 100}%`, height: '100%', borderRadius: 20, background: brand.lime}} />
        </div>
      </div>
      <div style={{position: 'absolute', left: 72, top: 1152, width: 936, height: 152, borderRadius: 28, background: brand.paper, display: 'flex', alignItems: 'center', padding: '0 38px', boxSizing: 'border-box'}}>
        <div style={{width: 78, height: 78, borderRadius: 24, background: brand.lime, color: brand.deep, display: 'grid', placeItems: 'center', fontSize: 38, fontWeight: 900}}>6º</div>
        <div style={{marginLeft: 24}}>
          <div style={{fontSize: 32, color: brand.ink, fontWeight: 850}}>Dacia quedó sexta por marcas</div>
          <div style={{fontSize: 26, color: brand.muted, marginTop: 5}}>{integer.format(spec.modelLeader.brandRegistrations)} turismos entre toda su gama</div>
        </div>
      </div>
    </div>
  );
};

const RenaultScene: React.FC<{spec: RankingVideoSpec; frame: number; start: number}> = ({spec, frame, start}) => {
  const progress = interpolate(frame, [start + 16, start + 76], [0, 1], clamp);
  const growth = interpolate(frame, [start + 18, start + 68], [0, spec.growthStory.growthPercent], clamp);
  return (
    <div style={sceneStyle(frame, start, 660)}>
      <div style={{position: 'absolute', left: 72, top: 292}}>
        <Kicker>El salto más fuerte del top 10</Kicker>
        <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 76, lineHeight: 1.06, fontWeight: 800, color: brand.ink, marginTop: 20}}>Renault subió más</div>
      </div>
      <div style={{position: 'absolute', left: 72, top: 520, width: 936, height: 520, borderRadius: 38, background: brand.paper, padding: '46px 54px', boxSizing: 'border-box'}}>
        <div style={{fontSize: 33, color: brand.green, fontWeight: 850, letterSpacing: 1.6}}>RENAULT · MATRICULACIONES</div>
        <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 150, lineHeight: 1, fontWeight: 800, color: brand.deep, marginTop: 35, fontVariantNumeric: 'tabular-nums'}}>+{growth.toFixed(1).replace('.', ',')}%</div>
        <div style={{fontSize: 29, color: brand.muted, marginTop: 12}}>mayor crecimiento porcentual del top 10</div>
        <div style={{display: 'flex', alignItems: 'center', marginTop: 45}}>
          <div style={{padding: '17px 25px', borderRadius: 20, background: brand.wash, fontSize: 30, fontWeight: 800, color: brand.ink}}>2024 · {spec.growthStory.rank2024}.º</div>
          <div style={{height: 8, width: 250, margin: '0 20px', borderRadius: 9, background: brand.lime, transform: `scaleX(${progress})`, transformOrigin: 'left'}} />
          <div style={{padding: '17px 25px', borderRadius: 20, background: brand.deep, fontSize: 30, fontWeight: 800, color: brand.lime}}>2025 · {spec.growthStory.rank2025}.º</div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 78, top: 1090, width: 920, display: 'flex', justifyContent: 'space-between', fontSize: 27, color: brand.deep, fontWeight: 700}}>
        <span>{integer.format(spec.growthStory.registrations2024)} en 2024</span>
        <span>{integer.format(spec.growthStory.registrations2025)} en 2025</span>
      </div>
    </div>
  );
};

const MeaningScene: React.FC<{frame: number; start: number}> = ({frame, start}) => (
  <div style={sceneStyle(frame, start, 790)}>
    <div style={{position: 'absolute', left: 72, top: 302}}>
      <Kicker>La diferencia está en qué sumas</Kicker>
      <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 75, lineHeight: 1.08, fontWeight: 800, color: brand.ink, marginTop: 18}}>Marca ≠ modelo</div>
    </div>
    <div style={{position: 'absolute', left: 72, top: 515, width: 936, minHeight: 235, borderRadius: 32, background: brand.paper, padding: '34px 40px', boxSizing: 'border-box'}}>
      <div style={{fontSize: 28, color: brand.green, fontWeight: 850, letterSpacing: 2}}>MARCA</div>
      <div style={{fontSize: 42, lineHeight: 1.2, color: brand.ink, fontWeight: 750, marginTop: 12}}>Suma las matriculaciones de toda su gama.</div>
    </div>
    <div style={{position: 'absolute', left: 72, top: 790, width: 936, minHeight: 235, borderRadius: 32, background: brand.deep, padding: '34px 40px', boxSizing: 'border-box'}}>
      <div style={{fontSize: 28, color: brand.lime, fontWeight: 850, letterSpacing: 2}}>MODELO</div>
      <div style={{fontSize: 42, lineHeight: 1.2, color: brand.paper, fontWeight: 750, marginTop: 12}}>Cuenta cada coche por separado.</div>
    </div>
    <div style={{position: 'absolute', left: 76, top: 1100, fontSize: 28, lineHeight: 1.3, color: brand.deep, fontWeight: 700, maxWidth: 900}}>{/* Editorial note text remains concise and readable. */}Popularidad no significa fiabilidad ni que sea el coche adecuado para ti.</div>
  </div>
);

const EndScene: React.FC<{spec: RankingVideoSpec; frame: number; start: number}> = ({spec, frame, start}) => {
  const progress = interpolate(frame, [start + 10, start + 50], [0, 1], clamp);
  return (
    <div style={sceneStyle(frame, start, 900)}>
      <div style={{position: 'absolute', left: 72, top: 360, width: 936, minHeight: 820, borderRadius: 42, background: brand.deep, padding: '65px 58px', boxSizing: 'border-box', color: brand.paper, overflow: 'hidden'}}>
        <div style={{fontSize: 28, color: brand.lime, fontWeight: 850, letterSpacing: 2.2}}>DESCUBRE EL RANKING COMPLETO</div>
        <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 83, lineHeight: 1.08, fontWeight: 800, marginTop: 35}}>Diez marcas.<br />Diez modelos.<br />Un mercado.</div>
        <div style={{height: 10, width: 650, borderRadius: 8, background: brand.lime, transform: `scaleX(${progress})`, transformOrigin: 'left', marginTop: 42}} />
        <div style={{fontSize: 36, fontWeight: 750, color: brand.paper, marginTop: 38}}>Lee la guía en</div>
        <div style={{fontSize: 38, fontWeight: 900, color: brand.lime, marginTop: 8}}>kilometroclaro.com</div>
        <div style={{fontSize: 27, lineHeight: 1.35, color: '#dce9e1', marginTop: 42, maxWidth: 790}}>{spec.editorialNote}</div>
      </div>
    </div>
  );
};

export const CarSales2025: React.FC<RankingVideoSpec> = (spec) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{background: brand.lime, color: brand.ink, fontFamily: brand.font, overflow: 'hidden'}}>
      <div style={{position: 'absolute', width: 900, height: 900, right: -430, top: 720, borderRadius: '50%', border: '2px solid #1d5d4e20', boxShadow: '0 0 0 82px #1d5d4e0b, 0 0 0 164px #1d5d4e08'}} />
      <Header periodLabel="ESPAÑA · 2025" />
      <div style={sceneStyle(frame, 0, 115)}>
        <div style={{position: 'absolute', left: 72, top: 290}}>
          <Kicker>Un mismo ranking, dos líderes</Kicker>
          <div style={{fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 96, lineHeight: 1.05, fontWeight: 800, color: brand.ink, marginTop: 28}}>El coche nº1<br />no fue de la<br />marca nº1.</div>
          <div style={{display: 'inline-block', marginTop: 32, padding: '17px 25px', borderRadius: 20, background: brand.deep, color: brand.lime, fontSize: 29, fontWeight: 800}}>MARCA ≠ MODELO</div>
        </div>
      </div>
      <BrandRankingScene spec={spec} frame={frame} start={98} />
      <ModelLeaderScene spec={spec} frame={frame} start={288} />
      <RenaultScene spec={spec} frame={frame} start={468} />
      <MeaningScene frame={frame} start={648} />
      <EndScene spec={spec} frame={frame} start={768} />
      <Footer sourceLabel={spec.sourceLabel} />
      <Audio src={staticFile('audio/voice-video-002.wav')} playbackRate={1.052} preservePitch volume={1} />
    </AbsoluteFill>
  );
};
