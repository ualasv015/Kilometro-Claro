# Prueba de la skill sobre la lista 1

Paquete listo para ejecutar en Codex. Antes de pegarlo:

1. Copia la skill a `.agents/skills/kilometro-claro-marcas-y-modelos/SKILL.md` (es la versión 2 de [skill-codex-marcas.md](../skill-codex-marcas.md)).
2. En Codex, configura el modelo **Luna 6** con esfuerzo **muy alto** para el coordinador y para cada subagente de investigación. Esa elección se hace en Codex; desde aquí no se puede seleccionar Luna.

---

## 1. Prompt del coordinador

Pega esto en Codex como instrucción principal:

```
Ejecuta la prueba de la skill "kilometro-claro-marcas-y-modelos" sobre la lista 1 del directorio de marcas de Kilómetro Claro.

Contexto:
- Repositorio: C:\Users\anton\OneDrive\Desktop\Choche. Trabaja en esta copia, no en worktrees.
- Skill: .agents/skills/kilometro-claro-marcas-y-modelos/SKILL.md. Léela completa antes de empezar.
- Plantillas: drafts/directorio-marcas/plantillas.md.
- Lista: drafts/directorio-marcas/listas/lista-01.txt (10 marcas). Es la única fuente del orden. La primera línea es la marca actual.
- Fiat ya tiene cambios aplicados (drafts/directorio-marcas/piloto-fiat.md). Para Fiat no rehagas la auditoría: verifica solo los pendientes de su sección en precios-pendientes.txt.

Reglas de ejecución:
1. Lanza un subagente de investigación por marca de la lista, en paralelo. Cada uno recibe solo su marca y la plantilla de drafts/directorio-marcas/prueba-lista-01/PROMPT-EJECUCION.md (sección 2). Ninguno edita archivos.
2. Recoge los informes en el formato de la sección 9 de la skill. Si un informe no cumple el formato, pídele que lo rehaga antes de aplicar nada.
3. Aplica los cambios una marca cada vez, en el orden de la lista. Solo edita lo que tenga fuente en el informe. Lo que no tenga fuente se marca como pendiente (basePricePending: true y registro en precios-pendientes.txt).
4. Tras cada marca, compila con el Node del runtime de Codex (AGENTS.md): astro check, astro build y scripts/check-dist.mjs. Si falla, corrige antes de seguir.
5. Revisión independiente: un subagente nuevo de solo lectura revisa cada marca aplicada y responde APROBADA o NO APROBADA. Si no aprueba, corrige y repite. Si una página recibe su quinto rechazo, para y avisa.
6. Al aprobar una marca, quítala de lista-01.txt. Lleva el progreso en drafts/directorio-marcas/listas/lista-01.txt.progress.json.
7. Excluye campers y cuadriciclos (sección 1 de la skill).
8. No hagas commit, push ni despliegue. No borres imágenes ni archivos sin preguntar.

Informe final: una tabla por marca con estado, cambios aplicados, pendientes y rechazos. Añade el resultado de la compilación y la lista de decisiones que necesito tomar.

Criterios de éxito de la prueba:
- Los 10 informes cumplen el formato de la sección 9.
- Ningún basePrice procede de una fuente de terceros.
- La compilación pasa sin errores ni enlaces rotos.
- Fiat conserva los cambios ya aplicados.
- Los pendientes quedan registrados en precios-pendientes.txt.
```

---

## 2. Prompt de cada subagente de investigación

Se lanza uno por marca. El coordinador sustituye `{MARCA}`, `{SLUG}` y `{ESTADO_ACTUAL}` antes de enviarlo.

```
Eres un subagente de investigación de solo lectura. Investiga solo la marca {MARCA} ({SLUG}).

Alcance: turismos, SUV, deportivos y monovolúmenes de pasajeros que un particular puede comprar nuevo en España. Excluye campers, cuadriciclos, furgones de carga y modelos descatalogados.

Fuentes, por orden:
1. Configurador oficial de la marca en España. El PVP base es el «Precio Catálogo desde», sin gastos de matriculación.
2. Ficha oficial española de cada modelo.
3. Si la web oficial responde con 403 a peticiones automáticas, consúltala con el navegador disponible.

No uses Coches.net, Diariomotor, Carwow ni extractos del buscador como PVP base.

Estado actual del proyecto para esta marca (referencia, no lo des por correcto):
{ESTADO_ACTUAL}

No edites ningún archivo ni hagas commit.

Devuelve exactamente este bloque, sin texto adicional:

MARCA: {MARCA} ({SLUG})
CONSULTAS: <URL | medio de consulta | fecha>
PVP_BASE: <modelo> | <motor y acabado> | <importe> | <URL del configurador> | <fecha>
OFERTAS: <modelo> | <importe> | <validez> | <URL> | <fecha>
PENDIENTES: <modelo o motorización> | <dato que falta> | <por qué>
EXCLUSIONES: <modelo> | <motivo>
CAMBIOS_PROPUESTOS: <archivo y campo> | <valor actual> | <valor propuesto> | <fuente>

Si un dato no tiene fuente verificable, escribe PENDIENTE con el motivo. No estimes.
```

---

## 3. Qué espero de esta prueba

- **Fiat:** los pendientes son Tipo Sedán (motor 130 MT), Qubo L (130 MT y eléctrico), Doblò y Ulysse. No debe reabrir los PVP ya aplicados salvo que encuentre una contradicción con el configurador.
- **Resto de marcas:** el informe debe distinguir PVP base de ofertas y marcar como pendiente todo lo que no tenga fuente.
- **Mi revisión:** cuando termine, reviso los informes y los cambios antes de dar la marcha por buena.
