<template>
    <div>
        <v-menu :isbtn="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Button按钮组</h1>
            <div class="appwarp">
            <h3 class="fddui-color-gray fddui-margin-30">按钮基本样式,button按钮,a标签按钮,文字链接。</h3>
            <h3>Examples1 #</h3>
            <table class="fddui-table fddui-margin-30">
                <thead>
                    <tr>
                        <th class="fddui-font-bold">Demo</th>
                        <th class="fddui-font-bold">button样式</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp"><fa-button type='own' plain >朴素</fa-button></div></td>
                        <td><code>&lt;fa-button type='own' plain&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp"><fa-button type='own'>黄色</fa-button></div></td>
                        <td><code>&lt;fa-button type='own'&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp"><fa-button type='primary'>蓝色</fa-button></div></td>
                        <td><code>&lt;fa-button type='primary'&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                    <!-- <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp"><button class="fddui-btn-black">黑色</button></div></td>
                        <td><code>&lt;button class="fddui-btn-black"&gt;&lt;/button&gt;</code></td>
                    </tr> -->
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp"> <fa-button type='info'>灰色</fa-button></div></td>
                        <td><code>&lt;fa-button type='info'&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp"><fa-button type='info' disabled>不可点击</fa-button></div></td>
                        <td><code>&lt;fa-button type='info' disabled&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                </tbody>
            </table>
            <h3>Examples2 #</h3>
            <table class="fddui-table fddui-margin-30">
                <thead>
                    <tr>
                        <th class="fddui-font-bold">Demo</th>
                        <th class="fddui-font-bold">button样式</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp-lag"><fa-button type='own' plain width='360' height='45'>Large button</fa-button></div></td>
                        <td><code>&lt;fa-button type='own' plain width='360' height='45'&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp-lag"><fa-button type='own'  width='360' height='45'>Large button</fa-button></div></td>
                        <td><code>&lt;fa-button type='own' width='360' height='45'&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="fddui-pre">
                @在原有的button或者a标签中增加<code>.fddui-btn-lar</code>样式,该样式是改变按钮高度的设置，默认是40px高度按照官网登录
                和注册比例设定,宽度采用百分比100%的比例，根据外层div来设定宽度,外层div由使用者自行根据项目情况设定。
            </div> -->
            <h3 style="margin-top:25px;">Examples3 #</h3>
            <table class="fddui-table fddui-margin-30">
                <thead>
                    <tr>
                        <th class="fddui-font-bold">Demo</th>
                        <th class="fddui-font-bold">button样式</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp-lag"><fa-button type='own' plain width='80' height='22'>mix</fa-button></div></td>
                        <td><code>&lt;fa-button type='own' plain width='80' height='22'&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                    <tr>
                        <td class="fddui-padding-10"><div class="fdd-btnwarp-lag"><fa-button type='own'  width='80' height='22'>mix</fa-button></div></td>
                        <td><code>&lt;fa-button type='own' width='80' height='22'&gt;&lt;/fa-button&gt;</code></td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="fddui-pre">
                @在原有的button或者a标签中增加<code>.fddui-btn-mix</code>样式,该样式是改变按钮高度的设置，默认是22px高度按照官网登录
                和注册比例设定,宽度采用百分比100%的比例，根据外层div来设定宽度,外层div由使用者自行根据项目情况设定。
            </div> -->
            <h3 style="margin-top:25px;">Examples4 #</h3>
            <table class="fddui-table fddui-margin-30">
                <thead>
                    <tr>
                        <th class="fddui-font-bold">Demo</th>
                        <th class="fddui-font-bold">朴素按钮</th>
                        <th class="fddui-font-bold">button样式</th>
                        <th class="fddui-font-bold">说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><fa-button type='primary'>主要按钮</fa-button></td>
                        <td><fa-button type='primary' plain>主要按钮</fa-button></td>
                        <td><code>&lt;fa-button type='primary'&gt;&lt;/fa-button&gt;</code></td>
                        <td>添加<b>plain</b>属性</td>
                    </tr>
                    <tr>
                        <td><fa-button type='success'>成功按钮</fa-button></td>
                        <td><fa-button type='success' plain>成功按钮</fa-button></td>
                        <td><code>&lt;fa-button type='success'&gt;&lt;/fa-button&gt;</code></td>
                        <td>添加<b>plain</b>属性</td>
                    </tr>
                    <tr>
                        <td><fa-button type='info'>信息按钮</fa-button></td>
                        <td><fa-button type='info' plain>信息按钮</fa-button></td>
                        <td><code>&lt;fa-button type='info'&gt;&lt;/fa-button&gt;</code></td>
                        <td>添加<b>plain</b>属性</td>
                    </tr>
                    <tr>
                        <td><fa-button type='warning'>警告按钮</fa-button></td>
                        <td><fa-button type='warning' plain>警告按钮</fa-button></td>
                        <td><code>&lt;fa-button type='warning'&gt;&lt;/fa-button&gt;</code></td>
                        <td>添加<b>plain</b>属性</td>
                    </tr>
                    <tr>
                        <td><fa-button type='danger'>危险按钮</fa-button></td>
                        <td><fa-button type='danger' plain>危险按钮</fa-button></td>
                        <td><code>&lt;fa-button type='danger'&gt;&lt;/fa-button&gt;</code></td>
                        <td>添加<b>plain</b>属性</td>
                    </tr>
                    <tr>
                        <td><fa-button type='own'>主题按钮</fa-button></td>
                        <td><fa-button type='own' plain>主题按钮</fa-button></td>
                        <td><code>&lt;fa-button type='own'&gt;&lt;/fa-button&gt;</code></td>
                        <td>添加<b>plain</b>属性</td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="fddui-pre">
                @该为纯文字a标签链接的文字样式,以统一名称fddui-link-开头,link后接颜色英文,目前提供6种颜色可选择,
                如果需要自定义颜色则需要另加样式优先级即可。
            </div> -->
        </div>
        </div>
    </div>
</template>
<script src="./btn.js"></script>