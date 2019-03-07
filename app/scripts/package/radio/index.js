import Radio from './src/radio.vue';

/* istanbul ignore next */
Radio.install = function(Vue) {
  Vue.component('fa-radio', Radio);
};

export default Radio;
