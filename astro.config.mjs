import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import yaml from '@rollup/plugin-yaml';
import image from "@astrojs/image";

// https://astro.build/config
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), svelte(), tailwind(), image()],
  vite: {
    plugins: [yaml(), VitePluginBrowserSync(), VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
        runtimeCaching: [{
          urlPattern: /^https:\/\/fonts\.cdnfonts\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'cdn-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },

            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })]
  },
  // output: "server",
  // adapter: netlify()
});