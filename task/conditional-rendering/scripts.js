Vue.createApp({
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    onInput(value) {
      console.log(value);
      this.activeTab = Number(value.target.value);
    },
  },
}).mount("#app");
