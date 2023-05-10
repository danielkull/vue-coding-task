Vue.createApp({
  data() {
    return {
      currentFilter: "",
      users: [],
    };
  },
  methods: {
    filteredUsers() {
      return this.users.filter((user) => {
        // For Filter through button
        // return user.name.startsWith(this.currentFilter);
        // For Filter through text
        return user.name
          .toLocaleLowerCase()
          .includes(this.currentFilter.toLocaleLowerCase());
      });
    },
  },
  // Fetch with .then
  /*   created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonData) => (this.users = jsonData));
  }, */
  // Fetch with async await
  async created() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    this.users = await response.json();
  },
}).mount("#app");
