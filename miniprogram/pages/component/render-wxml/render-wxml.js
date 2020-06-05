// miniprogram/pages/component/render-wxml/render-wxml.js
const wxml = '<image class="img" src="https://mmbiz.qpic.cn/mmbiz_jpg/Tia9oKjKIibgwGcGEiaxnjoPzEn5nZJvOXC54TrcmpOZRngu4WZdXXzTmoOJRX39LjHG4nRdtswoNSHajdaeZI0yA/640?wx_fmt=jpeg"></image>'
const style = {
  img: {
    width: 375,
    height: 200,
    borderRadius: 10
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
  },

  renderToCanvas() {
    const p1 = this.widget.renderToCanvas({ wxml, style })
    p1.then(res => {
      console.log('container', res.layoutBox)
      this.container = res
    })
  },

  extraImage() {
    const p2 = this.widget.canvasToTempFilePath()
    p2.then(res => {
      console.log('tempFilePath', res.tempFilePath)
      this.setData({
        src: res.tempFilePath,
        width: this.container.layoutBox.width,
        height: this.container.layoutBox.height
      })
    })
  },

  onTapSaveBtn() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.src,
      success: res => {
        wx.showToast({
          title: '保存成功',
        })
      },
      fail: res => {
        wx.showToast({
          title: '保存失败',
        })
      }
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