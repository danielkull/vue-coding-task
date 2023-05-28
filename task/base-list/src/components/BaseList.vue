<template>
  <h2>{{ headline }}</h2>
  <div class="intro-text">{{ introText }}</div>
  <ul>
    <li v-for="item in listItems" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script>
const timestamp = +new Date();
export default {
  props: {
    headline: String,
    introText: String,
    listItems: {
      type: Array,
      default: () => [{ text: "No items exists", id: timestamp }],
    },
  },
};
</script>
