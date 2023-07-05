// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //触底刷新数据
    refreshList: [],
    list: []
  },

  input(e) {
    this.search(e.detail.value)
  },

  confirm(e) {
    this.search(e.detail.value)
  },

  search(key) {
    var that = this;
    var list = wx.getStorage({
      key: 'list',
      success: function (res) {
        if (key == '') {
          that.setData({
            list: res.data
          })
          return;
        }
        var arr = [];
        for (let i in res.data) {
          res.data[i].show = false;
          if (res.data[i].search.indexOf(key) >= 0) {
            res.data[i].show = true;
            arr.push(res.data[i])
          }
        }
        if(arr.length == 0) {
          that.setData({
            list: [{show:true,name:'没有相关数据！'}]
          })
        }else{
          that.setData({
            list: arr
          })
        }
      },
    })
  },

  getRefresh() {
    //展示加载效果
    wx.showLoading({
      title: '刷新数据中...',
    }),
      wx.request({
        url: '',//连接后端数据库
        method: 'GET',
        success: ({ data: res }) => {
          this.setData({
            refreshList: [...this.data.swiperList, ...res.data]
          })
        },
        // complete: () =>{
        //   wx.hideLoading()
        // }
      })
    setTimeout(() => {
      wx.hideLoading()
    }, 500);
    complete: () => {
      wx.hideLoading()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var list=[
      {name: "[1.12.2]InventoryTweaks", show: true, search:"[1.12.2]InventoryTweaks"},
      {name: "AmbientSounds_mc1.12.2", show: true, search: "AmbientSounds_mc1.12.2" },
      {name: "ancientspellcraft", show: true, search: "ancientspellcraft" },
      {name: "ancientwarfare", show: true, search: "ancientwarfare" },
      {name: "AppleSkin", show: true, search: "AppleSkin" },
      {name: "Baubles", show: true, search: "Baubles" },
      {name: "ChunkAnimator", show: true, search: "ChunkAnimator" },
      {name: "CodeChickenLib", show: true, search: "CodeChickenLib" },
      {name: "CreativeCore_v1", show: true, search: "CreativeCore_v1" },
      {name: "ElectroblobsWizardry", show: true, search: "ElectroblobsWizardry" },
      {name: "furniture", show: true, search: "furniture" },
      {name: "Hwyla", show: true, search: "Hwyla" },
      {name: "i18nupdatemod", show: true, search: "i18nupdatemod" },
      {name: "jei_1", show: true, search: "jei_1" },
      {name: "journeymap", show: true, search: "journeymap" },
      {name: "Mantle", show: true, search: "Mantle" },
      {name: "Patchouli", show: true, search: "Patchouli" },
      {name: "TConstruct", show: true, search: "TConstruct" },
      {name: "VeinMiner", show: true, search: "VeinMiner" },
      {name: "Wawla", show: true, search: "Wawla" },
      {name: "worldedit", show: true, search: "worldedit" }
    ]
    wx.setStorage({
      key: 'list',
      data: list
    })
    this.setData({
      list:list
    }),
    this.getRefresh()
  },

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})