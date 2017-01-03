// pages/notice/notice.js
var cardTeams;
Page({
  data:{
    notices: [
      {
        id: 's1',
        img:'../../image/icon_read.png',
        name: '微宗宝公告',
        date: '星期五',
        detail: '现货黄金周四(8月18日)收出带上下影响的小阳线'
      },
      {
        id: 's2',
        img:'../../image/icon_readu.png',
        name: '微宗宝公告2',
        date: '20170101',
        detail: '现货黄金周四(8月18日)收出带上下影响的小阳线'
      },
      {
        id: 's3',
        img:'../../image/icon_readu.png',
        name: '微宗宝公告',
        date: '20160301',
        detail: '现货黄金周四(8月18日)收出带上下影响的小阳线'
      },
      
    ]
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
  drawerStart:function(e){
    var touch = e.touches[0];
    var startX = touch.clientX;
    var startY = touch.clientY;
    var key =  true;

  },
  drawerMove : function(e){
    var self = this;
    var dataId = e.currentTarget.id;
    if(key){
      var touch = e.touches[0];
      var endX = touch.clientX;
      var endY = touch.clientY;
      var XNum = (endX - startX) < 0 ? starX -endX : endX-startX;
      var YNum = (endY - startY) < 0 ? starY -endY : endY-startY;
      if(XNum >= YNum){
        //从右往左
        if((endX - startX) <= -5){
          // var res = cardTeams;
          // for(var k in res){
          //   var data = res[k];
          //   if(res[k].id == dataId){
          //     res[k]['right'] = '15%';
          //   }else{
          //     res[k]['right'] = 0;
          //   }
          //   self.setData({
          //     cardTeams:cardTeams
          //   })
          // }
        }else{
          var res = cardTeams;
          for(var k in res){
            var data = res[k];
            if(res[k].id == dataId){
              res[k]['right'] = 0;
            }
            self.setData({
              cardTeams:cardTeams
            })
          }
        }
      }
    key = false;
   }
  }
})