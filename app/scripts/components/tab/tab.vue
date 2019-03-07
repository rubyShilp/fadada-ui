<template>
    <div>
        <v-menu :istab="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>Table表格 tabbar选项卡</h1>
            <h3 class="fddui-color-gray fddui-margin-30">
                提供官方两种风格的tab表格样式
            </h3>
            <h3>Examples1 #</h3>
            <div class="appwarp fddui-margintop-20">
                <fa-table :data='dataList' :header-cell-style="{background:'#f7f8fa'}" highlight-current-row  @current-change="handleCurrentChange">
                    <fa-table-column type='expand'>
                        <template slot-scope="props">
                             <fa-table :data='props.row.children' :show-header='false' class="fa-div-margin">
                                <fa-table-column type='expand'>
                                    <div class="classPadding">12</div>
                                </fa-table-column>
                                <fa-table-column label='文件名称' prop='name'></fa-table-column>
                                <fa-table-column label='发件人' prop='userName'></fa-table-column>
                                <fa-table-column label='发起时间' prop='dateTime'></fa-table-column>
                                <fa-table-column label='文件状态' prop='status'></fa-table-column>
                            </fa-table>
                        </template>
                    </fa-table-column>
                    <fa-table-column label='文件名称' prop='name'></fa-table-column>
                    <fa-table-column label='发件人' prop='userName'></fa-table-column>
                    <fa-table-column label='发起时间' prop='dateTime'></fa-table-column>
                    <fa-table-column label='文件状态' prop='status'></fa-table-column>
                </fa-table>
                <a href="javascript:;" class="rightlink" @click="showtab01=!showtab01">展开代码</a>
            </div>
            <div class="fdd-appwrap fddui-margin-20" v-show="showtab01">
                <div class="fdd-appbox fddui-padding-20">
                    <div class="fddui-pre" style="margin-bottom:0">
                        <h3>Code1基本表格 #</h3>
                        &lt;fa-table :data='dataList' :header-cell-style="{background:'#f7f8fa'}"><br>
                            &nbsp;&nbsp;&lt;fa-table-column label='文件名称' prop='name'>&lt;/fa-table-column><br>
                            &nbsp;&nbsp;&lt;fa-table-column label='发件人' prop='userName'>&lt;/fa-table-column><br>
                            &nbsp;&nbsp;&lt;fa-table-column label='发起时间' prop='dateTime'>&lt;/fa-table-column><br>
                            &nbsp;&nbsp;&lt;fa-table-column label='文件状态' prop='status'>&lt;/fa-table-column><br>
                        &lt;/fa-table><br>
                    </div>
                </div>
            </div>

            <h3>Examples2 #</h3>
            <div class="appwarp fddui-margintop-20">
                <fa-table :data='dataList' :header-cell-style="{background:'#f7f8fa'}" @selection-change="handleSelectChange">
                    <fa-table-column type="selection" width="55"></fa-table-column>
                    <fa-table-column label='文件名称' prop='name'></fa-table-column>
                    <fa-table-column label='发件人' prop='userName'></fa-table-column>
                    <fa-table-column label='发起时间' prop='dateTime'></fa-table-column>
                    <fa-table-column label='文件状态' prop='status'></fa-table-column>
                </fa-table>
                <a href="javascript:;" class="rightlink" @click="showcode=!showcode">展开代码</a>
            </div>
            <div class="fdd-appwrap fddui-margintop-20" v-show="showcode">
                <div class="fdd-appbox fddui-padding-20">
                    <div class="fddui-pre" style="margin-bottom:0">
                        <h3>Code2较为复杂的表格 #</h3>
                        &lt;fa-table :data='dataList' :header-cell-style="{background:'#f7f8fa'}" @selection-change="handleSelectChange"><br>
                                &nbsp;&nbsp;&lt;fa-table-column type="selection" width="55">&lt;/fa-table-column><br>
                                &nbsp;&nbsp;&lt;fa-table-column label='文件名称' prop='name'>&lt;/fa-table-column><br>
                                &nbsp;&nbsp;&lt;fa-table-column label='发件人' prop='userName'>&lt;/fa-table-column><br>
                                &nbsp;&nbsp;&lt;fa-table-column label='发起时间' prop='dateTime'>&lt;/fa-table-column><br>
                                &nbsp;&nbsp;&lt;fa-table-column label='文件状态' prop='status'>&lt;/fa-table-column><br>
                            &lt;/fa-table><br>  
                    </div>
                </div>
            </div>

            <h3>Examples3 分页#</h3>
            <div class="appwarp fddui-margintop-20">
                <fa-table :data='dataList' :header-cell-style="{background:'#f7f8fa'}">
                    <fa-table-column label='文件名称' prop='name'></fa-table-column>
                    <fa-table-column label='发件人' prop='userName'></fa-table-column>
                    <fa-table-column label='发起时间' prop='dateTime'></fa-table-column>
                    <fa-table-column label='文件状态' prop='status'></fa-table-column>
                </fa-table>
                <!--分页-->
                <fa-page :pageSize='10' :totalCount='100' :currentPageNo='1' @chanage="employeeQuery"></fa-page>
                <a href="javascript:;" class="rightlink" @click="showpage=!showpage">展开代码</a>
            </div>
            <div class="fdd-appwrap fddui-margintop-20" v-if="showpage">
                <div class="fdd-appbox fddui-padding-20">
                    <div class="fddui-pre" style="margin-bottom:0">
                        <h3>分页 #</h3><br>
                        &lt;fa-page :pageSize='10' :totalCount='100' :currentPageNo='1' @chanage="employeeQuery">&lt;/fa-page><br>  
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script src="./tab.js"></script>