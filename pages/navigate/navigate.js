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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '导航',
    })
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
    
  },
  wxNavigateTo: function(){
    wx.navigateTo({
      url: '../text/text',
    })
  },
  wxRedirectTo: function(){
    wx.redirectTo({
      url: '../icon/icon',
    })
  },
  wxrelaunch: function(){
    wx.reLaunch({
      url: '../refreshview/refresh',
    })
  },
  wxswitchTab: function(){
    wx.switchTab({
      url: '/index',
    })
  },
  wxnavigateBack: function(){
    wx.navigateBack({
      delta: 1 /**返回的页面数，如果 delta 大于现有页面数，则返回到首页 */
    })
  }
})