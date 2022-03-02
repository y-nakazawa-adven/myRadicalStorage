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
      gray: theme('colors.gray'),
      yellow: theme('colors.yellow'),
    }),
    minWidth: (theme) => ({
      '580px': '580px',
      ...theme('spacing'),
    }),
    maxWidth: (theme) => ({
      ...theme('spacing'),
    }),
    extend: {
      spacing: {
        1.75: '0.4375rem',
        12.5: '3.125rem',
        42: '10.5rem',
        84: '21rem',
      },
      colors: {
        black: '#333',
        gray: {
          dde1e6: '#dde1e6',
          999: '#999',
          c0c0c0: '#c0c0c0',
        },
        green: {
          '32cccc': '#32cccc',
        },
        yellow: {
          ffbf00: '#ffbf00',
        },
      },
      height: {
        searchContainer: 'calc(100vh - 133px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
