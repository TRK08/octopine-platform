import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import tournaments from '../store/tournaments'
import news from '../store/news'
import info from '../store/info'

export default new Vuex.Store({
	modules: {
		tournaments,
		news,
		info
	}
})