//app.js
App({
  onLaunch: function () { //生命周期方法，启动小程序调用一次，并且整个生命周期内只调用一次
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function(){ //生命周期方法，当小程序启动或者从后台进入前台显示触发

  },
  onHide: function(){//生命周期方法，当小程序从前台进入后台出发

  },

  onError: function(){//错误家庭函数，当小程序脚本错误，或者api调用失败会触发此方法，并附带错误信息

  },
  globalData: {
    userInfo: null
  }
})