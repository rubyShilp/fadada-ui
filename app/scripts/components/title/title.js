import Menu from './../../util/components/common/menu.vue';
import axios from 'axios';

export default {
    data() {
        return {
            num: 0
        }
    },
    components: {
        'v-menu': Menu
    },
    mounted() {

    },
    methods: {
        show(event) {
            let maxChars = 55;
            if (this.num.length > maxChars) {
                alert(1);
                return;
            }
        }
    }
}