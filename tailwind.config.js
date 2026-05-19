/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'electric-blue': '#3E6AE1',
        carbon: '#171A20',
        graphite: '#393C41',
        pewter: '#5C5E62',
        'silver-fog': '#8E8E8E',
        cloud: '#EEEEEE',
        ash: '#F4F4F4',
        'dark-surface': '#1E2128',
        'dark-border': '#2D3139',
        'dark-text-secondary': '#B0B3B8',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        tesla: '4px',
      },
      transitionDuration: {
        tesla: '330ms',
      },
    },
  },
  plugins: [],
}
