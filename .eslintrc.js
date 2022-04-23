module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': 'off',
    indent: 'off',
    'no-tabs': 'off',
    'react/jsx-indent': 'off',
    'space-before-blocks': 'off',
    'react/no-array-index-key': 'off',
    'array-bracket-spacing': 'off',
    'max-len': 'off',
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'off',
    'react/self-closing-comp': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-indent-props': 'off',
    'arrow-body-style': 'off'
  },
};
