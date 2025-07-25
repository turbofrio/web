// @ts-check
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://lucasbarrosal.github.io",
  base: "/turbofrio-web",
  build: {
    assets: "assets",
  },
})
