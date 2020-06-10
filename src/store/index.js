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
		events: [],
		eventsTotal: '',
		event: {}
	},
	mutations: {
		ADD_EVENT(state, event) {
			state.events.push(event)
		},
		SET_EVENTS(state, events) {
			state.events = events
		},
		SET_EVENTS_TOTAL(state, eventsTotal) {
			state.eventsTotal = eventsTotal
		},
		SET_EVENT(state, event) {
			state.event = event
		}
	},
	actions: {
		createEvent({ commit }, event) {
			return EventServices.postEvent(event).then(() => {
				commit('ADD_EVENT', event)
			})
		},
		fetchEvents({ commit }, { perPage, page }) {
			EventServices.getEvents(perPage, page)
				.then(response => {
					commit(
						'SET_EVENTS_TOTAL',
						response.headers['x-total-count']
					)
					commit('SET_EVENTS', response.data)
				})
				.catch(error =>
					console.error(`There was an error ${error.response}`)
				)
		},
		fetchEvent({ commit, getters }, id) {
			const event = getters.getEventById(id)

			if (event) {
				commit('SET_EVENT', event)
			} else {
				EventServices.getEvent(id)
					.then(response => commit('SET_EVENT', response.data))
					.catch(error =>
						console.error(`There was an error ${error}`)
					)
			}
		}
	},
	getters: {
		getEventById: state => id => {
			return state.events.find(event => event.id == id)
		}
	},
	modules: {}
})
