/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
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
