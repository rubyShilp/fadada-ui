import faTableColumn from './../table/src/table-column.js';

/* istanbul ignore next */
faTableColumn.install = function(Vue) {
  Vue.component(faTableColumn.name, faTableColumn);
};

export default faTableColumn;
