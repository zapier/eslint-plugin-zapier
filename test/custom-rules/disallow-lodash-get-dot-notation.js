'use strict';

const rule = require('../../custom-rules/disallow-lodash-get-dot-notation');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('disallow-lodash-get-dot-notation', rule, {
  valid: [
    { code: '_.get(state, ["foo", "bar", "baz"]);' },
    { code: '_.get(state, "foo");' },
    { code: '_.get(state, stuff);' },
  ],

  invalid: [
    {
      code: '_.get(state, "foo.bar.baz");',
      output: '_.get(state, ["foo","bar","baz"]);',
      errors: [
        {
          message:
            'Dot notation used in second argument of `_.get`. Use array notation instead.',
        },
      ],
    },
  ],
});
