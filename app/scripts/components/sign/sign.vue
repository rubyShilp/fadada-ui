<template>
<div>
    <v-menu :ischeck="true"></v-menu>
    <v-top></v-top>
    <div class="fdd-warp">
        <canvas id="signature-pad" style="border:1px solid #e5e5e5;"></canvas></br>
        <canvas id="myCanvas" style="border:1px solid #d3d3d3;background:#ffffff;"></canvas>
        <img :src="base64Data"/>
        <fa-button type='own' plain @click="save()">保存</fa-button>
        <fa-button type='info' plain @click="clear()">取消</fa-button>
    </div>
</div>
</template>
<script>
import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import SignaturePad from 'signature_pad';
export default {
    data(){
        return{
            signaturePad:null,
            canvas:null,
            base64Data:null
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    },
    mounted(){
        this.canvas = document.getElementById('signature-pad');
        this.signaturePad = new SignaturePad(this.canvas, {
            backgroundColor: 'rgb(255, 255, 255)',
            minWidth:1,
            maxWidth:1,
            onBegin: ()=>{
				console.log('onbegin')
            },
            onEnd: ()=>{
                
            }
        });
        window.addEventListener("resize",this.init);
        this.init();
    },
    methods:{
        init(){
            let ratio =  Math.max(window.devicePixelRatio || 1, 1);
            this.canvas.width = this.canvas.offsetWidth*ratio;
            this.canvas.height = this.canvas.offsetHeight*ratio;
            this.scale=this.canvas.width/this.canvas.height;
            this.canvas.getContext("2d").scale(ratio, ratio);
        },
        scaleVerticalImg(data_uri){
            let ratio =  Math.max(window.devicePixelRatio || 1, 1);
            var img = new Image();
            var canvas=document.getElementById("myCanvas");	 
            var cxt=canvas.getContext("2d");
            canvas.width = 132;
            canvas.height = 132/this.scale;
            cxt.rotate(270*Math.PI /180); //旋转90度
            img.src = data_uri;
            img.onload=()=>{
                cxt.drawImage(img,0,0,-canvas.width,canvas.height);
                this.writeImg = canvas.toDataURL('image/png',1);
            }
        },
        save(){
            let data_uri = this.signaturePad.toDataURL('image/png',1);
            //let base64Data = data_uri.replace(/^data:image\/\w+;base64,/, "");
            //this.writeImg=data_uri;
            let img =new Image();
            img.src=data_uri;
            img.width = 132;
            img.height = 132/this.scale;
            let canvas=document.getElementById("myCanvas");	 
            let cxt=canvas.getContext("2d");
            canvas.width = 132;
            canvas.height = 132/this.scale;
            img.onload=()=>{
                cxt.drawImage(img,0,0,132,132/this.scale);
                this.base64Data=canvas.toDataURL('image/png',1);
            }
            //this.scaleVerticalImg(this.base64Data);
        },
        clear(){
            this.signaturePad.clear();
        }
    }
}
</script>
