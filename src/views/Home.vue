<template>
  <div class="home">
    <Contenido />
  </div>
</template>

<script>
import Contenido from "@/components/Contenido.vue";

export default {
  name: "home",
  components: {
    Contenido
  }
};
</script>
<style lang="stylus" scoped>
.home{
  width: 100%;
  height: 100%
}
</style>

