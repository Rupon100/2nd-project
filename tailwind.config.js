/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        'bg-color': '#091429',
        'bg-dark-color': '#0c1a28',
        'primary-color': '#4fe98c',
      },
      width:{
        'custom-img-width': '200px',
      }
    },
    
  },
  plugins: [],
}

