import Vue from 'vue';
import App from './components/app.vue';
import store from './store/store';
import router from './routers/router';
import faUI from './package/index.js';
//import faUI from './../../lib/index.js';
//import './../../lib/main-blue.css';
import i18n from './util/locale/index.js';
import * as three from 'three';
Vue.use(faUI);
//Vue.use(faTooltip);
// Vue.use(faTableColumn);    
Vue.prototype.three=three
new Vue({
    i18n,
    store: store,
    router: router,
    render: h => h(App)
}).$mount("#app")