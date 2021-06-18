<template>
<div>
  <div class="container">
    <div v-for="h in dataSw" :key="h.id">
      <v-btn
          to="/films"
          icon>
        {{h.title}}
      </v-btn>
    </div>
  </div>


</div>
</template>

<script>
import ApiService from '@/service/ApiService';

export default {
  name: "Films",
  data () {
    return {
      dataSw: [],
    }
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      ApiService.apisw().then((res) => {
        const {data} = res;
        this.dataSw = data.results
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
