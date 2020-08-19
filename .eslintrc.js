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
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true, // Allow `const { props, state } = this`; false by default
                allowedNames: ['self'], // Allow `const self = this`; `[]` by default
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': [
            'error',
            { allowArgumentsExplicitlyTypedAsAny: true },
        ],
    },
};
