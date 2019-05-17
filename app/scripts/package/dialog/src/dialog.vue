<template>
    <div class="fixed-pop-bg" v-if="visible">
        <div class="com-pop" :style="{'width':width+'px','height':height+'px'}">
            <div class="fixed-pop-tit">{{title}}</div>
            <a href="javascript:;" class="close-icon" v-if="isClose" @click="close()"><i class="fa-icon-close"></i></a>
            <div class="com-pop-text">
                <slot></slot>
                <div class="fa-dialog-footer">
                    <slot name='footer'></slot>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    props:{
        title:String,//标题
        visible:Boolean,//是否显示弹出框
        //弹出框的宽度
        width:{
            type:Number,
            default:400
        },
        //弹出框的高度
        height:{
            type:Number,
            default:400
        },
        isClose:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        //关闭弹出框
        close(){
           this.$emit('beforeClose',this.visible);
        }
    }
}
</script>
