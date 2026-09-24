const path = require("path")

module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: path.join(__dirname, "../../ui/src/styles/globals.css"),
  tailwindFunctions: ["cn", "cva"],
}
