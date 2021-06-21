<template>
<div>
  <main class="sw-films__main">
    <h1>Films</h1>
    <br>
  </main>
  <v-expansion-panels   v-for="item in dataStartWars"
                        :key="item.id">
    <v-expansion-panel>
      <v-expansion-panel-header @click="getItems(item)">
        {{ item.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content v-for="element in characters " :key="element.id">
        <a @click="searchCharacters(element)">{{element}}</a>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  <div v-if="viewModal">
    <ModalPeople :dataPerson="dataPerson"></ModalPeople>
  </div>
  <div class="container">
    <main class="sw-films__main">
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
import ModalPeople from '../ModalPeople';
import {mapGetters, mapState} from 'vuex';
import Loading from '../commons/Loading';



export default {
  name: 'Films',
  components: {Loading, ModalPeople},
  data () {
    return {
      dataStartWars: [],
      detalisCharacters: [],
      characters: [],
      dataPerson: [],
    }
  },
  computed: {
    ...mapState(['viewModal']),
    ...mapGetters(['loading']),
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      this.$store.commit('SET_LOADING', true)
      ApiService.apisw().then((res) => {
        const {data} = res;
        this.dataStartWars = data.results
        this.$store.commit('SET_LOADING', false)
      }).catch(error => {
        this.$store.commit('SET_LOADING', false)
        console.error(error)
      })
    },
    getItems(item) {
     let newCharacters = item.characters
      let arrayCharacters = {...newCharacters}
      for (const prop in arrayCharacters) {
        let endpoint = `${arrayCharacters[prop]}`;
        this.details(endpoint);
      }
    },
    details(item) {
      let endpoint = item
      const newEndpoint = endpoint.slice(-10)
      ApiService.apiPeople(newEndpoint).then((res) => {
        this.detalisCharacters= res
        this.fillEndpoint(this.detalisCharacters);
      }).catch(err => {
        console.log(err)
      })
    },
    fillEndpoint(item) {
      this.characters.push(item.data.name);
    },
    searchCharacters(item) {
      this.$store.commit('SET_LOADING', true)
      ApiService.apiSearch(item).then((res)=> {
        this.dataPerson = res.data.results;
        this.$store.commit('SET_MODAl', true)
        this.$store.commit('SET_LOADING', false)
      }).catch(err => {
        console.log(err)
        this.$store.commit('SET_LOADING', false)
      })
    }
  },

}
</script>

<style scoped lang="scss">
.sw-films__main {
  text-align: center;
  padding: 30px;

  h1 {
    font-weight: 700;
    font-size: 1.625rem;
  }
}
</style>
