<template>
    <div>
        <v-menu :iscolor="true"></v-menu>
        <v-top></v-top>
        <section class="fdd-warp">
            <div class="fdd-main">
                <h1>Color主题</h1>
                <h3 class="fddui-color-gray fddui-margin-30">npm引入fddui后可直接根据标签和样式名定义你需要的样式和布局,color颜色主要以法大大官网黄黑配色为主,也提供了其他部分副色调,
                如果想更换整站主题色彩可以自行修改less变量。</h3>
                <h3>Examples #</h3>
                <table class="fddui-table fddui-margin-30">
                    <thead>
                        <tr>
                            <th class="fddui-font-bold">Demo -标准14号大小</th>
                            <th class="fddui-font-bold">样式</th>
                            <th class="fddui-font-bold">超链接</th>
                            <th class="fddui-font-bold">带超链接样式</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="fddui-color-gray">灰色</span></td>
                            <td><code>&lt;span class="fddui-color-gray"&gt;&lt;/span&gt;</code></td>
                            <td><a href="javascript:;" class="fddui-link-gray">灰色</a></td>
                            <td><code>&lt;a class="fddui-link-gray"&gt;&lt;/a&gt;</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-color-yellow">黄色</span></td>
                            <td><code>&lt;span class="fddui-color-yellow"&gt;&lt;/span&gt;</code></td>
                            <td><a href="javascript:;" class="fddui-link-yellow">黄色</a></td>
                            <td><code>&lt;a class="fddui-link-yellow"&gt;&lt;/a&gt;</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-color-blue">蓝色</span></td>
                            <td><code>&lt;span class="fddui-color-blue"&gt;&lt;/span&gt;</code></td>
                            <td><a href="javascript:;" class="fddui-link-blue">蓝色</a></td>
                            <td><code>&lt;a class="fddui-link-blue"&gt;&lt;/a&gt;</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-color-black">黑色</span></td>
                            <td><code>&lt;span class="fddui-color-black"&gt;&lt;/span&gt;</code></td>
                            <td><a href="javascript:;" class="fddui-link-black">黑色</a></td>
                            <td><code>&lt;a class="fddui-link-black"&gt;&lt;/a&gt;</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-color-orange">橙色</span></td>
                            <td><code>&lt;span class="fddui-color-orange"&gt;&lt;/span&gt;</code></td>
                            <td><a href="javascript:;" class="fddui-link-orange">橙色</a></td>
                            <td><code>&lt;a class="fddui-link-orange"&gt;&lt;/a&gt;</code></td>
                        </tr>
                        <tr>
                            <td><span class="fddui-color-red">红色</span></td>
                            <td><code>&lt;span class="fddui-color-red"&gt;&lt;/span&gt;</code></td>
                            <td><a href="javascript:;" class="fddui-link-red">红色</a></td>
                            <td><code>&lt;a class="fddui-link-red"&gt;&lt;/a&gt;</code></td>
                        </tr>
                    </tbody>
                </table>
                <h3>带段落、带下划线、带分割线、带斜体 #</h3>
                <h3 class="fddui-color-gray fddui-margin-20">Note that depending on <span class="fddui-color-orange fddui-line-under">how they are used</span>, 
                badges may be confusing for <span class="fddui-color-blue fddui-font-bold">users</span> of screen readers and similar assistive technologies. While the styling of badges provides a visual 
                cue as to their purpose, <span class="fddui-color-red fddui-line-through">these users will</span> simply be presented with the content of the badge. Depending on the 
                specific situation, these badges may seem like random additional words or <span class="fddui-color-orange fddui-font-italic">numbers</span> at the end of a sentence, 
                link, or button.<a href="javascript:;" class="fddui-link-orange" @click="showList()">{{istext}}</a></h3>
                <div class="fddui-pre" v-if="isShow">
                    @文字下划线：<code>.fddui-line-under</code>   @文字加粗：<code>.fddui-font-bold</code> <br>
                    @文字删除线：<code>.fddui-line-through</code>   @文字斜体：<code>.fddui-font-italic</code>
                </div>
            </div>
        </section>
    </div>
</template>
<script src="./color.js"></script>