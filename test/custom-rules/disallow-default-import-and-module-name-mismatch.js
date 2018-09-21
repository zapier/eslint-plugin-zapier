'use strict';

const rule = require('../../custom-rules/disallow-default-import-and-module-name-mismatch');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  }
});

const errors = (importName, importVariants) => [
  {
    message:
      `Default import "${importName}" should be one of the following values: "${importVariants}".`
  },
];

ruleTester.run('disallow-default-import-and-module-name-mismatch', rule, {
  valid: [
    { code: 'import Foo from "app/module/Foo";' },
    { code: 'import Foo, { FooBar } from "app/module/Foo";' },
    { code: 'import Foo from "bar/Baz";' },
    { code: 'import { Foo, Bar } from "app/module/FooBar";' },
    { code: 'import FooBar from "app/module/components/Foo/Bar";' },
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
    {
      code: 'import Foo from "app/module/components/Foo/Bar";',
      errors: errors('Foo', 'Bar, FooBar'),
    },
  ],
});
