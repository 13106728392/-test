// pages/weekBox/weekBoxs.js
import initCalendar from '../template/calendar/index';
import { jump, setTodoLabels } from '../template/calendar/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeNum:1,
    colorChange:"red",
    videoCtx:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoCtx = wx.createVideoContext('myVideo');





















  },
  addAddresss(){

    if (wx.chooseAddress) {
      wx.chooseAddress({
        success: function (res) {
          console.log(JSON.stringify(res),5555)
        },
        fail: function (err) {
          console.log(JSON.stringify(err))
        }
      })
    } else {
      console.log('当前微信版本不支持chooseAddress');
    }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const conf = {
      multi: true, // 是否开启多选,
      // disablePastDay: true, // 是否禁选过去的日期
      /**
       * 初始化日历时指定默认选中日期，如：'2018-3-6' 或 '2018-03-06'
       * 注意：若想初始化时不默认选中当天，则将该值配置为除 undefined 以外的其他非值即可，如：空字符串, 0 ,false等。
      */
      // defaultDay: '2018-3-6', // 初始化后是否默认选中指定日期
      // noDefault: true, // 初始化后是否自动选中当天日期，优先级高于defaultDay配置，两者请勿一起配置
      
      /**
       * 选择日期后执行的事件
       * @param { object } currentSelect 当前点击的日期
       * @param { array } allSelectedDays 选择的所有日期（当mulit为true时，才有allSelectedDays参数）
       */
      afterTapDay: (currentSelect, allSelectedDays) => { },
      /**
       * 当改变月份时触发
       * @param { object } current 当前年月
       * @param { object } next 切换后的年月
       */
      whenChangeMonth: (current, next) => { 
        console.log(current, next);
      },
      /**
       * 日期点击事件（此事件会完全接管点击事件）
       * @param { object } currentSelect 当前点击的日期
       * @param { object } event 日期点击事件对象
       */
      onTapDay(currentSelect, event) { 
        console.log(currentSelect, event)
      },
      /**
       * 日历初次渲染完成后触发事件，如设置事件标记
       * @param { object } ctx 当前页面
       */
      afterCalendarRender(ctx) { },
    }

    initCalendar();
    // initCalendar(conf); 加入初始化配置
    setTodoLabels({
      pos: 'bottom',
      dotColor: '#40',
      days: [{
        year: 2019,
        month: 1,
        day: 1,
        todoText: '待办'
      }, {
        year: 2019,
        month: 1,
        day: 15,
      }],
    });
    console.log(this)
    let num = setInterval(()=>{
      if (this.data.changeNum > 50) {
        this.setData({
          colorChange: 'yellow'
        })
      }
      if(this.data.changeNum==100){
        this.setData({
          colorChange: 'green'
        })
        clearInterval(num);
      }
      this.data.changeNum++
      this.setData({
        changeNum: this.data.changeNum
      })
    },100)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})