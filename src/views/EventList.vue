<template>
	<div>
		<h1>Event Listing for {{ user.user.name }}</h1>
		<EventCard
			v-for="event in event.events"
			:key="event.id"
			:event="event"
		></EventCard>
		<template v-if="page != 1">
			<router-link
				:to="{ name: 'event-list', query: { page: page - 1 } }"
				rel="prev"
				>Prev Page</router-link
			>
			<span v-if="hasNextPage" class="border-line">|</span>
		</template>
		<router-link
			v-if="hasNextPage"
			:to="{ name: 'event-list', query: { page: page + 1 } }"
			rel="prev"
			>Next Page</router-link
		>
	</div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';
import store from '@/store';

function getPageEvents(routeTo, next) {
	const currentPage = parseInt(routeTo.query.page || 1);

	store
		.dispatch('event/fetchEvents', {
			page: currentPage
		})
		.then(() => {
			routeTo.params.page = currentPage;
			next();
		});
}

export default {
	props: {
		page: {
			type: Number,
			required: true
		}
	},
	components: {
		EventCard
	},
	beforeRouteEnter(routeTo, routeFrom, next) {
		getPageEvents(routeTo, next);
	},
	beforeRouteUpdate(routeTo, routeFrom, next) {
		getPageEvents(routeTo, next);
	},
	computed: {
		hasNextPage() {
			return this.event.eventsTotal > this.event.perPage * this.page;
		},
		...mapState(['event', 'user'])
	}
};
</script>

<style scoped>
.border-line {
	margin: 0 0.25rem;
}
a:hover {
	color: #86ffaf;
}
</style>
