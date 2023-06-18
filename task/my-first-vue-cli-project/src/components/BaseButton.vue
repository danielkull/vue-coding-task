<template>
  <button :class="styling" @click="toggleBookmarkBtn">{{ text }}</button>
</template>

<script>
export default {
  emit: ["changeBookmark"],
  props: {
    text: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
      validation(propValue) {
        return ["primary", "secondary"].includes(propValue);
      },
    },
  },
  computed: {
    styling() {
      return ["btn", `btn--${this.variant}`];
    },
  },
  methods: {
    toggleBookmarkBtn() {
      this.$emit("changeBookmark");
      // return (this.isBookmarked = !this.isBookmarked);
    },
  },
};
</script>

<style scoped>
.btn {
  border: 3px solid transparent;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}

.btn--primary {
  border-color: var(--primary-dark);
  background-color: var(--primary);
  color: #fff;
}

.btn--primary:hover {
  border-color: var(--primary);
  background-color: var(--primary-dark);
}

.btn--secondary {
  border-color: var(--primary);
  background-color: transparent;
  color: var(--primary);
}

.btn--secondary:hover {
  background-color: var(--primary);
  color: #fff;
}
</style>
