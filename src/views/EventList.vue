<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventServices from '@/services/EventServices'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventServices.getEvents()
      .then(response => (this.events = response.data))
      .catch(error => console.error(`There was an error ${error}`))
  }
}
</script>
