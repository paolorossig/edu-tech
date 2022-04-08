module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Popins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          200: '#c7edff',
          400: '#03b0ff',
          900: '#008ecf'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    require('tailwind-scrollbar-hide')
  ]
}
