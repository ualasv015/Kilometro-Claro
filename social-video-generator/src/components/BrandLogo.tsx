import React from 'react';
import {Img, staticFile} from 'remotion';

export const BrandLogo: React.FC<{style?: React.CSSProperties}> = ({style}) => (
  <div style={{
    position: 'absolute',
    width: 456,
    height: 91,
    boxSizing: 'border-box',
    padding: '8px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    background: '#f7f8f5',
    borderRadius: 24,
    boxShadow: '0 12px 28px #173d3420',
    ...style,
  }}>
    <Img
      src={staticFile('logo-marca-kilometro-claro.png')}
      alt="Símbolo C de Kilómetro Claro"
      style={{width: 72, height: 72, objectFit: 'contain', flex: '0 0 72px'}}
    />
    <div style={{fontFamily: 'Arial, "Segoe UI", sans-serif', fontSize: 31, lineHeight: 1, letterSpacing: -1.1, whiteSpace: 'nowrap'}}>
      <span style={{color: '#173d34', fontWeight: 700}}>Kilómetro</span>{' '}
      <span style={{color: '#7b8781', fontWeight: 400}}>Claro</span>
    </div>
  </div>
);
