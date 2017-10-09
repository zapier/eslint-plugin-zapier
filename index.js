const path = require('path');
const requireIndex = require('requireindex');

module.exports = {
  rules: requireIndex(path.join(__dirname, '/custom-rules')),
  configs: {
    base: require('./config/base'),
    prettier: require('./config/prettier'),
  },
};
