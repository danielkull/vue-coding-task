<template>
  <tr class="table-item__table-row">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td><BaseButton text="Add Book" variant="primary" /></td>
  </tr>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  name: "BookListRow",
  props: {
    title: String,
    isbn: String,
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
