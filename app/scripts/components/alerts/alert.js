import Menu from './../../util/components/common/menu.vue';
import Slip from './../../util/components/common/slip.vue';
import Top from './../../util/components/common/top.vue';
import axios from 'axios';

export default {
    data() {
        return {
            dialog1: false,
            dialog2:false,
            dialog3:false,
            dialog4:false,
            dialog5:false,
            dialog6:false,
            dialog7:false,
            formLabelAlign:{name:'',region:'',type:''}
        }
    },
    components: {
        'v-menu': Menu,
        'v-slip': Slip,
        'v-top': Top
    },
    methods: {
        //弹出提示框
        openMessage(val){
            if(val==1){
              this.$message({
                message:'hello world',
                type:'success'
              })
            }else if(val==2){
              this.$message({
                message:'hello world',
                type:'info'
              })
            }else if(val==3){
              this.$message({
                message:'hello world',
                type:'warning'
              })
            }else if(val==4){
              this.$message({
                message:'hello world',
                type:'danger'
              })
            }else if(val==5){
              this.$message({
                message:'hello world',
                type:'own'
              })
            }else{
              this.$message('hello world');
            }
        }
    }
}