import {request} from "./request.js"

export function login(phone,password){
	return request({
		url:'user_login',
		method:'post',
		params:{
			phone,
			password
		}
	});
}

export function getHomeGoods(type , page){
	return request({
		url:'/home/data',
		params:{
			type,
			page
		}
	})
}
