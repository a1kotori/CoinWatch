import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Inter", sans-serif',
      }
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['mynaui', 'svg-spinners']),
    }),
  ],
  darkMode: 'selector',
} satisfies Config

