import  request  from "../../util/request"

// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        looplist:[],
        goodlist:[]
    },

    current:1,
    total:0,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.renderSwiper(),
        this.renderGoods()
    },
    renderSwiper(){
        request({
            url:"/recommends"
        }).then(res=>{
            console.log(res);
            this.setData({
                looplist:res
            })
        })
    },
    renderGoods(){
        request({
            url:`/goods?_page=${this.current}&_limit=5`
        },true).then(res=>{
            // console.log(res);
            this.total=Number(res.total)
            this.setData({
                goodlist:[...this.data.goodlist,...res.list]
            })
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
        if(this.data.goodlist.length===this.total){
            return
        }
        this.current++
        // console.log(this.current);
        this.renderGoods()
       
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    handleEvent(){
        console.log("搜索处理");
        wx.navigateTo({
          url: '/pages/search/search',
        })
    },

    handleChangePage(evt){
        // console.log(evt.currentTarget.dataset.id);
        var id = evt.currentTarget.dataset.id
        var title =evt.currentTarget.dataset.title
        wx.navigateTo({
          url: `/pages/detail/detail?id=${id}&title=${title}`,
        })
    },

    handleGet(){
        // wx.request({
        //     url: '/users/2',
        //     success:(res)=>{
        //         console.log(res.data)
        //     }
        //   })
        request({
            url:"/users"
        }).then(res=>{
            console.log(res);
        }).catch(result=>{
            console.log(result);
        })
    },
    handlePost(){
        // wx.request({
        //   url: '/users',
        //   method:"POST",
        //   data:{
        //       username:"xxx",
        //       password:"123"
        //   },
        //   success:(res)=>{
        //       console.log(res)
        //   }
        // })
        // 显示loading
        request({
            url:"/users",
            method:"POST",
            data:{
                username:"ccc",
                password:"123"
            }
        }).then(res=>{
            // 隐藏loading
            console.log(res);
        }).catch(result=>{
            console.log(result);
        })
    },
    handlePut(){
        // wx.request({
        //     url: '/users/2',
        //     method:"put",
        //     data:{
        //         username:"zzzxxx",
        //         password:"123"
        //     },
        //     success:(res)=>{
        //         console.log(res.data)
        //     }
        //   })
        request({
            url: '/users/2',
            method:"put",
            data:{
                username:"zzzxxx",
                password:"123"
            }}).then(res=>{
                console.log(res);
            })
    },
    handleDelete(){
        request({
            url:'/users/1',
            method:"DELETE",
        }).then(res=>{
            console.log(res);
        })
    },
})