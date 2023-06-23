/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Poppins_700Bold',
        body: 'Poppins_400Regular',
        alt: 'BaiJamjuree_700Bold',
      },
      colors: {
        white: {
          50: '#FFFFFF',
          100: '#F0F0F5',
          150: '#F9F9F9',
        },
        red: {
          50: '#E02041',
        },
        gray: {
          50: '#D9D9D9',
          100: '#555555',
          150: '#737380',
          200: '#41414D',
          250: '#13131A',
        },
        green: {
          50: '#086972',
        },
      },
      fontSize: {
        base: ['15px', '24px'],
      },
    },
  },
  plugins: [],
}
