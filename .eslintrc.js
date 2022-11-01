module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/display-name' : 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-unescaped-entities': 'off',
    'no-promise-executor-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/await-thenable': 'off',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'react/no-array-index-key': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/state-in-constructor': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'curly':'off'
  }
};
