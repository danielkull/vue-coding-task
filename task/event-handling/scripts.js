Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
      insideArea: true,
    };
  },
  computed: {
    updateXYCoordinates(event) {
      //   mousemove: this.showXY,
      if (this.insideArea) {
        return {
          mousemove: this.showXY,
        };
      }
    },
  },
  methods: {
    showXY(event) {
      //   console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    toogleAllowedArea() {
      this.insideArea = !this.insideArea;
    },
    stoppXYCoordinates() {
      return {
        mouseenter: this.toogleAllowedArea,
        mouseleave: this.toogleAllowedArea,
      };
    },
    removeFruit(fruitToDelete) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== fruitToDelete;
      });
    },
  },
}).mount("#app");
