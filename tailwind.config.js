module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
      screens: {
        'smmax': {'max': '576px'},
      },
    },
  },
  plugins: [],
}
