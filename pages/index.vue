<template>
  <div class="container">
    <b-card-group deck class="mt-4">
      <div class="row">
        <item-component v-for="(movie, index) in movies"
                        :key="index"
                        :movie="movie"
                        :index="index"/>
      </div>
    </b-card-group>
  </div>
</template>
<script>
  import ItemComponent from "../components/ItemComponent.vue";
  import Logo from "~/components/Logo.vue";
  import { mapMutations,mapGetters } from "vuex";

  export default {
    layout: 'layouts/default',
    components: {
      Logo, ItemComponent
    },
    computed: mapGetters({
      movies: 'movies/get'
    }),
    methods: {
        async getData() {
            const url_temp = "https://api.themoviedb.org/3/movie/popular?api_key=7a46c43b9f87609dec9683e5051d298f";

            const response = await fetch(url_temp,
                {
                    method: 'GET'
                }
            ).then(
                response => response.json()
            ).catch(() => {
                alert("Ocurrio un error");
            });

            this.$store.commit('movies/update', response.results )
        }
    },
    beforeMount() {
        this.getData()
    }

  };
</script>

<style>

</style>
