export type Field = { name: string; label: string; unit: string; example: string; min?: number; step?: number; optional?: boolean; help?: string };
export type Tool = {
  slug: string; title: string; shortTitle: string; description: string; category: string; categorySlug: string;
  intent: string; intro: string; explanation: string; formula: string; example: string; fields: Field[];
  resultTitle: string; resultHint: string; related: string[]; faq: { question: string; answer: string }[];
};

export const tools: Tool[] = [
  {
    slug: 'consumo-combustible', title: 'Calculadora de consumo de combustible', shortTitle: 'Consumo de combustible',
    description: 'Calcula el consumo real de tu coche en litros cada 100 km a partir de la distancia recorrida y el combustible repostado.',
    category: 'Consumo y combustible', categorySlug: 'consumo-combustible', intent: 'Calcular cuántos litros cada 100 km consume un coche con datos de repostaje reales.',
    intro: 'Introduce los kilómetros recorridos y los litros que has repostado para estimar el consumo real de tu coche. El resultado se expresa en L/100 km, la medida habitual en España.',
    explanation: 'Para que la estimación sea representativa, anota el kilometraje y los litros de un depósito lleno al siguiente repostaje. El consumo puede variar con la velocidad, el tráfico, la carga, la temperatura y el tipo de recorrido.',
    formula: 'Consumo (L/100 km) = litros repostados ÷ kilómetros recorridos × 100.', example: 'Si recorres 620 km y repostas 40 litros, el consumo estimado es 6,45 L/100 km.',
    fields: [
      { name: 'distanceKm', label: 'Distancia recorrida', unit: 'km', example: '620', min: 0, step: 0.1 },
      { name: 'liters', label: 'Litros repostados', unit: 'L', example: '40', min: 0, step: 0.1 },
      { name: 'pricePerLiter', label: 'Precio del combustible', unit: '€/L', example: '1,65', min: 0, step: 0.01, optional: true },
    ], resultTitle: 'Tu consumo estimado', resultHint: 'La cifra depende de la distancia y el combustible que hayas introducido.',
    related: ['coste-viaje-coche', 'coste-por-kilometro'], faq: [
      { question: '¿Qué significa L/100 km?', answer: 'Indica cuántos litros de combustible consume el coche para recorrer 100 kilómetros. Cuanto menor sea la cifra, menos combustible necesita para esa distancia.' },
      { question: '¿Cómo obtengo un consumo más preciso?', answer: 'Mide varios depósitos entre llenados y divide el total de litros por los kilómetros totales. Así reduces el efecto de pequeñas diferencias al repostar.' },
    ],
  },
  {
    slug: 'coste-viaje-coche', title: 'Calculadora de coste de viaje en coche', shortTitle: 'Coste de un viaje',
    description: 'Estima los litros necesarios y el coste de combustible de un viaje en coche, con opción de ida y vuelta y reparto por pasajeros.',
    category: 'Costes del coche', categorySlug: 'costes-del-coche', intent: 'Saber cuánto costará en combustible un viaje en coche según su distancia, consumo y precio por litro.',
    intro: 'Calcula el coste estimado del combustible de un desplazamiento. Indica la distancia de ida, el consumo medio y el precio por litro que quieras tomar como referencia.',
    explanation: 'El cálculo cubre únicamente combustible. Peajes, aparcamiento y otros gastos del viaje no están incluidos. Si marcas ida y vuelta se duplica la distancia; el reparto por pasajero es orientativo.',
    formula: 'Litros = distancia × consumo ÷ 100. Coste = litros × precio por litro.', example: 'Un trayecto de 250 km con un consumo de 6 L/100 km y combustible a 1,60 €/L cuesta unos 24 € por trayecto.',
    fields: [
      { name: 'distanceKm', label: 'Distancia de ida', unit: 'km', example: '250', min: 0, step: 0.1 },
      { name: 'consumption', label: 'Consumo medio', unit: 'L/100 km', example: '6,5', min: 0, step: 0.1, help: 'Puedes obtenerlo con la calculadora de consumo.' },
      { name: 'pricePerLiter', label: 'Precio del combustible', unit: '€/L', example: '1,60', min: 0, step: 0.01 },
      { name: 'passengers', label: 'Personas que comparten el gasto', unit: 'personas', example: '2', min: 1, step: 1, optional: true },
    ], resultTitle: 'Coste estimado del viaje', resultHint: 'Estimación de combustible; no incluye peajes, aparcamiento ni desgaste.',
    related: ['consumo-combustible', 'coste-por-kilometro'], faq: [
      { question: '¿La calculadora incluye peajes?', answer: 'No. El resultado estima solo el combustible. Añade por separado peajes, aparcamiento y otros gastos para conocer el presupuesto completo.' },
      { question: '¿El precio del combustible se actualiza automáticamente?', answer: 'No. Introduce el precio que quieras usar como referencia; así puedes adaptar el cálculo a tu gasolinera y fecha de viaje.' },
    ],
  },
  {
    slug: 'coste-por-kilometro', title: 'Calculadora de coste por kilómetro del coche', shortTitle: 'Coste por kilómetro',
    description: 'Calcula cuánto te cuesta cada kilómetro sumando combustible, mantenimiento, seguro, impuestos y otros gastos del periodo.',
    category: 'Costes del coche', categorySlug: 'costes-del-coche', intent: 'Conocer el coste de uso del coche por kilómetro incluyendo gastos habituales.',
    intro: 'Suma los gastos de un mismo periodo y compáralos con los kilómetros recorridos. Obtendrás un coste medio por kilómetro más completo que el coste del combustible por sí solo.',
    explanation: 'Usa kilómetros y gastos del mismo intervalo —por ejemplo, un año—. El cálculo no incorpora depreciación ni financiación salvo que las añadas en «Otros gastos».',
    formula: 'Coste por km = suma de gastos del periodo ÷ kilómetros recorridos en ese periodo.', example: 'Con 3.000 € de gastos y 15.000 km en el año, el coste medio es 0,20 €/km.',
    fields: [
      { name: 'distanceKm', label: 'Kilómetros del periodo', unit: 'km', example: '15000', min: 0, step: 0.1 },
      { name: 'fuel', label: 'Combustible o energía', unit: '€/periodo', example: '1400', min: 0, step: 10 },
      { name: 'maintenance', label: 'Mantenimiento y reparaciones', unit: '€/periodo', example: '550', min: 0, step: 10 },
      { name: 'insurance', label: 'Seguro', unit: '€/periodo', example: '450', min: 0, step: 10 },
      { name: 'taxes', label: 'Impuestos y tasas', unit: '€/periodo', example: '120', min: 0, step: 10 },
      { name: 'other', label: 'Otros gastos', unit: '€/periodo', example: '200', min: 0, step: 10, optional: true },
    ], resultTitle: 'Coste medio por kilómetro', resultHint: 'Introduce gastos y kilómetros correspondientes al mismo periodo.',
    related: ['coste-viaje-coche', 'coste-anual-coche'], faq: [
      { question: '¿Qué gastos debo incluir?', answer: 'Incluye los gastos que quieras analizar y que correspondan al periodo elegido: energía, mantenimiento, seguro e impuestos. Puedes sumar otros conceptos en el último campo.' },
      { question: '¿El cálculo incluye la depreciación?', answer: 'No por defecto. Si quieres tenerla en cuenta, puedes incorporarla como otro gasto del periodo usando una estimación propia.' },
    ],
  },
  {
    slug: 'comparador-gasolina-diesel-electrico', title: 'Comparador de coste: gasolina, diésel y coche eléctrico', shortTitle: 'Gasolina, diésel o eléctrico',
    description: 'Compara el coste energético por 100 km y para un trayecto entre un coche térmico y uno eléctrico.',
    category: 'Coche eléctrico', categorySlug: 'coche-electrico', intent: 'Comparar cuánto cuesta recorrer una distancia con combustible frente a electricidad.',
    intro: 'Compara el coste energético de un coche de gasolina o diésel con uno eléctrico. Usa tus propios precios y consumos para ver el coste por 100 km y para una distancia concreta.',
    explanation: 'La comparación considera energía y combustible. No incluye precio de compra, mantenimiento, seguro, pérdidas de carga ni diferencias de uso; los precios y consumos reales dependen de cada vehículo y tarifa.',
    formula: 'Térmico: L/100 km × €/L. Eléctrico: kWh/100 km × €/kWh. Coste del trayecto = coste por 100 km × distancia ÷ 100.', example: 'A 6 L/100 km y 1,60 €/L son 9,60 €/100 km. A 17 kWh/100 km y 0,20 €/kWh son 3,40 €/100 km.',
    fields: [
      { name: 'distanceKm', label: 'Distancia a comparar', unit: 'km', example: '100', min: 0, step: 0.1 },
      { name: 'fuelConsumption', label: 'Consumo de gasolina o diésel', unit: 'L/100 km', example: '6,5', min: 0, step: 0.1 },
      { name: 'fuelPrice', label: 'Precio del combustible', unit: '€/L', example: '1,65', min: 0, step: 0.01 },
      { name: 'electricConsumption', label: 'Consumo eléctrico', unit: 'kWh/100 km', example: '17', min: 0, step: 0.1 },
      { name: 'electricityPrice', label: 'Precio de la electricidad', unit: '€/kWh', example: '0,20', min: 0, step: 0.01 },
    ], resultTitle: 'Comparativa de coste energético', resultHint: 'Compara la energía con los precios y consumos que hayas introducido.',
    related: ['coste-anual-coche', 'coste-viaje-coche'], faq: [
      { question: '¿Qué precio de electricidad debo introducir?', answer: 'Usa el precio efectivo por kWh que quieras comparar. Si cargas en distintos lugares o con diferentes tarifas, puedes calcular cada escenario por separado.' },
      { question: '¿La comparación indica qué coche sale más rentable?', answer: 'Solo compara el coste de energía para los datos introducidos. Para valorar el coste total también habría que incluir compra, financiación, seguro, mantenimiento y depreciación.' },
    ],
  },
  {
    slug: 'coste-anual-coche', title: 'Calculadora del coste anual de un coche', shortTitle: 'Coste anual del coche',
    description: 'Estima cuánto cuesta mantener y usar un coche al año, al mes y por kilómetro con tus gastos habituales.',
    category: 'Costes del coche', categorySlug: 'costes-del-coche', intent: 'Estimar el coste anual total de tener y usar un coche y su coste por kilómetro.',
    intro: 'Reúne los principales gastos anuales del coche para estimar un total anual, una media mensual y el coste por kilómetro. Puedes ajustar las partidas a tu situación.',
    explanation: 'Introduce importes anuales. El coste depende del uso y de los gastos que incluyas; puedes añadir financiación, aparcamiento u otros conceptos en el campo correspondiente. El resultado no sustituye un presupuesto personalizado.',
    formula: 'Coste anual = suma de gastos anuales. Coste mensual = coste anual ÷ 12. Coste por km = coste anual ÷ kilómetros anuales.', example: 'Con 4.200 € de gastos y 14.000 km al año, la media es 350 €/mes y 0,30 €/km.',
    fields: [
      { name: 'annualKm', label: 'Kilómetros recorridos al año', unit: 'km/año', example: '14000', min: 0, step: 0.1 },
      { name: 'fuel', label: 'Combustible o electricidad', unit: '€/año', example: '1500', min: 0, step: 10 },
      { name: 'insurance', label: 'Seguro', unit: '€/año', example: '500', min: 0, step: 10 },
      { name: 'maintenance', label: 'Mantenimiento y reparaciones', unit: '€/año', example: '600', min: 0, step: 10 },
      { name: 'taxes', label: 'Impuestos y tasas', unit: '€/año', example: '150', min: 0, step: 10 },
      { name: 'parking', label: 'Aparcamiento', unit: '€/año', example: '600', min: 0, step: 10, optional: true },
      { name: 'other', label: 'Otros gastos (incluida financiación, si quieres)', unit: '€/año', example: '850', min: 0, step: 10, optional: true },
    ], resultTitle: 'Coste anual estimado', resultHint: 'El desglose depende de las partidas que incluyas.',
    related: ['coste-por-kilometro', 'comparador-gasolina-diesel-electrico'], faq: [
      { question: '¿Debo incluir la compra o financiación del coche?', answer: 'Puedes incorporar los pagos anuales de financiación en «Otros gastos». Para reflejar el coste de compra de otra forma, decide un criterio y evita contar dos veces el mismo importe.' },
      { question: '¿Por qué se muestra también el coste por kilómetro?', answer: 'Permite relacionar los gastos anuales con la distancia recorrida y comparar periodos de uso distintos, siempre que los datos sean representativos.' },
    ],
  },
];

export const categories = [
  { slug: 'consumo-combustible', name: 'Consumo y combustible', description: 'Calculadoras para estimar consumo, litros y gasto en combustible.', tools: ['consumo-combustible', 'coste-viaje-coche'] },
  { slug: 'costes-del-coche', name: 'Costes del coche', description: 'Calcula costes de viaje, coste por kilómetro y gastos anuales.', tools: ['coste-viaje-coche', 'coste-por-kilometro', 'coste-anual-coche'] },
  { slug: 'coche-electrico', name: 'Coche eléctrico', description: 'Compara el coste de electricidad con el de gasolina o diésel.', tools: ['comparador-gasolina-diesel-electrico', 'coste-anual-coche'] },
];
