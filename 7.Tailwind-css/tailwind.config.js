/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],

  screens: {
    sm: '400px',
    md: '600px',
    lg: '1199px',
    xl: '1440px',
  },
  borderRadius: {
    '4xl': '2rem',
    '5xl': '2.5rem',
    '6xl': '3rem',
    '7xl': '3.5rem',
    '8xl': '4rem',
    '9xl': '4.5rem',
}


}
