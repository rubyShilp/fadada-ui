'use strict'
import { showError } from './core';
import router from './../routers/router';
import './../store/store';

//判断输入的不能为空
export let isNull = (val) => {
    return val === '';
}

//判断手机号
export let isMobile = (val) => {
    return /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[6]{1})|(19[9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(val);
}

//判断邮箱
export let isEmail = (val) => {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val);
}

//判断是否为邮箱或者手机号
export let isMobileOrEmail = (val) => {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val) || /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[6]{1})|(19[9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(val);
}

//由字母、数字组合
export let isCombination = (val) => {
    return /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i.test(val);
}