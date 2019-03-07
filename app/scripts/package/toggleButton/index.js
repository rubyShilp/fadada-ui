import ToggleButton from './src/toggleButton.vue';

ToggleButton.install = function(Vue) {
    Vue.component(ToggleButton.name, ToggleButton);
  };
  
  export default ToggleButton;