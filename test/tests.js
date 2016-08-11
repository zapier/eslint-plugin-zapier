// modules ---------------------------------------------------------------------

// node
const assert = require('assert');

// npm
const diff = require('lodash.difference');
const eslint = require('eslint');

// local
const conf = require('..');

// setup -----------------------------------------------------------------------

const eslintRules = Object.keys(eslint.linter.defaults().rules);
const confRules = Object.keys(conf.rules);

// cases -----------------------------------------------------------------------

exports['eslint-config-zapier'] = {

  'all eslint rules are configured': () => {
    assert.deepEqual(
      diff(eslintRules, confRules),
      []
    );
  },

  'config does not throw': () => {
    const linter = new eslint.CLIEngine({
      useEslintrc: false,
      configFile: './index.js',
    });
    assert.doesNotThrow(() => linter.executeOnText(''));
  }

};
