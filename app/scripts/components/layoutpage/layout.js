import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
export default {
    data() {
        return {
          name:'',
          options:[
            {label:'IT服务',value:'111',children:[{label:'12',value:'222'},{label:'13',value:'224'},{label:'14',value:'225'}]}
          ]
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    },
    mounted () {
      //this.initTree();
      //this.dimensionalThree();
      //this.initTexture();
    },
    methods: {
        initTree(){
          //场景
          let scene=new this.three.Scene();
          //相机
          let camera=new this.three.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 0.1, 1000);
          //渲染器
          let renderer=new this.three.WebGLRenderer();
          //设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
          renderer.setSize(window.innerWidth, window.innerHeight);
          //装载容器
          document.getElementById('webGL').appendChild(renderer.domElement);
          //几何体(CubeGeometry)
          let geometry=new this.three.CubeGeometry(1,1,1);
          let material = new this.three.MeshBasicMaterial({color: 0x00ff00});
          let cube = new this.three.Mesh(geometry, material); scene.add(cube);
          camera.position.z = 5;
          //渲染
          function render(){
            requestAnimationFrame(render)
            /** 
             * 正方体旋转
             * */
            cube.rotation.x -= 0.1;
            cube.rotation.y += 0.1;
            cube.rotation.z += 0.1;
            /** 
             * 移动
            */
            // cube.position.x+=0.01;
            // cube.position.y+=0.01;
            renderer.render(scene,camera);
          }
          render();
        },
        //
        dimensionalThree(){
          /**
           * 渲染器
           */
          //定义渲染器
          let renderer=new this.three.WebGLRenderer({antialias : true});
          //给渲染器添加宽度和高度
          renderer.setSize(window.innerWidth, window.innerHeight);
          //将渲染器绑定到div画布上
          document.getElementById('webGL').appendChild(renderer.domElement);
          //设置渲染器的颜色
          renderer.setClearColor(0xFFFFFF, 1.0);
          /** 
           * 相机
          */
          //定义一个相机
          let camera=new this.three.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
          //设置相机的角度
          camera.position.x = 100;
          camera.position.y = 300;
          camera.position.z = 600;
          camera.up.x = 0;
          camera.up.y = 1;
          camera.up.z = 0;
          camera.lookAt({
              x : 0,
              y : 0,
              z : 0
          });
          /**
           * 场景
           */
          //定义场景
          let scene=new this.three.Scene();
          //构造一个几何体
          let geometry = new this.three.BoxGeometry(100, 100, 100);
          for( let i = 0; i < geometry.faces.length; i += 2 ) {
            let hex = Math.random() * 0xffffff;
            geometry.faces[ i ].color.setHex( hex );
            geometry.faces[ i + 1 ].color.setHex( hex );
          }
          //设置这个几何体的材质
          let material = new this.three.MeshBasicMaterial({ vertexColors: this.three.FaceColors} );
          //定义一个模型网格,将几何体装载上去
          let mesh = new this.three.Mesh( geometry,material);
          //给这个模型网格构造一个线条
          mesh.position.set(0,0,0);
          //添加到场景之中
          scene.add(mesh);

          let helper=new this.three.GridHelper(1000,50,0x0000ff,0x808080);
          scene.add(helper);
          /*** 
           * 设置光源
          */
          //定义光源(方向光)
          // let light=new this.three.DirectionalLight(0xFF0000,1);
          // //设置光源角度
          // light.position.set(0,0,1);
          // //将光源添加进场景之中
          // scene.add(light);
          // //设置环境光
          // light=new this.three.AmbientLight(0x00FF00);
          // light.position.set(100, 100, 200);
          // scene.add(light);
          // //设置点光源
          // light = new this.three.PointLight(0xFF0000);
          // light.position.set(0, 0,75);
          // scene.add(light);
          //清空渲染器
          renderer.clear();
          //加载渲染器
          function render(){
            mesh.rotation.x += 0.1;
            mesh.rotation.y += 0.1;
            renderer.render(scene,camera);
            requestAnimationFrame(render)
          }
          render();
        },
        //纹理
        initTexture(){
          let renderer =new this.three.WebGLRenderer();
          renderer.setSize( window.innerWidth, window.innerHeight );
          document.getElementById('webGL').appendChild(renderer.domElement);
          let camera = new this.three.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
          camera.position.z = 400;
          let scene = new this.three.Scene();
          let geometry = new this.three.PlaneGeometry( 500, 300, 1, 1 );
          geometry.vertices[0].uv = new this.three.Vector2(0,0);
          geometry.vertices[1].uv = new this.three.Vector2(2,0);
          geometry.vertices[2].uv = new this.three.Vector2(2,2);
          geometry.vertices[3].uv = new this.three.Vector2(0,2);
          let texture = this.three.ImageUtils.loadTexture("./../../../images/logo.png",null,function(t){});
          let material = new this.three.MeshBasicMaterial({map:texture});
          let mesh = new this.three.Mesh( geometry,material );
          scene.add( mesh );
          window.addEventListener( 'resize',function(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
          }, false );
          function render(){
            renderer.render(scene,camera);
            requestAnimationFrame(render)
          }
          render();
        }
    }
}