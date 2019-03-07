<template>
<span class="fddv4-txt-word" v-if="content">
    <span class="fddv4-txt-omitted">{{content}}</span>
    <div class="fddv4-txt-strong" :class="{'jt-bottom':rowIndex!==0}">{{content}}</div>
</span>
</template>
<script>
export default {
    name:'faTooltip',
    data(){
        return{

        }
    },
    props:{
        //显示的文字
        content:{
            type:String,
            default:''
        },
        //显示toolTip位置
        tooltipEffect:{
            type:String,
            default:''
        },
        rowIndex:{
            type:Number,
            default:-1
        }
    },
    methods:{
        
    }
}
</script>
