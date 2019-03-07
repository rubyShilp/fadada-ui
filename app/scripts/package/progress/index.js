import progress from './src/progress.vue';
progress.install=function(Vue){
    Vue.component(progress.name,progress);
}
export default progress;