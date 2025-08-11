module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        upBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        upBounce: 'upBounce 1s infinite ease-in-out',
      },
      fontFamily: {
        CovesLight: ['CovesLight', 'sans-serif'],
        Playfair: ['Playfair Display','serif'],
        Josefin: ['Josefin Sans'],
        Libre: ['Libre Baskerville'],
        Typewriter: ['JMH Typewriter']
    },
  },
  plugins: [],
}
}