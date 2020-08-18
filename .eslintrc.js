module.exports = {
    plugins: ['prettier'],
    extends: [
        'plugin:prettier/recommended',
        'plugin:vue/essential',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'all',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                endOfLine: 'auto',
            },
        ],
    },
};
