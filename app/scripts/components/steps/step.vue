<template>
    <div>
        <v-menu :isstep="true"></v-menu>
        <v-top></v-top>
        <div class="fdd-warp">
            <h1>steps</h1>
            <div class="fddui-form-warp">
                <div class="fddui-from-border fddui-margintop-20">
                    <label class="top">横向步骤条</label>
                    <div class="fddui-form-box" style="width:100%">
                        <fa-steps :active='active' width='200px' direction='horizontal'>
                            <fa-step title='已完成' icon='fa-icon-pencil'></fa-step>
                            <fa-step title='未完成' icon='fa-icon-tongji'></fa-step>
                            <fa-step title='已拒绝' icon='fa-icon-zhuye'></fa-step>
                        </fa-steps>
                        <fa-button @click="next()">下一步</fa-button>
                     </div>
                    <div class="fddui-pre fddui-margintop-20">
                        <code style="color:#000;margin-top:10px;">
                            &lt;<span class="codeColor">template</span>><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-steps</span> <span class="codeColor">:active</span>="active" width='200px' direction='horizontal'><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-step</span> title='已完成' icon='fa-icon-pencil'>&lt;/fa-step><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-step</span> title='未完成' icon='fa-icon-tongji'>&lt;/fa-step><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-step</span> title='已拒绝' icon='fa-icon-zhuye'>&lt;/fa-step><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">/fa-steps></span><br/>
                            &lt;/<span class="codeColor">template</span>>
                        </code>
                    </div> 
                </div>
                <div class="fddui-from-border fddui-margintop-20">
                    <label class="top">竖向步骤条</label>
                    <div class="fddui-form-box" style="width:100%">
                        <fa-steps :active='active' height='100px' direction='vertical'>
                            <fa-step title='已完成' icon='fa-icon-pencil'></fa-step>
                            <fa-step title='未完成' icon='fa-icon-tongji'></fa-step>
                            <fa-step title='已拒绝' icon='fa-icon-zhuye'></fa-step>
                        </fa-steps>
                        <fa-button @click="next()">下一步</fa-button>
                     </div>
                    <div class="fddui-pre fddui-margintop-20">
                        <code style="color:#0 00;margin-top:10px;">
                            &lt;<span class="codeColor">template</span>><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-steps</span> <span class="codeColor">:active</span>="active" height='100px' direction='vertical'><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-step</span> title='已完成' icon='fa-icon-pencil'>&lt;/fa-step><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-step</span> title='未完成' icon='fa-icon-tongji'>&lt;/fa-step><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">fa-step</span> title='已拒绝' icon='fa-icon-zhuye'>&lt;/fa-step><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="codeColor">/fa-steps></span><br/>
                            &lt;/<span class="codeColor">template</span>>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script src='./step.js'></script>
