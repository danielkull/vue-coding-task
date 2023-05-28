<template>
  <BaseList
    :headline="fruitList.headline"
    :intro-text="fruitList.introText"
    :list-items="fruitList.data"
  />
  <BaseList
    :headline="attendeeList.headline"
    :intro-text="attendeeList.introText"
    :list-items="attendeeList.data"
  />
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
