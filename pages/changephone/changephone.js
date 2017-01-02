Page({
    //事件处理函数
    bindViewTap: function() {
         wx.navigateTo({
         url: '../nichen/nichen'
    })
  },
  data: {
    modalHidden: true,
  },
  modalTap: function(e) {
    this.setData({
      modalHidden: false
    })
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },

})