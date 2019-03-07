import faTable from './src/table.vue';
/* istanbul ignore next */
faTable.install = function(Vue) {
  Vue.component(faTable.name, faTable);
};

export default faTable;
