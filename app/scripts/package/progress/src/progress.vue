<template>
<div class="fa-progress fa-progress--line" :style="{'width':lineWidth+'px'}">
    <div class="fa-progress-bar">
        <div class="fa-progress-bar__outer" :style="{'height':strokeWidth+'px'}">
            <div class="fa-progress-bar__inner" :style="{'width':percentage+'%','background-color':color}">
                <div class="fa-progress-bar__innerText" v-if="showText && !textInside">
                    {{percentage}}%
                </div>
            </div>
        </div>
    </div>
    <div class="fa-progress__text" v-if="!showText && textInside">
        <span v-if="status===''">{{percentage}}%</span>
        <i class="fa-icon-circle-check" style="color:#67c23a" v-if="status==='success'"></i>
        <i class="fa-icon-circle-close" style="color:#f56c6c" v-if="status==='exception'"></i>
    </div>
</div>
</template>
<script>
export default {
    name:'faProgress',
    props:{
        //盒子宽度
        lineWidth:{
            type:Number,
            default:360
        },
        //进度条百分比
        percentage:{
            type:Number,
            default:0
        },
        //进度条类型
        type:{
            type:String,
            default:'line'
        },
        //进度条文字显示(只在type='line'使用)
        textInside:{
            type:Number,
            default:true
        },
        //进度条宽度
        strokeWidth:{
            type:Number,
            default:6
        },
        //进度条当前状态
        status:{
            type:String,
            default:''
        },
        //进度条背景色
        color:{
            type:String,
            default:'#409eff'
        },
        //环形进度条画布宽度(只在type='circle'时使用)
        width:{
            type:Number,
            default:126
        },
        //是否显示进度条文字内容
        showText:{
            type:Number,
            default:false
        }
    }
}
</script>
