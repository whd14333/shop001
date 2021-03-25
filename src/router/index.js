import {createWebHistory, createRouter} from 'vue-router'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
		{
			path:'',
			redirect:'/login'
		},
		{
			path:'/login',
			component:() => import("../views/login/Login.vue")
		}
		
	]
})

export default router