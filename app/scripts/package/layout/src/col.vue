<template>
<div :class="'fa-col-'+span">
    <slot></slot>
</div>
</template>
<script>
export default {
    name:'fa-col',
    props:{
        span:{
            type:Number,
            default:24
        }
    }
}
</script>
