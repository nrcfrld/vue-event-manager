<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + name }" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    }
  }
}
</script>

<style scoped>
.icon-wrapper {
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
}

.icon {
  color: #f0f0f0;
  fill: currentColor;
}
</style>
