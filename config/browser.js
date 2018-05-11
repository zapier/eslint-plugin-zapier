// prettier-ignore
module.exports = {
  extends: [
    require.resolve('./base'),
    require.resolve('./rules/compat'),
  ],

  env: {
    browser: true,
  },

  rules: {},
};
