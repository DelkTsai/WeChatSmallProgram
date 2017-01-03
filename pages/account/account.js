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
      },
      rechargeTap :function(){
        wx.navigateTo({
          url: '../recharge/recharge'
        })
      },
      cardTap :function(){
        wx.navigateTo({
          url: '../index/index'
        })
      },
      dealDetail :function(){
        wx.navigateTo({
          url: '../dealList/dealList'
        })
      },
      notice:function(){
        wx.navigateTo({
          url: '../notice/notice'
        })
      }
})