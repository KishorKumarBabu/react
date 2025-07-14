/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },},
  },
  plugins: [require('@tailwindcss/line-clamp')]
,
};
