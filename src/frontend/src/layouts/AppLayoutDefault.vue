<template>
  <div class="app-layout-default">
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

/**
 * Шаблон по умолчанию
 */
export default {
  name: "AppLayoutDefault",
  components: { AppLayoutHeader },
};
</script>

<style></style>
