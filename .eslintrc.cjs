/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "detect" },
  },
  plugins: ["import"],
  rules: {
    "react/display-name": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "error",
    eqeqeq: "error",
    "no-else-return": "error",
    "no-lonely-if": "error",
    "require-await": "warn",
    "no-return-await": "error",
    // "@typescript-eslint/explicit-function-return-type": "warn",
    "prefer-arrow-callback": "error",
    "arrow-body-style": ["error", "always"],
    "react/function-component-definition": [
      "warn",
      { namedComponents: "arrow-function" },
    ],
    "max-nested-callbacks": ["warn", 4],
    "max-depth": ["warn", 4],
    "react/destructuring-assignment": ["error", "always"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-duplicates": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["./**/*", "../**/*"],
      },
    ],
  },
};
