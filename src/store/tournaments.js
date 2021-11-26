
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
		},
		async REGISTR_TOURNAMENTS({ }, data) {
			await axios.post('https://octopine.pro/wp-json/oc/v1/payments/register', data).then(res => {
				window.location.assign(res.data.redirect)
				localStorage.setItem('order_id', res.data.order)
			})
		},
		async CHECK_PAYMENT({ dispatch }, id) {
			await axios.get(`https://octopine.pro/wp-json/oc/v1/payments/info?order=${id}`).then(res => {
				// dispatch('notify/ADD_NOTIFICATIONS', { text: 'Вы успешно зарегистрировались' }, { root: true })
			})
		}
	},
	getters: {
		getTournaments(state) {
			return state.tournaments
		},
		getSingleTournament: (state) => (slug) => {
			return state.tournaments.find(item => item.slug == slug)
		},
		getOldTournaments(state) {
			return state.tournaments.filter(item => item.finished === false)
		},
		getCurrentTournaments(state) {
			return state.tournaments.filter(item => item.finished === true)
		},
	}
}

export default tournaments


