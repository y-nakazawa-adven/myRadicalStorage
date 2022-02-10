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
        1.75: '0.4375rem',
        12.5: '3.125rem',
        42: '10.5rem',
      },
      colors: {
        black: '#333',
        gray: {
          dde1e6: '#dde1e6',
          999: '#999',
        },
        green: {
          '32cccc': '#32cccc',
        },
      },
      height: {
        searchContainer: 'calc(100vh - 133px)',
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
