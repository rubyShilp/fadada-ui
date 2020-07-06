import Vue from 'vue';
import Vuex from 'vuex';
import modules from './../modules/modules.js';
Vue.use(Vuex);
const state = {
   url:'/home',
   columns:[],
};
const mutations = {
    //路由跳转之前保存路由地址
    ROUTING_ASSIGN(state, url) {
        state.url = url;
    },
    insertColumn(state,value){
        state.columns.push(value);
    }
}
const store = new Vuex.Store({
    state:state,
    mutations:mutations,
    modules: modules
})
export default store