<template>
    <div>
        <v-top></v-top>
        <div class="fdd-warp">
            {{ $t('message.findMusic') }}
            <fa-button type='own' disabled>12312</fa-button>
        </div>
        
        <!-- <fa-document-edit></fa-document-edit> -->
        <div class="fdd-warp">
            <div class="appwarp">
                <h1>Fonts字体文字</h1>
                <h3 class="fddui-color-gray fddui-margin-30">字体主要应用为h1-h6基础标题字,全站公共标准字号。</h3>
                <div class="fdd-graybox">
                    <h1 class="fddui-margin-10">{{fonts}}&nbsp;&nbsp;<span class="fddui-badge-yellow">{{badge}}</span></h1>
                    <h2 class="fddui-margin-10">{{fonts}}&nbsp;&nbsp;<span class="fddui-badge-yellow">{{badge}}</span></h2>
                    <h3 class="fddui-margin-10">{{fonts}}&nbsp;&nbsp;<span class="fddui-badge-yellow">{{badge}}</span></h3>
                    <h4 class="fddui-margin-10">{{fonts}}&nbsp;&nbsp;<span class="fddui-badge-yellow">{{badge}}</span></h4>
                    <h5 class="fddui-margin-10">{{fonts}}&nbsp;&nbsp;<span class="fddui-badge-yellow">{{badge}}</span></h5>
                    <h6 class="fddui-margin-10">{{fonts}}&nbsp;&nbsp;<span class="fddui-badge-yellow">{{badge}}</span></h6>
                </div>
                <div>
                    <span>修改文本</span>
                   <fa-input type="text" width='320' v-model="fonts" maxlength="30"></fa-input>
                </div>
                <div class="fddui-pre">
                    &lt;h1&gt;Example heading &lt;span class="fddui-badge-yellow"&gt;New&lt;/span&gt; &lt;/h1&gt;<br>
                    &lt;h2&gt;Example heading &lt;span class="fddui-badge-yellow"&gt;New&lt;/span&gt; &lt;/h2&gt;<br>
                    &lt;h3&gt;Example heading &lt;span class="fddui-badge-yellow"&gt;New&lt;/span&gt; &lt;/h3&gt;<br>
                    &lt;h4&gt;Example heading &lt;span class="fddui-badge-yellow"&gt;New&lt;/span&gt; &lt;/h4&gt;<br>
                    &lt;h5&gt;Example heading &lt;span class="fddui-badge-yellow"&gt;New&lt;/span&gt; &lt;/h5&gt;<br>
                    &lt;h6&gt;Example heading &lt;span class="fddui-badge-yellow"&gt;New&lt;/span&gt; &lt;/h6&gt;
                </div>
                <h3>更换font badge背景色 #</h3>
                <table class="fddui-table fddui-margin-20">
                    <thead>
                        <tr>
                            <th class="fddui-font-bold">Demo</th>
                            <th class="fddui-font-bold">样式</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="fddui-badge-gray">灰色</span></td>
                            <td><code>.fddui-badge-gray</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-badge-yellow">黄色</span></td>
                            <td><code>.fddui-badge-yellow</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-badge-blue">蓝色</span></td>
                            <td><code>.fddui-badge-blue</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-badge-red">红色</span></td>
                            <td><code>.fddui-badge-red</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
</template>
<script src="./font.js"></script>