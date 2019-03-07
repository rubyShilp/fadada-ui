import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import drawSign from './../drawSign.vue';
import axios from 'axios';

export default {
    data() {
        return {
            model:false,
            switchModel:false,
            isSwitchTrue:true,
            isSwitchFalse:false,
            radioHident1:false,
            radioHident2:false,
            radioHident3:false,
            radioHident4:false,
            radioHident5:false,
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top,
        'draw-sign':drawSign
    },
    methods: {
    }
}