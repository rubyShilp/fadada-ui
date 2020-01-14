export default {
    name:'faDatePicker',
    data() {
        return {
            focus: false,
            e:'',
            showDate:false,//日历显示与隐藏
            dateYear: new Date().getFullYear(),//获取当前年份
            dateMonth: new Date().getMonth() + 1,//获取当前月份
            dateDay: new Date().getDate(),   //获取当前日期
            dateHour:new Date().getHours(),//小时
            dateMinute:new Date().getMinutes(),//分钟
            dateWeek: 0,             //当前日期所属周几
            days: new Array(),       //保存当前日期日历周期
            counts: [7, 6, 5, 4, 3, 2, 1], //日历周期从周日到周一开始
            months:new Array(),              //获取月份周期循环
            years:new Array(),               //获取年份周期循环
            showMonth:false,            //显示日历月份
            showYear:false,             //显示日历年份
            coordinates:{},
            value:'',//日历显示
            selectYearTemp:new Date().getFullYear(),//当选择年份时,保存年份信息
        }
    },
    props: {
        value: {
            type: String,
            default: ""
        },
        formDate:{
            type: String,
            default: "yyyy-MM-dd"
        },
        startTime:{
            type:String,
            default:''  
        },
        endTime:{
            type:String,
            default:''  
        },
        dateTime:{
            type: Boolean,
            default:false
        },
        placeholder:{
            type: String,
            default:''
        },
        readonly:{
            type: Boolean,
            default:true
        },
        height:{
            type:Number,
            default:32
        },
        isbtn:{
            type:Boolean,
            default:true
        },
        label:'',
        type:'text',
        width:'',
        disabled:Boolean,
        color:{
            type:String,
            default:'#fdd435'
        },
    },
    computed:{ 
        model:{
            get() {
                if(this.value){
                    return this.formDateTime(new Date(this.value),this.formDate);
                }
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    watch:{
        showDate(){
            if(this.showDate && (this.left + 300)>document.documentElement.clientWidth){
                this.left = -(this.left + 300-document.documentElement.clientWidth);
            }
            //初始化日历
            this.dateCalendar(this.dateYear, this.dateMonth);
            if(this.showDate){
                this.showMonth = false;
                this.showYear = false;
            }
        }
    },
    beforeMount() {
        //根据当前日历是否显示时间分钟来判断formDate显示的方式
        if(this.dateTime){
            this.formDate='yyyy-MM-dd hh:mm:ss';
        }else{
            this.formDate='yyyy-MM-dd';
        }
        //初始化月份
        this.getMonths();
        //初始化年份
        this.getYears(this.selectYearTemp-4);
    },
    methods: {
        handleChange() {
            this.$nextTick(() => {
              this.$emit('change', this.model);
            });
        },
        //获取当前startTime的毫秒数
        startDateTime(){
            let startYear=new Date(this.startTime).getFullYear();
            let startMonth=new Date(this.startTime).getMonth()+1;
            let startDate=new Date(this.startTime).getDate();
            return new Date(startYear,startMonth,startDate).getTime();
        },
        //获取当前startTime的毫秒数
        endDateTime(){
            let endYear=new Date(this.endTime).getFullYear();
            let endMonth=new Date(this.endTime).getMonth()+1;
            let endDate=new Date(this.endTime).getDate();
            return new Date(endYear,endMonth,endDate).getTime();
        },
        //计算日历表
        dateCalendar(year, month) {
            //清空日期数组
            this.tds = new Array();
            this.days=new Array();
            //获取当月一号星期几
            let week = new Date(year, month - 1, 1).getDay();
            //获取当月天数
            let day = new Date(year, month, 0).getDate();
            //获取上个月的日期
            let lastDateMonth = new Date(year, month - 1, 1);
            if (new Date(lastDateMonth).getMonth() === 0) {
                new Date(lastDateMonth).setMonth(1);
            }
            //获取上月的年，月，天数
            let lastYear = new Date(lastDateMonth).getFullYear();
            let lastMonth = new Date(lastDateMonth).getMonth();
            let lastDays = new Date(lastYear, lastMonth, 0).getDate();
            if (lastMonth === 0) {
                lastMonth = 12;
                lastYear = lastYear - 1;
            }
            let startDateTime=this.startDateTime();
            let endDateTime=this.endDateTime();
            //根据上月天数获取后七天的数据
            var count = 0;
            for (let i = 1; i <= lastDays; i++) {
                if (i + 7 > lastDays) {
                    this.tds.push({
                        year: lastYear,
                        month: lastMonth,
                        today: i,
                        isDisabled:startDateTime?startDateTime>(new Date(lastYear,lastMonth,i).getTime()):false,
                        isEndDisabled:endDateTime?endDateTime<(new Date(lastYear,lastMonth,i).getTime()):false
                    });
                }
            }
            //根据当月天数循环添加到数组
            for (var i = 1; i <= day; i++) {
                this.tds.push({
                    year: year,
                    month: month,
                    today: i,
                    isDisabled:startDateTime?startDateTime>(new Date(year,month,i).getTime()):false,
                    isEndDisabled:endDateTime?endDateTime<(new Date(year,month,i).getTime()):false
                });
            }
            //获取下月后14天的数据
            for (var i = 1; i <= 14; i++) {
                if (this.dateMonth === 12) {
                    var dateMonth = 1;
                    var dateYear = year + 1
                } else {
                    var dateMonth = month + 1;
                    var dateYear = year;
                }
                this.tds.push({
                    year: dateYear,
                    month: dateMonth,
                    today: i,
                    isDisabled:startDateTime?startDateTime>(new Date(dateYear,dateMonth,i).getTime()):false,
                    isEndDisabled:endDateTime?endDateTime<(new Date(dateYear,dateMonth,i).getTime()):false
                });
            }
            //日历循环行数
            let rows=4;
            //判断日历循环的行数
            if(week==5 && day>30){
                rows=5;
            }
            if(week==6 && day>=30){
                rows=5;
            }
            //根据当前周期循环选择填充日期
            for(let i = this.counts[week],j=0;i<=this.tds.length;i+=7,j++){
                if(j<=rows){
                    this.days[j] = this.tds.slice(i,i+7);
                }else{
                    break;
                }
            }
        },
        //调整月份，根据月份显示不同的日历周期
        monthYearUpDown(dateMonth,type,e){
            if(this.showYear){
                if(type==1){
                    this.getYears(this.selectYearTemp-4);
                }else{
                    this.getYears(this.selectYearTemp+4);
                }
            }else{
                if(dateMonth<1){
                    this.dateMonth=12;
                    this.dateYear-=1;
                }else if(dateMonth>12){
                    this.dateMonth=1;
                    this.dateYear+=1;
                }else{
                    this.dateMonth=dateMonth;
                }
                if(this.dateMonth===(new Date().getMonth()+1) && this.dateYear===new Date().getFullYear()){
                    this.dateDay=new Date().getDate();
                }else{
                    this.dateDay=1;
                }
                this.dateCalendar(this.dateYear,this.dateMonth);
            }
            this.stopUp(e);
        },
        close(){
            const e = document.all ? window.event : arguments[0] ? arguments[0] : event;
            if(!this.$el.contains(e.target)){
                this.showDate=false;
            }
        },
        //选中日期
        choiceDay(data){
            //event.stopPropagation();
            if(data.isDisabled || data.isEndDisabled){
                return;
            }
            this.dateYear=data.year;
            this.dateMonth=data.month;
            this.dateDay=data.today;
            if(!this.isbtn){
                if(this.dateTime){
                    this.$emit('input',this.formDateTime(new Date(this.dateYear, this.dateMonth-1,this.dateDay,this.dateHour,this.dateMinute,new Date().getSeconds()),this.formDate));
                }else{
                    this.$emit('input',this.formDateTime(new Date(this.dateYear, this.dateMonth-1,this.dateDay),this.formDate));
                }
                this.showDate=false;
            }
        },
        //确认选中日期
        selectDateTime(){
            if(this.dateTime){
                this.$emit('input',this.formDateTime(new Date(this.dateYear, this.dateMonth-1,this.dateDay,this.dateHour,this.dateMinute,new Date().getSeconds()),this.formDate));
            }else{
                this.$emit('input',this.formDateTime(new Date(this.dateYear, this.dateMonth-1,this.dateDay),this.formDate));
            }
            this.showDate=false;
        },
        //清除选择的日期
        clearDateTime(){
            this.$emit('input','');
            this.dateYear=new Date().getFullYear();//获取当前年份
            this.dateMonth=new Date().getMonth() + 1;//获取当前月份
            this.dateDay=new Date().getDate();   //获取当前日期
            this.dateHour=new Date().getHours();//小时
            this.dateMinute=new Date().getMinutes();//分钟
        },
        //获取月份
        getMonths(){
            let months=[1,2,3,4,5,6,7,8,9,10,11,12];
            for(let i=0,j=1;i<months.length;i+=4,j++){
                if(j<4){
                    this.months[j] = months.slice(i,i+4);
                }else{
                    break;
                }
            }
        },
        //选择月份，加载月份日历
        selectMonth(month){
            this.dateMonth=month;
            this.dateDay=1
            this.dateCalendar(this.dateYear,this.dateMonth);
            this.showMonth=false;
        },
        //获取年份
        getYears(dateYear){
            //保存初始年份
            let years=new Array();
            this.selectYearTemp=dateYear;
            if(this.selectYearTemp>3000){
                return;
            }else if(this.selectYearTemp<1700){
                return;
            }
            for(var i=1700;i<=3000;i++){
                years.push(i);
            }
            //根据当前年份，获取12年的数据
            for(let k=0;k<years.length;k++){
                if(years[k]==this.selectYearTemp){
                    for(let i=k,j=1;i<years.length;i+=4,j++){
                        if(j<4){
                            //this.years[j] = years.slice(i,i+4);
                            this.$set(this.years,j,years.slice(i,i+4));
                        }else{
                            break;
                        }
                    }
                    break;
                }
            }
        },
        //选择年份和月份，加载日历
        selctYear(year){
            this.dateYear=year;
            this.showYear=false;
            this.showMonth=true;
        },
        //显示日历年月
        showHideYearMonth(type){
            if(type==1){
                this.showMonth===false?this.showMonth=true:this.showMonth=false;
                this.showYear=false;
                this.dateTime=false;
            }else{
                this.showYear===false?this.showYear=true:this.showYear=false;
                this.showMonth=false;
                this.dateTime=false;
            }
            this.getYears(this.selectYearTemp);
        },
        /**
         *向上调节小时或分钟 
         */
        upwardHourOrMinute(status){
            if(status===1){
                if(this.dateHour<24){
                    this.dateHour+=1;
                }else{
                    this.dateHour=1;
                }
            }else{
                if(this.dateMinute<60){
                    this.dateMinute+=1;
                }else{
                    this.dateMinute=1;
                }
            }
        },
        /**
         *向下调节小时或分钟
        */
        downHourOrMinute(status){
            if(status===1){
                if(this.dateHour<=24 && this.dateHour>1){
                    this.dateHour-=1;
                }else{
                    this.dateHour=24;
                }
            }else{
                if(this.dateMinute<=60 && this.dateMinute>1){
                    this.dateMinute-=1;
                }else{
                    this.dateMinute=60;
                }
            }
        },
        //格式化日历
        formDateTime(date,format){
            var args = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
                "S": date.getMilliseconds()
            };
            if (/(y+)/.test(format))
                format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var i in args) {
                var n = args[i];
                if (new RegExp("(" + i + ")").test(format))
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
            }
            return format;
        },
        //弹出日历控件
        togglePanel(){
            if(this.value!=''){
                this.dateYear=new Date(this.value).getFullYear();
                this.dateMonth=new Date(this.value).getMonth()+1;
                this.dateDay=new Date(this.value).getDate();
            }else{
                this.dateYear=new Date().getFullYear();
                this.dateMonth=new Date().getMonth() + 1;
                this.dateDay=new Date().getDate();
            }
            this.showDate=!this.showDate;
        },
        //
        //阻止默认事件及冒泡
        stopUp(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            };
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        }
    },
    mounted(){
        this.$nextTick(()=>{
            if(this.$el.parentNode.offsetWidth + this.$el.parentNode.offsetLeft - this.$el.offsetLeft <= 300){
                this.coordinates = {right: '0', top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`}
            }else{
                this.coordinates = {left: '670', top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`}
            }
            window.addEventListener('click', this.close);
        })
    },
    beforeDestroy () {
        window.removeEventListener('click', this.close)
    }
}