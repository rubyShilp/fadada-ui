<template>
<div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}" v-if="type!=='textarea'">
    <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div>
    <div class="fa-select fa-input-content fa-select-position fa-input-border" :class="{'is-open':!focus,'cur':focus}">
        <div class="fa-select-content">
            <input tabindex="0"  class="fa-select-input" type="hidden"  v-model="model"/>
            <input class="fa-select-input" @focus.stop="focus = true;showOptions=true"  readonly
            @blur="focus = false;" :placeholder="placeholder"  @change="handleChange" :disabled="disabled"  ref="values">
        </div>
        <div class="fa-select-action">
            <svg viewBox="0 0 24 24" class="fa-select-icon"><path d="M7 10l5 5 5-5z"></path></svg>
        </div>
        <!-- <div>
            <div class="fa-input-line"></div>
            <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
        </div> -->
    </div>
    <fa-scrollbar class="fa-select-option" :style="{'top':label?'58px':'38px'}" v-if="showOptions">
        <ul>
            <slot></slot>
        </ul>
    </fa-scrollbar>
</div>
</template>
<script>
export default {
    name:'faSelect',
    componentName: 'faSelect',
    props:{
        value: '',
        label:'',
        disabled: Boolean,
        width:270,
        placeholder:String,
    },
    data(){
        return{
            focus: false,
            showOptions:false,
        }
    },
    created(){
        this.$on('handleOptionClick', this.handleOptionSelect);
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
    watch:{
        model(){
            if(!this.model){
                this.$refs.values.value=this.model;
            }
        }
    },
    beforeMount(){
        this.$on('handleOptionMessage',this.handleOptionMessage);
        this.$nextTick(()=>{
           for(let i=0;i<this.$slots.default.length;i++){
                if(this.$slots.default[i].tag!==undefined){
                   this.handleOptionMessage(this.$slots.default[i].componentOptions.propsData);
                }
            }
        })
    },
    methods: {
        //文本值改变
        handleChange() {
            this.$nextTick(() => {
                this.$emit('change', this.model);
            });
        },
        //选择选项数据
        handleOptionSelect(options){
            this.model=options.value;
            this.$refs.values.value=options.label;
            this.showOptions=false;
        },
        //初始化选项值
        handleOptionMessage(options){
            if(this.model==options.value){
                this.$refs.values.value=options.label;
            }
        },
        //关闭选项框
        optionClose(){
            let e = document.all ? window.event : arguments[0] ? arguments[0] : event;
            if(!this.$el.contains(e.target)){
                this.showOptions=false;
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
