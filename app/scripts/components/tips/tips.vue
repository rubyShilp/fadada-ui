<template>
    <div>
        <v-menu :istips="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Tips消息提醒</h1>
            <h3 class="fddui-color-gray fddui-margin-30">tips消息提醒样式命名fddui-tips-为规范,提供多种tips辅助效果</h3>
            <div class="fdd-appwrap">
                <div class="fdd-appbox fddui-padding-20">
                    <div style="display: inline-flex;">
                        <fa-tips placement='top'>
                            <div slot="content">文本信息</div>
                            <fa-button type='own' >上方</fa-button>
                        </fa-tips>
                        <fa-tips placement='right'>
                            <div slot="content">文本信息</div>
                            <fa-button type='success' width='200' height='40'>右方</fa-button>
                        </fa-tips>
                        <fa-tips placement='down'>
                            <div slot="content">文本信息</div>
                            <fa-button type='info'>下方</fa-button>
                        </fa-tips>
                        <fa-tips placement='left'>
                            <div slot="content">文本信息</div>
                            <fa-button type='warning'>左方</fa-button>
                        </fa-tips>
                    </div>
                    <!-- <div class="divFile" v-fa-file-drop='obtainFile'>
                        <input type="file" v-fa-file='file'/>
                        {{file.name}}
                    </div> -->
                    <div class="fddui-pre" style="margin-bottom:0;margin-top:30px;">
                        <code><h3>Tips Top</h3></code><br>
                        &lt;fa-tips placement='top'><br>
                            &nbsp;&nbsp;&lt;div slot="content">文本信息&lt;/div><br/>
                            &nbsp;&nbsp;&lt;fa-button type='own'>上方&lt;/fa-button><br/>
                        &lt;/fa-tips><br>
                        <code><h3>Tips Right</h3></code><br>
                        &lt;fa-tips placement='right'><br>
                            &nbsp;&nbsp;&lt;div slot="content">文本信息&lt;/div><br/>
                            &nbsp;&nbsp;&lt;fa-button type='success'>右方&lt;/fa-button><br/>
                        &lt;/fa-tips><br>
                        <code><h3>Tips Down</h3></code><br>
                        &lt;fa-tips placement='down'><br>
                            &nbsp;&nbsp;&lt;div slot="content">文本信息&lt;/div><br/>
                            &nbsp;&nbsp;&lt;fa-button type='info'>下方&lt;/fa-button><br/>
                        &lt;/fa-tips><br>
                        <code><h3>Tips Left</h3></code><br>
                        &lt;fa-tips placement='left'><br>
                            &nbsp;&nbsp;&lt;div slot="content">文本信息&lt;/div><br/>
                            &nbsp;&nbsp;&lt;fa-button type='warning'>左方&lt;/fa-button><br/>
                        &lt;/fa-tips><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./tips.js"></script>