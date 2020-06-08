<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
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
  font-size: 3.5rem;
}

.container {
  width: 80%;
  margin: 0 auto;
}
</style>
