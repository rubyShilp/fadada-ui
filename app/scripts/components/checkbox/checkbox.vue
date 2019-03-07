<template>
    <div>
        <v-menu :ischeck="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Checkbox复选按钮</h1>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    基础用法
                </div>
                <div>
                   <fa-checkbox v-model="checked">备选项</fa-checkbox>
                </div>
                <div class="codeRadio" @click="radioHident1=!radioHident1"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident1">
                    <p>要使用 checkbox 组件，只需要设置<span class="codeExplain">v-model</span>绑定变量。<span class="codeExplain">true</span>表示选中，<span class="codeExplain">false</span>未选中</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-checkbox</span> <span class="codeColor">v-model</span>="checked">&lt;<span class="codeColor">/fa-checkbox</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    禁用状态
                </div>
                <div>
                   <fa-checkbox disabled v-model="checked">备选项</fa-checkbox>
                </div>
                <div class="codeRadio" @click="radioHident2=!radioHident2"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident2">
                    <p>要禁用checkBox只需设置<span class="codeColor">disabled</span></p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-checkbox</span> <span class="codeColor">v-model</span>="checked" disabled>&lt;<span class="codeColor">/fa-checkbox</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
        </div>
    </div>
</template>
<script src="./checkbox.js"></script>