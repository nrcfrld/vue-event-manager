<template>
	<div class="event-show">
		<div class="event-time">@{{ event.time }} on {{ event.date }}</div>
		<h2 class="event-title">{{ event.title }}</h2>
		<h4 class="event-organizer">
			Organized by {{ event.organizer ? event.organizer.name : '' }}
		</h4>
		<h4 class="event-category">Category : {{ event.category }}</h4>
		<div class="location">
			<h3 class="location-header">
				<BaseIcon name="map"></BaseIcon>Location
			</h3>
			<div class="location-detail">{{ event.location }}</div>
		</div>
		<div class="event-details">
			<h3>Event Details</h3>
			<p>{{ event.description }}</p>
		</div>
		<div class="event-attendees">
			<h3>
				Attendees
				<span class="badge">{{
					event.attendees ? event.attendees.length : 0
				}}</span>
			</h3>
			<ul>
				<li v-for="(attendee, index) in event.attendees" :key="index">
					<h4>{{ attendee.name }}</h4>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import NProgress from 'nprogress'
import store from '@/store'

export default {
	props: ['id'],
	beforeRouteEnter(routeTo, routeFrom, next) {
		NProgress.start()
		store.dispatch('event/fetchEvent', routeTo.params.id).then(() => {
			NProgress.done()
			next()
		})
	},
	computed: mapState({
		event: state => state.event.event
	})
}
</script>

<style>
.event-show {
	margin: 2rem 0;
	text-align: left;
	padding: 2rem 1rem;
	border: 1px solid gray;
	font-weight: 300;
}

.event-show .badge {
	display: inline-flex;
	height: 26px;
	width: auto;
	padding: 0 7px;
	margin: 0 5px;
	border-radius: 13px;
	font-size: 1rem;
	font-weight: bold;
	line-height: 26px;
	background-image: linear-gradient(to bottom right, #38ef7d, #11998e);
}

.event-show .event-title {
	font-size: 2rem;
	font-weight: 900;
}

.event-show .event-category {
	text-transform: capitalize;
}

.event-show .location h3,
.event-show .event-details h3,
.event-show .event-attendees h3 {
	font-size: 1.75rem;
}

.event-show .location h3 {
	color: #aaaaaa;
}

.event-show .location .location-detail {
	font-style: italic;
}
</style>
