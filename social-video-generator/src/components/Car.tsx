import React from 'react';
import type {VehicleId} from '../content/validate';
import {brand} from '../brand/tokens';

export const Car: React.FC<{type: VehicleId; width?: number}> = ({type, width = 150}) => {
  const body = type === 'electric' ? brand.lime : type === 'diesel' ? brand.wash : brand.white;
  const roof = type === 'electric' ? brand.green : brand.deep;
  return (
    <svg width={width} height={width * 0.56} viewBox="0 0 180 100" aria-hidden="true">
      <ellipse cx="92" cy="86" rx="75" ry="9" fill="#0c2922" opacity="0.4" />
      <rect x="34" y="69" width="24" height="23" rx="8" fill={brand.ink} />
      <rect x="133" y="69" width="24" height="23" rx="8" fill={brand.ink} />
      <path d="M16 64 C19 50 31 48 47 46 L63 24 C69 16 77 13 90 13 L124 13 C136 13 141 19 148 30 L162 49 C171 51 176 56 176 66 L176 77 C176 82 171 84 165 84 L23 84 C17 84 13 80 13 74 Z" fill={body} stroke={brand.deep} strokeWidth="3" />
      <path d="M64 45 L78 24 C81 21 85 20 91 20 L122 20 C128 20 132 23 136 29 L148 45 Z" fill={roof} opacity="0.9" />
      <path d="M93 21 L89 45" stroke={body} strokeWidth="3" />
      <path d="M36 53 L55 53" stroke={brand.deep} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <rect x="169" y="59" width="7" height="12" rx="3" fill={brand.lime} />
      <circle cx="46" cy="79" r="12" fill={brand.ink} /><circle cx="46" cy="79" r="5" fill={brand.wash} />
      <circle cx="145" cy="79" r="12" fill={brand.ink} /><circle cx="145" cy="79" r="5" fill={brand.wash} />
      {type === 'electric' && <path d="M117 55 L110 67 L118 67 L112 77 L128 62 L120 62 L127 55 Z" fill={brand.green} />}
    </svg>
  );
};
