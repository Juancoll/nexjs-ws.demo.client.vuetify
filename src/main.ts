import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import * as RouterMenuItem from '@/components/RouterMenuItem.vue';

// Register recursive component as global (for production mode)
Vue.component('RouterMenuItem', RouterMenuItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
