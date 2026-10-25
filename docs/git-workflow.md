# Flujo de trabajo Git para equipos del NOC Dashboard

## 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <nombre-del-repositorio>
```

## 2. Crear la rama del equipo

```bash
git checkout main
git pull origin main
```

### Ramas recomendadas

```bash
git checkout -b feature/equipo-1-auth
git checkout -b feature/equipo-2-traffic
git checkout -b feature/equipo-3-alerts
git checkout -b feature/equipo-4-devices
git checkout -b feature/equipo-5-geoip
git checkout -b feature/equipo-6-logs
```

## 3. Trabajar en el módulo asignado

Cada equipo debe respetar su carpeta:

- `src/modules/Auth/`
- `src/modules/Traffic/`
- `src/modules/Alerts/`
- `src/modules/Devices/`
- `src/modules/GeoIP/`
- `src/modules/Logs/`

## 4. Guardar cambios

```bash
git status
git add .
git commit -m "feat(auth): agregar pantalla base del módulo autenticación"
```

## 5. Subir cambios al repositorio remoto

```bash
git push -u origin feature/equipo-1-auth
```

## 6. Abrir Pull Request

- Ir a GitHub
- Abrir la rama del equipo
- Elegir `Compare & pull request`
- Destino: `main`
- Revisar cambios y aprobar solo si no hay conflictos relevantes

## 7. Integración final

Después de aprobar los 6 PRs, el líder del proyecto integra en `main` con una revisión final de arquitectura y resolución de conflictos.

## Reglas clave

- No editar archivos fuera del módulo asignado.
- No hacer commits con mensajes ambiguos.
- Siempre actualizar desde `main` antes de crear una nueva rama.
- Hacer pull request por módulo, no por todo el proyecto.
