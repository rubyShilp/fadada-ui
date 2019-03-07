export default {
    data(){
        return{
            
        }
    },
    props:{
        leftName:{
            type:String,
            default:''
        },
        rightName:{
            type:String,
            default:''
        },
        width:{
            type:String,
            default:'55'
        },
        height:{
            type:String,
            default:'22'
        },
        color:{
            type:String,
            default:''
        },
        bgColor:{
            type:String,
            default:''
        },
        value:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        } 
    },
    computed:{ 
        model:{
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
}