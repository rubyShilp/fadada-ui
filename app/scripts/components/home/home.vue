<template>
    <div>
        <v-menu :ishome="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>开始使用<i class="fddui-attach-identification"></i></h1>
            <div class="appwarp">
                <h3 class="fddui-color-gray fddui-margin-30"></h3>
                <div class="fddui-collapse">
                    <div class="fddui-collapse-list">
                        <span>{{$t('home.explain')}}</span><i class="fddui-icon-arrow"></i>
                    </div>
                    <div class="fddui-collapse-arrear fddui-margintop-10">
                        <div>
                            <span class="fddui-font-bold fddui-color-blue">main-yellow.css / main-blue.css</span> 
                            <span class="fddui-color-gray"> / {{$t('home.cssName')}}</span>
                        </div>
                        <div>
                            <span class="fddui-font-bold fddui-color-blue">fadada-ui</span> 
                            <span class="fddui-color-gray"> / 组件库</span>
                        </div>
                    </div>
                </div>
                <h3 class="fddui-margin-20">安装</h3>
                <h3 class="fddui-color-gray">
                    npm install fadada-ui --save-dev安装到本地
                </h3>
                <br/>
                <code style="padding-left:0;color:#000">
                    <span style="color:#3182bd">import</span>&nbsp;Vue&nbsp;<span style="color:#3182bd">from</span> 'vue';<br/>
                    <br/><span style="color:#3182bd">import</span>&nbsp;fadadaUI&nbsp;<span style="color:#3182bd">from</span> 'fadada-ui';<br/>
                    <br/><span style="color:#3182bd">import</span>&nbsp;'fadada-ui/lib/main.css';<br/>
                    <br/><span style="color:#3182bd">Vue</span>.use(fadadaUI);<br/>
                </code>
                <h3 class="fddui-margin-20">CDN</h3>
                <h3 class="fddui-color-gray">
                    暂无提供CDN加载
                </h3>
            </div>
        </div>
    </div>
</template>
<script src="./home.js"></script>