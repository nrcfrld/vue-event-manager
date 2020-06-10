import Vue from 'vue'
import Vuex from 'vuex'
import EventServices from '@/services/EventServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {
			id: 'abc123',
			name: 'Enrico Feraldo'
		},
		categories: [
			'sustainability',
			'nature',
			'animal welfare',
			'housing',
			'education',
			'food',
			'community'
		],
		events: []
	},
	mutations: {
		ADD_EVENT(state, event) {
			state.events.push(event)
		}
	},
	actions: {
		createEvent({ commit }, event) {
			return EventServices.postEvent(event).then(() => {
				commit('ADD_EVENT', event)
			})
		}
	},
	getters: {},
	modules: {}
})
