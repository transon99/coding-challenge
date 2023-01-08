/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "btn-color": "var(--btn-color)",
        "background-color": "var(--background-color)",
        "secondary-text": "var(--secondary-text-color)",
        "primary-text": "var(--primary-text-color)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
