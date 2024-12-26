/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '130': '32.5rem', // Example: 130 * 0.25rem (1rem = 16px by default)
      },
    },
  },
  plugins: [],
}

