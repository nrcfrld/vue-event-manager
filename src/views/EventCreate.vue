<template>
	<div id="event-create">
		<h1>Create an Event</h1>
		<form @submit.prevent="createEvent">
			<BaseSelect
				label="Category"
				id="category"
				:options="categories"
				v-model="event.category"
			></BaseSelect>
			<h3>Name & describe your event</h3>
			<BaseInput
				id="title"
				label="Title"
				v-model="event.title"
				type="text"
				placeholder="Add an event title"
			></BaseInput>

			<BaseInput
				id="description"
				label="description"
				v-model="event.description"
				type="text"
				placeholder="Add an event description"
			></BaseInput>

			<h3>Where is your event ?</h3>
			<BaseInput
				id="location"
				label="location"
				v-model="event.location"
				type="text"
				placeholder="Add an event location"
			></BaseInput>

			<h3>When is your event ?</h3>
			<div class="form-group">
				<label for="date">Date</label>
				<Datepicker
					placeholder="Select a date"
					v-model="event.date"
				></Datepicker>
			</div>
			<BaseSelect
				label="Time"
				id="time"
				:options="times"
				v-model="event.time"
			></BaseSelect>
			<button type="submit">Create Event</button>
		</form>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import NProgress from 'nprogress';

export default {
	data() {
		const times = [];
		for (let i = 0; i <= 24; i++) {
			times.push(i + ':00');
		}
		return {
			times,
			categories: this.$store.state.categories,
			event: this.createFreshEventObject()
		};
	},
	methods: {
		createEvent() {
			NProgress.start();
			this.$store
				.dispatch('event/createEvent', this.event)
				.then(() => {
					this.$router.push({
						name: 'event-show',
						params: {
							id: this.event.id
						}
					});
					this.event = this.createFreshEventObject();
				})
				.catch(() => {
					NProgress.done();
				});
		},
		createFreshEventObject() {
			const user = this.$store.state.user.user;
			const id = Math.floor(Math.random() * 1000000);

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
			};
		}
	},
	components: {
		Datepicker
	}
};
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
