<template>
<rili class="fddcase-form-rili">
    <div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}">
        <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div>
        <div class="fa-text-field fa-input-content fa-select-position fa-input-border" :class="{'cur':focus}">
            <div style="margin-left:3px;cursor:pointer" @click='togglePanel($event)'><slot name="left"></slot></div>
            <input tabindex="0" :type='type' class="fa-text-field-input"  :placeholder="placeholder" v-model="model"
            @focus="focus = true" @click="togglePanel($event)" :readonly='readonly'
            @blur="focus = false" @change="handleChange" :disabled="disabled">
            <div style="margin-right:3px;cursor:pointer" @click='togglePanel($event)'><slot name="right"></slot></div>
            <!-- <div>
                <div class="fa-input-line"></div>
                <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
            </div> -->
        </div>
    </div>
    <div class="fddcase-form-rili-pop" v-if="showDate">
        <div class="rili-tit">
            <a href="javaScript:;" class="left" @click="monthYearUpDown(dateMonth-1,1,$event)"><i class="fa-icon-arrow-left"></i></a>
            <span style="cursor:pointer" @click="showHideYearMonth(1)">
                {{dateMonth}}月
            </span>
            <span style="cursor:pointer" @click="showHideYearMonth(2)">
                {{dateYear}}
            </span>
            <a href="javaScript:;" class="right" @click="monthYearUpDown(dateMonth+1,2,$event)"><i class="fa-icon-arrow-right"></i></a>
        </div>
        <div class="rili-list" :style="{'display':showYear?'block':'none'}">
            <ul class="rili-list-nian" v-for="year of years" :key="year">
                <li v-for="y of year" :key="y">
                  <a href="javaScript:;" :class="{'hover':dateYear===y}" @click="selctYear(y)">{{y}}</a>
                </li>
            </ul>
        </div><!-- 年 -->
        <div class="rili-list" :style="{'display':showMonth?'block':'none'}">
            <ul class="rili-list-yue"  v-for="month of months" :key="month">
                <li v-for="m of month" :key="m">
                  <a href="javaScript:;" :class="{'hover':dateMonth===m}" @click="selectMonth(m)">{{m}}月</a>
                </li>
            </ul>
        </div><!-- 月 -->
        <div class="rili-list" v-if="!showMonth && !showYear">
            <ol>
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
            </ol>
            <ul v-for="(day,index) of days" :key="day">
                <li v-for="d of day" :key="d" @click="choiceDay(d)">
                  <a href="javascript:;" :style="{'background':(dateYear===d.year && dateMonth===d.month&& dateDay===d.today)?color:''}" :class="{'hover':dateYear===d.year && dateMonth===d.month&& dateDay===d.today,'disabled':(dateMonth-1)===d.month || (dateMonth+1)===d.month,'disabled_click':d.isDisabled || d.isEndDisabled}">{{d.today}}</a>
                </li>
            </ul>
        </div><!-- 日 -->
        <div class="rili-time" :style="{'display':dateTime?'block':'none'}">
            <div>
                <a href="javaScript:;" class="top" @click="upwardHourOrMinute(1)"><i></i></a>
                <input type="text" v-model.trim="dateHour" readonly placeholder="HH"> :
                <a href="javaScript:;" class="bottom" @click="downHourOrMinute(1)"><i></i></a>
            </div>
            <div>
                <a href="javaScript:;" class="top" @click="upwardHourOrMinute(2)"><i></i></a>
                <input type="text" v-model.trim="dateMinute" readonly placeholder="MM">
                <a href="javaScript:;" class="bottom" @click="downHourOrMinute(2)"><i></i></a>
            </div>
        </div>
        <div class="rili-link" style="display:inherit" v-if="!showMonth && !showYear && isbtn">
            <a href="javaScript:;" class="fddcase-link" :style="{'background-color':color}" @click="selectDateTime()">确定</a>
            <a href="javaScript:;" class="fddcase-a-666" @click="clearDateTime()">清除</a>
        </div>
    </div>
</rili>
</template>
<script src='./datePicker.js'></script>
<style lang="less" scoped>
*{margin: 0; padding: 0}
input[type=text], input[type=password], select, textarea {
  @height:32px;
  .radius();
  border: 1px solid #e5e5e5;
  padding: 0 6px;
  color: #666;
  box-sizing: border-box;
  font-size: 14px;
  height: @height;
  line-height: @height;
  -webkit-appearance: none;
  outline:0;
  &:focus{
    border: 1px solid @green;
    .fddcase-shadow;
  }
  &:disabled{
    background: #fafafa;
    border:1px solid #e5e5e5;
    .txt-999;
    cursor: not-allowed;
  }
}

