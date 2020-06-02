// miniprogram/pages/component/rich-parser/rich-parser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagStyle: {
      img: 'font-size:0;display:block;',
    },
    html: "<div><img src='https://mmbiz.qpic.cn/mmbiz_gif/vEKqYFacecgfAHVZwKA0ia4GyMLct2ibWNbrAicU0s94OZrgc4a1e8fPEEiaORRhZ5hnVQb1d68bmrpOH2uhpa6myw/0?wx_fmt=gif' /><img src='https://mmbiz.qpic.cn/mmbiz_gif/Tia9oKjKIibgzVYt2CJiaPvlw4OcweiaicHS6ZDicVeME9tlOQwQsRBlBozicw2Z3FLNIMjd3IF9rxYQuUrxq0telBRFA/640?wx_fmt=gif' /><img src='https://mmbiz.qpic.cn/mmbiz_gif/vEKqYFacecgfAHVZwKA0ia4GyMLct2ibWNNBItrGIjXkUWWSiaukR8933SgFky8fwYnfqFyDkePTAicl0HALuqiaY7Q/0?wx_fmt=gif' /></div>"
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

  onTapImage: function(e) {
    console.log("iamge url: ", e.detail.src)
  }
})