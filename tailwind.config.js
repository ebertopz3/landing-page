/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      colors: {
        'general-1': `#8A374D`,
        'general-2': `#B44663`,
        'title': '#A2203B',
        'title-light': '#FFF4F6',
        'basic': '#1D314B',
        'basic-1': '#343536',
      },
    },
  },
  plugins: [],
}
