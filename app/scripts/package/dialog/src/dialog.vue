<template>
    <div class="fixed-pop-bg" v-if="visible">
        <div class="com-pop" :style="{'width':width+'px','height':height+'px'}">
            <div class="fixed-pop-tit">{{title}}</div>
            <a href="javascript:;" class="close-icon" v-if="isClose" @click="close()"><i class="fa-icon-close"></i></a>
            <fa-scrollbar class="com-pop-text" :style="{'height':(height-64)+'px','min-height':'300px','max-height':'500px'}">
                <slot></slot>
                <div class="fa-dialog-footer">
                    <slot name='footer'></slot>
                </div>
            </fa-scrollbar>
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
