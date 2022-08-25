// pages/detail/detail.js
import request from "../../util/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info:null,
        current:0,
        commentList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(options);
        wx.setNavigationBarTitle({
            title:`${options.title}`
        })
        this.getDetailInfo(options.id)
        this.getCommentINfo()
    },

    getDetailInfo(id){
        request({
            url:`/goods/${id}`
        }).then(res=>{
            
            this.setData({
                info:res
            })
            console.log(res);
        })
    },
    getCommentINfo(){
        request({
            url:"/comments"
        }).then(res=>{
            this.setData({
                commentList:res
            })
            console.log(this.data.commentList);
        })
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

    },

    handleTap(evt){
        console.log(evt);
        wx.previewImage({
            current: 'evt.currentTarget.dataset.current', // 当前显示图片的 http 链接
            urls:this.data.info.slides.map(item=>
                `http://localhost:5000${item}`
            )  // 需要预览的图片 http 链接列表
          })
    },

    handleActive(evt){
        // console.log(evt);
        this.setData({
            current:evt.currentTarget.dataset.index
        })
    }
})