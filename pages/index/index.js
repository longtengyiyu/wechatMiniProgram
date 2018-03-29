//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    province:'xi\'an',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    defaultBtnText: '点击跳转'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        province: app.globalData.userInfo.province,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          province: res.userInfo.province,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            province: res.userInfo.province,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      province: e.detail.userInfo.province,
      hasUserInfo: true,
    })
  },

  changeBottonText: function(){
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  },
  callPhone: function(){
    wx.makePhoneCall({
      phoneNumber: '18888888888',
    })
  }
})
