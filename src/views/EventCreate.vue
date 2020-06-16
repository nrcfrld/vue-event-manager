<template>
  <div id="event-create">
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        label="Category"
        id="category"
        :options="categories"
        v-model="event.category"
        @blur="$v.event.category.$touch()"
        :class="{ error: $v.event.category.$error }"
      ></BaseSelect>
      <template v-if="$v.event.category.$error">
        <small v-if="!$v.event.category.required" class="error-message">Category is required</small>
      </template>
      <h3>Name & describe your event</h3>
      <BaseInput
        id="title"
        label="Title"
        v-model="event.title"
        type="text"
        placeholder="Add an event title"
        @blur="$v.event.title.$touch()"
        :class="{ error: $v.event.title.$error }"
      ></BaseInput>

      <template v-if="$v.event.title.$error">
        <small v-if="!$v.event.title.required" class="error-message">Title is required</small>
      </template>
      <BaseInput
        id="description"
        label="description"
        v-model="event.description"
        type="text"
        placeholder="Add an event description"
        @blur="$v.event.description.$touch()"
        :class="{ error: $v.event.description.$error }"
      ></BaseInput>
      <template v-if="$v.event.description.$error">
        <small v-if="!$v.event.description.required" class="error-message">Description is required</small>
      </template>
      <h3>Where is your event ?</h3>
      <BaseInput
        id="location"
        label="location"
        v-model="event.location"
        type="text"
        placeholder="Add an event location"
        @blur="$v.event.location.$touch()"
        :class="{ error: $v.event.location.$error }"
      ></BaseInput>
      <template v-if="$v.event.location.$error">
        <small v-if="!$v.event.location.required" class="error-message">Location is required</small>
      </template>
      <h3>When is your event ?</h3>
      <div class="form-group" :class="{ error: $v.event.date.$error }">
        <label for="date">Date</label>
        <Datepicker
          placeholder="Select a date"
          v-model="event.date"
          @closed="$v.event.date.$touch()"
        ></Datepicker>
        <template v-if="$v.event.date.$error">
          <small v-if="!$v.event.date.required" class="error-message">Date is required</small>
        </template>
      </div>
      <BaseSelect
        label="Time"
        id="time"
        :options="times"
        v-model="event.time"
        @blur="$v.event.time.$touch()"
        :class="{ error: $v.event.time.$error }"
      ></BaseSelect>
      <template v-if="$v.event.time.$error">
        <small v-if="!$v.event.time.required" class="error-message">Time is required</small>
      </template>
      <BaseButton type="submit" class="block" :disabled="$v.$anyError">Submit</BaseButton>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import NProgress from 'nprogress';
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    const times = [];
    for (let i = 0; i <= 24; i++) {
      times.push(i + ':00');
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    };
  },
  methods: {
    createEvent() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        NProgress.start();
        this.$store
          .dispatch('event/createEvent', this.event)
          .then(() => {
            this.$router.push({
              name: 'event-show',
              params: {
                id: this.event.id
              }
            });
            this.event = this.createFreshEventObject();
          })
          .catch(() => {
            NProgress.done();
          });
      }
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 1000000);

      return {
        id,
        user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      };
    }
  },
  validations: {
    event: {
      category: { required },
      title: { required },
      description: { required },
      location: { required },
      date: { required },
      time: { required }
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style scoped>
form {
  width: 60%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  form {
    width: 100%;
  }
}

#event-create >>> span.cell,
#event-create >>> .vdp-datepicker__calendar .up {
  color: black;
}

#event-create >>> .vdp-datepicker__calendar {
  margin-bottom: 1.5rem;
}

#event-create form {
  text-align: left;
}

button[type='submit'] {
  margin-top: 1.5rem;
}
</style>
