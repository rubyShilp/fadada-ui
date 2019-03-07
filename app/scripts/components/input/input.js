import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
export default {
    data() {
        return {
            left: true,
            right: false,
            top: false,
            textModel:'',
            userName:'',
            userPassword:'',
            labelPosition:'left',
            dateTime:'',
            startTime:new Date('2019-01-28').getTime()
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    },
    methods: {
        arrayinput(status) {
            if (status == 0) {
                this.labelPosition='left';
            } else if (status == 1) {
                console.log(123);
                this.labelPosition='right';
            } else {
                this.labelPosition='top';
            }
        }
    }
}