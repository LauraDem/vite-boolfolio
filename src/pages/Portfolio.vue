<script>
import ContactForm from "../components/projects/Ui/ContactForm.vue";
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Projects",
    };
  },

  components: { ProjectList, ContactForm },
};
</script>

<template>
  <div class="container">
    <ContactForm />
    <h1 class="my-5">{{ title }}</h1>
    <ProjectList />
  </div>
</template>

<style lang="scss" scoped></style>
