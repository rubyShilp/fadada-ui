import {mapState} from 'vuex';
export default {
    data(){
        return{
            i18nName:'zh'
        }
    },
    computed: {
        ...mapState({
            url:state=>state.url
        })  
    },
    watch: {
        i18nName(){
            this.$i18n.locale=this.i18nName
        }
    },
}