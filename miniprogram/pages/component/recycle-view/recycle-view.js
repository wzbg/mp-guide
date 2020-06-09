// miniprogram/pages/component/recycle-view/recycle-view.js
const createRecycleContext = require('miniprogram-recycle-view')
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var ctx = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this,
      itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
        width: 162,
        height: 100
      },
      // itemSizeFunc: function (item, idx) {
      //   return {
      //     width: 162,
      //     height: 182
      //   }
      // }
    })
    let newList = []
    for (let i = 0; i < 20; i++) {
      newList.push({
        id: i,
        name: `标题${i + 1}`
      })
    }
    ctx.append(newList)
    // ctx.update(beginIndex, list)
    // ctx.destroy()
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