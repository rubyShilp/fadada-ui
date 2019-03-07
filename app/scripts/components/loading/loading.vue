<template>
    <div>
        <v-menu :isloading="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>loading加载状态</h1>
            <h3 class="fddui-color-gray fddui-margin-30">loading加载效果为CSS3纯手写样式，无需任何图片,引用的话复制div层组合即可,暂时提供4种CSS loading加载样式</h3>
            <div class="fdd-appwrap">
                <div class="fdd-appbox">
                    <div class="btngroup"><fa-button type='own' plain @click="showloading(1)">Loading两秒</fa-button></div>
                </div>
                <div class="fddui-pre" style="margin-bottom:0">
                    <code style="color:#000">
                        <span class="codeColor">export defalut</span>&nbsp;{<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="codeColor">methods</span>:&nbsp;{<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showloading(status){<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="codeColor">if</span>&nbsp;(status===1)&nbsp;{<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="codeColor">this</span>.$loading(<span class="codeColor">true</span>);<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(()<span class="codeColor">=></span>{<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="codeColor">this</span>.$loading(<span class="codeColor">false</span>);<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},2000)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                        &nbsp;}
                    </code>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./loading.js"></script>