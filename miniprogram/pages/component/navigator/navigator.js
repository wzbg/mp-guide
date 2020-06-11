// miniprogram/pages/component/navigator/navigator.js
Page({
  data: {
    loading: false,
    active: true
  },
  // 点击back事件处理
  goBack: function () {
    wx.navigateBack()
    this.triggerEvent('back')
  },
  // 返回首页
  goHome: function(){
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  onPageScroll(res) {
    console.log(res)
    if (res.scrollTop > 400) {
      if (!this.data.active) {
        this.setData({
          active: true
        })
      }
    } else {
      if (this.data.active) {
        this.setData({
          active: false
        })
      }
    }
  }
})