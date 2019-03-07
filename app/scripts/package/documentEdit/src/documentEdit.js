import {signImg,signDate} from './images.js';
export default {
    name:'faDocumentEdit',
    componentName:'faDocumentEdit',
    data(){
        return{
            imgSrcs:[
                'http://qatest.fabigbig.com:8100/user/picContract/4faa18039eac4bd18bcd512975c4f90e_0?1537153857191?',
                'http://qatest.fabigbig.com:8100/user/picContract/4faa18039eac4bd18bcd512975c4f90e_1?1537153857191?',
                'http://qatest.fabigbig.com:8100/user/picContract/4faa18039eac4bd18bcd512975c4f90e_2?1537153857191?',
                'http://qatest.fabigbig.com:8100/user/picContract/4faa18039eac4bd18bcd512975c4f90e_3?1537153857191?',
            ],
            signimage:signImg,
            signDate:signDate,
            signImgs:new Array(),
            dropUpInfo:{},//拖放后的位置
            objE:null,
            isDropHide:false,//是否有拖拽(左边)签章
            rightImgIndex:0
        }
    },
    mounted(){
        this.$nextTick(()=>{
            let scrollBar=document.getElementsByClassName('fa-scrollbar__wrap')[1]
            scrollBar.addEventListener('scroll',(e)=>{
                for(let i=0;i<this.imgSrcs.length;i++){
                    if(scrollBar.scrollTop>=1132*(i+1)){
                        this.rightImgIndex=i+1;
                    }else if(scrollBar.scrollTop<1132){
                        this.rightImgIndex=0;
                        break;
                    }
                }
            })
        })
    },
    methods:{
        //获取签章
        signAdd(value){
            this.dropUpInfo=value;
            this.signImgs.push(value.sign);
        },
        //删除签章
        removeSign(index){
            this.signImgs.splice(index,1);
        }
    }
}