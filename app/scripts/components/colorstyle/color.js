import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import axios from 'axios';

export default {
    data() {
        return {
            isShow: false,
            istext: '[展开]'
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    },
    methods: {
        showList() {
            if (this.isShow) {
                this.isShow = false;
                this.istext = '[展开]';
            } else {
                this.isShow = true;
                this.istext = '[隐藏]';
            }
        }
    }
}