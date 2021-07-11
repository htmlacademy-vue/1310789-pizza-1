<template>
  <a href="/" class="logo">
    <img :src="src" alt="V!U!E! Pizza logo" width="90" height="40" />
  </a>
</template>

<script>
import LogoSvg from "@/assets/img/logo.svg";

export default {
  name: "AppLogo",
  props: {
    src: {
      type: String,
      default: LogoSvg,
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: block;

  img {
    display: block;

    width: 90px;
    height: 40px;
  }
}
</style>
