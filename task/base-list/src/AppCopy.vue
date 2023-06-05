<template>
  <BaseList headline="All Bookmonkey Books" :list-items="books">
    <p>A list with alot of books</p>
    <template #list-item="{ item }">
      <h4>Booktitle: {{ item.title }}</h4>
      <pre>
       ISBN: {{ item.isbn }}

      </pre>
    </template>
  </BaseList>

  <BaseList :headline="fruitList.headline" :list-items="fruitList.data">
    <template v-slot:header>
      <h5>{{ fruitList.headline }}</h5>
    </template>

    {{ fruitList.introText }}
  </BaseList>

  <BaseList :headline="attendeeList.headline" :list-items="attendeeList.data">{{
    attendeeList.introText
  }}</BaseList>

  <BaseList headline="All fruits with emojis" :list-items="fruitList.data">
    <template #list-item="scopedData">
      {{ scopedData.item.emoji }} - {{ scopedData.item.text }}
      <br />
      <strong>Full Data:</strong>
      {{ scopedData }}
    </template>
    <p>fruits with emjis in a list</p>
  </BaseList>
</template>

<script>
import BaseList from "@/components/BaseList.vue";

export default {
  name: "App",
  components: {
    BaseList,
  },
  data() {
    return {
      books: [],
      fruitList: {
        headline: "Fruits",
        introText: "A list of available fruits",
        data: [
          {
            id: 41,
            text: "Apple",
            emoji: "🍏",
          },
          {
            id: 22,
            text: "Melon",
            emoji: "🍉",
          },
          {
            id: 1,
            text: "Kiwi",
            emoji: "🥝",
          },
        ],
      },
      attendeeList: {
        headline: "Bootcamp Attendees",
        introText: "A list of bootcamp attendees in 2022",
        data: [
          {
            id: 41,
            text: "Werner",
            age: "42",
          },
          {
            id: 4,
            text: "Melanie",
            age: "35",
          },
          {
            id: 1,
            text: "Charlotte",
            age: "24",
          },
        ],
      },
    };
  },
  async created() {
    const response = await fetch("http://localhost:4730/books");
    this.books = await response.json();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
