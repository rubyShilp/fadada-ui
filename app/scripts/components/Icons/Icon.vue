<template>
    <div>
        <v-menu :isstep="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Icon图标集合</h1>
            <ul class="icon-list">
                <li v-for="icon of iconList" :key="icon">
                    <span>
                        <i :class="icon"></i>
                        <span class="icon-name">{{icon}}</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script src="./icon.js"></script>