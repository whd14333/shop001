import axios from 'axios'

export function request(config){
	// 1、创建axios实例对象
	const instance = axios.create({
		baseURL : 'http://localhost:8000',
		timeout : 5000
	})
	
	// 2、拦截器的使用
	instance.interceptors.request.use(config => {
		return config
	},err => {console.log(err)});
	
	instance.interceptors.response.use(res => {
		return res.data
	},err => console.log(err));
	
	// 3、发送请求
	return instance(config)
}
