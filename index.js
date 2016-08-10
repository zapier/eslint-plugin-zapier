module.exports = {

  'parser': 'babel-eslint',

  'env': {
    'node': true,
    'browser': true,
  },

  'globals': {
    'escape': true,
    'unescape': true,
  },

  'plugins': [
    'react',
  ],

  'rules': {

    // -----------------------------------------------------------------------------
    // ESLINT:RECOMMENDED OVERRIDES
    // -----------------------------------------------------------------------------

    // possible errors -------------------------------------------------------------

    'comma-dangle': 0,

    // stylistic issues ------------------------------------------------------------

    'no-mixed-spaces-and-tabs': [2, false],

    // -----------------------------------------------------------------------------
    // ESLINT RULES
    // -----------------------------------------------------------------------------

    // possible errors -------------------------------------------------------------

    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 0,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,

    // best practices --------------------------------------------------------------

    'consistent-return': 2,
    'curly': [2, 'all'],
    'dot-notation': [2, { 'allowKeywords': true }],
    'eqeqeq': [2, 'smart'],
    'no-alert': 2,
    'no-caller': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-unused-expressions': 2,
    'no-with': 2,
    'yoda': [2, 'never'],

    // variables -------------------------------------------------------------------

    'no-label-var': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-use-before-define': 2,

    // nodejs ----------------------------------------------------------------------

    'no-process-exit': 2,

    // stylistic issues ------------------------------------------------------------

    'comma-spacing': 2,
    'eol-last': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'jsx-quotes': 2,
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 2,
    'new-cap': 0,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': 2,
    'semi-spacing': [2, {'before': false, 'after': true}],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],

    // -----------------------------------------------------------------------------
    // PLUGINS
    // -----------------------------------------------------------------------------

    // react plugin ----------------------------------------------------------------

    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-uses-react': 2,

  }
};
