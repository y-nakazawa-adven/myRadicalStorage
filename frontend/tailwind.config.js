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
        2.25: '0.5625rem',
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
