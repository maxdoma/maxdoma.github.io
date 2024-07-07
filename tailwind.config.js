/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      "play": "url('https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450.jpg')",
    },
    extend: {
      borderRadius: {
        'xxl': '1rem'
      }
    },
    fontSize: {
      '1.375': '1.375rem'
    }
  },
  plugins: [],
}