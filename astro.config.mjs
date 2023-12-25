import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: {
          en: {
            label: 'English',
            lang: 'en', // lang is required for root locales
          },
          fa: {
              label: 'Persian',
              lang: 'fa',
              dir: 'rtl',
          },
    },
    routing: {
      prefixDefaultLocale: false
    }
  }
});