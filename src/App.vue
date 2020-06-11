<template>
	<div id="app">
		<NavBar></NavBar>
		<NotificationContainer></NotificationContainer>
		<div class="container">
			<router-view :key="$route.fullPath" />
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
	components: {
		NavBar,
		NotificationContainer
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}

a {
	color: white;
	text-decoration: none;
}

html {
	-webkit-text-size-adjust: 100%;
}

body {
	background-color: #1a202c;
	color: #f7fafc;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	margin: 0;
	padding: 0;
}

h1 {
	font-size: 3rem;
}

.container {
	width: 80%;
	margin: 0 auto;
}

@media (max-width: 768px) {
	.container {
		width: 85%;
	}
}
</style>
