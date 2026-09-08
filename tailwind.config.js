/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#F2F1EB',
        ink: '#151714',
        muted: '#73786C',
        line: '#D9DBD1',
        acid: '#D5F75B',
        lime: '#B9DF3B',
        signal: '#F06C45',
        panel: '#E8E9E0',
        'dark-muted': '#A4AA98',
        'dark-line': '#30352E',
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
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
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
