import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import axios from 'axios';

export default {
    data() {
        return {
            showselect: false,
            showselect1: false,
            showselect2: false,
            selectName:'',
            optionList:[
                {name:'招牌',value:'1'},
                {name:'签署',value:'2'},
                {name:'video',value:'3'},
                {name:'部署',value:'4'}
            ]
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