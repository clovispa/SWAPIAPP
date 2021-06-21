<template>
<div>
  <v-expansion-panels   v-for="item in dataStarWars"
                        :key="item.id">
    <v-expansion-panel>
      <v-expansion-panel-header @click="getEndPointCharacters(item)">
        {{ item.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content v-for="element in characters " :key="element.id">
        <a @click="searchCharacters(element)">{{element}}</a>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  <div class="container">
    <v-btn
        to="/section"
    >
      Go back
    </v-btn>
  </div>

  <div v-if="viewModal">
    <ModalPeople :dataCharacters="dataCharacters"></ModalPeople>
  </div>
</div>
</template>

<script>
import ApiService from '@/service/ApiService';
import ModalPeople from "../ModalPeople";
import {mapState} from 'vuex';



export default {
  name: "Films",
  components: {ModalPeople},
  data () {
    return {
      dataStarWars: [],
      detailsPeople: [],
      characters: [],
      dataCharacters: [],
    }
  },
  computed: {
    ...mapState(['viewModal']),
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      ApiService.apisw().then((res) => {
        const {data} = res;
        this.dataStarWars = data.results
      }).catch(error => {
        console.error(error)
      })
    },
    getEndPointCharacters(item) {
     let charactersArray = item.characters
      let charactersObj = {...charactersArray}
      for (const prop in charactersObj) {
        let endpoint = `${charactersObj[prop]}`;
        this.details(endpoint);
      }
    },
    details(item) {
      let endpoint = item
      const newEndpoint = endpoint.slice(-10)
      ApiService.apiPeople(newEndpoint).then((res) => {
        this.detailsPeople= res
        this.fillArrayEnpoint(this.detailsPeople);
      }).catch(err => {
        console.log(err)
      })
    },
    fillArrayEnpoint(item) {
      this.characters.push(item.data.name);
    },
    searchCharacters(item) {
      ApiService.apiSearch(item).then((res)=> {
        this.dataCharacters = res.data.results;
        this.$store.commit('SET_MODAl', true)
      }).catch(err => {
        console.log(err)
      })
    }
  },

}
</script>

<style scoped>

</style>
