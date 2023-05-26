Vue.createApp({
  data() {
    return {
      currentFilter: "",
      pokemonData: [],
    };
  },
  computed: {
    filteredPokemonData() {
      if (this.currentFilter === "") {
        return this.pokemonData;
      } else {
        return this.pokemonData.filter((pokemon) => {
          return pokemon.type === this.currentFilter;
        });
      }
    },
    getAllTypes() {
      const types = [];

      for (pokemon of this.pokemonData) {
        if (!types.includes(pokemon.type)) {
          types.push(pokemon.type);
        }
      }
      return types;
    },
  },
  methods: {},
  async created() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=250");
    // With ?limit=number I can define how much I want to get e.g. https://pokeapi.co/api/v2/pokemon?limit=150
    const data = await response.json();
    this.pokemonData = data.results;

    const pokemonDetailFetches = [];

    for (pokemon of data.results) {
      // Saves all Fetch requests in extra Array (They are not called)
      pokemonDetailFetches.push(fetch(pokemon.url));
    }

    // Here we tell them to call all and wait till everything is called
    Promise.all(pokemonDetailFetches).then(async (fetchResponses) => {
      console.log("All done");
      let count = 0;
      for (let respons of fetchResponses) {
        const jsonData = await respons.json();
        // console.log(jsonData.types[0].type.name);
        // console.log(jsonData.sprites.front_default);
        this.pokemonData[count].type = jsonData.types[0].type.name;
        this.pokemonData[count].img = jsonData.sprites.front_default;
        count++;
      }

      //   console.log(this.pokemonData);
    });
  },
}).mount("#app");
