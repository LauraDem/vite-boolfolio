<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";
import store from "../data/store";

export default {
  data() {
    return {
      title: "Dettaglio progetto",
      project: null,
    };
  },

  components: { ProjectCard },

  created() {
    axios
      .get(store.api.baseUrl + "projects/" + this.$route.params.id)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">{{ title }}</h1>
    <ProjectCard :project="project" :isDetail="true" v-if="project" />
  </div>
</template>

<style lang="scss" scoped></style>
