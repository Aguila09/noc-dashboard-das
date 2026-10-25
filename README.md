# NOC Dashboard

Panel de monitoreo de seguridad de redes construido con React, Vite, Tailwind CSS y Chart.js.

## Módulos

1. Autenticación y Perfil de Usuario
2. Tráfico de Red
3. Alertas y Amenazas Activas
4. Estado de Dispositivos/Nodos
5. Mapa de Geolocalización de IPs
6. Logs y Auditoría del Sistema

## Estructura base

```text
src/
  modules/
    Auth/
    Traffic/
    Alerts/
    Devices/
    GeoIP/
    Logs/
  App.jsx
  main.jsx
  index.css
```

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
npm run dev
```

## Flujo de trabajo por equipos

Cada equipo trabaja en una rama específica y su módulo en la carpeta `src/modules/<NombreModulo>/`.

```bash
git checkout main
git pull origin main
git checkout -b feature/equipo-1-auth
# desarrollar cambios
npm run build
```

## Convenciones

- Mantener el módulo en su carpeta aislada.
- No editar archivos de otros equipos sin coordinación.
- Commitear por funcionalidad y usar mensajes claros.
- Hacer Pull Request desde la rama del equipo hacia `main`.
