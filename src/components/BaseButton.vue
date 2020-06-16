<template>
  <button class="btn" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style>
.btn {
  display: inline-block;
  padding: 0.75rem 0.75rem;
  background-color: #38ef7d;
  border: none;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  color: black;
  font-size: 16px;
}

.btn:hover {
  cursor: pointer;
  background-color: #23cf65;
}

.btn.block {
  display: block;
  width: 100%;
}

.btn:disabled {
  background-color: #c5c5c5;
}
</style>
