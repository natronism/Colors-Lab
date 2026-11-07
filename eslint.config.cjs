const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ...js.configs.recommended,
    files: ["public/js/code.js"]
  },
  {
    files: ["public/js/code.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
