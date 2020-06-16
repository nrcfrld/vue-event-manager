export const formFieldMixin = {
  inheritAttrs: true,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    id: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
};
