<script>
import NavbarUi from "./components/projects/Ui/NavbarUi.vue";

export default {
  data() {
    return {};
  },

  components: { NavbarUi },
};
</script>

<template>
  <NavbarUi />
  <router-view></router-view>

  <!-- 

  <div class="mt-5">
    <ProjectList />
  </div> -->
</template>

<style lang="scss"></style>
