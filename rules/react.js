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
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-uses-react': 2,
    'react/forbid-foreign-prop-types': 2,
  },
};
