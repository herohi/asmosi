module.exports = {
    extends: [require.resolve('./base')],
    overrides: [
        {
            files: ['*.ts'],
            extends: [require.resolve('./typescript')]
        },
        {
            files: ['*.tsx'],
            extends: [require.resolve('./react'), require.resolve('./typescript')]
        },
        {
            files: ['*.vue'],
            extends: [require.resolve('./vue')]
        },
    ],
};
