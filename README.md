# Personal Pilates Gandía · web 2027

Sitio estático en [Astro](https://astro.build) que sustituye al WordPress de personalpilatesgandia.com. Conserva las mismas URL que la web actual.

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera el sitio en dist/
npm run preview  # sirve dist/ en local
```

## Estructura

- `src/pages/`: una página por ruta. Las entradas del blog y los textos legales son Markdown (`*.md`); una entrada nueva es un fichero más con `tipo: post` en la cabecera.
- `src/partials/home.html`: cuerpo de la portada.
- `src/components/`, `src/layouts/`, `src/styles/`: cabecera, cierre con formulario, plantillas y estilos.
- `src/config.ts`: teléfono, email, dirección y destino de los formularios.
- `public/assets/`: imágenes y logotipo. `logo/` guarda los SVG originales del logotipo.
- `docs/imagenes-generadas.md`: prompts de las tres fotos hechas con IA.

## Antes de publicar

1. **Formularios.** Sin configurar, abren el programa de correo del visitante. Para recibirlos por web, crea un formulario en un servicio como Formspree o Web3Forms y pon su URL en la variable de entorno `PUBLIC_FORM_ENDPOINT` al compilar.
2. **Guía gratis.** En WordPress el alta iba a ActiveCampaign y enviaba el PDF de forma automática. Aquí solo llega la petición por el formulario; falta conectar ActiveCampaign o enviar la guía a mano.
3. **Textos legales.** Están copiados tal cual del WordPress. La política de cookies describe cookies que este sitio ya no usa (no hay analítica ni fuentes externas) y conviene revisarla.
4. **Alojamiento.** `dist/` se puede subir a cualquier hosting estático (Netlify, Cloudflare Pages, Vercel o el hosting actual por FTP). El dominio debe apuntar ahí y servir con HTTPS.
5. **Redirecciones.** `/bienvenida/`, `/suscripcion-confirmada/` y `/entrega-lead-magnet/` redirigen a páginas existentes. El resto de rutas son idénticas a las de WordPress.
