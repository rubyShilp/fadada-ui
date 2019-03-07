import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import axios from 'axios';

export default {
    data() {
        return {
            fonts: 'Example heading',
            badge: 'New',
            isColor: 'fddui-badge-yellow'
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    }
}