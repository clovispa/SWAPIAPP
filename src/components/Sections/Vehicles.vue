<template>
  <div>
    <main class="sw-vehicles__main">
      <h1>Vehicles</h1>
      <br>
    </main>
    <v-data-table
        :headers="headers"
        :items="datavehicles"
        hide-default-footer
        class="elevation-1"
    ></v-data-table>
    <div class="container">
      <main class="sw-vehicles__main">
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
  name: "Vehicles",
  components: {Loading},
  data() {
    return {
      datavehicles: [],
      headers: [
        { text: 'NAME', value: 'name' },
        { text: 'MODEL', value: 'model' },
      ],
    }
  },
  created() {
    this.getvehicles();
  },
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    getvehicles (){
      this.$store.commit('SET_LOADING', true)
      ApiService.apiVehicles().then((res) => {
        const {data} = res;
        this.datavehicles = data.results;
        this.$store.commit('SET_LOADING', false)
      }).catch(error => {
        this.$store.commit('SET_LOADING', false)
        console.error(error)
      })
    }
  }
}
</script>

<style  scoped lang="scss">
.sw-vehicles__main {
  text-align: center;
  padding: 30px;

h1 {
  font-weight: 700;
  font-size: 1.625rem;
}
}
</style>
