<template>
<div class="fa-table fa-table--fit fa-table--enable-row-hover fa-table--enable-row-transition">
    <slot />
    <table style="width:800px" border="0">
        <thead class="has-gutter">
            <tr>
                <th v-for="(list,index) of itemList" :key="index"  style="background:rgb(247, 248, 250)"><div class="cell">{{list.label}}</div></th>
            </tr>
        </thead>
        <v-table-body :data='data' :columns="columns"></v-table-body>
    </table> 
</div>
</template>
<script>
import tableBody from './tableBody.js';
export default {
    components: {
      'v-table-body':tableBody
    },
    name:'v-table',
    data(){
        return{
            itemList:[]
        }
    },
    props:{
        data:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    mounted(){
        for(let i=0;i<this.$slots.default.length;i++){
            if(this.$slots.default[i].componentOptions){
                this.itemList.push({
                    label:this.$slots.default[i].componentOptions.propsData.label,
                    prop:this.$slots.default[i].componentOptions.propsData.prop,
                    children:this.$slots.default[i].componentOptions.children,
                })
            }
        }
    },
    computed:{
        columns() {
            let list=this.$store.state.columns;
            const newArr=list.reduce((all,next)=>all.some((item)=>item['prop']==next['prop'])?all:[...all,next],[]);
            return newArr;
        }
    },
    methods: {

    }
}
</script>