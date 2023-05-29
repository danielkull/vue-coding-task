<template>
  <slot name="header"
    ><h2>{{ headline }}</h2>
  </slot>
  <div class="intro-text"><slot /></div>
  <ul>
    <li v-for="item in listItems" :key="item.id">
      <slot :item="item" name="list-item" greeting="Hallo">
        {{ item.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
const timestamp = +new Date();
export default {
  props: {
    headline: String,
    listItems: {
      type: Array,
      default: () => [{ text: "No items exists", id: timestamp }],
    },
  },
};
</script>
