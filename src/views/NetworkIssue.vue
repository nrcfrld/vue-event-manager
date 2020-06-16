<template>
  <div>
    <h1>Uh-oh!</h1>
    <p>
      It looks like you're experiencing some network issues, please click the
      back button and try again
    </p>
    <router-link :to="{ name: 'event-list' }">Back to homepage</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: underline;
}

a:hover {
  color: #c7c7c7;
}
</style>
