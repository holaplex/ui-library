/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          default: '#1f75cb',
          secondary: '#bfbfc3',
        },
        button: {
          default: '#1f75cb',
          secondary: '#bfbfc3',
          success: '#269059',
          failure: '#dd2b0e',
        }
      }
    },
  },
  plugins: [],
}
