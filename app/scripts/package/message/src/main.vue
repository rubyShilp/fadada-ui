<template>
<div class="layerTips" v-if="visible">
    <slot>
        <p class="layerTipsBox" :class="className"><i :class="classIcon" style="padding-right: 10px;"></i>{{message}}</p>
    </slot>
</div>
</template>
<script>
export default {
    data(){
        return{
            message:'',
            visible:false,
            closed:false,
            timer:null,
            type:'',
            className:'',
            classIcon:'',
        }
    },
    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false;
            }
        }
    },
    methods:{
        close() {
            this.closed = true;
        },
        startTimer(){
            this.messageSetUp();      
            setTimeout(()=>{
                if (!this.closed) {
                    this.close();
                }
            },2000)
        },
        //提示设置
        messageSetUp(){
            if(this.type==='success'){
                this.className='fa_tips_box_success';
                this.classIcon='fa-icon-success';
            }else if(this.type==='info'){
                this.className='fa_tips_box_info';
                this.classIcon='fa-icon-info';
            }else if(this.type==='warning'){
                this.className='fa_tips_box_warning';
                this.classIcon='fa-icon-warning';
            }else if(this.type==='danger'){
                this.className='fa_tips_box_danger';
                this.classIcon='fa-icon-circle-close-outline';
            }else if(this.type==='own'){
                this.className='fa_tips_box_own'
            }
        }
    },
    mounted(){
        this.startTimer();
    }
}
</script>
