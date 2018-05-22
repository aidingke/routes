import Home from './components/Home'
import Menu from './components/Menu'

import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone';
import PersonName from './components/about/contact/PersonName';


//配置路由,export公开路由
export const routes=[
		{path:"/",components:{
			//此段话表示在首页路由出四个路由，如果其他页也要则引入就行
			default:Home,
			'orderingGuide':OrderingGuide,
			'delivery':Delivery,
			'history':History,
			'contact':Contact
		}},
		{path:"/menu",component:Menu},
		{path:"/admin",component:Admin},
		{path:"/about",redirect:'/contact',component:About,children:[
			{path:'/contact',redirect:'/personname',component:Contact,children:[
				{path:'/phone',component:Phone},
				{path:'/personname',component:PersonName}

			]},
			{path:'/delivery',component:Delivery},
			{path:'/history',component:History},
			{path:'/orderingGuide',component:OrderingGuide}
		]},
		{path:"/login",component:Login},
		{path:"/register",component:Register},
		{path:"*",redirect:'/'}
	]








