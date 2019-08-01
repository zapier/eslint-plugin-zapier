'use strict';

const rule = require('../../custom-rules/disallow-regexp-lookbehind');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

const errors = [
  {
    message:
      'Lookbehind assertion found. Please do not use lookbehinds in RegExp as they are not widely supported.',
  },
];

ruleTester.run('disallow-regexp-lookbehind', rule, {
  valid: [
    { code: 'const a = /.?<!/g' },
  ],

  invalid: [
    {
      code: 'const a = /(?<!https?:)/g',
      errors,
    },
  ],
});
