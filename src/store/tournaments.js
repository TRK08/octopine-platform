
import axios from 'axios'

const tournaments = {
	namespaced: true,
	state: {
		tournaments: [
			{
				id: 1,
				format: ["5 vs 5", "BO3", '16 / 32', '₽ 500'],
				img: require("../assets/img/tournament.png"),
				name: "Турнир по Dota 2 #1 Самый первый турнир",
				time: "17:00",
				date: "22 октября 2022",
				slug: 'Turnir-1'
			},
			{
				id: 2,
				format: ["5 vs 5", "BO3", '10 / 64', '₽ 11500'],
				img: require("../assets/img/tournament.png"),
				name: "Турнир по Dota 2 #1 Самый первый турнир",
				time: "17:00",
				date: "22 октября 2022",
			},
			{
				id: 3,
				format: ["5 vs 5", "BO3", '10 / 64', '₽ 11500'],
				img: require("../assets/img/tournament.png"),
				name: "Турнир по Dota 2 #1 Самый первый турнир",
				time: "17:00",
				date: "22 октября 2022",
			},
			{
				id: 4,
				format: ["5 vs 5", "BO3", '10 / 64', '₽ 11500'],
				img: require("../assets/img/tournament.png"),
				name: "Турнир по Dota 2 #1 Самый первый турнир",
				time: "17:00",
				date: "22 октября 2022",
			},
			{
				id: 5,
				format: ["5 vs 5", "BO3", '10 / 64', '₽ 11500'],
				img: require("../assets/img/tournament.png"),
				name: "Турнир по Dota 2 #1 Самый первый турнир",
				time: "17:00",
				date: "22 октября 2022",
			},
			{
				id: 6,
				format: ["5 vs 5", "BO3", '10 / 64', '₽ 11500'],
				img: require("../assets/img/tournament.png"),
				name: "Турнир по Dota 2 #1 Самый первый турнир",
				time: "17:00",
				date: "22 октября 2022",
			},
			{
				id: 7,
				format: ["5 vs 5", "BO3", '10 / 64', '₽ 11500'],
				img: require("../assets/img/tournament.png"),
				name: "Турнир по Dota 2 #1 Самый первый турнир",
				time: "17:00",
				date: "22 октября 2022",
			},
		]
	},
	mutations: {},
	actions: {},
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


