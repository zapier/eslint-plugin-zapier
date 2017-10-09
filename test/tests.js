// modules ---------------------------------------------------------------------

// node
const assert = require('assert');

// npm
const diff = require('lodash.difference');
const eslint = require('eslint');

// setup -----------------------------------------------------------------------

const eslintRules = Object.keys(eslint.linter.defaults().rules);
const makeLinter = (config = 'base') =>
  new eslint.CLIEngine({
    useEslintrc: false,
    configFile: `./config/${config}.js`,
  });

// cases -----------------------------------------------------------------------

exports['eslint-plugin-zapier'] = {
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

  'loads custom zapier rules': () => {
    const linter = makeLinter();
    const config = linter.getConfigForFile('foo.js');

    const customRules = Object.keys(config.rules).filter(rule =>
      rule.startsWith('zapier/')
    );

    assert.ok(customRules.length > 0);
  },

  'config does not throw': () => {
    const linter = makeLinter();

    assert.doesNotThrow(() => linter.executeOnText(''));
  },

  'exposes a prettier config': () => {
    const linter = makeLinter('prettier');
    const config = linter.getConfigForFile('foo.js');

    assert.ok(Object.keys(config.rules).length > 0);
  },

  'prettier config contains base config': () => {
    const config = makeLinter('prettier').getConfigForFile('foo.js');
    const baseConfig = makeLinter('base').getConfigForFile('foo.js');

    assert.deepEqual(
      diff(Object.keys(baseConfig.rules), Object.keys(config.rules)),
      []
    );
  },

  'prettier config turns a bunch of rules off': () => {
    const config = makeLinter('prettier').getConfigForFile('./foo.js');
    const baseConfig = makeLinter('base').getConfigForFile('./foo.js');

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
