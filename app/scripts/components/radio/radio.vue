<template>
    <div>
        <v-menu :isradio="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Radio单选按钮</h1>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    基础用法
                </div>
                <div>
                    <fa-radio v-model="radio" :label="1">备选项</fa-radio>
                    <fa-radio v-model="radio" :label="2">备选项</fa-radio>
                </div>
                <div class="codeRadio" @click="radioHident1=!radioHident1"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident1">
                    <p>要使用 Radio 组件，只需要设置<span class="codeExplain">v-model</span>绑定变量，选中意味着变量的值为相应 Radio label属性的值，<span class="codeExplain">label</span>可以是<span class="codeExplain">String</span>、<span class="codeExplain">Number</span>或<span class="codeExplain">Boolean</span>。</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> <span class="codeColor">v-model</span>="radio" :label="1">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> <span class="codeColor">v-model</span>="radio" :label="2">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    禁用状态
                </div>
                <div>
                    <fa-radio disabled v-model="radio" :label="1">备选项</fa-radio>
                    <fa-radio disabled v-model="radio" :label="2">备选项</fa-radio>
                </div>
                <div class="codeRadio" @click="radioHident2=!radioHident2"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident2">
                    <p>要使用 Radio 组件，只需要设置<span class="codeExplain">disabled</span>即可。</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> <span class="codeColor">v-model</span>="radio" disabled :label="1">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> <span class="codeColor">v-model</span>="radio" disabled :label="2">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    单选框组
                </div>
                <div>
                    <fa-radio-group v-model="radio">
                        <fa-radio :label="1">备选项</fa-radio>
                        <fa-radio :label="6">备选项</fa-radio>
                        <fa-radio :label="9">备选项</fa-radio>
                    </fa-radio-group>
                </div>
                <div class="codeRadio" @click="radioHident3=!radioHident3"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident3">
                    <p>
                        结合<span class="codeExplain">fa-radio-group</span>和子元素<span class="codeExplain">fa-radio</span>可实现单选框组,
                        给<span class="codeExplain">fa-radio-group</span>设置<span class="codeExplain">v-model</span>在子元素<span class="codeExplain">fa-radio</span>设置
                        <span class="codeExplain">label</span>,无需给<span class="codeExplain">fa-radio</span>绑定变量
                    </p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio-group</span> <span class="codeColor">v-model</span>="radio"><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> :label="1">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> :label="6">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> :label="9">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">/fa-radio-group</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    带边框的单选按钮
                </div>
                <div>
                    <fa-radio border v-model="radio" :label="1">备选项</fa-radio>
                    <fa-radio border v-model="radio" :label="2">备选项</fa-radio>
                </div>
                <div class="codeRadio" @click="radioHident4=!radioHident4"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident4">
                    <p>代边框的单选框，只需要设置<span class="codeExplain">border</span>即可。</p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> <span class="codeColor">v-model</span>="radio" border :label="1">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio</span> <span class="codeColor">v-model</span>="radio" border :label="2">&lt;<span class="codeColor">/fa-radio</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
            <fa-card shadow="always" style="width:80%;margin-top:20px;">
                <div slot="header" class="clearfix">
                    按钮单选框
                </div>
                <div>
                    <fa-radio-group v-model="radio" size="medium">
                        <fa-radio-button :label="1">备选项</fa-radio-button>
                        <fa-radio-button :label="6">备选项</fa-radio-button>
                        <fa-radio-button :label="9">备选项</fa-radio-button>
                    </fa-radio-group><br/>
                    <br/>
                    <fa-radio-group v-model="radio" size="small">
                        <fa-radio-button :label="1">备选项</fa-radio-button>
                        <fa-radio-button :label="6">备选项</fa-radio-button>
                        <fa-radio-button :label="9">备选项</fa-radio-button>
                    </fa-radio-group><br/>
                    <br/>
                    <fa-radio-group v-model="radio" size="mini">
                        <fa-radio-button :label="1">备选项</fa-radio-button>
                        <fa-radio-button :label="6">备选项</fa-radio-button>
                        <fa-radio-button :label="9">备选项</fa-radio-button>
                    </fa-radio-group><br/>
                </div>
                <div class="codeRadio" @click="radioHident5=!radioHident5"><i class="fa-icon-arrow-down"></i>显示代码</div>
                <div v-if="radioHident5">
                    <p>
                        结合<span class="codeExplain">fa-radio-group</span>和子元素<span class="codeExplain">fa-radio-button</span>可实现单选框组,
                        给<span class="codeExplain">fa-radio-group</span>设置<span class="codeExplain">v-model</span>在子元素<span class="codeExplain">fa-radio-button</span>设置
                        <span class="codeExplain">label</span>,无需给<span class="codeExplain">fa-radio-button</span>绑定变量
                    </p>
                    <br/>
                    <code style="color:#000;margin-top:10px;">
                        &lt;<span class="codeColor">template</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio-group</span> <span class="codeColor">v-model</span>="radio"><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio-button</span> :label="1">&lt;<span class="codeColor">/fa-radio-button</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio-button</span> :label="6">&lt;<span class="codeColor">/fa-radio-button</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-radio-button</span> :label="9">&lt;<span class="codeColor">/fa-radio-button</span>><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">/fa-radio-group</span>><br/>
                        &lt;/<span class="codeColor">template</span>>
                    </code>
                </div>
            </fa-card>
        </div>
    </div>
</template>
<script src="./radio.js"></script>