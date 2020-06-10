<template>
	<div id="app">
		<NavBar></NavBar>
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
	components: {
		NavBar
	}
}
</script>

<style>
* {
	box-sizing: border-box;
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
