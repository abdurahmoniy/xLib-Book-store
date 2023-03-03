/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myblack: '#222831',
        myteal: '#b29557',
        mylight: '#EEEEEE',
        mybg1: '#faeebe',
        mytext1: '#bbaa67',
      },
      fontFamily:{
        myfont: ['Goudy Bookletter 1911', 'serif'],
      },
    },
    screens:{
      xs: '480px',
      ss: '620px',
      sm: '760px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [],
}