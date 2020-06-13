<template>
	<div>
		<h1>Oops!</h1>
		<p>The {{ resource }} that you are looking for is not here.</p>
		<router-link :to="{ name: 'event-list' }">Go to homepage</router-link>
	</div>
</template>

<script>
export default {
	props: {
		resource: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>
a {
	display: inline-block;
	margin-top: 1rem;
	text-decoration: none;
	color: rgb(0, 0, 0);
	background-color: #38ef7d;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
}

a:hover {
	background-color: #2dbd64;
}
</style>
