module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },

  'plugins': [
    'react',
    'react-hooks'
  ],

  'rules': {
    'react/forbid-foreign-prop-types': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-no-undef': 'error',
    'react/jsx-sort-props': ['error', { 'ignoreCase': true }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
};
