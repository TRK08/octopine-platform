import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import tournaments from '../store/tournaments'
import news from '../store/news'
import info from '../store/info'
import auth from '../store/auth'
import notify from '../store/notifications'
import forum from '../store/forum'
import popup from '../store/popup'
import usersAndTeams from '../store/usersAndTeams'

export default new Vuex.Store({
	modules: {
		tournaments,
		news,
		info,
		auth,
		notify,
		forum,
		popup,
		usersAndTeams
	}
})