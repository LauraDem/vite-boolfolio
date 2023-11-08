<script>
export default {
  props: {
    project: Object,
  },
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
      </div>
      <div class="card-footer">
        <a href="#">
          <button class="btn btn-success">Vedi</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
