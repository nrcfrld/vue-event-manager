<template>
	<div class="notification-bar" :class="notificationTypeClass">
		<p>{{ notification.message }}</p>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	props: {
		notification: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			timeout: null
		};
	},
	mounted() {
		this.timeout = setTimeout(() => {
			this.remove(this.notification);
		}, 3500);
	},
	beforeDestroy() {
		clearTimeout(this.timeout);
	},
	computed: {
		notificationTypeClass() {
			return `notif-${this.notification.type}`;
		}
	},
	methods: mapActions('notification', ['remove'])
};
</script>

<style scoped>
.notification-bar {
	padding: 0.15rem 0.5rem;
	font-size: 0.75rem;
	animation-name: slideUp;
	animation-duration: 0.5s;
	animation-timing-function: ease-in;
}

.notif-success {
	background-color: #11be4b;
}

.notif-error {
	background-color: #be1128;
}

@keyframes slideUp {
	0% {
		transform: translateY(200px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
