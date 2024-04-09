/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("https://images.unsplash.com/photo-1489493512598-d08130f49bea?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      },
      colors: {
        'primary': '#415a77',
        'secondary': '#778da9',
        'dark': '#1b263b',
        'primarybg': '#e0e1dd',
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
}

