function request(params,isHeader=false){
	return new Promise((resolve,reject) =>{
		wx.showLoading({
		  title: '正在加载...',
		}),
		wx.request({
		  ...params,
		  url:"http://localhost:5000"+params.url,
		  success:(res)=>{
			//   console.log(res.header["X-Total-Count"]);
			if(isHeader==true){
				resolve({
					list: res.data,
					total: res.header["X-Total-Count"]
				})
			}else{
				resolve(res.data)
			}
			  
		  },
		  fail:(err)=>{
			  reject(err)
		  },
		  complete:()=>{
			wx.hideLoading({
			  success: (res) => {
				//   console.log("加载成功");
			  },
			})
		  }
		})
	}) 
}

export default request