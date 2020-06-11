import EventServices from '@/services/EventServices.js'

export const namespaced = true

export const state = {
	events: [],
	eventsTotal: '',
	event: {}
}

export const mutations = {
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
}

export const actions = {
	createEvent({ commit, dispatch }, event) {
		return EventServices.postEvent(event)
			.then(() => {
				commit('ADD_EVENT', event)
				const notification = {
					type: 'success',
					message: 'Your event has been created!'
				}

				dispatch('notification/add', notification, { root: true })
			})
			.catch(error => {
				const notification = {
					type: 'error',
					message: `There was a problem when creating your event : ${error.message}`
				}

				dispatch('notification/add', notification, { root: true })
				throw error
			})
	},
	fetchEvents({ commit, dispatch }, { perPage, page }) {
		EventServices.getEvents(perPage, page)
			.then(response => {
				commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
				commit('SET_EVENTS', response.data)
			})
			.catch(error => {
				const notification = {
					type: 'error',
					message: `There was an error when fetching data : ${error.message}`
				}

				dispatch('notification/add', notification, { root: true })
			})
	},
	fetchEvent({ commit, getters, dispatch }, id) {
		const event = getters.getEventById(id)

		if (event) {
			commit('SET_EVENT', event)
		} else {
			return EventServices.getEvent(id)
				.then(response => commit('SET_EVENT', response.data))
				.catch(error => {
					const notification = {
						type: 'error',
						message: `There was an error when fetching data : ${error.message}`
					}

					dispatch('notification/add', notification, { root: true })
				})
		}
	}
}

export const getters = {
	getEventById: state => id => {
		return state.events.find(event => event.id == id)
	}
}
