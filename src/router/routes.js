import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import SingleNews from '../pages/SingleNews.vue'
import Tournaments from '../pages/Tournaments.vue'
import SingleTournament from '../pages/SingleTournament.vue'
import Cabinet from '../pages/Cabinet.vue'
import Auth from '../pages/Auth.vue'
import Forum from '../pages/Forum.vue'
import SingleForum from '../pages/SingleForum'
import User from '../pages/User'

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
		component: SingleTournament,
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
	},
	{
		path: '/forum/:id',
		component: SingleForum,
		props: true
	},
	{
		path: '/user/:id',
		component: User,
		props: true
	}
	// {
	// 	path: '*',
	// 	component: Notfound
	// },
]

export default routes;