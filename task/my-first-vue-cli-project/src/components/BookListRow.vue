<template>
  <tr class="table-item__table-row">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <BaseButton
        :text="buttonText"
        :variant="oddOrEven"
        @changeBookmark="checkBookmarked"
      />
    </td>
  </tr>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  name: "BookListRow",
  data() {
    return {
      buttonText: "Add Bookmark",
      isBookmarked: false,
    };
  },
  props: {
    title: String,
    isbn: String,
    index: Number,
  },
  computed: {
    oddOrEven() {
      if (this.index % 2) {
        return "secondary";
      } else {
        return "primary";
      }
    },
  },
  methods: {
    checkBookmarked() {
      this.isBookmarked = !this.isBookmarked;
      if (this.isBookmarked) {
        return (this.buttonText = "Remove Button");
      } else {
        return (this.buttonText = "Add Bookmark");
      }
    },
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
