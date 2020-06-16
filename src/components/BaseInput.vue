<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      type="text"
      @input="updateValue"
      :value="value"
      v-bind="$attrs"
      :id="id"
      v-on="listeners"
    />
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js';

export default {
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.value
      };
    }
  }
};
</script>

<style></style>
