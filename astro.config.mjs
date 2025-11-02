import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://ashmithhmaddala.github.io",
  base: "/new-portfolio/",
  integrations: [
    solidJs(),
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://ashmithhmaddala.github.io/new-portfolio/sitemap-index.xml",
        "https://ashmithhmaddala.github.io/new-portfolio/sitemap-0.xml",
      ],
    }),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  output: "static",
});
