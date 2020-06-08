// miniprogram/pages/component/pull-to-refresh/pull-to-refresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTopValue: 0,
    scrollIntoViewId: '',
    refresherTriggered: false
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  onScrolltoupper: function(e){
    console.log('已达顶部', e.detail)
  },

  onScrolltolower: function(e){
    console.log('已达底部', e.detail)
  },

  onScroll: function(e) {
    console.log('滚动', e.detail)
  },

  willCompleteRefresh: function() {
    console.log('更新中')
    let intervalId = setInterval(() => {
      let pullingMessage = this.data.pullingMessage
      console.log(pullingMessage, pullingMessage == '更新中')
      if (pullingMessage.length < 6) {
        pullingMessage += '.'
      } else {
        pullingMessage = '更新中'
      }
      this.setData({
        pullingMessage
      })
    }, 500)
    setTimeout(() => {
      console.log('更新完成了')
      clearInterval(intervalId)
      this.setData({
        pullingMessage: "已刷新",
        refresherTriggered: false
      })
    }, 5000)
  }
})