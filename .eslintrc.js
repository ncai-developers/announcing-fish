module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
    'cordova': true,
    'DEV': true,
    'PROD': true,
    '__THEME': true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    indent: [
      "error",
      2
    ],
    'linebreak-style': [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    'arrow-parens': 0,
    'one-var': 0,
    'import/first': 0,
    'no-console': 'warn',
    'no-undef': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }]
  }
}
