<template>
    <ul class="fa-dropdown-menu" :class="{'jt-bottom':isVisible}" v-if="showPopper">
        <slot></slot>
    </ul>
</template>
<script>
import Popper from './../../utils/vue-popper.js';
export default {
    name:'faDropdownMenu',
    componentName: 'faDropdownMenu',
    mixins:[Popper],
    inject: ['dropdown'],
    data(){
        return{
            showPopper:false,
            clientY:0,
            isVisible:false,
        }
    },
    created() {
        this.$on('visible', val => {
            this.$nextTick(()=>{
                this.showPopper = val.visible;
                this.clientY=val.clientY;
                if(this.showPopper){
                   this.$nextTick(()=>{
                        this.updatePopper();
                   })
                }
            })
        });
    },
    methods:{
        updatePopper(){
            let documentHeight=Math.max(this.$el.scrollTop,this.$el.offsetTop,this.$el.scrollHeight,this.$el.offsetHeight,this.$el.clientHeight);
            if(documentHeight){
                //计算当前出现的窗口高度
                let height=documentHeight+this.clientY;
                //窗口可视区域
                let elementHeight=document.documentElement.clientHeight;
                if((height)>elementHeight){
                    this.$el.style.top='-'+documentHeight+'px';
                    this.isVisible=true;
                }else{
                    this.isVisible=false;
                    this.$el.style.top='';
                }
            }
        }
    }
}
</script>
