Vue.createApp({
  data() {
    return {
      currentFilter: "",
      newTodo: "",
      todos: [
        {
          id: 1,
          description: "Learn HTML",
          done: false,
        },
        {
          id: 2,
          description: "Learn CSS",
          done: true,
        },
      ],
    };
  },
  methods: {
    filterElements() {
      return this.todos.filter((todo) => {
        if (this.currentFilter === "done") {
          return todo.done;
        } else if (this.currentFilter === "open") {
          return !todo.done;
        } else {
          return true;
        }
      });
    },
    addNewTodo() {
      console.log(this.newTodo);
      this.todos.push({
        id: +new Date(),
        description: this.newTodo,
        done: false,
      });

      this.newTodo = "";
    },
  },
}).mount("#app");
