import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import SingleNews from '../pages/SingleNews.vue'
import Tournaments from '../pages/Tournaments.vue'
import Cabinet from '../pages/Cabinet.vue'
import Auth from '../pages/Auth.vue'
import Forum from '../pages/Forum.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/news',
		component: News
	},
	{
		path: '/news/:id',
		component: SingleNews,
		props: true,
	},
	{
		path: '/tournaments',
		component: Tournaments
	},
	{
		path: '/tournaments/:id',
		props: true
	},
	{
		path: '/cabinet',
		component: Cabinet
	},
	{
		path: '/auth',
		component: Auth
	},
	{
		path: '/forum',
		component: Forum
	}
	// {
	// 	path: '*',
	// 	component: Notfound
	// },
]

export default routes;