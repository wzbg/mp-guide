// miniprogram/pages/component/render-wxml/render-wxml.js
const wxml = '<image class="img" src="https://mmbiz.qpic.cn/mmbiz_jpg/Tia9oKjKIibgwGcGEiaxnjoPzEn5nZJvOXC54TrcmpOZRngu4WZdXXzTmoOJRX39LjHG4nRdtswoNSHajdaeZI0yA/640?wx_fmt=jpeg" />'
const style = {}
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  renderToCanvas() {
    const p1 = this.widget.renderToCanvas({ wxml, style })
    p1.then(res => {
      console.log('container', res.layoutBox)
      this.container = res
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.widget = this.selectComponent('.widget')
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

  }
})