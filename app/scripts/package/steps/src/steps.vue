<template>
<div>
    <ul class="steps">
        <slot></slot>
    </ul>
</div>
</template>
<script>
export default {
    name:'fa-steps',
    data(){
        return{
            steps:[],
        }
    },
    props:{
        //每个step的间距
        space:{
            type:Number,
            default:6
        },
        /**
         * 显示方向
         * @param vertical：向下
         * @param horizontal:向右
         *  */
        direction:{
            type:String,
            default:"horizontal"
        },
        //是否居中对齐
        alignCenter:{
            type:Boolean,
            default:true
        },
        //设置当前激活步骤
        active:{
            type:Number,
            default:0
        },
        finishStatus: {
            type: String,
            default: 'finish'
        },
        processStatus: {
            type: String,
            default: 'process'
        },
        //步骤条宽度
        width:{
            type: String,
            default: '10%'  
        },
        //步骤条高度
        height:{
            type: String,
            default: '10%'  
        },
    },
    watch:{
        active(newVal, oldVal){
            this.$emit('change', newVal, oldVal);
        },
        steps(steps){
            steps.forEach((child, index) => {
                child.index = index;
            });
        }
    }
}
</script>
