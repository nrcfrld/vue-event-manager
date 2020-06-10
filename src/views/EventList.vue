<template>
	<div>
		<h1>Event Listing</h1>
		<EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
		<template v-if="page != 1">
			<router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">Prev Page</router-link>
			<span v-if="hasNextPage" class="border-line">|</span>
		</template>
		<router-link
			v-if="hasNextPage"
			:to="{ name: 'event-list', query: { page: page + 1 } }"
			rel="prev"
		>Next Page</router-link>
	</div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
	components: {
		EventCard
	},
	created() {
		this.perPage = 3 // Setting perPage here and not in data means it won't be reactive.
		// We don't need it to be reactive, and this way our component has access to it.

		this.$store.dispatch('fetchEvents', {
			perPage: this.perPage,
			page: this.page
		})
	},
	computed: {
		page() {
			return parseInt(this.$route.query.page || 1)
		},
		hasNextPage() {
			return this.eventsTotal > this.perPage * this.page
		},
		...mapState(['events', 'eventsTotal'])
	}
}
</script>

<style scoped>
.border-line {
	margin: 0 0.25rem;
}
a:hover {
	color: #86ffaf;
}
</style>
