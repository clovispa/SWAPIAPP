<template>
<div>
  <p>Starship Class</p>
  <v-data-table
      :headers="headers"
      :items="dataStarship"
      hide-default-footer
      class="elevation-1"
  ></v-data-table>
  <br>
  <div class="container">
    <v-btn
        to="/section"
    >
      Go back
    </v-btn>
  </div>

</div>
</template>

<script>
import ApiService from '@/service/ApiService';
export default {
  name: "Starships",
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
  methods: {
    getStarship (){
      ApiService.apiStarships().then((res) => {
        const {data} = res;
        this.dataStarship = data.results;
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
