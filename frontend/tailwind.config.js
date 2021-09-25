module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          calendar: {
            tile: '#E4F6ED',
            blue: {
              light: '#5684AE',
              dark: '#0F4C81',
            },
            orange: {
              light: '#FFE4C8',
              dark: '#F9BE81'
            },
          }
        }
      },
    },
    variants: {},
    plugins: [],
  }