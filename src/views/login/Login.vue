<template>
	<div class='login'>
		<div class='login-form'>
			<div class='login-item'><input class='login-input' type="text" v-model="phone"></div>
			<div class='login-item'><input class='login-input' type="password" v-model="password"></div>
			<div class='login-item login-btn' @click='loginClick()'>登录</div>
		</div>
		
	</div>
</template>

<script>
	import {login,getHomeGoods} from 'network/login.js'
	
	export default {
		name:"Login",
		data(){
			return{
				phone:'',
				password:'',
			}
		},
		methods:{
			loginClick(){
				console.log(this.phone+ " " + this.password);
				login(this.phone,this.password).then(res => console.log(res)).catch(err => {})
			}
		}
	}
</script>

<style scope>
	.login{
		position: fixed;
		overflow: hidden;
		left: 50%;
		margin-left: -250px;
		top: 50%;
		margin-top: -350px;
		width: 500px;
		min-height: 555px;
		z-index: 10;
		right: 140px;
		background: #fff;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		border-radius: 5px;
		-webkit-box-shadow: 0px 3px 16px -5px #070707;
		box-shadow: 0px 3px 16px -5px #070707;
		text-align: center;
		font-size: 25px;
	}
	
	.login-form{
		position: relative;
		top: 300px;
	}
	
	.login-item{
		height: 45px;
		line-height: 45px;
		color: #000000;
		margin: 20px auto;
	}
	
	.login-input{
		width: 370px;
		overflow: hidden;
		padding: 0 15px;
		font-size: 20px;
		border: 1px solid #EBEBEB;
		margin: 0 auto 15px;
		height: 48px;
		line-height: 48px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		border-radius: 5px;		
	}

	.login-btn{
		width: 400px;
		background-color: #50E3CE;
		color: white;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		border-radius: 5px;
	}

</style>