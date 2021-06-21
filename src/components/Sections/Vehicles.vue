<template>
  <div>
    <p>Vehicles</p>
    <v-data-table
        :headers="headers"
        :items="datavehicles"
        hide-default-footer
        class="elevation-1"
    ></v-data-table>
    <br>
    <div class="container align-center">
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
  name: "Vehicles",
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
  methods: {
    getvehicles (){
      ApiService.apiVehicles().then((res) => {
        const {data} = res;
        this.datavehicles = data.results;
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
