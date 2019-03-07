<template>
<div class="fa-example">
    <div class="card-tabs-bar" :class="className">
        <a href="javaScript:;" v-for="(lable,index) of labels" :key="lable" :class="{'active':labelIndex===index}" @click="selectIndex(index)">{{lable}}</a>
    </div>
    <slot></slot>
</div>
</template>
<script>
import Emitter from './../../mixins/emitter.js';
export default {
    mixins:[Emitter],
    data(){
        return{
            labels:new Array(),
            childrens:new Array(),
            labelIndex:0,
            className:'',
        }
    },
    props:{
        typeColor:{
            type:String,
            default:'blue'
        }
    },
    mounted(){
        this.getLabels();
        if(this.typeColor==='yellow'){
            this.className='fa-color-tab';
        }
    },
    methods:{
        //获取节点label的值
        getLabels(){
            for(let i=0;i<this.$slots.default.length;i++){
                if(this.$slots.default[i].elm.nodeType !== 3){
                    this.labels.push(this.$slots.default[i].componentOptions.propsData.label);
                    this.$slots.default[i].elm.style='display:none';
                    this.childrens.push(this.$slots.default[i]);
                }
            }
            this.selectIndex(this.labelIndex);
        },
        //选择节点
        selectIndex(index){
            this.labelIndex=index;
            for(let i=0;i<this.childrens.length;i++){
                if(i===index){
                    this.childrens[i].elm.style='display:block';
                }else{
                    this.childrens[i].elm.style='display:none';
                }
            }
            this.$emit('selectClick',{value:this.labels[index]});
        }
    }
}
</script>
