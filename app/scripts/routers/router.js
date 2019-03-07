import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './../store/store.js';
import main from './../components/main/main.vue';
import home from './../components/home/home.vue';
import color from './../components/colorstyle/color.vue';
import fonts from './../components/fontclass/font.vue';
import layout from './../components/layoutpage/layout.vue';
import title from './../components/title/title.vue';
import btn from './../components/button/btn.vue';
import radio from './../components/radio/radio.vue';
import tag from './../components/tagbag/tagbag.vue';
import alert from './../components/alerts/alert.vue';
import tips from './../components/tips/tips.vue';
import loading from './../components/loading/loading.vue';
import input from './../components/input/input.vue';
import checkbox from './../components/checkbox/checkbox.vue';
import select from './../components/select/select.vue';
import switchs from './../components/switch/switch.vue';
import icon from './../components/icons/icon.vue';
import step from './../components/steps/step.vue';
import table from './../components/tab/tab.vue';
import sign from './../components/sign/sign.vue';
import toggleButton from './../components/toggleButton/toggleButton.vue';
Vue.use(VueRouter);
Vue.config.productionTip = false;

//路由页面切换的时候，保持页面在滚动顶部显示
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
        return position
    }
}

//首页
const mainRouter = [
    {path: '', redirect: '/main' },
    {path: '/main', name: 'main', component: main, meta: { scrollToTop: true ,requireAuth:true},children:[
        { path: '/home', name: 'home', component: home, meta: { scrollToTop: true } },
        { path: '/sign', name: 'sign', component: sign, meta: { scrollToTop: true } },
        { path: '/color', name: 'color', component: color, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/fonts', name: 'fonts', component: fonts, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/layout', name: 'layout', component: layout, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/title', name: 'title', component: title, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/btn', name: 'btn', component: btn, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/radio', name: 'radio', component: radio, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/tag', name: 'tag', component: tag, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/alert', name: 'alert', component: alert, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/tips', name: 'tips', component: tips, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/loading', name: 'loading', component: loading, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/input', name: 'input', component: input, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/checkbox', name: 'checkbox', component: checkbox, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/select', name: 'select', component: select, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/switchs', name: 'switchs', component: switchs, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/Icon', name: 'Icon', component: icon, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/step', name: 'step', component: step, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/toggleButton', name: 'toggleButton', component: toggleButton, meta: { scrollToTop: true, requiresAuth: true } },
        { path: '/table', name: 'table', component: table, meta: { scrollToTop: true, requiresAuth: true } }
    ]}, 
];

const routes = [
    ...mainRouter
];

// 创建router实例
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    scrollBehavior,
    routes: routes,
});
router.beforeEach((to,form,next)=>{
    //保存跳转地址
    store.commit('ROUTING_ASSIGN',to.fullPath);
   // 判断是否需要登录权限
    if(to.matched.some(res => res.meta.requireAuth)){
        next();
    }
})
export default router;