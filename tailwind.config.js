/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url(/assets/images/header-bg.png)',
        footer: 'url(/assets/images/footer.png)',
        software: 'url(/assets/images/Light-BG-Blurred 1.png)',
        'landing-main': 'url(/assets/images/gradient-bg.png)',
        'landing-main-dark': 'url(/assets/images/gradient-bg-dark.png)',
        tech: 'url(/assets/images/net.png)',
      },
      borderRadius: {
        '10px': '10px',
      },
      colors: {
        blue: {
          special: '#0099E9',
          'special-1': '#1F3D5A',
        },
        gray: {
          special: '#D9D9D9',
        },
        green: {
          special: '#7C6CB5',
          'special-1': '#4C8AA4',
          'special-2': '#279F96',
          'special-3': '#24546D',
          'special-4': '#173545',
          'special-5': '#22A295',
        },
        pink: {
          special: '#1BA592',
          'special-1': '#7770B3',
          'special-2': '#7475B3',
          'special-3': '#29A299',
        },
        red: {
          special: '#F21E1E',
          'special-1': '#681010',
        },
      },
      fontSize: {
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '6.5xl': '4rem',
      },
      margin: {
        18: '4.5rem',
        30: '7.5rem',
        88: '22rem',
      },
      padding: {
        26: '6.5rem',
      },
      lineHeight: {
        'extra-large': '128px',
        '17.26px': '17.26px',
        '18.75px': '18.75px',
        '25.89px': '25.89px',
        '34.52px': '34.52px',
        '37.5px': '37.5px',
        '51.78px': '51.78px',
      },
    },
    screens: {
      xs: '380px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
  plugins: [],
};
