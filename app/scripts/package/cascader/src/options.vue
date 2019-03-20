<template>
    <span>
        <div class="options_item">
            <fa-scrollbar class="fa-cascader-menu" style="position: relative;" :style="{'height':height+'px'}">
                <!-- <p @click="selectOptions('all','')" v-if="options.length>0"><fa-checkbox v-model="checked">全部</fa-checkbox></p>
                <p v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)">
                   <fa-checkbox v-if="!item.children && showChecked" v-model="item.checked">{{item.label}}</fa-checkbox><em v-if="item.children || !showChecked">{{item.label}}</em><i class="fa-icon-arrow-right" v-if="item.children"></i>
                </p> -->
                <ul>
                    <li v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)">
                        <a href="javaScript:;">{{item.label}}</a>
                        <i class="fa-icon-arrow-right" v-if="item.children"></i>
                    </li>
                </ul>
            </fa-scrollbar>
            <div class="options_btn">
                <fa-button :className='className' width='60' @click="confirm()">确认</fa-button>
                <fa-button :className='classCancel' width='60' @click="cancel()">取消</fa-button>
            </div>
        </div>  
        <fa-options :options='options[index].children' v-if="index>=0 && options[index].children"></fa-options>
    </span>
</template>
<script>
import Emitter from './../../mixins/emitter.js';
export default {
    name:'faOptions',
    mixins:[Emitter],
    data(){
        return{
            index:-1,//下标判断显示不同的列表数据
            selectList:Array(),
            checked:false,
            height:160,
            radioChecked:null
        }
    },
    props:{
        options:Array,
        showChecked:false,
        className:{
            type:String,
            default:'fa_regin_btn'
        },
        classCancel:{
            type:String,
            default:'fa_regin_btn_gray'
        },
        checkRadio:{
            type:Boolean,
            default:false
        }
    },
    beforeMount(){
        this.selectAll();
    },
    watch:{
        options(){
           this.selectAll(); 
        }
    },
    methods:{
        //根据数据判断是否选中全选
        selectAll(){
            let checked=false;
            if(this.checkRadio){
                for(let i=0;i<this.options.length;i++){
                    if(this.options[i].checked){
                        if(this.checkRadio){
                            this.$set(this,'radioChecked',this.options[i].label);
                        }
                    }
                }

            }else{
                for(let i=0;i<this.options.length;i++){
                    if(this.options[i].checked){
                        checked=true;
                    }else{
                        checked=false;
                        break;
                    }
                }
            }
            
            if(checked){
                this.checked=true;
            }else{
                this.checked=false;
            }
        },
        //选择菜单项
        selectOptions(index,item){
            this.index=index;
        },
        //确认选择
        confirm(){
            this.selectList=new Array();
            if(this.checkRadio){
                for(let i=0;i<this.options.length;i++){
                    if(this.options[i].label===this.radioChecked){
                        this.options[i].checked=true;
                        this.selectList.push(this.options[i]);
                    }else{
                        this.options[i].checked=false;
                    }
                }
            }else{
                for(let i=0;i<this.options.length;i++){
                    if(this.options[i].checked){
                        this.selectList.push(this.options[i])
                    }
                }
            }           
            setTimeout(()=>{
                this.dispatch('faCascader','handleOptionClick',{showOptions:false,list:JSON.stringify(this.selectList)});
            },100);
        },
        //取消
        cancel(){
            this.dispatch('faCascader','handleOptionClick',{showOptions:false,list:JSON.stringify([])});
        }
    }
}
</script>
