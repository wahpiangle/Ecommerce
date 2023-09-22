/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1D1F',
        primaryText: '#EFEFEF',
        secondaryText: '#6F767E',
        blueText: '#475BE8',
      }
    },
    fontFamily: {
      display: ["Merriweather", "serif"],
    }
  },
  plugins: [],
  mode: 'jit',
}
