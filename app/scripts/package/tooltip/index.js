import faTooltip from './src/tooltip.vue';
/* istanbul ignore next */
faTooltip.install = function(Vue) {
  Vue.component(faTooltip.name, faTooltip);
};

export default faTooltip;
