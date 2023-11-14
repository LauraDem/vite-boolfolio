<script>
import ProjectCard from "../components/projects/ProjectCard.vue";

export default {
  data() {
    return {
      title: "Dettaglio progetto",
    };
  },

  components: { ProjectCard },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
