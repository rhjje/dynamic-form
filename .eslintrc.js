const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
	.reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc }, {});

module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended", 
    "plugin:react/recommended",
    "airbnb"
  ],
  "plugins": [
    "react",
    "only-warn",
    "react-hooks"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    ...a11yOff,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": [1, { "allow": "single-child" }],
    "react/destructuring-assignment": [0, "always", { "ignoreClassFields": true }],
    "comma-dangle": ["error", "never"],
    "no-restricted-syntax": [0],
    "no-param-reassign": [1, { "props": false }],
    "object-curly-newline": [0],
    "react-hooks/rules-of-hooks": "error",
    "react/state-in-constructor": [0],
    "arrow-body-style": [0],
    "class-methods-use-this": [0],
    "no-underscore-dangle": [0],
    "react-hooks/exhaustive-deps":[0],
    "react/jsx-props-no-spreading": [0]
  },
  "parser": "babel-eslint"
};