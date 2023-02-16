/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myblack: '#222831',
        mydark: '#393E46',
        myteal: '#b29557',
        mylight: '#EEEEEE'
      },
      fontFamily:{
        myfont: ['Montserrat', 'sans-serif'],
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