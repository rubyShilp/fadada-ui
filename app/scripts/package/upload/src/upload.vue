<template>
<div :style="{'width':width+'px'}">
    <div class="fa-input-box">
        <fa-progress v-if="showProgressHiddent" :text-inside='false' :percentage='percentage'  :stroke-width='6' color='#67c23a'></fa-progress>
        <slot></slot>
        <input type="file" v-fa-file='workFile' class="fa-input-file" multiple @change="upload($event)"/>
    </div>
    <ul class="fa-upload-list">
        <li v-for="(list,index) of fileList" :key="list">
            <a href="javaScript:;" :title="list.fileName"><i :class="list.icon" style="margin-right:7px;"></i>{{list.fileName}}</a>
            <label>
                <i class="fa-icon-show fa-icon-upload-success fa-icon-circle-check"></i>
                <i class="fa-icon-hide fa-icon-download" @click="downloadFile(list)"></i>
                <i class="fa-icon-hide fa-icon-close" @click="deleteFile(index)"></i>
            </label>
        </li>
    </ul>
</div>    
</template>
<script>
export default {
    name:'faUpload',
    data(){
        return{
            workFile:"",
            showProgressHiddent:false,
        }
    },
    props:{
        //宽度
        width:{
            type:Number,
            default:360
        },
        //附件列表
        fileList:{
            type:Array,
            default:new Array()
        },
        //可上传的附件类型
        fileTypes:{
            type:String,
            default:'.docx,.pdf,.doc,.wps,.xlsx,.xls,.jpg,.png,.jpeg,.jpng'
        },
        //最多上传多少个文件
        limit:{
            type:Number,
            default:3
        },
        //上传文件最大不会超过多少M
        size:{
            type:Number,
            default:20
        },
        //是否显示上传进度条
        showProgress:{
            type:Boolean,
            default:false
        },
        //进度条百分比
        percentage:{
            type:Number,
            default:0
        }
    },
    watch:{
        fileList(){
            this.showProgressHiddent=false;
        }
    },
    methods:{
        //根据文件类型显示不同的图标
        findIcon(suffix){
            let icon='';
           if(suffix==='.xls' || suffix==='.xlsx') icon='fa-icon-excel';
           if(suffix==='.doc' || suffix==='.docx') icon='fa-icon-word';
           if(suffix==='.pdf') icon='fa-icon-pdf';
           if(suffix==='.jpeg' || suffix==='.jpg') icon='fa-icon-jpeg';
           if(suffix==='.png' || suffix==='.jpng') icon='fa-icon-png';
           return  icon;
        },
        //上传附件
        upload(e){
            this.workFile=this.fileUpload(e,this.size);
            if(!this.workFile){
                this.workFile='';
            }else{
                let suffix=this.workFile.name.substring(this.workFile.name.lastIndexOf('.'),this.workFile.name.length);
                let fileList={
                    suffix:suffix,
                    fileName:this.workFile.name,
                    icon:this.findIcon(suffix)
                }
                this.$emit('upload',fileList);
            }
        },
        //判断上传的附件
        fileUpload(e,size){
            if(this.fileList.length==this.limit){
                this.$message('最多只能上传'+this.limit+'个文件');
                return;
            }
            let files = e.target.files || e.dataTransfer.files;
            if(!files.length){
                return false;
            }
            let fileType=files[0].name.substring(files[0].name.lastIndexOf('.'),files[0].name.length);
            let type=this.fileTypes.split(',');
            let fileTypeBoolean=false;
            for(let i=0;i<type.length;i++){
                if(fileType===type[i]){
                    fileTypeBoolean=true;
                    break;
                }
            }
            if(!fileTypeBoolean){
                this.$message("请上传"+this.fileTypes+"等格式文件!");
                this.workFile='';
                return false;
            }
            if((files[0].size/1024/1024)>=size){
                this.$message('文件大小不得超过'+size+'M');
                this.workFile='';
                return false;
            }else if((files[0].size/1024)===0){
                this.$message('文件大小不得小于0KB!');
                this.workFile='';
                return false;
            }
            if(this.showProgress){
                this.showProgressHiddent=true;
            }
            this.workFile='';
            return files[0];
        },
        //删除上传的文件
        deleteFile(index){
            this.$emit('deleteFile',index);
        },
        //下载文件
        downloadFile(list){
            this.$emit('downloadFile',list); 
        }
    }
}
</script>
