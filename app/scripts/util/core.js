import axios from 'axios';
import qs from 'qs';
import router from './../routers/router';
import store from './../store/store';
//错误提示
export function showError(msg) {
    store.dispatch('errorContext', msg);
}