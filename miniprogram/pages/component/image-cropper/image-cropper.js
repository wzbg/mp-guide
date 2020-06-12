// miniprogram/pages/component/image-cropper/image-cropper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取到image-cropper实例
    this.cropper = this.selectComponent('#image-cropper')
    wx.showLoading({
      title: '加载中'
    })
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

  cropperload: function (e){
    console.log('cropper初始化完成')
  },

  loadimage: function (e){
    console.log('图片加载完成', e.detail)
    wx.hideLoading()
    // 重置图片角度、缩放、位置
    this.cropper.imgReset()
  },

  clickcut: function (e) {
    console.log('裁剪图片', e.detail)
    // 点击裁剪框阅览图片
    wx.previewImage({
      urls: [e.detail.url] // 需要预览的图片http链接列表
    })
  }
})