# Instrucciones del proyecto

## Vista previa local

Para ejecutar Kilómetro Claro en local, no uses `npm run dev` desde el PowerShell de Codex: `npm` no está disponible en su `PATH`. Desde la raíz del proyecto, invoca Astro con el Node incluido en el runtime de Codex:

```powershell
& "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" ".\node_modules\astro\astro.js" dev --host 127.0.0.1 --port 4321
```

Mantén abierta la terminal mientras se revisa la web y usa la dirección que Astro muestre. Si el puerto 4321 está ocupado, Astro puede elegir otro; comprueba el puerto que indique antes de abrir la vista previa.

Para servir la compilación estática existente, usa el mismo comando sustituyendo `dev` por `preview`.