/* 颜色 */
@green:#fdd435;
@green1:#e8f7f4;

/* 文字颜色 */
.txt-fff{color: white;}
.txt-999{color: #999;}
.txt-666{color: #666;}
.txt-blue{color: #264361;}
.txt-green{color: @green;}

/* 圆角 */
.radius(@radius:3px){
  border-radius: @radius;
}

/* 阴影 */
.fddcase-shadow{
  box-shadow: 1px 1px 30px rgba(100,100,100,0.1);
}

/* 日历组件 */
.fddcase-form-rili{
  font-size: 14px;
  margin: 0 !important;
  padding: 0 !important;
  width: auto;
  height: auto;
  ul,ol{
    list-style:none;
  }
  a{
    text-decoration: none;
  }
  div{
    margin: 0px;
  }
  width:100%;
  position: relative;
  input{
    width: 100%;
    padding: 0 32px 0 6px;
  }
  .fddcase-ico-rili{
    position: absolute;
    right:8px;
    top:50%;
    margin-top: -8px;
    z-index: 2;
    cursor: pointer;
    height: auto !important;
    width: auto !important;
    line-height: normal !important;
  }
  .fddcase-form-rili-pop{
    width: 270px;
    background: white;
    .radius();
    .fddcase-shadow;
    left:0;
    position: absolute;
    top:30px;
    padding: 8px;
    z-index: 10;
    box-sizing: border-box;
    .rili-tit{
      position: relative;
      height: 36px;
      line-height: 34px;
      text-align: center;
      width: 100%;
      a,span{
        display: inline-block;
        vertical-align: middle;
      }
      a{
        width: 20px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        color: #000;
        top:8px;
        .radius(@radius: 100%);
        &:hover{
          background: #eee;
        }
      }
      .left{
        left: 0;
      }
      .right{
        right:0;
      }
    }
    .rili-list{
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      ol,ul{
        overflow: hidden;
      }
      ol{
        li{
          color: #000;
          font-weight: bold;
        }
      }
      li{
        width: 36px;
        height: 31px;
        line-height: 30px;
        float: left;
        padding: 0;
        text-align: center;
        margin: 0;
        a{
          .txt-666;
          &:hover{
            .txt-green;
          }
        }
      }
      .moral{
        .txt-666;
      }
      .disabled{
        color: #bfbfbf;
        //pointer-events: none;
      }
      .hover{
        color: white;
        background: @green;
        .radius(@radius: 30px);
        display: inline-block;
        vertical-align: middle;
        min-width: 30px;
        height: 30px;
        line-height: 30px;
        &:hover{
          color: white;
        }
      }
    }
    .rili-list-yue{
      li{
        width: 25%;
        a{
          width: 100%;
        }
      }
    }
    .rili-list-nian{
      li{
        width: 25%;
        a{
          width: 100%;
        }
      }
    }
    .rili-time{
      padding: 20px 0;
      display: inline-block;
      vertical-align: middle;
      div{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        input{
          width: 50px;
          padding: 0 6px;
          height: 30px;
          line-height: 28px;
          text-align: center;
        }
        a{
          position: absolute;
          left: 50%;
          margin-left: -6px;
          i{
            border: 6px solid transparent;
            border-bottom: 6px solid @green;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .top{
          top:-20px;
        }
        .bottom{
          i{
            border: 6px solid transparent;
            border-top: 6px solid @green;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
    .rili-link{
      text-align: right;
      padding-bottom: 10px;
      padding-top: 9px;
      display: inline-block;
      vertical-align: middle;
      a{
        margin-left: 15px;
        color: #666;
      }
      .fddcase-link{
        color: white;
        font-size: 13px;
        background: #3896ff;
        min-width: 70px;
        width: auto;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 30px;
        display: inline-block;
        vertical-align: middle;
        padding: 0 15px;
      }
    }
  }
}
.disabled_click{
  color: #bfbfbf !important;
  //pointer-events: none;
  cursor: not-allowed;
}
.fddui-form-icon {
		position: relative;
		max-width:100%;
		display: inline-block;
		i{
			position: initial;
			width:auto;
			font-size: 14px;
			color: #999;
			text-align: center;
			pointer-events: none;
      top:0;
    }
}
</style>

