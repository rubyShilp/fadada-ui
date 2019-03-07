<template>
    <div>
        <v-menu :ischeck="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Switch 开关</h1>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    基础用法
                </div>
                <div>
                   <fa-toggle-button v-model="model" ></fa-toggle-button>
                </div>
                <div class="codeRadio" @click="radioHident1=!radioHident1"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident1">
                    <p>要使用 Switch 组件，只需要设置<span class="codeExplain">v-model</span>绑定变量。<span class="codeExplain">true</span>表示选中，<span class="codeExplain">false</span>未选中</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-toggle-button</span> <span class="codeColor">v-model</span>="model">&lt;<span class="codeColor">/fa-toggle-button</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    文字描述
                </div>
                <div>
                   <fa-toggle-button v-model="model" leftName='开' rightName='关'></fa-toggle-button>
                </div>
                <div class="codeRadio" @click="radioHident2=!radioHident2"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident2">
                    <p>文字描述只需设置左边或右边的文字即可<span class="codeColor">leftName</span>='开'&nbsp;&nbsp;&nbsp;<span class="codeColor">rightName</span>='关'</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-toggle-button</span> <span class="codeColor">v-model</span>="model" leftName='开' rightName='关'>&lt;<span class="codeColor">/fa-toggle-button</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    设置主题颜色
                </div>
                <div>
                   <fa-toggle-button v-model="model" color='#fdd435'></fa-toggle-button>
                </div>
                <div class="codeRadio" @click="radioHident3=!radioHident3"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident3">
                    <p>设置按钮主题颜色<span class="codeColor">color</span>='色系'</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-toggle-button</span> <span class="codeColor">v-model</span>="model" color='#fdd435'>&lt;<span class="codeColor">/fa-toggle-button</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    设置开关按钮大小宽度
                </div>
                <div>
                   <fa-toggle-button v-model="switchModel" width='200'></fa-toggle-button>
                </div>
                <div class="codeRadio" @click="radioHident4=!radioHident4"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident4">
                    <p>设置开关大小宽度<span class="codeColor">width</span>='200' <span class="codeColor">height</span>='30'</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-toggle-button</span> <span class="codeColor">v-model</span>="switchModel" width='200'>&lt;<span class="codeColor">/fa-toggle-button</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    禁用状态
                </div>
                <div>
                   <fa-toggle-button v-model="isSwitchTrue" disabled></fa-toggle-button> 
                   <fa-toggle-button v-model="isSwitchFalse" disabled></fa-toggle-button>
                </div>
                <div class="codeRadio" @click="radioHident5=!radioHident5"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident5">
                    <p>设置禁用状态<span class="codeColor">disabled</span></p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-toggle-button</span> <span class="codeColor">v-model</span>="isSwitchTrue" disabled>&lt;<span class="codeColor">/fa-toggle-button</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-toggle-button</span> <span class="codeColor">v-model</span>="isSwitchFalse" disabled>&lt;<span class="codeColor">/fa-toggle-button</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
        </div>
    </div>
</template>
<script src="./toggleButton.js"></script>