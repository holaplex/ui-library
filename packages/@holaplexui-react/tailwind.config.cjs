/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          default: '#1f75cb',
          secondary: '#bfbfc3',
          dialog: {
            background: '#f8fafc',
            secondary: '#e2e8f0',
            text: '#0f172a',
          },
        },

        button: {
          default: '#1f75cb',
          secondary: '#bfbfc3',
          success: '#269059',
          failure: '#dd2b0e',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};