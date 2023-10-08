/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        green: {
          100: '#CFE100',
          300: '#00B37E',
          400: '#36BE2A',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          100: '#81D8F7',
          200: '#0DE7F4',
          500: '#1E253C',
        },
        orange: {
          500: '#FBA94C',
          700: '#FF7A00'
        },
        red: {
          500: '#F75A68',
          600:'#D61E1E'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          250: '#868686',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        yellow: {
          100: '#D6A21E'
        },
        dark_colors:{
          100: '#2E3239',
          200: '#1B2223',

        }
      }
    },
  },
  plugins: [],
}
