import faTips from './src/tips.vue';

/* istanbul ignore next */
faTips.install = function(Vue) {
  Vue.component(faTips.name, faTips);
};

export default faTips;
