module.exports = {
    runtimeCompiler: true,
    publicPath: './',
    lintOnSave: false,
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
    transpileDependencies: ['vuetify'],
};
