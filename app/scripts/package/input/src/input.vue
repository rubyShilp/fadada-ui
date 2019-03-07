<template>
<div>
    <div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}" v-if="type!=='textarea'">
        <!-- <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div> -->
        <div class="fa-text-field fa-input-content fa-select-position fa-input-border" :class="{'cur':focus}">
            <div style="margin-left:3px"><slot name="left"></slot></div>
            <input :type='type' class="fa-text-field-input" :maxlength="maxlength" :placeholder="placeholder" v-model="model"
            @focus="focues();focus = true" 
            @blur="blurs();focus = false" @change="handleChange" @keydown="keyDowns()" @keypress="keyPress()" @keyup="keyUp()" @click="handleClick" :disabled="disabled">
            <div style="margin-right:3px"><slot name="right"></slot></div>
            <!-- <div>
                <div class="fa-input-line"></div>
                <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
            </div> -->
            <div class="fa-input-help" v-if="type!=='number' && maxlength>0"><div></div><div>{{model.length}} / {{maxlength}}</div></div>
        </div>
    </div>
    <div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}" v-if="type==='textarea'">
        <slot></slot>
        <!-- <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div> -->
        <div class="fa-text-field fa-input-content fa-input-border" :class="{'cur':focus}">
            <div class="fa-text-field-multiline">
                <textarea   rows="1" class="fa-text-field-textarea-hide fa-text-field-input"></textarea>
                <textarea tabindex="0" :placeholder="placeholder" :maxlength="maxlength"  :rows="rows" v-model="model" @focus="focus = true"  @blur="focus = false" @change="handleChange" :disabled="disabled" class="fa-text-field-input fa-text-field-textarea"></textarea>
            </div>
            <!-- <div>
                <div class="fa-input-line"></div>
                <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
            </div> -->
            <div class="fa-input-help" v-if="maxlength>0"><div></div><div>{{model.length}} / {{maxlength}}</div></div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'faInput',
    componentName: 'faInput',
    props:{
        type:{
            type:String,
            default:'text'
        },
        value:{
            type:String,
            default:''
        },
        width:{
            type:String,
            default:''
        },
        placeholder:{
            type:String,
            default:''
        },
        rows:{
            type:String,
            default:'4'
        },
        label:{
            type:String,
            default:''
        },
        maxlength:Number,
        disabled:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{
            focus: false
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
    methods: {
        handleChange() {
            this.$nextTick(() => {
            this.$emit('change', this.model);
            });
        },
        //点击文本框
        handleClick(){
            this.$nextTick(() => {
                this.$emit('click', this.model);
            });
        },
        focues(){
            this.$nextTick(() => {
                this.$emit('focus', this.model);
            });
        },
        blurs(){
            this.$nextTick(() => {
                this.$emit('blur', this.model);
            });
        },
        //按键按下触发事件
        keyDowns(){
            this.$nextTick(() => {
                this.$emit('keydown', this.model);
            });
        },
        //按键按下一个按键，并产生一个字符时发生
        keyPress(){
            this.$nextTick(() => {
                this.$emit('keypress', this.model);
            });
        },
        //按键离开时触发
        keyUp(){
            this.$nextTick(() => {
                this.$emit('keyup', this.model);
            });
        }
    }
}
</script>
