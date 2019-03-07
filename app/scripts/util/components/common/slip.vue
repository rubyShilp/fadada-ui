<template>
    <div class="fddui-lay-slipright">
        <h3 class="fddui-color-yellow">快速查找</h3>
        <p class="fddui-font-bold">文字颜色</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-color-gray
                        <span class="bottom">灰色<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-color-yellow
                        <span class="bottom">黄色<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-color-blue
                        <span class="bottom">蓝色<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-color-black
                        <span class="bottom">黑色<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-color-orange
                        <span class="bottom">橙色<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-color-red
                        <span class="bottom">红色<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">带链接文字</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-link-gray
                        <span class="bottom">灰色链接<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-link-yellow
                        <span class="bottom">黄色链接<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-link-blue
                        <span class="bottom">蓝色链接<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-link-black
                        <span class="bottom">黑色链接<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-link-orange
                        <span class="bottom">橙色链接<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-link-red
                        <span class="bottom">红色链接<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">段落</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-line-under
                        <span class="bottom">文字下划线<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-line-through
                        <span class="bottom">文字删除线<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-font-bold
                        <span class="bottom">字体加粗<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'color'}" class="fddui-tips">
                        .fddui-font-italic
                        <span class="bottom">文字斜体<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Badge冒泡</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'fonts'}" class="fddui-tips">
                        .fddui-badge-gray
                        <span class="bottom">灰色背景冒泡<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'fonts'}" class="fddui-tips">
                        .fddui-badge-yellow
                        <span class="bottom">黄色背景冒泡<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'fonts'}" class="fddui-tips">
                        .fddui-badge-blue
                        <span class="bottom">蓝色背景冒泡<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'fonts'}" class="fddui-tips">
                        .fddui-badge-red
                        <span class="bottom">红色背景冒泡<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-badge-sup
                        <span class="bottom">上标冒泡<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-badge-sup-blue
                        <span class="bottom">上标冒泡蓝色<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Button按钮组</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-white
                        <span class="bottom">默认白底按钮<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-yellow
                        <span class="bottom">官方黄底按钮<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-blue
                        <span class="bottom">蓝底按钮<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-black
                        <span class="bottom">黑底按钮<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-gray
                        <span class="bottom">灰底按钮<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-disabled
                        <span class="bottom">按钮不可选<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-lar
                        <span class="bottom">长按钮<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'btn'}" class="fddui-tips">
                        .fddui-btn-mix
                        <span class="bottom">迷你按钮<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Tags</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag
                        <span class="bottom">默认tag<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-blue
                        <span class="bottom">蓝色tag<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-red
                        <span class="bottom">红色tag<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-green
                        <span class="bottom">绿色tag<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-gray
                        <span class="bottom">灰色tag<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-mix
                        <span class="bottom">迷你tag<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-gray-mix
                        <span class="bottom">灰色迷你<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-mini
                        <span class="bottom">超小标签<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'tag'}" class="fddui-tips">
                        .fddui-tag-blue-mini
                        <span class="bottom">蓝色超小标签<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Alert弹出</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-alert-yellow
                        <span class="bottom">默认alert<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-alert-blue
                        <span class="bottom">蓝色alert<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-alert-red
                        <span class="bottom">error弹出<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-alert-green
                        <span class="bottom">成功弹出<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-alert-gray
                        <span class="bottom">灰色弹出<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Dialog对话框</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-dialog
                        <span class="bottom">默认Dialog<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-dialog-title
                        <span class="bottom">Dialog标题<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-dialog-close
                        <span class="bottom">关闭图层<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-dialog-main
                        <span class="bottom">主要内容<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'alert'}" class="fddui-tips">
                        .fddui-dialog-btnwarp
                        <span class="bottom">Dialog按钮容层<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Loading页面加载</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'loading'}" class="fddui-tips">
                        .fddui-mask
                        <span class="bottom">统一黑色遮罩<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'loading'}" class="fddui-tips">
                        .fddui-loading-box
                        <span class="bottom">loading容层<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'loading'}" class="fddui-tips">
                        .fddui-loading-spinner
                        <span class="bottom">loading效果1<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'loading'}" class="fddui-tips">
                        .fddui-loading-holder
                        <span class="bottom">loading效果2<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'loading'}" class="fddui-tips">
                        .fddui-loading-text
                        <span class="bottom">loading效果3<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'loading'}" class="fddui-tips">
                        .fddui-loading-linel
                        <span class="bottom">loading效果4<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Form表单</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'input'}" class="fddui-tips">
                        .fddui-form-box
                        <span class="bottom">form容器<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'input'}" class="fddui-tips">
                        .fddui-form-error
                        <span class="bottom">表单错误文字颜色<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'input'}" class="fddui-tips">
                        .fddui-form-must
                        <span class="bottom">*标红<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'input'}" class="fddui-tips">
                        .fddui-error-close
                        <span class="bottom">显示表单错误<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'input'}" class="fddui-tips">
                        .fddui-error-txt
                        <span class="bottom">错误文本<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Table表格</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'table'}" class="fddui-tips">
                        .fddui-table
                        <span class="bottom">表格样式<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">分页样式</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'table'}" class="fddui-tips">
                        .fddui-page
                        <span class="bottom">分页容层<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'table'}" class="fddui-tips">
                        .fddui-page-num
                        <span class="bottom">页码部分<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'table'}" class="fddui-tips">
                        .fddui-page-size
                        <span class="bottom">分页按钮<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="fddui-font-bold">Icon</P>
        <div class="list">
            <ul>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-remind
                        <span class="bottom">提醒<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-remind2
                        <span class="bottom">提醒02<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-magnifier
                        <span class="bottom">放大镜<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-upload
                        <span class="bottom">上传<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-upload2
                        <span class="bottom">上传02<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-download
                        <span class="bottom">下载<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-user
                        <span class="bottom">人<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-question
                        <span class="bottom">问号<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-file
                        <span class="bottom">文件<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-del
                        <span class="bottom">删除<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-singing
                        <span class="bottom">签署<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-out
                        <span class="bottom">退出<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-pencil
                        <span class="bottom">签名<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-date
                        <span class="bottom">日期<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-users
                        <span class="bottom">多人<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-left
                        <span class="bottom">左边箭头<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-arrow
                        <span class="bottom">右边箭头<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-date2
                        <span class="bottom">日期02<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-shop
                        <span class="bottom">购物车<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-top
                        <span class="bottom">向上箭头<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-house
                        <span class="bottom">房子<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-eyes
                        <span class="bottom">隐藏眼睛<i></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'icon'}" class="fddui-tips">
                        .fddui-icon-openeyes
                        <span class="bottom">打开眼睛<i></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="fddui-marginbot-50"></div>
    </div>
</template>
<script>
export default {
    data:{
        
    },
    props:[],
    beforeMount(){
        
    }
}
</script>