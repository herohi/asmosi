module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        requireConfigFile: false
    },
    env: {
        es6: true,
        commonjs: true
    },
    extends: ['eslint:recommended', 'google', 'plugin:prettier/recommended'],
    plugins: ['lean-imports'],
    rules: {
        radix: 0,
        complexity: 0,
        curly: [2, 'all'],
        eqeqeq: [2, 'smart'],
        camelcase: [2, { allow: ['^UNSAFE_'] }],
        'arrow-parens': [2, 'as-needed'],
        'no-unused-vars': [2, {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
        }],
        'no-var': 2,
        'id-match': 2,
        'no-console': 2,
        'no-debugger': 2,
        'valid-jsdoc': 0,
        'import/order': 0,
        'dot-notation': 2,
        'guard-for-in': 2,
        'id-blacklist': 2,
        'prefer-const': 2,
        'require-jsdoc': 0,
        'spaced-comment': 2,
        'no-fallthrough': 0,
        'no-invalid-this': 0,
        'no-await-in-loop': 0,
        'object-shorthand': 2,
        'no-throw-literal': 2,
        'max-classes-per-file': 0,
        'no-unused-expressions': 0,
        'no-irregular-whitespace': 0,
        'prefer-promise-reject-errors': 0,
    },
};
