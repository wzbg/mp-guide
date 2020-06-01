// pages/component/progress/circle-progress/circle-progress.js
Component({
  /**
   * 组件的属性列表
   */
  runTimerid: 0,
  properties: {
    percent: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        this.draw(newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    percentage: "", //百分比
    animTime: "", // 动画执行时间
  }, // 私有数据，可用于模版渲染

  /**
   * 组件的方法列表
   */
  methods: {
    // 绘制圆形进度条方法
    run(c, w, h) {
      let that = this;
      var num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
      that.ctx2.arc(w, h, w - 8, -0.5 * Math.PI, num)
      that.ctx2.setStrokeStyle("#09bb07"); // 绿色
      that.ctx2.setLineWidth("16");
      that.ctx2.setLineCap("butt");
      that.ctx2.stroke();

      that.ctx2.beginPath();
      that.ctx2.setFontSize(40); // 注意不要加引号
      that.ctx2.setFillStyle("#b2b2b2"); // 浅灰色字体
      that.ctx2.setTextAlign("center");
      that.ctx2.setTextBaseline("middle");
      that.ctx2.fillText(c + "%", w, h);
      that.ctx2.draw();
    },
    // 动画效果实现
    canvasTap(start, end, time, w, h) {
      let that = this;
      start++;
      if (start > end) {
        return false;
      }
      that.run(start, w, h);
      
      that.runTimerid = setTimeout(function () {
        that.canvasTap(start, end, time, w, h);
      }, time);
    },

    draw(percent) {
      const id = 'runCanvas'
      const animTime = 500
      if (percent > 100) return
      if (!this.ctx2) {
        const ctx2 = wx.createCanvasContext(id, this)
        this.ctx2 = ctx2
      }

      let oldPercentValue = this.data.percentage
      this.setData({
        percentage: percent,
        animTime: animTime
      });
      var time = this.data.animTime / (this.data.percentage-oldPercentValue);

      const query = wx.createSelectorQuery().in(this)
      query.select('#' + id).boundingClientRect((res) => {
        var w = parseInt(res.width / 2);
        var h = parseInt(res.height / 2);
        if (this.runTimerid) clearTimeout(this.runTimerid)
        this.canvasTap(oldPercentValue, percent, time, w, h)
      }).exec()
    }
  }
})
