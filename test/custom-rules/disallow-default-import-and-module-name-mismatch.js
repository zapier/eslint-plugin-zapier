'use strict';

const rule = require('../../custom-rules/disallow-default-import-and-module-name-mismatch');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  }
});

const errors = (importName, moduleName) => [
  {
    message:
      `Default import "${importName}" should be the same as the module name "${moduleName}".`
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
      errors: errors('Foo', 'Bar'),
    },
    {
      code: 'import Foo, { Bar } from "app/Baz";',
      errors: errors('Foo', 'Baz'),
    },
  ],
});
