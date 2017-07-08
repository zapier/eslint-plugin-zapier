// modules ---------------------------------------------------------------------

// node
const assert = require('assert');

// npm
const diff = require('lodash.difference');
const eslint = require('eslint');

// setup -----------------------------------------------------------------------

const eslintRules = Object.keys(eslint.linter.defaults().rules);
const makeLinter = () => (new eslint.CLIEngine({ useEslintrc: false, configFile: './index.js' }));

// cases -----------------------------------------------------------------------

exports['eslint-config-zapier'] = {

  'all eslint rules are configured': () => {
    const linter = makeLinter();

    const config = linter.getConfigForFile('./index.js');

    assert.deepEqual(
      diff(eslintRules, Object.keys(config.rules)),
      []
    );
  },

  'loads react-speficic rules': () => {
    const linter = makeLinter();
    const config = linter.getConfigForFile('./index.js');
    const reactRules = Object.keys(config.rules).filter((rule) => rule.startsWith('react'));

    assert.ok(reactRules.length > 0);
  },

  'loads a11y-related rules': () => {
    const linter = makeLinter();
    const config = linter.getConfigForFile('./index.js');
    const a11yRules = Object.keys(config.rules).filter((rule) => rule.startsWith('jsx-a11y'));

    assert.ok(a11yRules.length > 0);
  },

  'loads flowtype rules': () => {
    const linter = makeLinter();
    const config = linter.getConfigForFile('./index.js');

    assert(config.parser, 'babel-eslint');
  },

  'config does not throw': () => {
    const linter = makeLinter();

    assert.doesNotThrow(() => linter.executeOnText(''));
  },

};
