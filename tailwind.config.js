/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            "light-gray-color": "var(--gray-light-color)",
            "medium-gray-color": "var(--medium-gray-color)",
            "pink-pastel-color": "var(--pink-pastel-color)",
            "peach-color": "var(--peach-color)",
            "ligth-green-color": "var(--light-green-color)",
            "berry-lilac-color": "var(--berry-lilac-color)"
        }
    },
  },
  plugins: [],
}

