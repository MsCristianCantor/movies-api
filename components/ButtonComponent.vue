<template>
  <a class="btn btn-primary" v-bind:href="'/detail/'+id_movie" >{{text}}</a>
</template>

<script>
    export default {
        name: "ButtonComponent",
        props : {
            text : {
                type: String,
                default: "accion"
            },
            id_movie: {
                type: Number,
            }
        },
        methods: {
            detail(id) {
                window.location.href = "/detail/"+id;
            }
        }
    }
</script>

<style scoped>

</style>
