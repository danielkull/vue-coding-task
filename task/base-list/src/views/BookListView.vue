<template>
  <!-- Attribute headline links it to the slot which has a {{ headline }} -->
  <BaseList headline="All Bookmonkey Books" :list-items="books">
    <!-- Uses second slot in div, which happends to be the header -->
    <p>A list with alot of books</p>
    <template #list-item="{ item }">
      <h4>Booktitle: {{ item.title }}</h4>
      <pre>
        ISBN: {{ item.isbn }}
        <router-link :to="{ name: 'booksDetail', params: { id: item.isbn } }">Details</router-link>
        <router-link :to="`/books/${item.isbn}`">Another method to reach Details</router-link>
        
      </pre>
    </template>
  </BaseList>
</template>

<script>
import BaseList from "@/components/BaseList.vue";
export default {
  name: "BookList",
  components: { BaseList },
  data() {
    return {
      books: [],
    };
  },
  // Works only if you run in terminal: bookmonkey-api
  async created() {
    const res = await fetch("http://localhost:4730/books");
    this.books = await res.json();
  },
};
</script>

<style></style>
