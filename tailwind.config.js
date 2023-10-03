/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      
      backgroundColor: {
        '1E2A47': '#1E2A47',
        '141D2F': '#141D2F',
      },
      textColor: {
        '697C9A': '#697C9A',
        '4B6A9B': '#4B6A9B',
        '222731': '#222731',
      },
      
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
  
}