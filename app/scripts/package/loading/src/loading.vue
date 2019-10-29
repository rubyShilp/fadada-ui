<template>
<div class="bg_loading" v-show="visible">
    <img src="./load.svg" style="width:26px;height:26px;" />
</div>
</template>
<style lang="less" scoped>
.bg_loading{
	position: fixed;
	z-index: 999;
	text-align: center;
	width: 100%;
    height: 100%;
	top:0;
	left: 0;
	right:0;
	background: rgba(0,0,0,.2);
	display: flex;
    flex-direction: column;
	img {
		position: absolute;
		float: left;
		align-self: center;
		width: 55px;
		height: 55px;
		margin-left: -28px;
		margin-top: -28px;
	    left: 50%;
	    top: 50%;
	 }
}
</style>
<script>
export default {
    data(){
        return{
			visible:false
        }
	}
}
</script>
