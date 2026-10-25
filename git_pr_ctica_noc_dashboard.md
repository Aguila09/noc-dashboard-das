# Hoja de Trucos Git: Práctica NOC Dashboard

¡Bienvenidos a la práctica de Desarrollo Adaptativo de Software (DAS)!
Para evitar conflictos de código y asegurar que todos los módulos se puedan unir al final, es **estrictamente necesario** que sigan estos pasos al pie de la letra.

## REGLA DE ORO

**SOLO** pueden crear, editar o eliminar archivos dentro de la carpeta asignada a su equipo (`src/modules/TuModulo/`). **Bajo ninguna circunstancia** deben modificar el archivo `App.jsx`, `main.jsx`, el `package.json`, ni las carpetas de otros equipos.

---

## Día 1: Iniciar el Desarrollo (Especular)

**1. Clonar el repositorio base:**
Abre tu terminal y ejecuta:

```bash
git clone <URL_DEL_REPOSITORIO_QUE_PROPORCIONA_EL_PROFESOR>
```

**2. Entrar a la carpeta del proyecto e instalar dependencias:**

```bash
cd nombre-del-repositorio
npm install
```

**3. Crear la rama de tu equipo:**
No trabajaremos en `main`. Cada equipo debe crear su propia rama usando el formato `feature/equipo-X-modulo`:

```bash
# Ejemplo si eres el Equipo 1 (Autenticación):
git checkout -b feature/equipo-1-auth
```

**4. Levantar el servidor de desarrollo:**

```bash
npm run dev
```

## Día 2: Guardar Cambios (Colaborar y Adaptar)

Cada vez que terminen una característica o al final del día, deben guardar sus cambios en GitHub. Asegúrense de estar en su rama antes de hacerlo.

**1. Ver qué archivos han modificado:**

```bash
git status
```

**2. Agregar todos los cambios de su carpeta:**

```bash
git add .
```

**3. Crear el commit con un mensaje descriptivo:**

```bash
git commit -m "Agregada la gráfica de dona para el ancho de banda"
```

**4. Subir la rama a GitHub (Solo la primera vez que suben la rama):**

```bash
git push -u origin <nombre-de-tu-rama>
# Ejemplo: git push -u origin feature/equipo-1-auth
```

**(Para los siguientes pushes de los días 2 y 3, solo necesitan ejecutar `git push`)**
