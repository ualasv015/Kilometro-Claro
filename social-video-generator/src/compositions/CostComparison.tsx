import React from 'react';
import {AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate} from 'remotion';
import {brand} from '../brand/tokens';
import {calculateEnergy, calculateTripCost} from '../calculations/cost';
import type {Vehicle, VideoSpec} from '../content/validate';
import {formatEnergy, formatMoney, formatPrice} from '../utils/format';
import {Car} from '../components/Car';
import {BrandLogo} from '../components/BrandLogo';

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const timeline = {
  hook: [0, 110],
  setup: [100, 210],
  simulation: [200, 650],
  result: [635, 790],
  context: [780, 885],
  cta: [875, 960],
} as const;

const phaseStyle = (frame: number, start: number, end: number): React.CSSProperties => ({
  position: 'absolute', inset: 0,
  opacity: interpolate(frame, [start, start + 13, end - 14, end], [0, 1, 1, 0], clamp),
  transform: `translateY(${interpolate(frame, [start, start + 18], [30, 0], clamp)}px)`,
  pointerEvents: 'none',
});

const BrandHeader: React.FC = () => <BrandLogo style={{left: 86, top: 92}} />;

const Kicker: React.FC<{children: React.ReactNode; dark?: boolean}> = ({children, dark = false}) => (
  <div style={{color: dark ? brand.green : brand.lime, fontSize: 31, fontWeight: 800, letterSpacing: 2.8, textTransform: 'uppercase'}}>{children}</div>
);

const SourceFooter: React.FC<{spec: VideoSpec}> = ({spec}) => (
  <div style={{position: 'absolute', left: 86, top: 1515, width: 822, borderTop: '1px solid #ffffff4a', paddingTop: 23, color: '#e4ede7', fontSize: 27, lineHeight: 1.3}}>
    <div style={{fontWeight: 800, color: brand.lime}}>EJEMPLO HIPOTÉTICO · SOLO ENERGÍA</div>
    <div style={{marginTop: 8}}>Fuente: Kilómetro Claro · guía actualizada {spec.sourceUpdatedAt}</div>
  </div>
);

const SetupCard: React.FC<{vehicle: Vehicle; index: number}> = ({vehicle, index}) => (
  <div style={{height: 286, borderRadius: 28, background: brand.paper, color: brand.ink, padding: '32px 38px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 14px 35px #09291e40'}}>
    <div>
      <div style={{fontSize: 25, fontWeight: 800, letterSpacing: 2.1, color: brand.green}}>SUPUESTO 0{index + 1}</div>
      <div style={{fontSize: 58, fontWeight: 800, letterSpacing: -1.6, marginTop: 5}}>{vehicle.label}</div>
      <div style={{fontSize: 37, marginTop: 13, fontWeight: 700}}>{formatEnergy(vehicle.consumptionPer100Km, vehicle.energyUnit)} <span style={{fontWeight: 500, fontSize: 30}}>/ 100 km</span></div>
      <div style={{fontSize: 31, color: brand.muted, marginTop: 6}}>a {formatPrice(vehicle.pricePerUnit, vehicle.priceUnit)}</div>
      <div style={{fontSize: 23, color: brand.green, marginTop: 4}}>{vehicle.priceContext}</div>
    </div>
    <div style={{width: 215, height: 156, display: 'grid', placeItems: 'center', background: brand.wash, borderRadius: 20}}><Car type={vehicle.id} width={176} /></div>
  </div>
);

