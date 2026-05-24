# BLEST Landing Page — Documentación

Landing page comercial para BLEST, plataforma de gestión académica para institutos de idiomas en LATAM.

---

## Stack técnico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 14 | Framework principal (App Router) |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 3 | Estilos |
| Framer Motion | 11 | Animaciones |
| @formspree/react | latest | Captura de leads (modal sandbox) |

**Deploy:** Vercel (Next.js nativo, sin static export)

---

## Variables de entorno

Crear un archivo `.env.local` en la raíz basándose en `.env.local.example`:

```bash
cp .env.local.example .env.local
```

| Variable | Descripción | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | URL de la aplicación BLEST | `https://app.blest.io` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número para el botón flotante de WhatsApp (sin + ni espacios) | `5491155554444` |
| `NEXT_PUBLIC_SANDBOX_EMAIL` | Email del usuario demo del sandbox | `demo@blest.io` |
| `NEXT_PUBLIC_SANDBOX_PASSWORD` | Contraseña del usuario demo del sandbox | `demo1234` |

> Las variables `NEXT_PUBLIC_*` se embeben en el build. Cualquier cambio requiere un redeploy.

**En Vercel:** Settings → Environment Variables → agregar cada una con scope Production.

---

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de producción
```

---

## Estructura del proyecto

```
/
├── app/
│   ├── layout.tsx          # Layout principal, fuente Inter, metadata SEO
│   ├── page.tsx            # Página principal — maneja estado del modal sandbox
│   └── globals.css         # Variables CSS, colores base, scrollbar
│
├── components/
│   ├── Navbar.tsx          # Barra de navegación fija con blur al scroll
│   ├── Hero.tsx            # Sección hero con browser + phone mockup
│   ├── StatsStrip.tsx      # Franja de 3 métricas clave
│   ├── MobileAttendance.tsx    # Showcase de asistencia mobile
│   ├── StudentManagement.tsx   # Sección gestión de alumnos y grupos
│   ├── ReportsAnalytics.tsx    # Sección reportes y analytics
│   ├── RolesPermissions.tsx    # Sección roles y permisos
│   ├── Pricing.tsx             # Cards de precios (Starter / Growth / Enterprise)
│   ├── SandboxDemo.tsx         # Sección demo del sandbox
│   ├── FinalCTA.tsx            # Sección final de conversión
│   ├── SandboxModal.tsx        # Modal de captura de leads + credenciales
│   ├── WhatsAppButton.tsx      # Botón flotante de WhatsApp
│   └── mockups/
│       ├── BrowserMockup.tsx   # Frame de browser (light mode) con screenshot
│       └── PhoneMockup.tsx     # Frame de phone con screenshot
│
├── public/
│   └── screenshots/            # Screenshots reales de la app (ver sección abajo)
│
├── screenshots/                # Originales sin renombrar (no se sirven)
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

---

## Sistema de diseño

El landing replica la estética de la app real de BLEST (`/Users/diegocervera/Projects/StudentManager`).

### Colores

| Rol | Clase Tailwind | Hex |
|---|---|---|
| Fondo principal | `bg-white` / `bg-slate-50` | `#ffffff` / `#f8fafc` |
| Texto principal | `text-slate-900` | `#0f172a` |
| Texto secundario | `text-slate-500` | `#64748b` |
| Color primario (CTAs, labels) | `indigo-700` | `#4338ca` |
| Bordes | `border-slate-200` | `#e2e8f0` |

### Tipografía

- **Headings / Logo:** Georgia serif — `font-family: Georgia, "Times New Roman", serif`
- **Body / UI:** Inter (via `next/font/google`)
- **Section eyebrows:** `text-xs font-medium uppercase tracking-[0.18em] text-indigo-700`

### Patrón de sección (usado en todos los bloques de features)

```tsx
<p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 mb-3">
  LABEL DE SECCIÓN
</p>
<h2 className="font-serif text-4xl font-bold text-slate-900 mb-4"
  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
  Título principal
</h2>
<p className="text-slate-500 text-lg max-w-2xl">
  Descripción...
</p>
```

### Cards

```tsx
<div className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm">
```

### Botón primario

```tsx
<button className="px-4 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-md transition-colors shadow-sm">
```

---

## Screenshots

Los screenshots reales de la app se almacenan en `public/screenshots/`. Los archivos con nombre limpio son los que se usan activamente en los componentes.

| Archivo | Usado en |
|---|---|
| `dashboard.png` | Hero, SandboxDemo |
| `dashboard-mobile.jpeg` | Hero (phone flotante) |
| `groups.png` | StudentManagement |
| `users.png` | RolesPermissions |
| `reports-students.png` | ReportsAnalytics |
| `attendance-mobile.jpeg` | MobileAttendance (phone mockup) |
| `reports-levels.png` | Disponible (no usado actualmente) |
| `reports-teachers.png` | Disponible (no usado actualmente) |
| `groups-mobile.jpeg` | Disponible (no usado actualmente) |
| `students-mobile.jpeg` | Disponible (no usado actualmente) |

Para reemplazar un screenshot: copiá el nuevo archivo con el mismo nombre en `public/screenshots/` y hacé redeploy.

---

## Flujo del modal Sandbox

El modal se activa desde cualquier CTA "Probar Sandbox" de la página. Componentes que lo disparan:

- `Navbar` — botón desktop y mobile
- `Hero` — CTA primario
- `Pricing` — planes Starter y Growth
- `SandboxDemo` — CTA principal de la sección
- `FinalCTA` — CTA de cierre

**Flujo:**
1. Usuario hace click → se abre `SandboxModal`
2. Completa Nombre + Email → se envía a Formspree (`mredabka`)
3. Formspree envía el lead al email configurado en la cuenta
4. El modal muestra las credenciales (email + contraseña) con botón "Copiar"
5. Usuario hace click en "Entrar al Sandbox" → abre `NEXT_PUBLIC_APP_URL`

**Formspree:** cuenta en formspree.io, form ID `mredabka`. Los leads llegan al email configurado en ese dashboard.

---

## Deploy en Vercel

El proyecto usa Next.js nativo en Vercel (sin `output: 'export'`).

**Configuración requerida en Vercel:**
- Framework Preset: `Next.js` (detección automática)
- Build Command: `npm run build` (default)
- Output Directory: vacío (default)
- Install Command: `npm install` (default)

El archivo `vercel.json` en la raíz fuerza la detección correcta del framework.

**Deploy automático:** cualquier push a `main` dispara un redeploy en Vercel.

---

## Agregar nuevas secciones

1. Crear el componente en `components/NuevaSección.tsx`
2. Si necesita el modal sandbox, agregar prop `onOpenSandbox: () => void`
3. Importarlo en `app/page.tsx` y pasarle `openModal` como prop
4. Agregar el componente en el JSX de `page.tsx` en el orden correcto

---

## Actualizar credenciales del sandbox

Las credenciales se configuran via variables de entorno — no requieren cambios en el código:

1. Ir a Vercel → Settings → Environment Variables
2. Actualizar `NEXT_PUBLIC_SANDBOX_EMAIL` y/o `NEXT_PUBLIC_SANDBOX_PASSWORD`
3. Hacer Redeploy desde Vercel → Deployments → Redeploy
