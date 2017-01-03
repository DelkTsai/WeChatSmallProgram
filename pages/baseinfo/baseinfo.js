// pages/nichen/baseinfo.js
Page({
  data:{
    imgUrl:'../../image/avatar.png',
    index:1,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  setPhotoInfo : function(){
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        var tempFilePaths = res.tempFilePaths;
        that.setData({imgUrl:tempFilePaths})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  //事件处理函数
    bindViewTap: function() {
         wx.navigateTo({
          url: '../postInfos/postInfos'
    })
  },
})