<template>
  <div>
    <span><b>Popularidad {{popularity}}</b></span>
    <hr/>
  </div>
</template>

<script>
    export default {
        name: "CardMovieComponent",
        props : {
            popularity : {
                default: "0"
            }
        }
    }
</script>

<style scoped>

</style>
