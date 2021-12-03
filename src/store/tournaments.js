
import axios from 'axios'

const tournaments = {
	namespaced: true,
	state: {
		tournaments: null,
		paymentStatus: false,
	},
	mutations: {
		SET_TOURNAMENTS(state, payload) {
			state.tournaments = payload
		},
		SET_PAYMENT_STATUS(state, payload) {
			state.paymentStatus = payload
		}
	},
	actions: {
		LOAD_TOURNAMENTS({ commit }) {
			axios.get('https://octopine.pro/wp-json/oc/v1/match/get/all').then(res => {
				commit('SET_TOURNAMENTS', res.data)
			})
		},
		async REGISTR_TOURNAMENTS({ dispatch }, data) {
			dispatch('notify/ADD_NOTIFICATIONS', { text: 'Сейчас вы будете перенаправлены на страницу банка' }, { root: true })
			await axios.post('https://octopine.pro/wp-json/oc/v1/payments/register', data).then(res => {
				window.location.assign(res.data.redirect)
				localStorage.setItem('order_id', res.data.order)
			})
		},
		async CHECK_PAYMENT({ commit, dispatch }, id) {
			await axios.get(`https://octopine.pro/wp-json/oc/v1/payments/info?order=${id}`).then(res => {
				if (res.data.code === 200) {
					commit('SET_PAYMENT_STATUS', 'pay')
				} else {
					commit('SET_PAYMENT_STATUS', 'error')
				}
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
		getPaymentStatus(state) {
			return state.paymentStatus
		}
	}
}

export default tournaments


