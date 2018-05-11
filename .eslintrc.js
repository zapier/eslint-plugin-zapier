const mapValues = require('lodash.mapvalues');

const customRules = require('./config/rules/custom').rules;

module.exports = {
  extends: './config/node.js',
  env: { node: true },
  rules: mapValues(customRules, () => 'off'),
};
