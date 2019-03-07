import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import {icons} from './data.js';

export default {
    data() {
        return {
            iconList:icons
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    },
    methods: {

    }
}