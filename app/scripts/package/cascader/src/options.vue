<template>
    <span>
        <div class="options_item" v-if="!checkRadio">
            <fa-scrollbar class="fa-cascader-menu" style="position: relative;">
                <p @click="selectOptions('all','')" v-if="options.length>0"><fa-checkbox v-model="checked">全部</fa-checkbox></p>
                <p v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)">
                   <fa-checkbox v-if="!item.children && showChecked" v-model="item.checked">{{item.label}}</fa-checkbox><em v-if="item.children || !showChecked">{{item.label}}</em><i class="fa-icon-arrow-right" v-if="item.children"></i>
                </p>
            </fa-scrollbar>
            <div class="options_btn" v-if="options.length>0">
                <fa-button :className='className' width='60' @click="confirm()">确认</fa-button>
                <fa-button :className='classCancel' width='60' @click="cancel()">取消</fa-button>
            </div>
        </div>  
        <div class="options_item" v-if="checkRadio">
            <fa-scrollbar class="fa-cascader-menu" style="position: relative;">
                <p v-for="(item,index) of options" :key="index">
                    <fa-radio v-if="!item.children && showChecked" v-model="radioChecked" :label="item.label">{{item.label}}</fa-radio><em v-if="item.children || !showChecked">{{item.label}}</em><i class="fa-icon-arrow-right" v-if="item.children"></i>
                </p>
            </fa-scrollbar>
            <div class="options_btn" v-if="options.length>0">
                <fa-button :className='className' width='60' @click="confirm()">确认</fa-button>
                <fa-button :className='classCancel' width='60' @click="cancel()">取消</fa-button>
            </div>
        </div>
        <!-- <fa-options :options='options[index].children' :showChecked='showChecked' v-if="index>=0 && options[index].children"></fa-options> -->
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
            this.$nextTick(()=>{
                if(index==='all'){
                    this.checked=!this.checked;
                    if(this.checked){
                        for(let i=0;i<this.options.length;i++){
                            this.options[i].checked=true;
                            this.$set(this.options,i,this.options[i]);
                        }
                    }else if(!this.checked){
                        for(let i=0;i<this.options.length;i++){
                            this.options[i].checked=false;
                            this.$set(this.options,i,this.options[i]);
                        }
                    }
                }else{
                    if(!item.children){
                        if(this.checkRadio){
                            this.$set(this,'radioChecked',item.label);
                        }
                        this.$set(this.options,index,item);
                    }
                    this.selectAll();
                }
               
            })
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
