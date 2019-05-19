<template>
<div role="tooltip" id="fa-tooltip-2171" aria-hidden="true" class="fa-tooltip__popper is-dark" style="transform-origin: center bottom; z-index: 2015; display: none;">
    {{content}}
    <div x-arrow="" class="popper__arrow" style="left: 66px;"></div>
</div>
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
