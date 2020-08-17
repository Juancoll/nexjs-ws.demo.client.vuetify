import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#ed1e79',
                secondary: '#6348B5',
                accent: '#6348B5',
                error: colors.deepOrange.base,
                warning: colors.orange.base,
                info: colors.blue.base,
                success: colors.green.base,
            },
            dark: {
                primary: '#ed1e79',
                secondary: '#6348B5',
                accent: '#6348B5',
                error: colors.red.base,
                warning: colors.yellow.base,
                info: colors.blue.base,
                success: colors.green.base,
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
