<template>
<div class="fa_signature_wrap">
    <div class="fa_signature_left">
        <fa-scrollbar class="signature-scrollbar">
            <div class="signature-left-wrap">
                <div class="signature-left-tit">
                    <h3>添加</h3>
                    <p>鼠标点击以下签章/日期，按住并拖放到文件内容中</p>
                </div>
                <div class="personal-signat">
                    <div class="personal-signature-pic">
                        <ul class="scroll-list">
                            <li>
                                <div class="usersign" :draggable='true' v-fa-sign-drap='signimage'>
                                    <img :src="signimage">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="flip-pages">
                        <i class="fa-icon-arrow-left prv-icon"></i>
                            <div class="flip-pages-txt">
                                <p>
                                    <span>默认签章</span>
                                </p>
                            </div>
                        <i class="fa-icon-arrow-right next-icon"></i>
                    </div>
                </div>
                <!--签名日期-->
                <div class="company-signature">
                    <div class="personal-signature-pic">
                        <h3>
                            <div class="usersign" :draggable='true' v-fa-sign-drap='signDate'>
                                <img :src='signDate'/>
                            </div>
                        </h3>
                    </div>
                    <div class="flip-pages">
                        <div class="flip-pages-txt">
                            <p>
                                <span>签名日期</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </fa-scrollbar>
    </div>
    <div class="fa_signature-center">
        <div class="wid-840">
            <fa-scrollbar class="signature-con" ref="scrollItems">
                <div ref='scr' v-fa-sign-drop='signAdd'>
                    <div v-for="(img,index) of imgSrcs" :key="img"  >
                        <div class="docItem" :style="{'background':'url('+img+') center 0 no-repeat'}">
                        </div>
                        <div class="pagebottom">
                            <div class="pleft">提示：为保证签章位置准确性，请勿将签章盖在两页之间的位置。</div>
                            <div class="pright">页码：{{index+1}}/{{imgSrcs.length}}</div>
                        </div>
                    </div>
                    <div class="sign-animate" v-fa-sign-mouse='dropUpInfo' v-for="(sign,index) of signImgs" :key='sign'>
                        <div class="usersign">
                            <img :src="sign"/>
                        </div>
                        <div class="removerIt" @click="removeSign(index)"><i class="fa-icon-close"></i></div>
                    </div>
                </div>
            </fa-scrollbar>
        </div>
    </div>
    <div class="fa_signature-right">
        <a href="javaScript:;" class="shrink-icon fa-icon-arrow-right"></a>
        <fa-scrollbar>
            <div class='signature-right-tit'>
                <h3>案件管理平台研发计划1.0.8需求</h3>
                <p>总页数:<span>{{imgSrcs.length}}</span></p>
            </div>
            <ul class='signature-right-list'>
                <li v-for="(img,index) of imgSrcs" :key="img" :class="{'cur':rightImgIndex===index}">
                    <img :src='img'>
                    <i class="bottom-nubmer">{{index+1}}</i>
                </li>
            </ul>
        </fa-scrollbar>
    </div>
</div>   
</template>
<style scoped>
.fa-scrollbar__wrap {
    overflow-x: hidden;
}
</style>
<script src='./documentEdit.js'></script>
