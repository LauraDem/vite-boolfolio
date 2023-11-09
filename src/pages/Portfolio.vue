<script>
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Projects",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">{{ title }}</h1>
    <ProjectList />
  </div>
</template>

<style lang="scss" scoped></style>
