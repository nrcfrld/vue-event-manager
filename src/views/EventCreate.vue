<template>
	<div id="event-create">
		<h1>Create an Event</h1>
		<form @submit.prevent="createEvent">
			<div class="form-group">
				<label for="category">Select a category</label>
				<select id="category" v-model="event.category">
					<option value>--Select--</option>
					<option v-for="(category, index) in categories" :key="index">{{ category }}</option>
				</select>
			</div>
			<h3>Name & describe your event</h3>
			<div class="form-group">
				<label for="title">Title</label>
				<input id="title" type="text" placeholder="Add an event title" v-model="event.title" />
			</div>
			<div class="form-group">
				<label for="description">Description</label>
				<input
					type="text"
					id="description"
					placeholder="Add an event description"
					v-model="event.description"
				/>
			</div>

			<h3>Where is your event ?</h3>
			<div class="form-group">
				<label for="location">Location</label>
				<input id="location" type="text" placeholder="Add an event location" v-model="event.location" />
			</div>

			<h3>When is your event ?</h3>
			<div class="form-group">
				<label for="date">Date</label>
				<Datepicker placeholder="Select a date" v-model="event.date"></Datepicker>
			</div>
			<div class="form-group">
				<label for="time">time</label>
				<select id="time" v-model="event.time">
					<option value>--Select time--</option>
					<option v-for="(time, index) in times" :key="index">
						{{
						time
						}}
					</option>
				</select>
			</div>
			<button type="submit">Create Event</button>
		</form>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
// import { mapState, mapGetters } from 'vuex'

export default {
	data() {
		const times = []
		for (let i = 0; i <= 24; i++) {
			times.push(i + ':00')
		}
		return {
			times,
			categories: this.$store.state.categories,
			event: this.createFreshEventObject()
		}
	},
	methods: {
		createEvent() {
			this.$store
				.dispatch('event/createEvent', this.event)
				.then(() => {
					this.$router.push({
						name: 'event-show',
						params: {
							id: this.event.id
						}
					})
					this.event = this.createFreshEventObject()
				})
				.catch(() =>
					console.log('There was a problem creating your event')
				)
		},
		createFreshEventObject() {
			const user = this.$store.state.user.user
			const id = Math.floor(Math.random() * 1000000)

			return {
				id,
				user,
				category: '',
				organizer: user,
				title: '',
				description: '',
				location: '',
				date: '',
				time: '',
				attendees: []
			}
		}
	},
	components: {
		Datepicker
	}
}
</script>

<style scoped>
form {
	width: 60%;
	margin: 0 auto;
}

@media (max-width: 768px) {
	form {
		width: 100%;
	}
}

#event-create >>> span.cell,
#event-create >>> .vdp-datepicker__calendar .up {
	color: black;
}

#event-create >>> .vdp-datepicker__calendar {
	margin-bottom: 1.5rem;
}

#event-create form {
	text-align: left;
}

#event-create .form-group {
	margin-bottom: 1.5rem;
}

#event-create .form-group label {
	display: block;
}

#event-create >>> .form-group input,
#event-create .form-group select {
	border: none;
	display: block;
	width: 100%;
	padding: 0.5rem 0.75rem;
	border-radius: 0.25rem;
	margin-top: 0.25rem;
}

button[type='submit'] {
	display: block;
	width: 100%;
	padding: 0.75rem 0.75rem;
	background-color: #38ef7d;
	border: none;
	border-radius: 0.25rem;
	margin-bottom: 2rem;
	font-weight: 700;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}

button[type='submit']:hover {
	cursor: pointer;
	background-color: #23cf65;
}
</style>
