// miniprogram/pages/component/rich-text/rich-text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      name: "div",
      children: [{
        type: "text",
        text: "杠铃卧推"
      }, {
        name: "img",
        attrs: {
          src: "https://mmbiz.qpic.cn/mmbiz_gif/vEKqYFacecgfAHVZwKA0ia4GyMLct2ibWNbrAicU0s94OZrgc4a1e8fPEEiaORRhZ5hnVQb1d68bmrpOH2uhpa6myw/0?wx_fmt=gif",
          style: "width: 100%"
        }
      }, {
        type: "text",
        text: "杠铃深蹲"
      }, {
        name: "img",
        attrs: {
          src: "https://mmbiz.qpic.cn/mmbiz_gif/Tia9oKjKIibgzVYt2CJiaPvlw4OcweiaicHS6ZDicVeME9tlOQwQsRBlBozicw2Z3FLNIMjd3IF9rxYQuUrxq0telBRFA/640?wx_fmt=gif",
          style: "width: 100%"
        }
      }, {
        type: "text",
        text: "杠铃硬拉"
      }, {
        name: "img",
        attrs: {
          src: "https://mmbiz.qpic.cn/mmbiz_gif/vEKqYFacecgfAHVZwKA0ia4GyMLct2ibWNNBItrGIjXkUWWSiaukR8933SgFky8fwYnfqFyDkePTAicl0HALuqiaY7Q/0?wx_fmt=gif",
          style: "width: 100%"
        }
      }]
    }]
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

  }
})