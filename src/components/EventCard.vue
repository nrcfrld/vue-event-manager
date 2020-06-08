<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="event-card">
      <span class="event-time">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="event-title">{{ event.title }}</h4>
      <p class="event-attending">
        <BaseIcon name="users"></BaseIcon>{{ event.attendees.length }} Attending
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 2,
        title: 'Beach Cleanup',
        date: 'Tues Aug 19, 2018',
        time: '6:00',
        attendees: [
          {
            id: 'ab123',
            name: 'Enrico Feraldo'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.event-card {
  text-align: left;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.75);
  border: 1px solid #2c2c2c;
  padding: 1.25rem;
  width: 350px;
  margin: 1rem auto;
  transition: 0.8s;
  color: #dfdfdf;
}

.event-card:hover {
  transform: scale(1.05);
}

.event-card .event-title {
  font-size: 1.75rem;
  margin: 0.75rem 0;
}

.event-card .event-attending {
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #e2e8f0;
}

.event-link {
  text-decoration: none;
  color: initial;
}
</style>
