import Vue from 'vue';
//
Vue.directive('fa-client',{
    bind:function(el, binding, vnode){
        el.onmousemove=(e)=>{
           binding.value({width:el.offsetWidth-12,height:el.offsetHeight-3})
        },
        el.onmouseup=(e)=>{
            binding.value({width:0,height:0})
        }
    },
})
/**
 * 拖放上传文件
 * v-fa-file-drop='{set:this,name:"file"}'
 * */
Vue.directive('fa-file-drop',{
    bind:function(el, binding, vnode){
        el.ondragleave=(e)=>{
            //阻止离开时的浏览器默认行为
            e.preventDefault();
        };
        el.ondrop=(e)=>{
            //阻止拖放后的浏览器默认行为
            e.preventDefault();
            //获取文件对象
            const data = e.dataTransfer.files;
            // 检测是否有文件拖拽到页面     
            if (data.length < 1) {
                return;
            }
            binding.value({file:data[0]});
        };
        el.ondragenter=(e)=>{
            //阻止拖入时的浏览器默认行为
            e.preventDefault();
        };
        el.ondragover=(e)=>{
            //阻止拖来拖去的浏览器默认行为
            e.preventDefault();
        }
    }
})
Vue.directive('fa-file',{
    update:(el,binding,vnode)=>{
        el.value='';
    }
})
let sign='';
//签章盖章
Vue.directive('fa-sign-drap',{
    bind:(el,binding,vnode)=>{
        el.ondragstart=(e)=>{
            sign=binding.value;
        }
    }
})
Vue.directive('fa-sign-drop',{
    bind:(el,binding,vnode)=>{
        el.ondragover=(e)=>{
            e.preventDefault();
            document.ondrop=(e)=>{
                e.preventDefault();
                let left=0;
                e.offsetX>=618?left=618:left=e.offsetX;
                let dropUpInfo={x:left,y:e.offsetY,sign:sign};
                binding.value(dropUpInfo)
            }
        }
    }
})
//签章拖动
Vue.directive('fa-sign-mouse',{
    bind:(el, binding, vnode)=>{
        el.style.left=(binding.value.x- 114)<0?0:(binding.value.x- 114)+'px';
        el.style.top=(binding.value.y-61)<10?10:(binding.value.y-61)+'px';
        let x=0,y=0,dragFlag=false;
        el.onmousedown = (e)=>{
            e.preventDefault();
            x = e.clientX - el.offsetLeft;
            y = e.clientY - el.offsetTop;
            dragFlag = true;
            document.onmousemove=(e)=>{
                //e.preventDefault();
                if(dragFlag){
                    if((e.clientX - x)>=0 && (e.clientX - x)<=618){
                        el.style.left = e.clientX - x +'px';
                    }
                    if((e.clientY - y)>=12){
                        el.style.top = e.clientY - y +'px';
                    }
                }
            }
            document.onmouseup=(e)=>{
                e.preventDefault();
                dragFlag=false;
            }
        }
    }
})
Vue.directive('fa-beffore',{
    update:(el, binding, vnode)=>{
        let width='',height='',d='';
        if(binding.value.height){
            d=binding.value.height-22;
            width=(binding.value.height-3);
            height=(binding.value.height-3);
        }else{
            width=19;
            height=19;
            d=0;
        }
        if(binding.value.width && binding.value.model){
            el.style.width=width+'px';
            el.style.height=height+'px';
            el.style.transform='translate('+(binding.value.width-(22+d))+'px,3px)';
        }else{
            el.style.width=width+'px';
            el.style.height=height+'px';
            el.style.transform='translate(3px,3px)';
        }
    }
})