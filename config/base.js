module.exports = {
  extends: [
    './rules/base',
    './rules/custom',
    './rules/react',
    './rules/jsx-a11y',
    './rules/flowtype',
    './rules/compat',
  ].map(require.resolve),

  rules: {},
};
