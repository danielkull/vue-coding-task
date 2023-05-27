<template>
  <h1>Count all people by their age</h1>
  <h2>Total count: {{ totalCount }}</h2>
  <AttendeeCounter
    v-for="({ text, counter }, index) of attendeeCounters"
    :key="text"
    :text="text"
    :counter="counter"
    @increase="handleIncrease(index)"
    @decrease="handleDecrease(index)"
  />
</template>

<script>
import AttendeeCounter from "./components/AttendeeCounter.vue";

export default {
  name: "App",
  data() {
    return {
      attendeeCounters: [
        {
          text: "5-12 years",
          counter: 0,
        },
        {
          text: "12-18 years",
          counter: 0,
        },
        {
          text: "18-30 years",
          counter: 0,
        },
        {
          text: "30-50 years",
          counter: 0,
        },
        {
          text: "50 > years",
          counter: 0,
        },
      ],
    };
  },
  computed: {
    totalCount() {
      let totalCount = 0;
      this.attendeeCounters.forEach(({ counter }) => (totalCount += counter));
      return totalCount;
    },
  },
  components: {
    AttendeeCounter,
  },
  methods: {
    handleIncrease(index) {
      this.attendeeCounters[index].counter++;
    },
    handleDecrease(index) {
      // console.log(this);
      this.attendeeCounters[index].counter--;
    },
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
