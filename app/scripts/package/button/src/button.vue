<template>
<a href="javaScript:;" :style='{"height":height+"px","line-height":height+"px","width":width+"px"}' @click.stop='eventClick()' :class="className">
    <i :class="icon" v-if="left"></i>
    <slot></slot>
    <i :class="icon" v-if="right"></i>
</a>
</template>
<script>
export default {
    name: 'faButton',
    data(){
        return {
            className:""
        }
    },
    props:{
        icon:String,
        height:{
            type:Number,
            default:32
        },
        width:{
            type:Number,
            default:80
        },
        left:{
           type:Boolean,
           default:true, 
        },
        right:{
            type:Boolean,
            default:false, 
        },
        type:{
            type:String,
            default:'own'
        },
        plain:{
           type:Boolean,
           default:false 
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    watch:{
        left(){
            this.left?this.right=false:this.right=true;
        },
        right(){
            this.right?this.left=false:this.left=true;
        },
        type(){
            this.buttonType();
        },
        plain(){
            this.buttonType();
        }
    },
    mounted(){
      this.buttonType();  
    },
    methods: {
        //绑定点击事件
        eventClick(){
            if(this.disabled){
                return;
            }
            this.$emit('click',{});
        },
        buttonType(){
            if(this.type==='primary'){
                this.className='fa-button-primary';
                if(this.plain){
                    this.className+=' is-plain-primary';
                }
            }else if(this.type==='success'){
                this.className='fa-button-success';
                 if(this.plain){
                    this.className+=' is-plain-success';
                }
            }else if(this.type==='info'){
                this.className='fa-button-info';
                if(this.plain){
                    this.className+=' is-plain-info';
                }
            }else if(this.type==='warning'){
                this.className='fa-button-warning';
                if(this.plain){
                    this.className+=' is-plain-warning';
                }
            }else if(this.type==='danger'){
                this.className='fa-button-danger';
                if(this.plain){
                    this.className+=' is-plain-danger';
                }
            }else if(this.type==='own'){
                this.className='fa-button-own';
                if(this.plain){
                    this.className+=' is-plain-own';
                }
            }
            if(this.disabled){
                this.className='fa-button-disabled'
            }
        }
    }
}
</script>