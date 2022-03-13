module.exports = {
  content: ['./frontend/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Popins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#03b0ff'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    require('tailwind-scrollbar-hide')
  ]
}
