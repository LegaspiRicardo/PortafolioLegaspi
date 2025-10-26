module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'float': 'float 20s infinite linear',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100px) rotate(360deg)',
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
}