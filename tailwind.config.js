/** @type {import('tailwindcss').Config} */


const config = {
  themes: [
    {
      themeName: "custom",
      colorScheme: "dark" | "light",
      colors: {
        infoo: "#634673",
        accent: "#583533",
        customVariable: "#000000",
      },
    },
  ],
};


module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        'bgColor': '#081b29',
        'secondBgColor': '#112e42',
        'textColor': '#ededed',
        'mainColor': '#00abf0'
      }
    },
  },
  rippleui : {
    themes : [
      
    ]
  },

  plugins: [require("rippleui")({...config})],
}