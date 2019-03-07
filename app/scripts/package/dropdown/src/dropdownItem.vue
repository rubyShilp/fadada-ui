<template>
   <li @click.stop="selectItem()">
       <slot></slot>
   </li> 
</template>
<script>
import Emitter from './../../mixins/emitter.js';
export default {
    name:'faDropdownItem',
    componentName: 'faDropdownItem',
    inject:['faDropdown'],
    mixins:[Emitter],
    methods:{
        //选择当前数据
        selectItem(){
           this.dispatch('faDropdownMenu','visible',{visible:false,clientY:0});
           this.$emit('click',{});
        }
    }
}
</script>
