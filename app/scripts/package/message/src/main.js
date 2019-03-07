import Vue from 'vue';
import Main from './main.vue';
import {isVNode} from './../../utils/vdom.js';
let MessageConstructor = Vue.extend(Main);
let instance;
let instances=[];
const Message=function(options){
    options = options || {};
    if (typeof options === 'string') {
        options = {
          message: options
        };
    }
    instance = new MessageConstructor({
        data: options
    });
    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    instances.push(instance);
    return instance.vm;
}
Message.close=function(){
    for(let i=0;i<instances.length;i++){
        instances[i].close();
    }
}
export default Message;