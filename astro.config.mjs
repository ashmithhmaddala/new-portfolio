import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://ashmith-maddala.github.io/", // Update with your actual domain
  integrations: [
    solidJs(),
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://ashmith-maddala.github.io/sitemap-index.xml",
        "https://ashmith-maddala.github.io/sitemap-0.xml",
      ],
    }),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
});
