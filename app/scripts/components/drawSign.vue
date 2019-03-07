<template>
  <div class="sign">
    <canvas id="canvas" :width="width" :height="height"></canvas>
    <div>
      <button type="button" @click="clear">清空</button>
      <button type="button" @click="save">保存</button>
    </div>
    <img class="preview-img" v-if="url!==''" :src="url" :width="imgWidth" :height="imgHeight" alt="">
  </div>
</template>

<script>
  /*
  * width   canvas 宽度
  * height  canvas 高度
  * strokeStyle  线条颜色
  * showUrl   是否显示预览图片
  * imgWidth  img 宽度
  * imgHeight img 高度
  * draw_clear   //监听清空事件
  * draw_save    //监听保存事件 返回base64 img 路径
  * */
  var preHandler = function ( e ) {e.preventDefault();};
  export default {
    name : 'drawSign',
    props : {
      width : {
        type : String,
        default : '300'
      },
      height : {
        type : String,
        default : '300'
      },
      strokeStyle:{
        type : String,
        default : '#000'
      },
      showUrl:{
        type : Boolean,
        default : true
      },
      imgWidth:{
        type : String,
        default : '200'
      },
      imgHeight:{
        type : String,
        default : '200'
      }
    },
    data () {
      return {
        canvas : null,       //canvas
        ctx : null,          //ctx canvas对象
        stroke_info:null,    //当前绘图的坐标
        url:'',              //base64 图像
      }
    },
    methods : {
      init () {
        let that = this;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stroke_info = this.canvas.getBoundingClientRect();
        this.canvas.addEventListener('touchstart',function ( event ) {
          document.addEventListener('touchStart',preHandler,false);
          that.darwStart(event);
        });
        this.canvas.addEventListener('touchend', function(event) {
          document.addEventListener('touchend', preHandler, false);
          that.drawEnd()
        });
        this.clear();
      },
      darwStart(e){
        let that = this;
        let t = e.changedTouches[0];
        // console.log(t.clientX, t.clientY);
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.beginPath();  //清空所有绘画路径
        this.ctx.moveTo(t.clientX - this.stroke_info.left, t.clientY - this.stroke_info.top);
        this.canvas.addEventListener('touchmove',function (event) {
          that.darwMove(event);
        })
      },
      darwMove(e){
        let t = e.changedTouches[0];
        this.ctx.lineTo(t.clientX - this.stroke_info.left, t.clientY - this.stroke_info.top);
        this.ctx.stroke();
      },
      drawEnd(){
        document.removeEventListener('touchstart', preHandler, false);
        document.removeEventListener('touchmove', preHandler, false);
        document.removeEventListener('touchend', preHandler, false);
      },
      clear () {
        this.ctx.clearRect(0,0,this.width, this.height);
        this.url = '';
        this.$emit('draw_clear');
      },
      save () {
        let data = this.canvas.toDataURL();
        //是否显示预览截图
        if(this.showUrl){
          this.url = data;
        }
        let query = {url : data};
        this.$emit('draw_save', query);
        // console.log(data)
        // console.log(this.canvas);
      }
    },
    mounted () {
      this.$nextTick(_ => {
        this.init()
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #canvas {
    border: 1px solid #cacaca;
  }
  .preview-img{
    margin: 0 auto;
  }
</style>
