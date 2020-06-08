<template>
  <header id="navbar">
    <div class="container">
      <div class="navbar-brand">
        RealWorldEvent
      </div>
      <div class="nav-links">
        <router-link exact :to="{ name: 'event-list' }" class="nav-link"
          >List</router-link
        >
        <router-link :to="{ name: 'event-create' }" class="nav-link"
          >Create</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
#navbar .container {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

header#navbar {
  background-color: #50ff8b;
}

header#navbar .navbar-brand {
  color: #181818;
  font-size: 1.2rem;
  font-weight: bolder;
  text-shadow: 0 2 4px rgba(255, 255, 255, 0.16);
}

a.nav-link {
  text-decoration: none;
  color: #181818;
  margin-left: 1rem;
}

a.router-link-active {
  color: rgb(0, 90, 20);
  font-weight: bold;
}
</style>
