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
            address:'内蒙古-包头-青山区',
            startTime:new Date('2020-01-15').getTime(),
            endTime:new Date('2020-02-20').getTime(),
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
                this.labelPosition='right';
            } else {
                this.labelPosition='top';
            }
        }
    }
}