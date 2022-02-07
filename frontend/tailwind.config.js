module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      green: theme('colors.green'),
    }),
    extend: {
      spacing: {
        12.5: '3.125rem',
      },
      colors: {
        black: '#333',
        gray: {
          dde1e6: '#dde1e6',
        },
        green: {
          '32cccc': '#32cccc',
        },
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
