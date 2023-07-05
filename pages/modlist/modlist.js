// pages/modlist/modlist.js
Page({
  data: {
    query: [],
    modList: [{
      id: '1',
      name: '[1.12.2]InventoryTweaks-1.63'
    },{
      id: '2',
      name: 'AmbientSounds_v3.1.5_mc1.12.2'
    },{
      id: '3',
      name: 'ancientspellcraft-1.1.3'
    },{
      id: '4',
      name: 'ancientwarfare-1.12.2-2.7.0.772'
    },{
      id: '5',
      name: 'AppleSkin-mc1.12-1.0.14'
    },{
      id: '6',
      name: 'Baubles-1.12-1.5.2'
    },{
      id: '7',
      name: 'ChunkAnimator-MC1.12-1.2'
    },{
      id: '8',
      name: 'CodeChickenLib-1.12.2-3.2.3.358'
    },{
      id: '9',
      name: 'CreativeCore_v1.10.61_mc1.12.2'
    },{
      id: '10',
      name: 'ElectroblobsWizardry-4.3.4-MC1.12.2'
    },{
      id: '11',
      name: 'furniture-6.3.1-1.12.2'
    },{
      id: '12',
      name: 'Hwyla-1.8.26-B41_1.12.2'
    },{
      id: '13',
      name: 'i18nupdatemod-1.12.2-1.1.0'
    },{
      id: '14',
      name: 'jei_1.12.2-4.16.1.301'
    },{
      id: '15',
      name: 'journeymap-1.12.2-5.7.0'
    },{
      id: '16',
      name: 'Mantle-1.12-1.3.3.55'
    },{
      id: '17',
      name: 'Patchouli-1.0-20'
    },{
      id: '18',
      name: 'TConstruct-1.12.2-2.13.0.183'
    },{
      id: '19',
      name: 'VeinMiner-1.12-0.38.2.647+b31535a'
    },{
      id: '20',
      name: 'Wawla-1.12.2-2.6.275'
    },{
      id: '21',
      name: 'worldedit-forge-mc1.12-6.1.8'
    }],
    page: 1,
    pagesize: 10,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    })
  },

  getModList() {
    wx.request({
      url: '',//模组链接
      method: "GET",
      data: {
        _page: this.data.page,
        _limit: this.data.pagesize
      },
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
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