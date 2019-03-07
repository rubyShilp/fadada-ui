<template>
  <div class="fa-card">
    <div class="fa-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="fa-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'faCard',

    props: ['header', 'bodyStyle']
  };
</script>
