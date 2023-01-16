/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    require.resolve('react-widgets/styles.css'),
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    extend: {},
  },
  plugins: [require('react-widgets-tailwind')],
}