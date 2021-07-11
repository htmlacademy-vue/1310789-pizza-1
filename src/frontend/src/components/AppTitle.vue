<template>
  <component :is="tag" :class="['title', `title--${size}`]"><slot /></component>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    tag: {
      type: String,
      default: "h2",
    },
    size: {
      type: String,
      default: "small",
      validator: (value) => ["small", "big"].indexOf(value) !== -1,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  color: $black;

  &--big {
    @include b-s36-h42;
  }

  &--small {
    @include b-s18-h21;
  }
}
</style>
