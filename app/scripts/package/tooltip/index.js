import faTooltip from './src/main';
/* istanbul ignore next */
faTooltip.install = function(Vue) {
  Vue.component(faTooltip.name, faTooltip);
};

export default faTooltip;
