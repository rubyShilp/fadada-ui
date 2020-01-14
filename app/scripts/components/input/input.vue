<template>
    <div>
        <v-menu :isinput="true"></v-menu>
        <v-top></v-top>
        <div class="fommain">
            <h1>input表单样式</h1>
            <h3 class="fddui-color-gray fddui-margin-30">
                公共input输入框样式,textarea文本域样式,带图标和按钮的input样式
            </h3>
            <div class="fddui-form-warp">
                <div class="fddui-from-border fddui-margintop-20">
                    <div class="appinput">
                        <fa-input type='text'  v-model="userName" placeholder='默认输入框'></fa-input>
                    </div>
                    <div class="appinput">
                        <fa-input type='password' v-model="userName" placeholder='密码框'></fa-input>
                    </div>
                    <div class="appinput">
                        <fa-input type='textarea' v-model="textModel" rows='8'  maxlength='20' placeholder='文本域'></fa-input>
                    </div>
                    <div class="appinput">
                        <fa-input type='text' disabled v-model="textModel" placeholder='不可输入'></fa-input>
                    </div>
                    <div class="fddui-pre" style="margin-bottom:0">
                        &lt;fa-input type='text'  v-model="textModel" placeholder='默认输入框'>&lt;/fa-input><br>
                       &lt;fa-input type='textarea' v-model="textModel" rows='8'  maxlength='20' placeholder='文本域'>&lt;/fa-input><br>
                       &lt;fa-input type='text' disabled  v-model="textModel" placeholder='默认输入框'>&lt;/fa-input><br>
                    </div>
                </div>
            </div>

            <div class="fddui-form-warp">
                <div class="fddui-from-border fddui-margintop-20">
                    <div class="fddui-btn-group fddui-marginbot-20">
                        <a href="javascript:;" v-bind:class="{'fddui-btn-hover':labelPosition=='left'}" @click="arrayinput(0)">左对齐</a>
                        <a href="javascript:;" v-bind:class="{'fddui-btn-hover':labelPosition=='right'}" @click="arrayinput(1)">右对齐</a>
                        <a href="javascript:;" v-bind:class="{'fddui-btn-hover':labelPosition=='top'}" @click="arrayinput(2)">顶部对齐</a>
                    </div>
                    <fa-form :label-position="labelPosition" label-width="100px">
                        <fa-form-item label="身份证件号：">
                            <fa-input type='text' placeholder='' width='370'></fa-input>
                        </fa-form-item>
                        <fa-form-item label="手机号码：">
                            <fa-input type='text' placeholder='' width='370'></fa-input>
                        </fa-form-item>
                        <fa-form-item label="姓 名：">
                            <fa-input type='text' placeholder='' width='370'></fa-input>
                        </fa-form-item>
                    </fa-form>

                    <div class="fddui-pre fddui-margintop-20">
                        <code><h3>带label的input(左对齐)</h3></code><br>
                        &lt;fa-form label-position="left" label-width="100px"><br>
                            &nbsp;&nbsp;&lt;fa-form-item label="身份证件号："><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;fa-input type='text' placeholder='' width='370'>&lt;/fa-input><br>
                        &nbsp;&nbsp;&lt;/fa-form-item><br>
                        &lt;/fa-form><br>
                        <code><h3>带label的input(右对齐)</h3></code><br>
                        &lt;fa-form label-position="right" label-width="100px"><br>
                            &nbsp;&nbsp;&lt;fa-form-item label="身份证件号："><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;fa-input type='text' placeholder='' width='370'>&lt;/fa-input><br>
                        &nbsp;&nbsp;&lt;/fa-form-item><br>
                        &lt;/fa-form><br>
                        <code><h3>带label的input(顶部对齐)</h3></code><br>
                        &lt;fa-form label-position="top" label-width="100px"><br>
                            &nbsp;&nbsp;&lt;fa-form-item label="身份证件号："><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;fa-input type='text' placeholder='' width='370'>&lt;/fa-input><br>
                        &nbsp;&nbsp;&lt;/fa-form-item><br>
                        &lt;/fa-form><br>
                    </div>
                </div>
            </div>

            <div class="fddui-form-warp">
                <div class="fddui-from-border fddui-margintop-20">
                    <fa-form label-position="left" label-width="120px">
                        <fa-form-item label="身份证件号：" required>
                            <fa-input type='text' placeholder='' width='370'></fa-input>
                        </fa-form-item>
                        <fa-form-item label="手机号码：" required>
                            <fa-input type='text' placeholder='' width='370'></fa-input>
                        </fa-form-item>
                        <fa-form-item label="姓 名：" required>
                            <fa-input type='text' placeholder='' width='370'></fa-input>
                        </fa-form-item>
                    </fa-form>
                    <div class="fddui-pre">
                        <code><h3>*标注的input</h3></code><br>
                        &lt;fa-form label-position="top" label-width="100px"><br>
                            &nbsp;&nbsp;&lt;fa-form-item label="身份证件号：" required><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;fa-input type='text' placeholder='' width='370'>&lt;/fa-input><br>
                        &nbsp;&nbsp;&lt;/fa-form-item><br>
                        &lt;/fa-form><br>
                        <code><h3>带错误提示的input</h3></code><br>
                        &lt;div class="fddui-form-box"><br>
                            &nbsp;&nbsp;&lt;label>&lt;i class="fddui-form-must">*&lt;/i>身份照：&lt;/label><br>
                            &nbsp;&nbsp;&lt;input type="text" placeholder="" class="fddui-form-errorborder"><br>
                            &nbsp;&nbsp;&lt;i class="fddui-error-close">×&lt;/i><br>
                            &nbsp;&nbsp;&lt;p class="fddui-error-txt">这是一段文本错误提示&lt;/p><br>
                        &lt;/div>
                    </div>
                </div>
            </div>

            <div class="fddui-form-warp">
                <div class="fddui-from-border fddui-margintop-20">
                    <div class="fddui-form-box">
                        <fa-date-picker width='320' :startTime='startTime' :endTime='endTime' :dateTime='true' :isbtn='false'  placeholder="选择时间" v-model="dateTime"><i class="fa-icon-date" slot="left"></i></fa-date-picker>
                    </div>
                    <div class="fddui-form-box">
                       <fa-input type='text' width='320' height='35' placeholder='查询'><i class="fa-icon-search" slot='right'></i></fa-input>
                    </div>
                    <div class="fddui-pre" style="margin-bottom:0">
                        <code><h3>日期选择</h3></code><br>
                        &lt;fa-date-picker placeholder="选择时间">&lt;i class="fa-icon-date" slot="right">&lt;/i>&lt;/fa-date-picker><br>
                        <code><h3>查询</h3></code><br>
                        &lt;fa-input type='text' placeholder='查询'><br>
                            &nbsp;&nbsp;&lt;i class="fa-icon-search" slot='right'>&lt;/i><br>
                        &lt;/fa-input><br>
                    </div>
                </div>
            </div>
            <div class="fddui-form-warp">
                <div class="fddui-from-border fddui-margintop-20">
                    <div class="fddui-form-box">
                        <fa-city-picker v-model="address"></fa-city-picker>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./input.js"></script>