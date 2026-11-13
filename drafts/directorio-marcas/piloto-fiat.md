# Piloto: auditoría de Fiat

Fecha: 13 de noviembre de 2026. Auditoría de solo lectura. No se han modificado archivos del proyecto.

## Qué se ha comprobado

- Ficha de marca en `src/data/brands.ts`: presente y con los campos obligatorios de la plantilla.
- 10 modelos en `brands.ts`, 10 entradas en `src/data/fiat-model-pages.ts` y 10 imágenes en `public/images/models/commons/`. Las 10 existen.
- `src/data/fiat-price-data.ts`: precios por versión cargados, con notas de fuente y fecha.
- `precios-pendientes.txt`: 5 modelos con motorizaciones sin precio verificado.

## Hallazgos

| # | Prioridad | Hallazgo | Propuesta |
|---|-----------|----------|-----------|
| 1 | Alta | Los precios de `fiat-price-data.ts` son **campañas al contado que vencen el 30/11/2026**. El propio archivo las marca como «no es PVP base permanente». La skill exige separar PVP base y ofertas. | Confirmar en la web oficial el PVP base de cada modelo. Donde solo haya campaña, usar `currentOfferPrice` con su fecha de fin y no `basePrice`. |
| 2 | Alta | `Topolino` es un cuadriciclo eléctrico ligero. Según el alcance de la skill, no es un turismo. | Decisión del usuario: retirarlo de la gama o mantenerlo como excepción. |
| 3 | Media | `Ducato Camper` es la base de una transformación camper, y todas sus motorizaciones están sin precio. La skill excluye vehículos pensados para carga comercial, y este chasis parte de una furgoneta. | Decisión del usuario: mantenerlo como modelo de pasajeros o retirarlo. Si se mantiene, queda pendiente de precio. |
| 4 | Media | `Pandina` no tiene una fuente oficial española verificada en el archivo. | Comprobar en la web oficial española antes de dar por buena la entrada. |
| 5 | Media | La ficha de marca no tiene `ownershipNote` ni `ownershipSource`. Fiat pertenece a un grupo, y el resto de marcas con propiedad aclarada lo indican. | Añadir la propiedad con fuente oficial. |
| 6 | Baja | `reviewedAt` de la marca es 31 de octubre de 2026, anterior a la consulta de precios del 6 de noviembre. | Actualizar la fecha al terminar la revisión. |
| 7 | Baja | Pendientes en el registro: Tipo Sedán (1), Qubo L (1), Doblò (2), Ulysse (1) y Ducato Camper (todas). | Mantenerlos como pendientes con `basePricePending: true` salvo que aparezca una fuente nueva. |

## Resolución (13 de noviembre de 2026)

- **Topolino** (cuadriciclo) y **Ducato Camper** (base camper) se han retirado de `brands.ts`, `fiat-model-pages.ts`, `fiat-price-data.ts`, `catalog-reference-price-data.ts` y `precios-pendientes.txt`. La ficha de Fiat pasa de 10 a 8 modelos. Las imágenes de ambos siguen en `public/images/models/commons/` sin usarse; se pueden borrar cuando lo decidas.
- La skill excluye ahora campers y cuadriciclos de forma explícita (sección 1).
- Compilación: 548 páginas, sin errores ni enlaces rotos. `dist` local ya refleja el cambio; el `dist` de `main` aún incluye las dos fichas hasta el siguiente commit de `dist`.

## Verificación de precios en fiat.es (13 de noviembre de 2026)

Las fichas de fiat.es devuelven 403 a peticiones automáticas, así que las consulté con el navegador integrado.

**Confirmados en la ficha pública** (precio al contado de campaña, válido para matriculaciones hasta el **30/11/2026**):

| Modelo | Versión | Precio campaña | Coincide con el archivo |
|--------|---------|----------------|-------------------------|
| 500 | eléctrico 23,8 kWh | 20.585,00 € | sí |
| 600 | híbrido 1.2 MHEV 110 CV | 22.992,49 € | sí |
| 600 | eléctrico 54 kWh | 26.385,00 € | sí |
| Grande Panda | gasolina 1.2 Turbo 100 CV | 15.349,60 € | sí |
| Grande Panda | híbrido 1.2 MHEV 110 CV | 17.649,59 € | sí |
| Grande Panda | eléctrico | 21.135,00 € | sí |

**No aparecen en la ficha pública**, aunque el archivo sí tiene cifra. Pueden estar solo en el configurador, que no he podido abrir sin interacción:

| Modelo | Cifra en el archivo | Lo que muestra la ficha |
|--------|---------------------|-------------------------|
| 500 híbrido | 20.150,00 € | Solo «Entrada» de financiación |
| 600 gasolina | 21.492,49 € | Solo «Entrada» de financiación |
| Pandina | 11.384,98 € | Solo «Entrada» de financiación |
| Qubo L diésel 100 CV | 21.542,50 € | Solo «Entrada» de financiación |

**Sin precio en la ficha pública:** Tipo Sedán, E-Doblò y las fichas de Fiat Professional de Doblò y Ulysse (térmico y eléctrico). Las de Fiat Professional además se presentan como vehículo comercial.

**Conclusiones:**
1. Ninguna cifra verificada es PVP base permanente. Todas son campañas con fecha de fin.
2. **El 30/11/2026 caducan todas.** Dentro de 17 días el archivo tendrá precios vencidos. Hay que cambiar esas entradas a PVP base o marcarlas como pendientes antes de esa fecha.
3. Las cuatro cifras que no aparecen en la ficha pública no se deben dar por verificadas. Antes de cambiarlas, hay que consultar el configurador.

