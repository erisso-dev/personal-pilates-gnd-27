import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://personalpilatesgandia.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Páginas del embudo de WordPress que ya no existen
  redirects: {
    '/bienvenida/': '/',
    '/suscripcion-confirmada/': '/',
    '/entrega-lead-magnet/': '/guia-gratis/',
  },
});
