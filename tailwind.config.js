/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 2s linear infinite',
      }
    },
  },
  plugins: [],
}
