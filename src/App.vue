<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: { ProjectList },

  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      // console.log(response.data.data);
      this.projects = response.data.data;
    });
  },
};
</script>

<template>
  <h1>Hello World</h1>
  <hr />
  <ProjectList />
</template>

<style lang="scss"></style>