## Precios del configurador (13 de noviembre de 2026)

El configurador (`fiat.es/omni/configurador`) muestra dos cifras por modelo: **«Precio Catálogo desde»** (PVP base) y **«Precio Promocional desde»** (oferta válida hasta fin de mes). Según su nota, el precio incluye IVA, transporte e IEMT, pero **no los gastos de matriculación**. Las cifras son «desde» de la versión de acceso, no un precio por motorización.

| Modelo | PVP catálogo desde | Promocional desde | Archivo actual | Estado |
|--------|--------------------|-------------------|----------------|--------|
| 500 híbrido | 20.850 € | — | 20.150 € (campaña) | Difiere: 20.150 no aparece en el configurador |
| 500 eléctrico (Berlina) | 24.850 € | — | 20.585 € (campaña) | Difiere: el archivo guarda campaña, no PVP |
| 600 gasolina | 24.401 € | — | 21.492,49 € (campaña) | Difiere: el archivo guarda campaña, no PVP |
| 600 híbrido | 27.400 € | — | 22.992,49 € (campaña) | Difiere: el archivo guarda campaña, no PVP |
| 600 eléctrico | 32.400 € | — | 26.385 € (campaña) | Difiere: el archivo guarda campaña, no PVP |
| Grande Panda gasolina | 18.150 € | 14.200 € | 15.349,60 € (campaña) | Difiere: el archivo guarda campaña, no PVP |
| Grande Panda híbrido | 21.150 € | 16.649 € | 17.649,59 € (campaña) | Difiere: el archivo guarda campaña, no PVP |
| Grande Panda eléctrico | 25.150 € | 21.450 € | 21.135 € (campaña) | Difiere: el archivo guarda campaña, no PVP |
| Pandina | 17.599 € (POP, 1.0 Hybrid 65 CV) | — | 11.384,98 € | **Incoherente**: el archivo está muy por debajo del PVP |
| Tipo Sedán | 20.101 € | 16.851 € | Sin precio | Pendiente en el archivo; ahora hay PVP |
| Qubo L (5 plazas) | 31.900 € | — | 21.542,50 € (diésel 100 CV) | **Incoherente**: el archivo está muy por debajo del PVP |
| Qubo L (7 plazas) | 33.400 € | — | Sin precio | Pendiente en el archivo; ahora hay PVP |

**No aparecen en el configurador:** Ulysse (térmico y eléctrico) y Doblò. Solo figuran en las fichas de Fiat Professional, y el configurador de turismos no los incluye.

**Conclusiones:**
1. El PVP base está disponible para las 12 filas de la tabla. Los importes del archivo (campañas) deben pasar a `currentOfferPrice` y el PVP debe ir a `basePrice`.
2. Pandina y Qubo L tienen cifras del archivo que no coinciden con el PVP, así que hay que revisarlos antes de publicar.
3. Las cifras del configurador son «desde» de la versión de acceso. Para `versionPriceHeading` de cada motorización, hará falta abrir cada acabado.

## Cambios aplicados (13 de noviembre de 2026)

- `src/data/fiat-price-data.ts`: cada modelo tiene `basePrice` con el PVP del configurador (500 y 600 desde el acceso más barato, Grande Panda, Pandina, Tipo Sedán y Qubo L 5 plazas). Las campañas se mantienen solo si están verificadas en la ficha oficial. Se retiran las cifras que no coinciden con el configurador o no aparecen en la web: 500 híbrido 20.150 €, 600 gasolina 21.492,49 €, Pandina 11.384,98 € y Qubo L 21.542,50 €.
- `src/data/model-pages.ts`: la ficha pasa `basePrice` y `basePricePending` a la página, y el encabezado de precios cambia a «Precios de campaña por motorización». La fecha de revisión de las fichas de Fiat pasa al 13 de noviembre.
- `src/data/catalog-reference-price-data.ts`: se han quitado las entradas `fiat/doblo` y `fiat/ulysse`. Eran referencias de terceros (Coches.net, Diariomotor y Carwow) que se mostraban como PVP base. Ahora Doblò y Ulysse aparecen como «Pendiente de verificar».
- Compilación: `astro check` sin errores, 548 páginas y validación de `dist` correcta.

**Pendiente:** `precios-pendientes.txt` no se ha actualizado. Sigue listando Tipo Sedán (motor), Qubo L (130 CV) y Doblò y Ulysse. Hay que revisarlo con este resultado.
**Pendiente:** Qubo L: la marca describe la versión eléctrica como próxima, pero el configurador la muestra dentro del 5 plazas. Hay que aclararlo antes de publicarla.
**Pendiente:** las campañas del configurador (Grande Panda, Tipo Sedán) no coinciden con las de la ficha en algunos casos. Se publican solo las verificadas en la ficha.

## Imágenes eliminadas

- `public/images/models/commons/model-fiat-topolino.jpg` y `model-fiat-ducato-camper.jpg`: no tenían referencias en el código ni en `creditos.txt`. Estaban en Git, así que se recuperan con `git checkout`.

## Lo que no se ha verificado

- No he abierto el configurador de Fiat, así que no confirmo los PVP base ni las cuatro cifras de la tabla anterior.
- No he revisado las fichas técnicas de cada modelo (potencias, pares, cilindradas).
- La revisión independiente no se ha ejecutado, porque todavía no se han aplicado cambios de contenido.

## Siguiente paso

1. Abrir el configurador de Fiat para obtener el PVP base de cada versión, o aceptar que quede como pendiente.
2. Decidir cómo tratar las campañas que vencen el 30/11/2026.
3. Aplicar los cambios, compilar y ejecutar la revisión independiente.
