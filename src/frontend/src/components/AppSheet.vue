<template>
  <div class="sheet">
    <div class="sheet__title">
      <!-- @slot Слот для заголовка карточки-->
      <slot name="title">
        <AppTitle v-html="title" />
      </slot>
    </div>
    <div class="sheet__content">
      <!-- @slot Слот для содержимого карточки-->
      <slot />
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle";

/**
 * Карточка приложения
 */
export default {
  name: "AppSheet",
  components: { AppTitle },
  props: {
    /**
     * Текст заголовка карточки
     */
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.sheet {
  padding-top: 15px;

  border-radius: 8px;
  background-color: $white;
  box-shadow: $shadow-light;
}

.sheet__title {
  padding-right: 18px;
  padding-left: 18px;
}

.sheet__content {
  display: block;

  margin-top: 8px;
  padding-top: 18px;
  padding-right: 18px;
  padding-left: 18px;

  border-top: 1px solid rgba($green-500, 0.1);
}
</style>
