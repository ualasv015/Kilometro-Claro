# Instrucciones del proyecto

## Vista previa local y desde el móvil

No uses `npm run dev` desde el PowerShell de Codex: `npm` no está disponible en su `PATH`. Desde la raíz del proyecto, invoca Astro con el Node incluido en el runtime de Codex.

Para ver la compilación estática (`dist`) en el ordenador y en un móvil conectado a la misma red Wi-Fi:

```powershell
& "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" ".\node_modules\astro\astro.js" preview --host 0.0.0.0 --port 4321 --strictPort
```

El ordenador puede abrir `http://127.0.0.1:4321/`. En el móvil usa la dirección IPv4 de la interfaz Wi-Fi que muestra `ipconfig`, por ejemplo `http://192.168.1.39:4321/`; esa IP puede cambiar. `127.0.0.1` en el móvil apunta al propio móvil. Comprueba que la URL exacta de la página responde antes de entregarla al usuario.

**Importante en Codex:** inicia el servidor fuera del sandbox de `exec_command` (`sandbox_permissions: "require_escalated"`); un servidor iniciado dentro del sandbox puede anunciar la IP local pero no ser accesible desde el navegador ni el móvil. Si se deja en segundo plano con PowerShell, usa `Start-Process -WindowStyle Hidden` y comprueba desde el equipo anfitrión que la página responde con HTTP 200. Identifica el proceso por su línea de comandos antes de cerrar cualquier servidor que ocupe el puerto.

Para desarrollo con recarga automática, sustituye `preview` por `dev` en el comando. Si Vite falla al leer dependencias por los puntos de repetición de OneDrive, sirve una compilación estática reciente con `preview`; no des por buena una URL anunciada por un servidor que muestra errores.
