/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./views/layouts/main.handlebars"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  },
};

module.exports = {
  content: ["./views/login.handlebars", "./views/signup.handlebars"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
