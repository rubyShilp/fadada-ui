<template>
<div class="fa-row">
    <slot></slot>
</div>   
</template>
<script>
export default {
    name:'fa-row',
    props:{
        class:{
            type:String,
            default:''
        }
    }
}
</script>
