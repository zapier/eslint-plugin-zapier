module.exports = {
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },

  'plugins': [
    'react',
  ],

  'rules': {
    'react/forbid-foreign-prop-types': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
  },
};
