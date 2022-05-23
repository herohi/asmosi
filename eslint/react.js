module.exports = {
    env: {
        browser: true
    },
    extends: [
        'plugin:react/recommended',
        'prettier',
        'plugin:react/jsx-runtime'
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/no-deprecated': 0,
        'react-hooks/exhaustive-deps': 0,
        'react/jsx-uses-vars': 2,
        'react-hooks/rules-of-hooks': 2,
        'react/prop-types': [2, { ignore: ['children'] }]
    },
    settings: {
        react: {
            version: '999.999.999'
        }
    }
};
