module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['to', 'theme', 'data-testid', 'size'],
    }],
    'max-len': ['error', {
      ignoreComments: true,
      code: 100,
    }],
  },
  globals: {
    __IS_DEV__: true,
    VoidFunction: true,
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
  // settings: {
  //   react: { verbose: 'detect' },
  // },
};
