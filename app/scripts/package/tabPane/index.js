import faTabPane from './src/tabPane.vue';

/* istanbul ignore next */
faTabPane.install = function(Vue) {
  Vue.component(faTabPane.name, faTabPane);
};

export default faTabPane;
