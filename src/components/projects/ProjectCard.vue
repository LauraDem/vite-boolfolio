<script>
export default {
  props: {
    project: Object,
    isDetail: Boolean,
  },
  // computed: {
  //   abstract() {
  //     let dots = this.project.content.length > 100 ? "..." : "";
  //     return this.project.content.substr(0, 100) + dots;
  //   },
  // },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-header text-center">
        <span class="badge" :style="{ backgroundColor: project.type.color }">
          {{ project.type.label }}
        </span>
      </div>
      <div class="card-body">
        <h4>{{ project.name }}</h4>
        <img
          v-if="project.cover_image"
          :src="project.cover_image"
          class="img-fluid mb-1"
          :class="{
            'w-50': isDetail,
            'me-1': isDetail,
            'float-start': isDetail,
          }"
        />
        <p>{{ project.content }}</p>
      </div>
      <div class="card-footer" v-if="!isDetail">
        <router-link
          :to="{
            name: 'project-detail',
            params: {
              id: project.id,
            },
          }"
          class="btn btn-success"
          >Vedi</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