const TrackRow: React.FC<{vehicle: Vehicle; distanceKm: number; progress: number; index: number; frame: number}> = ({vehicle, distanceKm, progress, index, frame}) => {
  const carX = 50 + progress * 525;
  const roadOffset = (frame * 5) % 90;
  return (
    <div style={{position: 'absolute', left: 86, top: 566 + index * 307, width: 820, height: 277, borderRadius: 26, overflow: 'hidden', background: brand.paper, boxShadow: '0 14px 35px #09291e40', color: brand.ink}}>
      <div style={{height: 155, padding: '18px 31px 0', display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <div style={{fontSize: 28, color: brand.green, fontWeight: 800, letterSpacing: 1.5}}>CARRIL 0{index + 1}</div>
          <div style={{fontSize: 52, fontWeight: 800, letterSpacing: -1.6}}>{vehicle.label}</div>
        </div>
        <div style={{textAlign: 'right'}}>
          <div style={{fontSize: 61, lineHeight: 1, fontWeight: 850, letterSpacing: -2.5, fontVariantNumeric: 'tabular-nums'}}>{formatMoney(calculateTripCost(distanceKm, vehicle.consumptionPer100Km, vehicle.pricePerUnit))}</div>
          <div style={{fontSize: 29, lineHeight: 1.15, marginTop: 8, color: brand.muted, fontVariantNumeric: 'tabular-nums'}}>{formatEnergy(calculateEnergy(distanceKm, vehicle.consumptionPer100Km), vehicle.energyUnit)} consumidos</div>
        </div>
      </div>
      <div style={{position: 'relative', height: 122, background: brand.deep, overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 67, left: -90 + roadOffset, width: 1000, height: 4, background: 'repeating-linear-gradient(90deg, #ffffffa5 0 42px, transparent 42px 90px)'}} />
        <div style={{position: 'absolute', left: carX, top: 9}}><Car type={vehicle.id} width={176} /></div>
      </div>
    </div>
  );
};

const ResultCard: React.FC<{vehicle: Vehicle; index: number; distanceKm: number}> = ({vehicle, index, distanceKm}) => {
  const winner = index === 0;
  return (
    <div style={{height: 216, background: winner ? brand.lime : brand.paper, color: brand.ink, borderRadius: 26, padding: '31px 38px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 16px 35px #09291e44'}}>
      <div>
        <div style={{fontSize: 27, color: brand.green, fontWeight: 800, letterSpacing: 2}}>0{index + 1} · COSTE DE ENERGÍA</div>
        <div style={{fontSize: 58, fontWeight: 800, marginTop: 6}}>{vehicle.label}</div>
        <div style={{fontSize: 29, color: brand.green, marginTop: 5}}>{formatEnergy(calculateEnergy(distanceKm, vehicle.consumptionPer100Km), vehicle.energyUnit)} · {vehicle.priceContext}</div>
      </div>
      <div style={{fontSize: 68, fontWeight: 900, letterSpacing: -3, fontVariantNumeric: 'tabular-nums'}}>{formatMoney(calculateTripCost(distanceKm, vehicle.consumptionPer100Km, vehicle.pricePerUnit))}</div>
    </div>
  );
};

const simulationProgress = (frame: number) => {
  const t = Math.max(0, Math.min(1, (frame - timeline.simulation[0] - 15) / (timeline.simulation[1] - timeline.simulation[0] - 36)));
  if (t < 0.84) return (t / 0.84) * 0.9;
  const tail = (t - 0.84) / 0.16;
  return 0.9 + 0.1 * (1 - Math.pow(1 - tail, 3));
};

export const CostComparison: React.FC<VideoSpec> = (spec) => {
  const frame = useCurrentFrame();
  const progress = simulationProgress(frame);
  const distance = spec.distanceKm * progress;
  const displayedDistance = Math.round(distance);
  const sorted = [...spec.variables.vehicles].sort((a, b) => calculateTripCost(spec.distanceKm, a.consumptionPer100Km, a.pricePerUnit) - calculateTripCost(spec.distanceKm, b.consumptionPer100Km, b.pricePerUnit));

  return (
    <AbsoluteFill style={{background: brand.deep, fontFamily: brand.font, overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, opacity: 0.28, backgroundImage: 'linear-gradient(#ffffff24 1px, transparent 1px), linear-gradient(90deg, #ffffff24 1px, transparent 1px)', backgroundSize: '72px 72px'}} />
      <div style={{position: 'absolute', width: 860, height: 860, left: 560, top: -510, borderRadius: '50%', border: '2px solid #ffffff25', boxShadow: '0 0 0 90px #ffffff09, 0 0 0 180px #ffffff06'}} />
      <BrandHeader />

      <div style={phaseStyle(frame, ...timeline.hook)}>
        <div style={{position: 'absolute', left: 86, top: 340, width: 850}}>
          <Kicker>{spec.scenes.hookKicker}</Kicker>
          <h1 style={{fontSize: 100, lineHeight: 1.05, letterSpacing: -5, color: brand.white, margin: '34px 0 0', fontWeight: 850}}>{spec.hook}</h1>
          <div style={{height: 9, width: 590, background: brand.lime, borderRadius: 10, marginTop: 44}} />
          <p style={{fontSize: 48, lineHeight: 1.26, color: '#dcebe2', marginTop: 57, maxWidth: 720}}>Tres coches avanzan juntos. Mira cómo cambian los euros.</p>
        </div>
        <div style={{position: 'absolute', top: 1150, left: 90, transform: 'scale(1.8)', transformOrigin: 'left top', display: 'flex', gap: 22}}>
          {spec.variables.vehicles.map((vehicle) => <Car key={vehicle.id} type={vehicle.id} width={135} />)}
        </div>
      </div>

      <div style={phaseStyle(frame, ...timeline.setup)}>
        <div style={{position: 'absolute', left: 86, top: 264}}>
          <Kicker>ANTES DE ARRANCAR</Kicker>
          <div style={{fontSize: 70, fontWeight: 850, color: brand.white, letterSpacing: -2, marginTop: 14}}>{spec.scenes.setupTitle}</div>
        </div>
        <div style={{position: 'absolute', left: 86, top: 446, width: 820, display: 'grid', gap: 24}}>
          {spec.variables.vehicles.map((vehicle, i) => <SetupCard key={vehicle.id} vehicle={vehicle} index={i} />)}
        </div>
      </div>

      <div style={phaseStyle(frame, ...timeline.simulation)}>
        <div style={{position: 'absolute', left: 86, top: 235}}>
          <Kicker>{spec.scenes.simulationTitle}</Kicker>
          <div style={{fontSize: 133, fontWeight: 900, color: brand.white, letterSpacing: -6, lineHeight: 1.1, marginTop: 18, fontVariantNumeric: 'tabular-nums'}}>{displayedDistance} <span style={{fontSize: 64, letterSpacing: -2, color: brand.lime}}>km</span></div>
          <div style={{width: 820, height: 16, borderRadius: 20, background: '#ffffff2e', marginTop: 26, overflow: 'hidden'}}><div style={{width: `${progress * 100}%`, height: '100%', borderRadius: 20, background: brand.lime}} /></div>
        </div>
        {spec.variables.vehicles.map((vehicle, i) => <TrackRow key={vehicle.id} vehicle={vehicle} distanceKm={displayedDistance} progress={progress} index={i} frame={frame} />)}
      </div>

      <div style={phaseStyle(frame, ...timeline.result)}>
        <div style={{position: 'absolute', left: 86, top: 275}}>
          <Kicker>RESULTADO · EN ESTE EJEMPLO</Kicker>
          <div style={{fontSize: 83, fontWeight: 900, letterSpacing: -3, color: brand.white, marginTop: 12}}>{spec.scenes.resultTitle}</div>
        </div>
        <div style={{position: 'absolute', left: 86, top: 485, width: 820, display: 'grid', gap: 24}}>
          {sorted.map((vehicle, i) => <ResultCard key={vehicle.id} vehicle={vehicle} index={i} distanceKm={spec.distanceKm} />)}
        </div>
        <div style={{position: 'absolute', left: 86, top: 1270, width: 820, color: brand.white, fontSize: 41, lineHeight: 1.26, fontWeight: 700}}>
          Menor coste de energía aquí: {sorted[0].label}.
          <div style={{fontSize: 32, fontWeight: 500, color: '#dcebe2', marginTop: 14}}>{spec.result}</div>
        </div>
      </div>

      <div style={phaseStyle(frame, ...timeline.context)}>
        <div style={{position: 'absolute', left: 86, top: 330, width: 820}}>
          <Kicker>CONTEXTO</Kicker>
          <div style={{fontSize: 85, fontWeight: 900, letterSpacing: -3, lineHeight: 1.08, color: brand.white, marginTop: 26}}>{spec.scenes.contextTitle}</div>
          <div style={{height: 10, width: 500, background: brand.lime, borderRadius: 10, marginTop: 43}} />
          <p style={{fontSize: 52, fontWeight: 650, lineHeight: 1.24, color: brand.white, marginTop: 55}}>{spec.scenes.contextBody}</p>
          <div style={{background: brand.paper, color: brand.green, borderRadius: 24, padding: '30px 35px', fontSize: 35, lineHeight: 1.3, fontWeight: 750, marginTop: 65}}>{spec.disclaimer}</div>
        </div>
      </div>

      <div style={{...phaseStyle(frame, ...timeline.cta), opacity: interpolate(frame, [timeline.cta[0], timeline.cta[0] + 13], [0, 1], clamp)}}>
        <div style={{position: 'absolute', left: 86, top: 370, width: 820, background: brand.paper, color: brand.ink, borderRadius: 36, padding: '70px 61px', boxShadow: '0 28px 70px #0b2e2380'}}>
          <Kicker dark>AHORA TE TOCA A TI</Kicker>
          <div style={{fontSize: 82, lineHeight: 1.08, letterSpacing: -3, fontWeight: 900, marginTop: 27}}>{spec.scenes.ctaTitle}</div>
          <div style={{height: 10, width: 580, background: brand.lime, borderRadius: 10, marginTop: 46}} />
          <p style={{fontSize: 52, lineHeight: 1.26, color: brand.green, fontWeight: 750, margin: '45px 0 0'}}>{spec.cta}</p>
        </div>
      </div>

      <SourceFooter spec={spec} />
      <Audio src={staticFile('audio/voice-video-001.wav')} playbackRate={1.0375} preservePitch volume={1} />
    </AbsoluteFill>
  );
};
