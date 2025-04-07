module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'unused-imports',
    'import',
    'prettier',
    'react',
    '@typescript-eslint',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/display-name': 'off',

    /* CUSTOM */
    // This is where you can disable/customize some of the rules specified by the plugins
    // suppress errors for missing 'import React' in files
    'react/prop-types': ['warn', { ignore: ['children'] }],
    'react/react-in-jsx-scope': 'off',
    //should add ".ts" if typescript project
    'react/no-unescaped-entities': [
      'warn',
      {
        forbid: ['>', '}'],
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    eqeqeq: ['warn', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports-ts': 2,
    '@typescript-eslint/ban-ts-comment': 0,

    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
