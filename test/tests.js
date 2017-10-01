// modules ---------------------------------------------------------------------

// node
const assert = require('assert');

// npm
const diff = require('lodash.difference');
const eslint = require('eslint');

// setup -----------------------------------------------------------------------

const eslintRules = Object.keys(eslint.linter.defaults().rules);
const makeLinter = (configFile = './index.js') =>
  new eslint.CLIEngine({ useEslintrc: false, configFile });

// cases -----------------------------------------------------------------------

exports['eslint-config-zapier'] = {
  'all eslint rules are configured': () => {
    const linter = makeLinter();

    const config = linter.getConfigForFile('foo.js');

    assert.deepEqual(diff(eslintRules, Object.keys(config.rules)), []);
  },

  'loads react-speficic rules': () => {
    const linter = makeLinter();
    const config = linter.getConfigForFile('foo.js');
    const reactRules = Object.keys(config.rules).filter(rule =>
      rule.startsWith('react')
    );

    assert.ok(reactRules.length > 0);
  },

  'loads a11y-related rules': () => {
    const linter = makeLinter();
    const config = linter.getConfigForFile('foo.js');
    const a11yRules = Object.keys(config.rules).filter(rule =>
      rule.startsWith('jsx-a11y')
    );

    assert.ok(a11yRules.length > 0);
  },

  'loads flowtype rules': () => {
    const linter = makeLinter();
    const config = linter.getConfigForFile('foo.js');

    assert(config.parser, 'babel-eslint');
  },

  'config does not throw': () => {
    const linter = makeLinter();

    assert.doesNotThrow(() => linter.executeOnText(''));
  },

  'exposes a prettier config': () => {
    const linter = makeLinter('./prettier.js');
    const config = linter.getConfigForFile('foo.js');

    assert.ok(Object.keys(config.rules).length > 0);
  },

  'prettier config contains base config': () => {
    const config = makeLinter('./prettier.js').getConfigForFile('foo.js');
    const baseConfig = makeLinter('./index.js').getConfigForFile('foo.js');

    assert.deepEqual(
      diff(Object.keys(baseConfig.rules), Object.keys(config.rules)),
      []
    );
  },

  'prettier config turns a bunch of rules off': () => {
    const config = makeLinter('./prettier.js').getConfigForFile(
      './prettier.js'
    );
    const baseConfig = makeLinter('./index.js').getConfigForFile('./index.js');

    const getDisabledRules = rules =>
      Object.keys(rules).reduce((acc, rule) => {
        if (rules[rule] === 'off') {
          return acc.concat(rule);
        }
        return acc;
      }, []);

    assert.ok(
      getDisabledRules(config.rules).length >
        getDisabledRules(baseConfig.rules).length
    );
  },
};
