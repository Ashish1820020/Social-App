/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    '.src/Pages/**/*.{html,js,jsx}',
    './src/Components/**/*.{html,js,jsx}',
  ],

  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'poppins': ["Poppins", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "4rem",
      },
    },

    extend: {
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgb(32 32 32 / 100%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        glass: "1px 5px 12px 1px rgba( 31, 38, 135, 0.37 )",
        "glass-card": "4px 4px 4px 4px rgba( 32, 32, 32, 0.37 )",
        "card-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "dark-shadow": "10px 10px 5px 0px rgba(130,130,130,0.75)",
      },

      colors: {
        background: {
          DEFAULT: "#F6F7FA",
          "light": "#F6F6F6",
          "dark": "#0A0A0A"
        },
        primary: {
          DEFAULT: "#008cff",
          50: "#63ceff",
          100: "#23b7fc",
          200: "#00bfff",
          300: "#00aeff",
          400: "#0099ff",
          500: "#008cff",
          600: "#0067FF",
          700: "#0040ff",
          800: "#0e4bff",
          900: "#0000ff",
        },
      },
    },
  },
  plugins: [],
}
