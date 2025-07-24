import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  site: 'https://dgaysae.github.io',
  output: 'static',
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'My Docs',
    }),
  ],
})
