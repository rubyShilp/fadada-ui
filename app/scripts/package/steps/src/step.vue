<template>
    <li :class="calssName" :style="style">
        <i class="steps-icon" :class="icon">{{!icon?(index+1):''}}</i>
        <span>{{title}}</span>
        <span class="centent_txt">{{description}}</span>
        <slot></slot>
    </li>
</template>
<script>
export default {
    name:'fa-step',
    data(){
        return{
            index: -1,
            internalStatus:'',
            width:'',//宽度
            calssName:'',//显示的样式
            direction:"",//显示的方向
            style:"",//样式
        }
    },
    props:{
        //标题
        title:{
            type:String,
            default:''
        },
        //icon
        icon:{
            type:String,
            default:''
        },
        //描述性文字
        description:{
            type:String,
            default:''
        },
    },
    beforeMount(){
        if(this.$parent.direction==='horizontal'){
            this.style={
                'width':this.$parent.width
            }
        }else{
             this.style={
                'height':this.$parent.height
            }
        }
    },
    beforeCreate() {
        this.$parent.steps.push(this);
    },
    beforeDestroy() {
        const steps = this.$parent.steps;
        const index = steps.indexOf(this);
        if (index >= 0) {
            steps.splice(index, 1);
        }
    },
    computed:{
        prevStatus() {
            const prevStep = this.$parent.steps[this.index - 1];
            return prevStep ? prevStep.currentStatus : 'wait';
        },
    },
    methods:{
        updateStatus(val) {
            const prevChild = this.$parent.$children[this.index- 1];
            if ((val-1) > this.index) {
                this.internalStatus =this.$parent.finishStatus;
            } else if ((val-1) === this.index && this.prevStatus !== 'error') {
                this.internalStatus = this.$parent.processStatus;
            } else {
                this.internalStatus = 'wait';
            }
            this.classPrev();
            if (prevChild) prevChild.calcProgress(this.internalStatus);
        },
        //样式调整
        classPrev(){
            if(this.$parent.direction==='horizontal'){
                this.calssName='is_'+this.internalStatus+' horizontal';
            }else{
                this.calssName='is_'+this.internalStatus+' vertical';
            }
        },
        //
        calcProgress(status){
            if(status==='process' || status==='finish'){
                this.icon='fa-icon-check';
            }
        }
    },
    mounted() {
        const unwatch = this.$watch('index',(val)=>{
            this.$watch('$parent.active', this.updateStatus, { immediate: true });
            unwatch();
        })
        
    }
}
</script>
