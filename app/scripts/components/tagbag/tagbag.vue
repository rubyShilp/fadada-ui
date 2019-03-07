<template>
    <div>
        <v-menu :istag="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Tags & Badges</h1>
            <h3 class="fddui-color-gray fddui-margin-30">
                Tag基本标签使用,不带删除的标签
            </h3>
            <div class="fdd-appwrap">
                <div class="fdd-appbox fddui-padding-20">
                    <fa-tag>标签一</fa-tag>
                    <fa-tag type='info'>标签二</fa-tag>
                    <fa-tag type='success'>标签三</fa-tag>
                    <fa-tag type='warning'>标签四</fa-tag>
                    <fa-tag type='danger'>标签五</fa-tag>
                </div>
                <div class="fddui-pre" style="margin-bottom:0">
                    <code><h3>#基本标签使用</h3></code><br>
                    &lt;fa-tag>标签一&lt;/fa-tag><br>
                    &lt;fa-tag type='info'>标签二&lt;/fa-tag><br>
                    &lt;fa-tag type='success'>标签三&lt;/fa-tag><br>
                    &lt;fa-tag type='warning'>标签四&lt;/fa-tag><br>
                    &lt;fa-tag type='danger'>标签五&lt;/fa-tag><br>
                </div>
            </div>
            <h3 class="fddui-color-gray fddui-margin-30">
                带有删除的标签基本使用
            </h3>
            <div class="fdd-appwrap" style="margin-bottom:15px;">
                <div class="fdd-appbox fddui-padding-20">
                    <fa-tag closable  @close='tagClose'>标签一</fa-tag>
                    <fa-tag type='info' closable  @close='tagClose'>标签二</fa-tag>
                    <fa-tag type='success' closable  @close='tagClose'>标签三</fa-tag>
                    <fa-tag type='warning' closable  @close='tagClose'>标签四</fa-tag>
                    <fa-tag type='danger' closable  @close='tagClose'>标签五</fa-tag>
                </div>
                <div class="fddui-pre" style="margin-bottom:0">
                    <code><h3>#带删除的标签</h3></code><br>
                    &lt;fa-tag closable  @close='tagClose'>标签一&lt;/fa-tag><br>
                    &lt;fa-tag type='info' closable  @close='tagClose'>标签二&lt;/fa-tag><br>
                    &lt;fa-tag type='success' closable  @close='tagClose'>标签三&lt;/fa-tag><br>
                    &lt;fa-tag type='warning' closable  @close='tagClose'>标签四&lt;/fa-tag><br>
                    &lt;fa-tag type='danger' closable  @close='tagClose'>标签五&lt;/fa-tag><br>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./tagbag.js"></script>