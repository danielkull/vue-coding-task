<template>
  <LayoutHeader />
  <main class="inside">
    <BookList />
  </main>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    BookList,
  },
};
</script>

<style>
@import url("./assets/reset.css");
@import url("./assets/global.css");
</style>
