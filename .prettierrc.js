'use strict';

module.exports = {
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
      },
    },
    {
      files: ['.ember-cli'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
