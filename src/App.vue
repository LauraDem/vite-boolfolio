<script>
import NavbarUi from "./components/projects/Ui/NavbarUi.vue";
import ContactForm from "./components/projects/Ui/ContactForm.vue";

export default {
  data() {
    return {};
  },

  components: { NavbarUi, ContactForm },
};
</script>

<template>
  <NavbarUi />
  <ContactForm />
  <router-view></router-view>

  <!-- 

  <div class="mt-5">
    <ProjectList />
  </div> -->
</template>

<style lang="scss"></style>
