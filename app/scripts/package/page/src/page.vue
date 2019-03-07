<template>
    <div class="fddv3-list-page">
        <div class="fddv3-page-left">
            当前第{{currentPageNo}}页，共{{page===0?1:page}}页，共{{totalCount}}条
        </div>        
        <div class="fddv3-page">
            <a href="javaScript:;">
                <select v-model="pageSize" v-if="pageSizes.length>0" class="page-size" @change="handleSizeChange()">
                    <option v-for="size of pageSizes" :key="size" :value="size">{{size}}条/页</option>
                </select>
                <!-- <fa-select v-model="pageSize" width='90' v-if="pageSizes.length>0" @change="handleSizeChange()">
                    <fa-option v-for="size of pageSizes" :key="size" :label='size+"条/页"' :value='size'></fa-option>
                </fa-select> -->
            </a>
            <a href="javaScript:;">
                <span class="fddv3-icon-page-home" v-on:click="setCurrent(1)"></span>
            </a>
            <a href="javaScript:;" v-on:click="setCurrent(currentPageNo-1)">
                <span class="fddv3-icon-page-prev"></span>
            </a>
            <a href="javaScript:;" v-for="p in grouplist" :key="p" v-on:click="setCurrent(p)" v-bind:class="{'fddv3-page-hover':currentPageNo===p}">{{p}}</a>
            <a href="javaScript:;" v-on:click="setCurrent(currentPageNo+1)">
                <span class="fddv3-icon-page-next"></span>
            </a>
            <a href="javaScript:;">
                <span class="fddv3-icon-page-last" v-on:click="setCurrent(page)"></span>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        currentPageNo: {            // 当前页码
            type: Number,
            default: 1
        },
        totalCount: {            // 数据总条数
            type: Number,
            default: 0
        },
        pageSize: {            // 每页显示条数
            type: Number,
            default: 10
        },
        pageSizes:{           //可选每页条数
            type:Array,
            default:new Array()
        },
        pagegroup: {        // 分页条数 -- 奇数
            type: Number,
            default: 5,
            compute: function(v) {
                v = v > 0 ? v : 5;
                return v % 2 === 1 ? v : v + 1;
            }
        }
    },
    computed: {
        page: function() { // 总页数
            return Math.ceil(this.totalCount / this.pageSize);
        },
        grouplist: function() {
            var pages = [];
            if (this.page === 0) {
                pages.push(1);
            } else if (this.page <= this.pagegroup) {
                for (let i = 1; i <= this.page; i++) {
                    pages.push(i);
                }
            } else if (this.page - this.currentPageNo < this.pagegroup) {
                for (var i = this.page - 5; i <= this.page; i++) {
                    pages.push(i);
                }

            } else if (this.page > this.pagegroup && (this.currentPageNo - 2) < 1) {
                for (var i = 1; i <= 3; i++) {
                    pages.push(i);
                }
                pages.push('...');
                for (var i = this.page - 1; i <= this.page; i++) {
                    pages.push(i);
                }
            } else if (this.page > this.pagegroup && (this.currentPageNo - 2) > 0) {
                for (var i = this.currentPageNo - 1; i <= this.currentPageNo + 1; i++) {
                    pages.push(i);
                    if (pages.length == 3) {
                        break;
                    }
                }
                pages.push('...');
                for (var i = this.page - 1; i <= this.page; i++) {
                    pages.push(i);
                }
            }
            return pages;
        }
    },
    methods: {
        //分页
        setCurrent: function(current) {
            if (this.currentPageNo != current && current > 0 && current < this.page + 1) {
                this.currentPageNo = current;
                this.$emit('chanage', this.currentPageNo);
            }
        },
        //选择每页需要显示的条数,分页
        handleSizeChange(){
             this.$emit('sizeChanage',this.pageSize);
        }
    }
}
</script>

