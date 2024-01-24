/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: "1.25rem"
      }
    },
  },
  plugins: [],
}

