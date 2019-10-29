<template>
    <div>
        
        <v-menu :islayout="true"></v-menu>
        <v-top></v-top>
        <!-- <div id='webGL'></div> -->
        <fa-document-edit></fa-document-edit>
        <!-- <div class="fommain">
            <h1>layout布局</h1>
            <h3 class="fddui-color-gray fddui-margin-30">
                默认包含官网以及定制项目常用布局
            </h3>
            <fa-row>
                <fa-col span='4'><div class="grid-content bg-purple-dark">11111</div></fa-col>
                <fa-col span='4'><div class="grid-content">22222</div></fa-col>
                <fa-col span='3'><div class="grid-content bg-purple-dark">33333</div></fa-col>
            </fa-row>
            <fa-row>
                <fa-col span='4'><div class="grid-content">44444</div></fa-col>
                <fa-col span='5'><div class="grid-content bg-purple-dark">333333</div></fa-col>
            </fa-row>
            <fa-cascader :options='options' v-model="name"></fa-cascader>
            {{name}}
        </div> -->
    </div>
</template>
<script src="./layout.js"></script>
<style lang="less" scoped>
.grid-content{
    border:1px solid #e5e5e5;
    min-height: 24px;
}
.bg-purple-dark{
    background: #99a9bf;
}
#webGL{
    padding-top: 150px;
    background: #fff;
}
canvas { width: 100%; height: 100%; }
</style>
