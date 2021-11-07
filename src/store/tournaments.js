
import axios from 'axios'

const tournaments = {
	namespaced: true,
	state: {
		tournaments: null
	},
	mutations: {
		SET_TOURNAMENTS(state, payload) {
			state.tournaments = payload
		}
	},
	actions: {
		LOAD_TOURNAMENTS({ commit }) {
			axios.get('https://octopine.pro/wp-json/oc/v1/match/get/all').then(res => {
				commit('SET_TOURNAMENTS', res.data)
			})
		}
	},
	getters: {
		getTournaments(state) {
			return state.tournaments
		},
		getSingleTournament: (state) => (slug) => {
			return state.tournaments.find(item => item.slug == slug)
		}
	}
}

export default tournaments


