<template>
  <div id="app">
    <NavBar></NavBar>
    <NotificationContainer></NotificationContainer>
    <div id="content">
      <div class="container">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NotificationContainer from '@/components/NotificationContainer.vue';

export default {
  components: {
    NavBar,
    NotificationContainer
  }
};
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

#nprogress .bar {
  background-color: white !important;
  height: 3px !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #fff, 0 0 5px #fff !important;
}

.form-group {
  margin-top: 1.5rem;
}

.form-group label {
  display: block;
}

.form-group input,
.form-group select {
  background-color: white;
  outline: none;
  border: none;
  display: block;
  width: 100%;
  padding: 0.75rem 0.75rem;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
}

.form-group input:focus,
.form-group select:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 255, 0.5);
}

.form-group.error input,
.form-group.error select {
  border: 1px solid red;
  box-shadow: 0 0 0 2px rgba(255, 66, 66, 0.5);
}

small {
  font-size: 0.75rem;
}

small.error-message {
  color: #fd2d2d;
  font-weight: 600;
  margin-top: 0.25rem;
}
@media (max-width: 768px) {
  .container {
    width: 85%;
  }
}
</style>
