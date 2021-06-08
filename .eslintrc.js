module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-uses-react': 0,
    // Need to add additional config in eslint to fix conflict with vscode prettier
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
