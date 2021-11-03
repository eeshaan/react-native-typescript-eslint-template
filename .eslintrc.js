module.exports = {
  root: true,
  extends: ["airbnb-typescript", "eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react", "react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "@typescript-eslint/no-redeclare": "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 1,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "eol-last": ["error", "always"],
    "no-multiple-empty-lines": "error",
    indent: ["error", 2],
  },
};
