import Vue from 'vue';
import loadingVue from './loading.vue';
let LoadingConstructor = Vue.extend(loadingVue);
let instance;
instance = new LoadingConstructor();
instance.vm = instance.$mount();
document.body.appendChild(instance.vm.$el);
const Loading=function(options){
    if(!options){
        instance.vm = instance.$mount();
        instance.vm.visible = false;
        return;
    }
    options={
        visible:options
    }
    Vue.nextTick(()=>{
        instance.vm.visible = options.visible;
    })
    instance.dom = instance.vm.$el;
    return instance.vm;
}
export default Loading;