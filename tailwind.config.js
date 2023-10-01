/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      
      backgroundColor: {
        'light': 'var(--bg-light)',
        'dark': 'var(--bg-dark)',
        '1E2A47': '#1E2A47',
        '141D2F': '#141D2F',
      },
      textColor: {
        'light': 'var(--text-light)', 
        'dark': 'var(--text-dark)',
        '697C9A': '#697C9A',
        '4B6A9B': '#4B6A9B',
         '222731': '#222731',
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
  
}