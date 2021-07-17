<template>
  <component :is="tag" :class="['title', `title--${size}`]">
    <!-- @slot Содержимое заголовка-->
    <slot />
  </component>
</template>

<script>
/**
 * Заголвки приложения
 */
export default {
  name: "AppTitle",
  props: {
    /**
     * HTML-тэг компонета
     */
    tag: {
      type: String,
      default: "h2",
    },
    /**
     * Указывает на размер шрифта
     */
    size: {
      type: String,
      default: "small",
      validator: (value) => ["small", "big"].indexOf(value) !== -1,
    },
  },
};
</script>

<style lang="scss">
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
