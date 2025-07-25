// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//       },
//       animation: {
//         float: 'float 6s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// }
module.exports = {
  theme: {
    extend: {
      keyframes: {
        moveSlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      animation: {
        moveSlow: 'moveSlow 60s linear infinite',
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};