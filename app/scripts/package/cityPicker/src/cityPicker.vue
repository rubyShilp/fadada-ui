<template>
<div class="fa-input" :style="{'width':width+'px'}" style="display:inline-block" :class="{'fa-input__focus':focus,'has-label':label}">
    <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div>
    <div class="fa-select fa-input-content fa-select-position" :class="{'is-open':!focus}">
        <div class="fa-select-content">
            <input tabindex="0"  class="fa-select-input" type="hidden"  v-model="model"/>
            <input class="fa-select-input" @click="selectPciker()"   @focus.stop="focus = true;"  readonly
            @blur="focus = false;" :placeholder="placeholder"  @change="handleChange" :disabled="disabled"  ref="values">
        </div>
        <div class="fa-select-action">
            <svg viewBox="0 0 24 24" class="fa-select-icon"><path d="M7 10l5 5 5-5z"></path></svg>
        </div>
        <div>
            <div class="fa-input-line"></div>
            <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
        </div>
    </div>
    <div class="edit-box-list" style="top:auto;left:auto" v-if="showCityHide">
        <div class="tab-list">
            <a href="javascript:;" :class="{'cur':cityHiddent===1}" @click="cityHiddent=1">{{province}}</a>
            <a href="javascript:;" :class="{'cur':cityHiddent===2}" @click="cityHiddent=2">{{city}}</a>
            <a href="javascript:;" :class="{'cur':cityHiddent===3}" @click="cityHiddent=3">{{county}}</a>
        </div>
        <ul v-if='cityHiddent===1'>
            <li v-for="province of provinceList" :key='province'>
                <a href="javascript:;" @click="selectProvince(province,$event)">{{province}}</a> 
            </li>
        </ul>
        <ul v-if='cityHiddent===2'>
            <li v-for="city of cityList" :key='city'>
                <a href="javascript:;"  @click="selectCity(city,$event)" :title="city">{{city}}</a> 
            </li>
        </ul>
        <ul v-if='cityHiddent===3'>
            <li v-for="county of countyList" :key='county'>
                <a href="javascript:;" @click="selctCounty(county,$event)" :title="county">{{county}}</a> 
            </li>
        </ul>
    </div>
</div>
</template>
<style lang="less" scoped>
.edit-box-list{
    position: absolute;
    z-index:9;
    left:135px;
    width:340px;
    padding:0 15px;
    top:50px;
    background:white;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 1px 1px 8px rgba(0,0,0,0.2);
    box-shadow: 1px 1px 8px rgba(0,0,0,0.2);
    &:before{
      content: '';
      position: absolute;
      left: 20px;
      top: -12px;
      display:none;
      border: 6px solid transparent;
      border-bottom: 6px solid #fff;
    }
    ul{
      height:auto;
      padding:10px 0;
      overflow: auto;
      background:white;
    li{
      height:30px!important;
      list-style: none;
      line-height:30px!important;
      width:80px!important;
      float:left;
      padding-left:5px;
      text-align: left;
      margin-bottom:0!important;
      padding-bottom:0!important;
      border:0!important;
      a{
        color:#2a2a2a;
        text-decoration: none;
        &:hover{
          color:#3896ff;
        }
      }
    }
  }
  }
  .tab-list{
    height:30px;
    line-height:30px;
    background:#fff;
    padding-top:10px;
    border-bottom:1px solid #eaeaea;
    a{
      display:inline-block;
      padding:0 10px;
      height:30px;
      margin-right:20px;
      color:#a6a6a6;
      &.cur{
        color:#2a2a2a;
        border-bottom:1px solid #3896ff;
      }
    }
  }
</style>

