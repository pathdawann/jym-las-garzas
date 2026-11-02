// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Sitio 100% estático: máxima velocidad, mínima superficie de ataque.
// El portal de resultados REAL necesitará un backend aparte (ver README, sección Seguridad).
export default defineConfig({
  site: 'https://www.TU-DOMINIO.com', // TODO: dominio definitivo (canonical, sitemap, OG)
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
