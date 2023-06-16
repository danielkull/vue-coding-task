<template>
  <h1>{{ bookData.title }}</h1>
  <p>{{ bookData.abstract }}</p>
  <div>{{ bookData }}</div>
</template>

<script>
export default {
  data() {
    return {
      bookData: {},
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:4730/books/" + this.$route.params.id
    );
    this.bookData = await response.json();
  },
};
</script>
