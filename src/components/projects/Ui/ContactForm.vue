<script>
export default {};
</script>

<template>
  <div class="container">
    <div class="mb-3 mt-5">
      <label for="contactform-email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="contactform-email"
        placeholder="name@example.com"
      />
    </div>

    <div class="mb-3">
      <label for="contactform-name" class="form-label">Nome</label>
      <input
        type="text"
        class="form-control"
        id="contactform-name"
        placeholder="name@example.com"
      />
    </div>

    <div class="mb-3">
      <label for="contactform-message" class="form-label"
        >Example textarea</label
      >
      <textarea
        class="form-control"
        id="contactform-message"
        rows="3"
      ></textarea>
    </div>

    <button class="btn btn-success">Invia messaggio</button>
  </div>
</template>

<style lang="scss" scoped></style>
