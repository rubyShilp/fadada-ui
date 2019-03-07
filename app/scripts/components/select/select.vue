<template>
    <div>
        <v-menu :isselect="true"></v-menu>
        <v-top></v-top>
        <div class="fommain">
            <h1>Select下拉菜单</h1>
            <h3 class="fddui-color-gray fddui-margin-30">
                默认select下拉框,带CSS下拉菜单
            </h3>
            <div class="fddui-form-warp">
                <div class="fddui-from-border fddui-margintop-20">
                    <div class="fddui-form-box">
                        <label class="top">默认select下拉框</label>
                        <fa-select v-model="selectName" placeholder='请选择下拉框'>
                            <fa-option v-for='op of optionList' :key="op" :label='op.name'   :value='op.value'></fa-option>
                            <!-- <fa-option label='saab'   value='saab'></fa-option>
                            <fa-option label='opel'   value='opel'></fa-option>
                            <fa-option label='audi'   value='audi'></fa-option> -->
                        </fa-select>
                    </div>
                    <div class="fddui-pre fddui-margintop-20">
                        &lt;fa-select v-model="selectName" placeholder='请选择下拉框'><br>
                            &nbsp;&nbsp;&lt;fa-option label='volvo'   value='volvo'>&lt;/fa-option><br>
                            &nbsp;&nbsp;&lt;fa-option label='saab'   value='saab'>&lt;/fa-option><br>
                            &nbsp;&nbsp;&lt;fa-option label='opel'   value='opel'>&lt;/fa-option><br>
                            &nbsp;&nbsp;&lt;fa-option label='audi'   value='audi'>&lt;/fa-option><br>
                        &lt;/fa-select><br>
                    </div>
                </div>

                <div class="fddui-from-border fddui-margintop-20">
                    <div class="fddui-form-box">
                        <label class="top">不可选</label>
                        <fa-select v-model="selectName" placeholder='请选择下拉框' disabled>
                            <fa-option label='volvo'   value='volvo'></fa-option>
                            <fa-option label='saab'   value='saab'></fa-option>
                            <fa-option label='opel'   value='opel'></fa-option>
                            <fa-option label='audi'   value='audi'></fa-option>
                        </fa-select>
                    </div>
                    <div class="fddui-pre fddui-margintop-20">
                        &lt;fa-select v-model="selectName" placeholder='请选择下拉框' disabled><br>
                            &nbsp;&nbsp;&lt;fa-option label='volvo'   value='volvo'>&lt;/fa-option><br>
                            &nbsp;&nbsp;&lt;fa-option label='saab'   value='saab'>&lt;/fa-option><br>
                            &nbsp;&nbsp;&lt;fa-option label='opel'   value='opel'>&lt;/fa-option><br>
                            &nbsp;&nbsp;&lt;fa-option label='audi'   value='audi'>&lt;/fa-option><br>
                        &lt;/fa-select><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./select.js"></script>