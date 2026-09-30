import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/hackclub-67-website/',

  input: {
    main: 'index.html',
    knowMore: 'know-more-page.html',
    motivation: 'motivation-page.html'
  }
})