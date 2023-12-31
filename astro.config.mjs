import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
    site: "https://parscomtel.github.io",
    base: "/parscomtel",
    customCss: [
      './public/fonts/font-face.css',
    ],
});