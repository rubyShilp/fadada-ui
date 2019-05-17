import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import faTooltip from './../../package/tooltip/src/main';
import axios from 'axios';

export default {
    data() {
        return {
            dataList:[
                {name:'房屋租赁合同-租赁合同',userName:'shenz2hen@fadada.com',dateTime:'2018-08-02',status:'待我签'},
                {name:'房屋租赁合同-租赁合同',userName:'shenzhen@fadada.com',dateTime:'2018-08-02',status:'待我签',children:[
                    {name:'房屋租赁合同-租赁合同',userName:'shenzhen@fadada.com',dateTime:'2018-08-02',status:'待我签'},
                    {name:'房屋租赁合同-租赁合同',userName:'shenzhen@fadada.com',dateTime:'2018-08-02',status:'待我签'}
                ]}
            ],
            showtab01:false,
            showcode:false,
            showpage:false
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top,
        'fa-tooltip':faTooltip
    },  
    methods: {
        handleCurrentChange(row){
            console.log(row);
        }
    }
}