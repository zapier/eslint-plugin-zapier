module.exports = {
  extends: [
    './rules/base',
    './rules/custom',
    './rules/react',
    './rules/jsx-a11y',
    './rules/flowtype',
  ].map(require.resolve),

  rules: {},
};
