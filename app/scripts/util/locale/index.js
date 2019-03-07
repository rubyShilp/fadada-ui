import Vue from 'vue';
import vueI18n from 'vue-i18n';
import zhLocale from './zh.js';
import enLocale from './en.js';
Vue.use(vueI18n);
const i18n=new vueI18n({
    locale:'zh',
    messages:{
        en:{
            ...enLocale
        },
        zh:{
            ...zhLocale
           
        }
    }
})
export default i18n