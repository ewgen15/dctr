import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // У dev — корінь. Для GitHub Pages збірка з base /dctr/. Локально без /dctr/: BASE_PATH=/ npm run build && npm run preview
  base:
    process.env.BASE_PATH !== undefined
      ? process.env.BASE_PATH
      : process.env.NODE_ENV === 'production'
        ? '/dctr/'
        : '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
