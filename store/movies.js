export const state = () => ({
  movies: [
  ]
})

export const mutations = {
  update (state, result){
    state.movies = result;
    console.log(state.movies);
  }
}

export const getters = {
  get (state) {
    return state.movies
  }
}

