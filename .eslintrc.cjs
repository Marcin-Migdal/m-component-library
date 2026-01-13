module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  ignorePatterns: ["build", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react"],
  rules: {
    curly: "error",
    "@typescript-eslint/no-use-before-define": "error",
    "no-console": "warn",
    "react/jsx-no-useless-fragment": "error",
    eqeqeq: "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/no-children-prop": "error",
    "no-nested-ternary": "error",

    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "all", argsIgnorePattern: "^_" }],
  },
};
