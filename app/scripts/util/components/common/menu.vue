<template>
    
</template>
<script>
export default {
    data:{
        homehover:true,
        colorhover:false,
        fontshover:false,
        islayout:false,
        titlehover:false,
        btnhover:false,
        radiohover:false,
        taghover:false,
        alerthover:false,
        tipshover:false,
        loadinghover:false,
        inputhover:false,
        checkboxhover:false,
        selecthover:false,
        switchhover:false,
        stepshover:false,
        tablehover:false
    },
    props:['ishome','iscolor','isfont','islayout','istitle','isbtn','isradio','istag','isalert','istips','isloading','isinput','ischeck','isselect','isswitch','isstep','istab'],
    beforeMount(){
        this.homehover = this.ishome;
        this.colorhover = this.iscolor;
        this.fontshover = this.isfont;
        this.layhover = this.islayout;
        this.titlehover = this.istitle;
        this.btnhover = this.isbtn;
        this.radiohover = this.isradio;
        this.taghover = this.istag;
        this.alerthover = this.isalert;
        this.tipshover = this.istips;
        this.loadinghover = this.isloading;
        this.inputhover = this.isinput;
        this.checkboxhover = this.ischeck;
        this.selecthover = this.isselect;
        this.switchhover = this.isswitch;
        this.stepshover = this.isstep;
        this.tablehover = this.istab;
    }
}
</script>