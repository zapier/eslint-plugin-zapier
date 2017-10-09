module.exports = {
  'plugins': [
    'jsx-a11y',
  ],

  'rules': {
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': ['error',
      {
        'handlers': [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'error',
  },
};
