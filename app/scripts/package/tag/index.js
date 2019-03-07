import faTag from './src/tag.vue';

/* istanbul ignore next */
faTag.install = function(Vue) {
  Vue.component(faTag.name, faTag);
};

export default faTag;
