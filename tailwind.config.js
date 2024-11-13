/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        // padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1360px'
        },
      },
      fontFamily: {
        geist: ['"Geist Mono"', 'monospace'],
      },
      colors: {
        lightgrey: "#fafafa",
        goldorange: "#FFA500",
        yellow: "#FFDD00",
        white: "#FFFFFF",
        black: "#000000",
        darkgrey: "#333",
        green: "#32CD32",
        
      },
      backgroundImage: {
        gradient: 'linear-gradient(90deg, #FFA500, #FFDD00)',
        greyGradient: 'linear-gradient(135deg, #333 0%, #444 50%, #222 100%)',
      }
    },
  },
  plugins: [],
};
