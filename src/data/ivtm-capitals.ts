/** Tarifas IVTM 2026 de AEA para turismos de 8 a 11,99 CVF, sin bonificaciones.
 * San Sebastián divide este tramo en dos: 8–8,99 y 9–11,99 CVF.
 * https://aeaclub.org/wp-content/uploads/2026/03/INFORME-IVTM-2026-MADRID.pdf (p. 5)
 */
export type CapitalIvtm = {
  province: string;
  municipality: string;
  annualEur: number;
  annualEurFrom9Cvf?: number;
};

export const capitalIvtm2026: CapitalIvtm[] = [
  { province: 'Álava', municipality: 'Vitoria-Gasteiz', annualEur: 76.17 },
  { province: 'Albacete', municipality: 'Albacete', annualEur: 64.75 },
  { province: 'Alicante', municipality: 'Alicante/Alacant', annualEur: 60.47 },
  { province: 'Almería', municipality: 'Almería', annualEur: 59.30 },
  { province: 'Asturias', municipality: 'Oviedo', annualEur: 64 },
  { province: 'Ávila', municipality: 'Ávila', annualEur: 60.66 },
  { province: 'Badajoz', municipality: 'Badajoz', annualEur: 53.61 },
  { province: 'Barcelona', municipality: 'Barcelona', annualEur: 68.16 },
  { province: 'Burgos', municipality: 'Burgos', annualEur: 62.62 },
  { province: 'Cáceres', municipality: 'Cáceres', annualEur: 54 },
  { province: 'Cádiz', municipality: 'Cádiz', annualEur: 67.25 },
  { province: 'Cantabria', municipality: 'Santander', annualEur: 67.96 },
  { province: 'Castellón', municipality: 'Castelló de la Plana', annualEur: 65.43 },
  { province: 'Ciudad Real', municipality: 'Ciudad Real', annualEur: 68.16 },
  { province: 'Córdoba', municipality: 'Córdoba', annualEur: 56.91 },
  { province: 'A Coruña', municipality: 'A Coruña', annualEur: 62.62 },
  { province: 'Cuenca', municipality: 'Cuenca', annualEur: 62.03 },
  { province: 'Girona', municipality: 'Girona', annualEur: 67.24 },
  { province: 'Granada', municipality: 'Granada', annualEur: 68.16 },
  { province: 'Guadalajara', municipality: 'Guadalajara', annualEur: 62.22 },
  { province: 'Gipuzkoa', municipality: 'Donostia/San Sebastián', annualEur: 43.53, annualEurFrom9Cvf: 89.25 },
  { province: 'Huelva', municipality: 'Huelva', annualEur: 68.16 },
  { province: 'Huesca', municipality: 'Huesca', annualEur: 63.73 },
  { province: 'Illes Balears', municipality: 'Palma', annualEur: 68.16 },
  { province: 'Jaén', municipality: 'Jaén', annualEur: 68.16 },
  { province: 'La Rioja', municipality: 'Logroño', annualEur: 61.59 },
  { province: 'Las Palmas', municipality: 'Las Palmas de Gran Canaria', annualEur: 56.57 },
  { province: 'León', municipality: 'León', annualEur: 58.50 },
  { province: 'Lleida', municipality: 'Lleida', annualEur: 68.15 },
  { province: 'Lugo', municipality: 'Lugo', annualEur: 59.32 },
  { province: 'Madrid', municipality: 'Madrid', annualEur: 59 },
  { province: 'Málaga', municipality: 'Málaga', annualEur: 65.80 },
  { province: 'Murcia', municipality: 'Murcia', annualEur: 68.16 },
  { province: 'Navarra', municipality: 'Pamplona/Iruña', annualEur: 66.28 },
  { province: 'Ourense', municipality: 'Ourense', annualEur: 57.80 },
  { province: 'Palencia', municipality: 'Palencia', annualEur: 51.04 },
  { province: 'Pontevedra', municipality: 'Pontevedra', annualEur: 55.85 },
  { province: 'Salamanca', municipality: 'Salamanca', annualEur: 67.76 },
  { province: 'Santa Cruz de Tenerife', municipality: 'Santa Cruz de Tenerife', annualEur: 34.08 },
  { province: 'Segovia', municipality: 'Segovia', annualEur: 60.66 },
  { province: 'Sevilla', municipality: 'Sevilla', annualEur: 61 },
  { province: 'Soria', municipality: 'Soria', annualEur: 64.88 },
  { province: 'Tarragona', municipality: 'Tarragona', annualEur: 68.16 },
  { province: 'Teruel', municipality: 'Teruel', annualEur: 60.29 },
  { province: 'Toledo', municipality: 'Toledo', annualEur: 62.03 },
  { province: 'Valencia', municipality: 'València', annualEur: 58.87 },
  { province: 'Valladolid', municipality: 'Valladolid', annualEur: 61.34 },
  { province: 'Bizkaia', municipality: 'Bilbao', annualEur: 71.45 },
  { province: 'Zamora', municipality: 'Zamora', annualEur: 49.08 },
  { province: 'Zaragoza', municipality: 'Zaragoza', annualEur: 56.10 },
  { province: 'Ciudad autónoma de Ceuta', municipality: 'Ceuta', annualEur: 34.10 },
  { province: 'Ciudad autónoma de Melilla', municipality: 'Melilla', annualEur: 17.04 },
].sort((a, b) => a.province.localeCompare(b.province, 'es'));
