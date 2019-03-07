<template>
    <label class="fa-switch" :class="{'fa-toggled':model}" :style="{'width':width+'px','height':height+'px','line-height':height+'px'}">
        <input type="checkbox" :disabled='disabled' v-model="model"/>
        <span class="fa-switch-core" :class="{'fa-cur':disabled}" :style="{'width':width+'px','height':height+'px','line-height':(height-6)+'px','background':model?color:bgColor}">
            <div class="fa-switch-beffor" v-fa-beffore='{width:width,model:model,height:height}' ></div>
        </span>
        <div>
            <span class="fa-switch-label" :class="{'fa-right':model,'fa-left':!model}" :style="{'height':height+'px','line-height':height+'px'}">
                {{model?leftName:rightName}}
            </span>
        </div>
    </label>
</template>
<script src='./toggleButton.js'></script>
