<template>
  <div>
    <h1>404 Not Found!</h1>
    <router-link :to="{ name: 'event-list' }">Go Back</router-link>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
  background-color: #6add8d;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
