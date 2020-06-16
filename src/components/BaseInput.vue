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
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    id: [String, Number]
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.value
      };
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style></style>
