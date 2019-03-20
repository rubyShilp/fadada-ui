<template>
<div>
    <fa-input v-model="model" @click="showHideOptions()"></fa-input>
    <div class="fa-cascader-option" :style="{'top':label?'58px':'214px'}" v-if="showOptions">
        <fa-scrollbar class="fa-cascader-menu">
            <ul>
                <li v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)">
                    <a href="javaScript:;">{{item.label}}</a>
                    <i class="fa-icon-arrow-right" v-if="item.children"></i>
                </li>
            </ul>
            <!-- 
            <p @click="selectAll()"><em>全部</em></p>
            <p v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)"><fa-checkbox v-if="!item.children && showChecked" v-model="item.checked">{{item.label}}</fa-checkbox><em v-if="item.children || !showChecked">{{item.label}}</em><i class="fa-icon-arrow-right" v-if="item.children"></i></p> -->
        </fa-scrollbar>
        <fa-options :options='options[index].children' :className='className' :checkRadio='checkRadio' :classCancel='classCancel' :showChecked='showChecked' v-if="index>=0 && options[index].children"></fa-options>
    </div>
</div>
</template>
<script>
import faOptions from './options.vue';
export default {
    name:'faCascader',
    componentName: 'faCascader',
    components:{
        'fa-options':faOptions
    },
    props:{
        value: '',
        label:'',
        disabled: Boolean,
        width:270,
        placeholder:String,
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
    data(){
        return{
            menuLabel:'',//获取当前选择的首选项
            menuValue:'',//获取当前首选项ID
            focus: false,
            showOptions:false,
            index:-1,//选择菜单项的下标，根据下标显示不同的菜单项
            selectList:Array(),
            menuLabels:[],
            stepValues:[]
        }
    },
    computed:{ 
        model:{
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    beforeMount(){
        this.$nextTick(()=>{
           this.optionsUpdate(this.options);
           this.optionsMessage(this.options);
        })
    },
    created(){
        this.$on('handleOptionClick', this.handleOptionSelect);
    },
    methods:{
        //显示下拉菜单
        showHideOptions(){
            this.showOptions=true;
            this.optionsUpdate(this.options);
            this.optionsMessage(this.options);
        },
        //变更数据,添加复选框
        optionsUpdate(data){
            for(let i=0;i<data.length;i++){
                if(!data[i].children){
                    data[i].checked=false;
                }else{
                    this.optionsUpdate(data[i].children);
                }
            }
        },
        //数据处理
        optionsMessage(data){
            this.options=data;
            let modelValues=[];
            if(this.model && this.$refs.values.value!='全部'){
                this.menuLabels=new Array();
                this.stepValues=new Array();
                for(let i=0;i<this.model.length;i++){
                    this.menuLabels.push(this.model[i].split('/')[0]);
                    this.stepValues.push(this.model[i].split('/')[1])
                }
                for(let j=0;j<this.options.length;j++){
                    for(let k=0;k<this.menuLabels.length;k++){
                        if(this.menuLabels[k]===this.options[j].value){
                            for(let l=0;l<this.options[j].children.length;l++){
                                for(let m=0;m<this.stepValues.length;m++){
                                    if(this.stepValues[m]===this.options[j].children[l].value){
                                        this.options[j].children[l].checked=true;
                                        modelValues.push(this.options[j].label+'/'+this.options[j].children[l].label);
                                    }
                                }
                            }
                        }
                    }
                }
                this.$refs.values.value=modelValues.join(';');
            }
        },
        //选择菜单项
        selectOptions(index,item){
            this.index=-1;
            if(item.children){
                this.showHideOptions();
                this.menuLabel=item.label;
                this.menuValue=item.value;
                this.index=index;
            }else{
                this.index=-1;
            }
        },
        //全部
        selectAll(){
            this.showOptions=false;
            this.model='all';
            this.$refs.values.value='全部';
            this.index=-1;
        },
        //获取选项的值
        handleOptionSelect(options){
            this.showOptions=options.showOptions;
            let list=JSON.parse(options.list);
            let items=[];
            let modelItems=[];
            if(list.length>0){
                for(let j=0;j<list.length;j++){
                    items.push(this.menuLabel+'/'+list[j].label);
                    modelItems.push(this.menuValue+'/'+list[j].value);
                }
            }
            if(items.length>0){
                this.model=modelItems;
                this.$refs.values.value=items.join(';');
            }else{
                this.model='';
                this.$refs.values.value='';
            }
            this.index=-1;
        },
        //关闭选项框
        optionClose(){
            const e = document.all ? window.event : arguments[0] ? arguments[0] : event;
            if(!this.$el.contains(e.target)){
                this.showOptions=false;
                this.index=-1;
            }
        }
    },
    mounted(){
        //绑定事件
        this.$nextTick(()=>{
            window.addEventListener('click', this.optionClose);
        })
    },
    beforeDestroy () {
        //销毁并移除事件
        window.removeEventListener('click', this.optionClose)
    }
}
</script>
