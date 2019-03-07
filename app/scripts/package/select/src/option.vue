<template>
<li v-on:click.stop="selectOptionClick">
    <a href="javaScript:;">{{label}}</a>
</li>
</template>
<script>
import Emitter from './../../mixins/emitter.js';
export default {
    name:'faOption',
    componentName: 'faOption',
    inject: ['select'],
    mixins:[Emitter],
    props:{
        value:[String, Number],
        label: [String, Number],
    },
    mounted(){
        this.optionMessage();
    },
    methods: {
        selectOptionClick() {
            this.dispatch('faSelect', 'handleOptionClick',{value:this.value,label:this.label});
        },
        optionMessage(){
           this.dispatch('faSelect', 'handleOptionMessage',{value:this.value,label:this.label});
        }
    }
}
</script>
