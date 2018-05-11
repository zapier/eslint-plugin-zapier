module.exports = {
  parser: 'babel-eslint',

  env: {
    'browser': true,
  },

  plugins: ['compat'],

  rules: {
    'compat/compat': 'error',
  }
};
