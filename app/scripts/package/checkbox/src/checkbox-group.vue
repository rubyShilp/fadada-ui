<script>
  import Emitter from './../../mixins/emitter.js';

  export default {
    name: 'faCheckboxGroup',

    componentName: 'faCheckboxGroup',

    mixins: [Emitter],

    inject: {
      faFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _faFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._faFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('faFormItem', 'fa.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="fa-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
