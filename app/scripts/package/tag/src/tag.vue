<template>
  <transition :name="disableTransitions ? '' : 'fa-zoom-in-center'">
    <span
      class="fa-tag"
      :class="[
        type ? 'fa-tag--' + type : '',
        tagSize && `fa-tag--${tagSize}`,
        {'is-hit': hit}
      ]"
      :style="{backgroundColor: color}">
      <slot></slot>
      <i class="fa-tag__close fa-icon-close"
        v-if="closable"
        @click.stop="handleClose"></i>
    </span>
  </transition>
</template>
<script>
  export default {
    name: 'faTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    }
  };
</script>