<script>
import cityPicker from './cityPickerData.js';
export default {
    name:'faCityPickerData',
    data(){
        return{
            focus: false,
            showCityHide:false,//是否显示选择省市区
            province:'请选择',//省份
            city:'请选择',//市 区
            county:'请选择',//县级城市
            cityHiddent:0,//显示对应的省市区
            provinceList:new Array(),//省份数据集合
            cityList:new Array(),//市区数据集合
            countyList:new Array(),//县级城市数据集合
        }
    },
    beforeMount(){
        this.initCity();
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
    props:{
        //是否显示省份信息
        provinceHide:{
            type:Boolean,
            default:true
        },
        //是否显示区/城市信息
        cityHide:{
            type:Boolean,
            default:true
        },
        //是否显示县级城市信息
        countyHide:{
            type:Boolean,
            default:true
        },
        label:{
            type:String,
            default:''
        },
        width:{
            type:Number,
            default:270
        },
        disabled:{
            type:Boolean,
            default:false
        },
        placeholder:{
            type:String,
            default:'请选择省市区'
        }
    },
    methods:{
         //文本值改变
        handleChange() {
            this.$nextTick(() => {
                this.$emit('change', this.model);
            });
        },
        //初始化加载省,市，县城市数据
        initCity(){
            //判断是否显示省份信息
            if(this.provinceHide){
                for(let i=0;i<cityPicker.length;i++){
                    this.provinceList.push(cityPicker[i].name);
                }
            };
            //判断是否显示市，区 信息
            if(this.cityHide){
                for(let i=0;i<cityPicker[0].city.length;i++){
                    this.cityList.push(cityPicker[0].city[i].name);
                }
            };
            //判断是否显示县级城市信息
            if(this.countyHide){
                for(let i=0;i<cityPicker[0].city[0].area.length;i++){
                    this.countyList.push(cityPicker[0].city[0].area[i]);
                }
            };
        },
        //显示省市区选择
        selectPciker(){
            if(this.model===''){
                this.$emit('input','');
            }
            this.showCityHide=true;
            this.province='请选择';
            this.city='请选择';
            this.county='请选择';
            this.cityHiddent=1;
        },
        //选择省份加载对应市级信息
        selectProvince(name,e){
            e.stopPropagation();
            for(let i=0;i<cityPicker.length;i++){
                if(cityPicker[i].name===name){
                    this.cityList=new Array();
                    for(let j=0;j<cityPicker[i].city.length;j++){
                        this.cityList.push(cityPicker[i].city[j].name);
                    }
                }
            }
            this.province=name;
            this.cityHiddent=2;
            this.showHideCityPicker();
        },
        //选择市级城市加载县级城市数据
        selectCity(name,e){
            e.stopPropagation();
            this.countyList=new Array();
            for(let i=0;i<cityPicker.length;i++){
                for(let j=0;j<cityPicker[i].city.length;j++){
                    if(cityPicker[i].city[j].name===name){
                        for(let k=0;k<cityPicker[i].city[j].area.length;k++){
                            this.countyList.push(cityPicker[i].city[j].area[k]);
                        }
                    }
                }
            }
            this.city=name
            this.cityHiddent=3;
            this.showHideCityPicker();
        },
        //选择县级市区
        selctCounty(name,e){
            e.stopPropagation();
            this.county=name;
            this.cityHiddent=0;
            this.showCityHide=false;
            this.showHideCityPicker();
        },
        //显示判断当前省份，市区，县级城市等信息是否预览
        showHideCityPicker(){
            if(this.province==='请选择'){
                this.model='';
                this.$refs.values.value='';
            }else if(this.province!=='请选择' && this.city==='请选择' && this.county==='请选择'){
                this.model=this.province;
                this.$refs.values.value=this.province;
            }else if(this.province!=='请选择' && this.city!=='请选择' && this.county==='请选择'){
                this.model=this.province+'-'+this.city;
                this.$refs.values.value=this.province+'-'+this.city;
            }else{
               this.model=this.province+'-'+this.city+'-'+this.county;
               this.$refs.values.value=this.province+'-'+this.city+'-'+this.county;
            }
        }
    },
    mounted(){
        this.$nextTick(()=>{
            window.addEventListener('click',()=>{
                const e = document.all ? window.event : arguments[0] ? arguments[0] : event;
                e.stopPropagation();
                if(!this.$el.contains(e.target)){
                    this.showCityHide=false;
                }
            });
        })
    },
    beforeDestroy () {
        window.removeEventListener('click',()=>{
            const e = document.all ? window.event : arguments[0] ? arguments[0] : event;
            if(!this.$el.contains(e.target)){
                this.showCityHide=false;
            }
        })
    }
}
</script>
