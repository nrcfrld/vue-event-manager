<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{ label }}</label>
    <select
      @input="updateValue"
      :value="value"
      v-bind="$attrs"
      :id="id"
      v-on="listeners"
    >
      <option value>--Select--</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js';

export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  }
};
</script>

<style></style>
