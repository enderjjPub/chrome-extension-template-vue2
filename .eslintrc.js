module.exports = {
  root: true,
  env: {
    node: true,
    webextensions: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'no-new': 0,
    'comma-dangle': 0,
    'vue/no-unused-components': 1,
    'vue/max-attributes-per-line': 0,
    'vue/html-indent': 0,
    'vue/html-closing-bracket-newline': 0,
    'prefer-promise-reject-errors': 0,
    camelcase: 1,
    'vue/no-use-v-if-with-v-for': 0,
    'space-before-function-paren': 0,
  },
};
