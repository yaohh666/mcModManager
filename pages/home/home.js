// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数据列表
    swiperList: [{
      id: '1',
      url: 'https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106252_640.jpg'
    }, {
      id: '2',
      url: 'https://cdn.pixabay.com/photo/2017/10/20/23/00/computer-game-2873192_640.png'
    }, {
      id: '3',
      url: 'https://cdn.pixabay.com/photo/2017/05/20/23/21/minecraft-2330078_640.jpg'
    }, {
      id: '4',
      url: 'https://cdn.pixabay.com/photo/2016/10/07/09/30/game-1721094_640.jpg'
    }, {
      id: '5',
      url: 'https://cdn.pixabay.com/photo/2015/12/23/22/37/minecraft-1106258_640.png'
    }, {
      id: '6',
      url: 'https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106257_640.png'
    }, {
      id: '7',
      url: 'https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106256_640.png'
    }],
    //游玩过的版本列表
    versionsList:[{
      id: '1',
      name: '1.12.2古代战争'
    },{
      id: '2',
      name: '1.12.2生化危机'
    },{
      id: '3',
      name: '1.12.2血染黎明'
    },{
      id: '4',
      name: '1.16.5机械动力'
    },{
      id: '5',
      name: '1.18.2机械动力'
    },{
      id: '6',
      name: '1.16.5方块宝可梦'
    },{
      id: '6',
      name: '1.16.5工业2'
    },{
      id: '6',
      name: '1.12.2RLraft'
    }],
    //触底刷新数据
    refreshList: []
  },

  getRefresh() {
    //展示加载效果
    wx.showLoading({
      title: '刷新数据中...',
    }),
    wx.request({
      url: '',//连接后端数据库127.0.0.1:3306
      method: 'GET',
      success: ({data: res}) => {
        console.log(res.data)
        // this.setData({
        //   refreshList: [...this.data.swiperList, ...res.data]
        // })
      },
      // complete: () =>{
      //   wx.hideLoading()
      // }
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000);
    complete: () =>{
      wx.hideLoading()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getRefresh()
    //this.getSwiperList()
  },

  //获取轮播图数据(废弃仅供参考)
  // getSwiperList() {
  //   wx.request({
  //     url: '填写轮播图图片链接地址',
  //     method: 'GET',
  //     success: (res) => {
  //       this.setData({
  //         swiperList: res.data
  //       })
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('上拉触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})