<template>
<div>
  <main class="sw-Starships__main">
    <h1>Starship Class</h1>
    <br>
  </main>
  <v-data-table
      :headers="headers"
      :items="dataStarship"
      hide-default-footer
      class="elevation-1"
  ></v-data-table>
  <div class="container">
    <main class="sw-Starships__main">
      <v-btn
          to="/section"
          color="red"
      >
        Go back
      </v-btn>
    </main>

  </div>
  <loading :loading="loading"/>

</div>
</template>

<script>
import ApiService from '@/service/ApiService';
import Loading from '../commons/Loading';
import {mapGetters} from 'vuex';
export default {
  name: "Starships",
  components: {Loading},
  data() {
    return {
     dataStarship: [],
      headers: [
        { text: 'NAME', value: 'name' },
        { text: 'STARSHIP CLASS', value: 'starship_class' },
      ],
    }
  },
  created() {
    this.getStarship();
  },
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    getStarship (){
      this.$store.commit('SET_LOADING', true)
      ApiService.apiStarships().then((res) => {
        const {data} = res;
        this.dataStarship = data.results;
        this.$store.commit('SET_LOADING', false)
      }).catch(error => {
        this.$store.commit('SET_LOADING', false)
        console.error(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.sw-Starships__main {
  text-align: center;
  padding: 30px;

  h1 {
    font-weight: 700;
    font-size: 1.625rem;
  }
}
</style>
