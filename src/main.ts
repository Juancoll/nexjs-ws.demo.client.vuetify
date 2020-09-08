import '@/assets/style/index.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import Notifications from 'vue-notification'

Vue.use( Notifications )

Vue.config.productionTip = false

new Vue( {
    router,
    store,
    i18n,
    vuetify,
    render: ( h ): any => h( App ),
} ).$mount( '#app' )
