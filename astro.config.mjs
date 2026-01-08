// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://husshegazy.com",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  integrations: [
    mdx(),
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
