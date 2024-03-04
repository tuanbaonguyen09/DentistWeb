const defaultColors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin')

const COLORS = {
  mess: {
    1: "#006EEF",
    2: "#0068FF"
  },
  success: {
    100: "#EAFBD6",
    200: "#D0F8AE",
    300: "#ABEA82",
    400: "#53BC31",
    500: "#39A123",
  },
  info: {
    100: "#D6E9FE",
    200: "#ADD1FE",
    300: "#84B5FC",
    400: "#3476F8",
    500: "#265AD5",
  },
  warning: {
    100: "#FFF9D9",
    200: "#FFF1B4",
    300: "#FFE68F",
    400: "#FFCB44",
    500: "#DBA632",
  },
  error: {
    100: "#FFD9CF",
    200: "#FFAAA0",
    300: "#FF7370",
    400: "#FF123A",
    500: "#DB0D43",
  },
  primary: {
    1: '#1976D2',
    2: '#1565C0',
    3: '#64B5F6',
    4: '#E3F2FD',
    5: '#F5FAFD',
  },
  txt: { 
    1: '#2C333A', 
    2: '#6B7280',
    3: '#929DAA',
    4: '#D2D8E0',
  },
  border: { 
    1: '#E2E7ED', 
    2: '#F2F4F7',
  },
}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: [
      "./src/**/*.html", 
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  darkMode: "media",
  theme: {
    extend: {
      boxShadow:{
        '1' : '0px 1px 6px 0px rgba(29, 45, 73, 0.10)',
        '2' :'0px 3px 40px rgba(0, 0, 0, 0.05)',
        '3' :'2px 4px 60px 0px rgba(25, 118, 210, 0.10)',
        '4' :'0px 3px 40px rgba(0, 0, 0, 0.07)',
        'arrow':'0px 4px 60px 0px rgba(25, 118, 210, 0.15)',
        'fixedButton' :'0px 2px 10px rgba(25, 118, 210, 0.3)',
        'scrollTop' : '0px 1px 15px 0px rgba(29, 45, 73, 0.14)',

      },
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
          'heading-1': ['56px', '80px'],
          'heading-2': ['40px', '58px'],
          'heading-3': ['32px', '46px'],
          'body-1': ['16px', '28px'],
          'body-2': ['14px', '20px'],
          'caption-1': ['12px', '18px'], 
          'caption-2': ['10px', '16px'], 
          'title-1': ['24px', '36px'], 
          'title-2': ['20px', '30px'],
          'button-1': ['14px', '25.2px'], 
          'button-2': ['16px', '20px'], 
          'header-2': ['18px','26px'],
          'reviews-2': ['10px','16px'],
          'service-title': ['18px','30px'],

          'about-heading-1':['40px', '60px'],
          
          'about-banner-/' : ['24px', '34px'],
          'header-icon' : ['28px','28px'],
          'icon-about-1' :['104px','104px'],
          'icon-about-2' :['80px','80px'],
          'icon-about-3' :['48px','48px'],
          'icon-about-4' :['24px','24px'],
          'icon-about-5' :['60px','60px'],
          'button-link-1':['16px', '24px'],
          'about-1': ['36px','48px'],
          'button-link-icon' :['13px', '6px'],

          'price-font-1' :['10px', '22px'],
          'price-font-2' :['14px', '24px'],
          'price-font-3' :['10px', '18px'],
          'price-font-4' :['14px', '22px'],
          'price-font-5' :['12px', '24px'],

          'recom-font-1':['12px', '21px'],
          'recom-title-1':['28px', '40px'],

          'contact-heading-1':['40px','48px'],
          
      },
      fontFamily: {
        opensans: ['OpenSans', 'sans-serif'],
      },
      backgroundImage: {
        'banner': "url('/src/img/banner.png')",
        'service': "url('/src/img/home/service1.png')",
        'care' : "url('/src/img/home/care.png')",
        'news-1' :"url('/src/img/home/examples1.png')",
        'user-1' :"url('/src/img/home/user1.png')",
        'user-2' :"url('/src/img/home/user2.png')",
        'user-3' :"url('/src/img/home/user3.png')",
        'footer-main' :"url('/src/img/home/footer.png')",
        'banner-about' : "url('/src/img/about/banner-about.png')",
        'footer' : "url('/src/img/main-footer.png')",
        'pop' :"url('/src/img/home/popWind.jfif')",
        'map' : "url('/src/img/home/map.png')"
      },
      keyframes: {
        'fade-in-right':{
          '0%':{  
            transform: 'translateX(-50px)',
            opacity: '0',
          },
          '100%':{
            transform: 'translateX(0)',
            opacity: '1',
          }
        },
        'fade-in-left':{
          '0%':{  
            transform: 'translateX(50px)',
            opacity: '0',
          },
          '100%':{
            transform: 'translateX(0)',
            opacity: '1',
          }
        },
        'fade-in-bottom-up':{
          '0%':{  
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%':{
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'zoom-in-up':{
          '0%':{  
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%':{
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'zoom-in-up-hover':{
          '0%':{  
            transform: 'scale(0.8)',
            opacity: '1',
          },
          '100%':{
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'slide-right':{
          '0%':{  
            transform: 'translateX(0)',
          },
          '100%':{
            transform: 'translateX(20px)',
          },
        }
      },      
      animation: {
        'fade-in-right' :'fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-in-left' :'fade-in-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-in-bottom-up' :'fade-in-bottom-up 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'zoom-in-up':'zoom-in-up 1s ease-out both',
        'zoom-in-up-hover':'zoom-in-up-hover 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) infinite alternate both',
        'slide-right':'slide-right 0.8s cubic-bezier(0.895, 0.030, 0.685, 0.220) infinite alternate both'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};