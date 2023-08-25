import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never'
  },
  site: 'https://f24816.github.io/',
  markdown: { remarkPlugins: [remarkBreaks] },
  integrations: [
    mdx(), sitemap(),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
  ],
});