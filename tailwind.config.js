const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        udenar: {
          primary: '#00923f',
          secondary: '#F2FFE9'
        },
        secondary: '#16181c'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
