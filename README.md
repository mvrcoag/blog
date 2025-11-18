# Blog Personal

Blog personal minimalista construido con Next.js, Tailwind CSS y MDX.

## Personalización

Para adaptar este blog a tu perfil, modifica los siguientes archivos:

### 1. Información personal

**`app/page.tsx`** - Página principal con tu biografía y presentación.

**`app/layout.tsx`** - Metadatos del sitio:
- `title` - Tu nombre
- `description` - Tu rol/profesión
- `openGraph` - Información para redes sociales

### 2. URLs y enlaces

**`app/sitemap.ts`** - Cambia `baseUrl` a tu dominio.

**`app/components/footer.tsx`** - Actualiza:
- Enlaces a tus redes sociales
- Copyright con tu nombre

### 3. Navegación

**`app/components/nav.tsx`** - Modifica `navItems` para agregar o cambiar secciones.

### 4. Contenido

**`app/blog/posts/`** - Agrega tus posts en formato MDX con el siguiente frontmatter:

```mdx
---
title: 'Título del post'
publishedAt: '2025-01-01'
summary: 'Descripción breve del post'
---

Contenido del post...
```

## Docker

### Construir la imagen

```bash
docker build -t blog .
```

### Ejecutar el contenedor

```bash
docker run -p 3000:3000 blog
```

El blog estará disponible en `http://localhost:3000`.

### Docker Compose (opcional)

```yaml
version: '3.8'
services:
  blog:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

```bash
docker compose up -d
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## Tecnologías

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [MDX](https://mdxjs.com/) - Markdown con JSX
- [Geist](https://vercel.com/font) - Tipografía
