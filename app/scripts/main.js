import Vue from 'vue';
import App from './components/app.vue';
import store from './store/store';
import router from './routers/router';
import faUI from './package/index.js';
import i18n from './util/locale/index.js';
Vue.use(faUI);
new Vue({
    i18n,
    store: store,
    router: router,
    render: h => h(App)
}).$mount("#app")