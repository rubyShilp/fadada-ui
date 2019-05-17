import faPopover from './src/main';
import directive from './src/directive';
import Vue from 'vue';

Vue.directive('popover', directive);

/* istanbul ignore next */
faPopover.install = function(Vue) {
  Vue.directive('popover', directive);
  Vue.component(faPopover.name, faPopover);
};
faPopover.directive = directive;

export default faPopover;
