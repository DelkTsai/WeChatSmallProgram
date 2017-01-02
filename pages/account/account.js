Page({
     bindViewTap: function() {
         wx.navigateTo({
         url: '../setting/setting'
        })
      },
      holdTap:  function(){
        wx.navigateTo({
          url: '../holdList/holdList'
        })
      },
      fundRule:function(){
        wx.navigateTo({
          url: '../fundRule/fundRule'
        })
      },
      cashTap :function(){
        wx.navigateTo({
          url: '../cash/cash'
        })
      }
})