<template>
<div class="fa-dropdown" @mousemove="mouseMove()" @mouseout="mouseOut()">
    <span class="fa-dropdown-link" @click="triggerClick()">
        <slot></slot>
    </span>
    <slot name="dropdown"></slot>
</div>   
</template>
<script>
import Emitter from './../../mixins/emitter.js';
export default {
    name:'faDropdown',
    mixins:[Emitter],
    props:{
        //激活类型
        trigger:{
            type:String,
            default:'hover'
        },
    },
    methods:{
        //鼠标悬浮
        mouseMove(){
            if(this.trigger==='hover'){
                this.broadcast('faDropdownMenu','visible',{visible:true,clientY:window.event.clientY});
            }
        },
        //鼠标离开
        mouseOut(){
            if(this.trigger==='hover'){
                this.broadcast('faDropdownMenu','visible',{visible:false,clientY:window.event.clientY});
            }
        },
        //鼠标点击才激活当前下拉框
        triggerClick(){
            if(this.trigger==='click'){
                this.broadcast('faDropdownMenu','visible',{visible:true,clientY:window.event.clientY});
            }
        },
        //关闭下拉框
        triggerClose(){
            const e = document.all ? window.event : arguments[0] ? arguments[0] : event;
            if(!this.$el.contains(e.target)){
                this.broadcast('faDropdownMenu','visible',{visible:false,clientY:window.event.clientY});
            }
        }
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('click', this.triggerClose);
        })
    },
    beforeDestroy () {
        window.removeEventListener('click', this.triggerClose);
    }
}
</script>
