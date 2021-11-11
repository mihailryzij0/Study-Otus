module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-shadow": "off",
    "no-param-reassign": ["error", { props: false }],
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
  plugins: ["jest"],
};
