const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    google: true,
    NodeJS: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          [
            '~',
            './src',
          ],
        ],
        extensions: [
          '.tsx',
          '.ts',
        ],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'import/extensions': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 100, tabWidth: 2 }],
    'react/react-in-jsx-scope': 'off',
  },
}

module.exports = config
