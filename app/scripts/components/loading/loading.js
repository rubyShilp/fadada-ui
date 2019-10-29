import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import axios from 'axios';

export default {
    data() {
        return {
            showloading1: false,
            showloading2: false,
            showloading3: false,
            showloading4: false
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    },
    methods: {
        showloading(status) {
            if (status == 1) {
               this.$loading(true);
                // setTimeout(()=>{
                //     this.$loading(false);
                // },2000)
            } else if (status == 2) {
                this.$loading(true);
                setTimeout(()=>{
                    this.$loading(false);
                },3000)
            } else if (status == 3) {
                this.$loading(true);
                setTimeout(()=>{
                    this.$loading(false);
                },4000)
            } else {
                this.$loading(true);
                setTimeout(()=>{
                    this.$loading(false);
                },5000)
            }
        }
    }
}