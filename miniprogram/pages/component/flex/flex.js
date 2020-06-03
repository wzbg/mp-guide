// miniprogram/pages/component/flex/flex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgDraw: {}
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

  createImage: function() {
    this.setData({
      imgDraw: {
        background: "#576b95",
        width: "850px",
        height: "440px",
        borderRadius: '20rpx',
        views: []
      }
    })
  },

  onImgOK: function(e) {
    console.info("img ok:", e)
    wx.saveImageToPhotosAlbum({
      filePath: e.detail.path,
      success: res => {
        wx.showToast({
          title: "保存成功",
        })
      },
      fail: res => {
        wx.showToast({
          title: "保存失败",
        })
      }
    })
  },

  onImgErr: function(e) {
    console.info("img err:", e)
  }
})