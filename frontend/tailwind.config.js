module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        12.5: '3.125rem',
      },
      minWidth: {
        '580px': '580px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
