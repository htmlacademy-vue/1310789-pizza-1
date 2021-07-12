<template>
  <div class="app-layout">
    <AppLayoutHeader />
    <Index />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import Index from "@/views/Index.vue";

export default {
  name: "AppLayout",
  components: { Index, AppLayoutHeader },
};
</script>

<style></style>
