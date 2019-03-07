<template>
<div>
    <div class="fdd-left">
        <div class="fdd-logo">
            <i><img src="./../../../images/logo.png"></i>
            <span>StyleGuide2.0</span>
            <fa-select v-model="i18nName" style="margin-left: 50px;" width='120' height='32' placeholder='请选择下拉框'>
                <fa-option label='中文' value='zh'></fa-option>
                <fa-option label='英文' value='en'></fa-option>
            </fa-select>
        </div>
        <div class="fdd-menu">
            <h3>ELEMENTS</h3>
            <p v-bind:class="{'fdd-link-homeactive':url==='/home'}">
                <i class="fdd-icon-home"></i>
                <router-link :to="{name:'home'}">HomeDemo</router-link>
            </p>
            <p v-bind:class="{'fdd-link-coloractive':url==='/color'}">
                <i class="fdd-icon-color"></i>
                <router-link :to="{name:'color'}">Color Style</router-link>
            </p>
            <p v-bind:class="{'fdd-link-fontsactive':url==='/fonts'}">
                <i class="fdd-icon-fonts"></i>
                <router-link :to="{name:'fonts'}">Fonts</router-link>
            </p>
            <p v-bind:class="{'fdd-link-layoutactive':url==='/layout'}">
                <i class="fdd-icon-layout"></i>
                <router-link :to="{name:'layout'}">Layout</router-link>
            </p>
            <h3>BASIC</h3>
            <p v-bind:class="{'fdd-link-buttonactive':url==='/btn'}">
                <i class="fdd-icon-button"></i>
                <router-link :to="{name:'btn'}">Buttons</router-link>
            </p>
            <p v-bind:class="{'fdd-link-tagactive':url==='/tag'}">
                <i class="fdd-icon-tagbadges"></i>
                <router-link :to="{name:'tag'}">Tags  &  Badges</router-link>
            </p>
            <p v-bind:class="{'fdd-link-alertactive':url==='/alert'}">
                <i class="fdd-icon-alert"></i>
                <router-link :to="{name:'alert'}">Alerts</router-link>
            </p>
            <p v-bind:class="{'fdd-link-tipsactive':url==='/tips'}">
                <i class="fdd-icon-tips"></i>
                <router-link :to="{name:'tips'}">Tips</router-link>
            </p>
            <p v-bind:class="{'fdd-link-loadingactive':url==='/loading'}">
                <i class="fdd-icon-loading"></i>
                <router-link :to="{name:'loading'}">Loading</router-link>
            </p>
            <p v-bind:class="{'fdd-link-tipsactive':url==='/step'}">
                <i class="fdd-icon-tips"></i>
                <router-link :to="{name:'step'}">Steps 步骤条</router-link>
            </p>
            <h3>Forms & Tab</h3>
            <p v-bind:class="{'fdd-link-inputactive':url==='/input'}">
                <i class="fdd-icon-input"></i>
                <router-link :to="{name:'input'}">Input</router-link>
            </p>
            <p v-bind:class="{'fdd-link-radio':!radiohover,'fdd-link-radioactive':url==='/radio'}">
                <i class="fdd-icon-radio"></i>
                <router-link :to="{name:'radio'}">Radio</router-link>
            </p>
            <p v-bind:class="{'fdd-link-checkboxactive':url==='/checkbox'}">
                <i class="fdd-icon-checkbox"></i>
                <router-link :to="{name:'checkbox'}">CheckBox</router-link>
            </p>
            <p v-bind:class="{'fdd-link-selectactive':url==='/select'}">
                <i class="fdd-icon-select"></i>
                <router-link :to="{name:'select'}">Select</router-link>
            </p>
             <p v-bind:class="{'fdd-link-tabactive':url==='/table'}">
                <i class="fdd-icon-table"></i>
                <router-link :to="{name:'table'}">Table</router-link>
            </p>
            <p v-bind:class="{'fdd-link-stepsactive':url==='/toggleButton'}">
                <i class="fa-icon-detalis"></i>
                <router-link :to="{name:'toggleButton'}">开关</router-link>
            </p>
            <p v-bind:class="{'fdd-link-stepsactive':url==='/Icon'}">
                <i class="fdd-icon-steps"></i>
                <router-link :to="{name:'Icon'}">Icon</router-link>
            </p>
            <p v-bind:class="{'fdd-link-stepsactive':url==='/sign'}">
                <i class="fdd-icon-steps"></i>
                <router-link :to="{name:'sign'}">签署</router-link>
            </p>
        </div>
    </div>
    <transition>
        <router-view></router-view>
    </transition>
</div>
</template>
<script src='./main.js'></script>
