<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";
import store from "../../data/store";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: { ProjectCard },

  methods: {
    fetchProjects(uri = store.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        // console.log(response.data.data);
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h2>Project list</h2>
    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss"></style>
