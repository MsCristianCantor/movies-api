<template>
  <div class="col-md-4">
    <b-card :key="`item-movie-${index}`"
            v-bind:title="movie.original_title"
            v-bind:img-src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+movie.poster_path"
            img-alt="Image"
            img-top
    >
      <b-card-text>
        <CardMovieComponent :popularity="movie.popularity" />
        {{movie.overview}}
      </b-card-text>
      <button-component :text="'View Detail'" :id_movie="movie.id"/>
    </b-card>

  </div>
</template>

<script>
    import ButtonComponent from "./ButtonComponent.vue";
    import CardMovieComponent from "./CardMovieComponent.vue"
    export default {
        name: "ItemComponent",
        components : {ButtonComponent, CardMovieComponent},
        props : ['movie', 'index']
    }
</script>

<style scoped>

</style>
