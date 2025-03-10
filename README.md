# StellarStack - Boilerplate Moderno para Desarrollo Web Full-Stack

## Descripción

StellarStack es un boilerplate completo y moderno para el desarrollo de aplicaciones web full-stack, siguiendo una arquitectura monorepo que integra tecnologías de vanguardia. Este template permite iniciar rápidamente proyectos con una estructura optimizada y herramientas configuradas para máxima productividad.

## Stack Tecnológico

### Arquitectura y Herramientas Base

- **Monorepo con pnpm y Turborepo**: 
  Organización unificada del proyecto que facilita la gestión de dependencias y la coordinación entre módulos.

- **TypeScript**: 
  Tipado estático para mejorar la calidad del código y detectar errores en etapa de desarrollo.

### Frontend

- **Astro**: 
  Framework para generación de sitios estáticos y renderizado híbrido que optimiza el rendimiento.

- **Svelte**: 
  Framework reactivo para UI con mínimo boilerplate y excelente rendimiento.

- **Tailwind CSS**: 
  Utilidades CSS de bajo nivel para estilos rápidos y consistentes.

- **Shadcn UI**: 
  Componentes de UI reutilizables y personalizables basados en Tailwind.

### Backend

- **Deno**: 
  Runtime moderno, seguro y con soporte nativo de TypeScript.

- **API RESTful**: 
  Estructura básica para construcción de APIs con middleware de logging.

### Otras Tecnologías Configurables

- **Supabase**: Base de datos, autenticación y APIs.
- **Expo**: Desarrollo de aplicaciones móviles y desktop.
- **Vercel**: Despliegue optimizado para aplicaciones web.
- **Upstash**: Funcionalidades en tiempo real y caching.
- **GitHub Actions**: Automatización de CI/CD.

## Estructura del Proyecto

```
boilerplate/
├── apps/                      # Aplicaciones del monorepo
│   ├── backend/               # Backend en Deno
│   │   ├── src/               # Código fuente del backend
│   │   └── deno.json          # Configuración de Deno
│   └── frontend/              # Frontend en Astro/Svelte
│       ├── src/               # Código fuente del frontend
│       │   ├── components/    # Componentes reutilizables
│       │   ├── layouts/       # Layouts de Astro
│       │   ├── pages/         # Páginas de Astro
│       │   └── styles/        # Estilos globales
│       ├── astro.config.mjs   # Configuración de Astro
│       └── tailwind.config.mjs # Configuración de Tailwind
├── packages/                  # Paquetes compartidos
├── project-docs/              # Documentación del proyecto
│   └── tech-stack.md          # Detalles del stack tecnológico
├── package.json               # Configuración principal
└── turbo.json                 # Configuración de Turborepo
```

## Comenzando

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/stellarstack.git mi-proyecto
   ```

2. Instala las dependencias:
   ```bash
   cd mi-proyecto
   pnpm install
   ```

3. Inicia el entorno de desarrollo:
   ```bash
   pnpm dev
   ```

## Comandos Disponibles

- `pnpm dev`: Inicia todos los proyectos en modo desarrollo
- `pnpm build`: Compila todos los proyectos
- `pnpm lint`: Ejecuta linting en todos los proyectos
- `pnpm format`: Formatea el código usando Prettier

### Comandos específicos (ejecutar desde directorio raíz):

#### Frontend (Astro/Svelte)
- `cd apps/frontend && pnpm dev`: Inicia el servidor de desarrollo frontend
- `cd apps/frontend && pnpm build`: Compila el frontend para producción

#### Backend (Deno)
- `cd apps/backend && deno task dev`: Inicia el servidor de desarrollo backend
- `cd apps/backend && deno task start`: Inicia el backend para producción

## Personalización

Este boilerplate está diseñado para ser fácilmente personalizable:

- **Frontend**: Modifica los componentes en `apps/frontend/src/components`
- **Backend**: Extiende las rutas y controladores en `apps/backend/src`
- **Estilos**: Personaliza los temas de Tailwind en `apps/frontend/tailwind.config.mjs`

## Características Principales

- **Desarrollo Rápido**: Configuración ya realizada para empezar a desarrollar inmediatamente
- **Tipado Fuerte**: TypeScript integrado en todo el stack
- **Componentes Modernos**: UI reactiva con Svelte y Shadcn
- **Rendimiento Optimizado**: Generación estática e hidratación parcial con Astro
- **API Segura**: Backend con Deno para mayor seguridad y rendimiento

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de enviar un pull request.

## Licencia

MIT

---

Desarrollado con ❤️ por datagora.mx
