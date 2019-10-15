<template>
  <div class="container">
    <b-card v-bind:title="original_title" v-bind:img-src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+backdrop_path" img-alt="Image" img-top to="/detail">
      <b-card-text>
        {{overview}}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
    import axios from 'axios'
    import CardMovieComponent from "../../components/ItemComponent.vue"

    export default {
        name: "_id.vue",
        components : {CardMovieComponent},
        validate ({ params }) {
            return !isNaN(+params.id)
        },
        async asyncData ({ params, error }) {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${+params.id}?api_key=7a46c43b9f87609dec9683e5051d298f`);
                console.log(data);
                return data
            } catch (e) {
                error({ message: 'User not found', statusCode: 404 })
            }
        }
    }
</script>

<style scoped>

</style>
