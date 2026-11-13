# Revisión de la skill «kilometro-claro-marcas-y-modelos»

Fecha: 13 de noviembre de 2026. Revisión sobre la skill que el usuario ha pasado. No se ha editado la skill original.

## 1. Encaje con el entorno

La skill está pensada para **Codex** (acceso a archivos, subagentes, compilación con el Node del runtime y `AGENTS.md`). Encaja con el flujo original en el que Luna 6 es una tarea de Codex. Corrijo mi respuesta anterior, que suponía un chat de ChatGPT sin subagentes.

## 2. Conflictos con las plantillas y el código

| # | Tema | Skill | Plantilla / código | Problema |
|---|------|-------|--------------------|----------|
| 1 | Par máximo | Se puede omitir si no está documentado | `ModelVersion` exige `maxTorque`, `torqueScope` y `torqueRpm` como cadenas | Omitir el campo rompe la compilación de TypeScript. Usar `—` cuando falte. |
| 2 | Precio | Obligatorio para cerrar cualquier modelo; prohibido «Precio no publicado» | `basePricePending: true` existe en el tipo y se usa en 2 ficheros; hay `precios-pendientes.txt` con unas 885 líneas | La regla estricta bloquea casi todas las marcas. Hay que decidir si un precio pendiente bloquea o se publica como pendiente. |
| 3 | Imagen | Cada modelo debe tener imagen | `image` es opcional en el tipo | Hay que decidir si el bloqueo es obligatorio o si se permite publicar sin imagen. |
| 4 | Dependencia | Remite a `kilometro-claro-seo-editorial` | No existe en `.agents/skills` | La skill no puede cargarse tal cual. Hay que crearla o quitar la referencia. |
| 5 | Campos de marca | No menciona `ownershipNote`, `ownershipSource`, `marketSources`, `compactReferences`, `logoCrop` ni `logoTone` | Están en la plantilla y en el tipo `CarBrand` | Añadirlos a la sección de ficha de marca. |
| 6 | Logotipo | No menciona `logoLayout` | Solo admite `'wide'` | Añadir la regla de logotipo de [plantillas.md](plantillas.md). |

## 3. Riesgos operativos

- **Cinco chats en paralelo y el mismo repositorio.** Cada chat tendría su propio `.txt`, pero los cinco escribirían en `src/data/brands.ts`, en `precios-pendientes.txt` y en `dist` al mismo tiempo. Eso provoca conflictos y compilaciones que se pisan. Recomiendo que el paralelismo sea solo de investigación (cada subagente devuelve datos, sin escribir), y que una sola instancia aplique los cambios en serie.
- **Pausas por precio.** Si se aplica la regla estricta de precio, el ritmo baja mucho: casi todas las marcas tienen algún modelo sin precio verificable.
- **Contexto.** Una marca con muchas motorizaciones y modelos puede agotar el contexto. El registro de progreso de la skill está pensado para eso, así que conviene mantenerlo.

## 4. Decisiones tomadas (13 de noviembre de 2026)

- **Precio pendiente:** se publica el modelo como pendiente (`basePricePending: true`) y se anota en `precios-pendientes.txt`. No se bloquea la marca entera.
- **Imagen:** no es obligatoria. Si no hay foto con licencia verificable, el modelo se publica sin imagen y queda anotado para completar.
- **Paralelismo:** las cinco listas investigan a la vez y solo devuelven datos. Un único proceso aplica los cambios y compila.

## 5. Listas de trabajo

Las cinco listas de diez marcas están en [drafts/directorio-marcas/listas](listas/), en el orden de `src/data/brands.ts`:

- [lista-01.txt](listas/lista-01.txt): Fiat a Jeep.
- [lista-02.txt](listas/lista-02.txt): KGM a Dacia.
- [lista-03.txt](listas/lista-03.txt): Changan a Citroën.
- [lista-04.txt](listas/lista-04.txt): Mercedes-Benz a Audi.
- [lista-05.txt](listas/lista-05.txt): XPeng a Maserati.

## 6. Pendiente antes de lanzar

1. Corregir la skill en la versión de Codex: añadir los campos de marca, la regla del par máximo, el logotipo, la política de precio pendiente y la dependencia.
2. Empezar con una marca piloto y revisarla antes de lanzar el resto.
