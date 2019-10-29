<template>
<div role="tooltip" class="fdd-text-tips">
    <span class="text-hide">
        {{content}}
    </span> 
    <div class="fdd-text-word">
        {{content}}
    </div>
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
<style lang="less" scoped>
.fdd-text-tips{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  line-height: 1;
  .use-question{
    font-size: 12px;
    color: #2784F9;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
    &+ .fdd-text-word{
      top:14px;
    }
  }
  &:hover{
    .fdd-text-word{
      display: inline-block;
    }
  }
  .fdd-text-mornal{
    width: 95%;
    display: inline-block;
    vertical-align: middle;
    .text-hide;
  }
    .text-hide{
        text-overflow: ellipsis;
        overflow: hidden;
        display:block;
        vertical-align: middle;
        white-space: nowrap;
    }
  .fdd-text-word{
    position: absolute;
    background: rgba(42, 43, 44, .8);
    border-radius:4px;
    color: white;
    min-width: 145px;
    max-width: 300px;
    width: 200%;
    word-wrap:break-word;
    padding: 8px;
    line-height: 16px;
    font-size: 12px;
    left: -8px;
    display: none;
    z-index: 5;
    margin-top: 5px;
    box-shadow: 0 1px 5px rgba(0,0,0,.32);
    &:after{
      content: '';
      position: absolute;
      top: -5px;
      left: 10px;
      border: 5px solid transparent;
      border-bottom-color: rgba(42, 43, 44, .8);
      border-top: 0;
    }
    .fdd-text-word-title{
      margin-top: 8px;
      display: block;
      &:first-child{
        margin-top: 3px;
      }
    }
  }
}
</style>
