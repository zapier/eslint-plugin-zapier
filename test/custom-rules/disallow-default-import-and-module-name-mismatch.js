'use strict';

const rule = require('../../custom-rules/disallow-default-import-and-module-name-mismatch');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  }
});

const errors = [
  {
    message:
      'Default import identifier should be the same as the module name.',
  },
];

ruleTester.run('disallow-default-import-and-module-name-mismatch', rule, {
  valid: [
    { code: 'import Foo from "app/Foo";' },
    { code: 'import Foo, { FooBar } from "app/Foo";' },
    { code: 'import Foo from "bar/Baz";' },
    { code: 'import { Foo, Bar } from "app/FooBar";' },
  ],

  invalid: [
    {
      code: 'import Foo from "app/Bar";',
      errors,
    },
    {
      code: 'import Foo, { Bar } from "app/Baz";',
      errors,
    },
  ],
});
