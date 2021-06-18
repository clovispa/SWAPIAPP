<template>
  <div>
    <section>
     <v-row>
       <v-col class="sw-home">
         <v-container
             class="fill-height"
             fluid
             style="min-height: 434px"
         >
           <v-fade-transition mode="out-in">
             <v-row>
               <v-col cols="6">
                 <v-card>
                   <v-img
                       src="https://picsum.photos/350/165?random"
                       height="125"
                       class="grey darken-4"
                   ></v-img>
                   <v-card-title class="text-h6">
                     <v-btn
                         to="/films"
                         icon>
                         Films
                     </v-btn>
                   </v-card-title>
                 </v-card>
               </v-col>

               <v-col cols="6">
                 <v-card>
                   <v-img
                       src="https://picsum.photos/350/165?random"
                       height="125"
                       contain
                       class="grey darken-4"
                   ></v-img>
                   <v-card-title class="text-h6">
                     Starships
                   </v-card-title>
                 </v-card>
               </v-col>

               <v-col cols="6">
                 <v-card>
                   <v-img
                       src="https://picsum.photos/350/165?random"
                       max-height="125"
                       class="grey darken-4"
                   ></v-img>
                   <v-card-title class="text-h6">
                     Vehicles
                   </v-card-title>
                 </v-card>
               </v-col>

             </v-row>
           </v-fade-transition>
         </v-container>
       </v-col>
       <v-col class="sw-home">
         <img src="../assets/swimg.jpg" alt="starWar">
       </v-col>
     </v-row>
    </section>

  </div>
</template>

<script>
import ApiService from '@/service/ApiService';


export default {
  name: "Section",
  data () {
    return {

    }
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      ApiService.apisw().then((res) => {
        const {data} = res;
        console.log('ss', data)
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.sw-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 2.225rem auto 0 auto;
}
</style>
