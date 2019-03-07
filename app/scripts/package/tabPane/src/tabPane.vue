<template>
<div class="tab-pane">
    <slot></slot>
</div>
</template>
<script>
export default {
    name:'faTabPane',
    data(){
        return{
            index:0,
        }
    },
    props:{
        label:{
            type:String,
            default:''
        }
    }
}
</script>
