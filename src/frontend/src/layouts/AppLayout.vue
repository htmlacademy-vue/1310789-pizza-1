<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

/**
 * Автоматически подключает шаблон указанный в meta.layout роута
 */
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;

      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style scoped></style>
