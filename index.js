const path = require('path');
const requireIndex = require('requireindex');

module.exports = {
  rules: requireIndex(path.join(__dirname, '/custom-rules')),
  configs: {
    base: require('./config/base'),
    node: require('./config/node'),
    browser: require('./config/browser'),
  },
};
