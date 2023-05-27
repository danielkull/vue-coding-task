<template>
  <p>{{ text }}: {{ counter }}</p>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
  <hr />
</template>

<script>
export default {
  props: {
    text: String,
    counter: Number,
  },
  emits: ["increase", "decrease"],
  methods: {
    increase() {
      this.$emit("increase");
    },
    decrease() {
      if (this.counter > 0) {
        this.$emit("decrease");
      }
    },
  },
};
</script>
