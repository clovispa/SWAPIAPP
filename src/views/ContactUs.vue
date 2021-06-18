<template>
  <div class="sw-contact">
      <v-card
          max-width="400"
          class="mx-auto"
      >
        <v-app-bar
            dark
            color="black"
        >
          <v-toolbar-title>Contact Us</v-toolbar-title>
        </v-app-bar>

        <v-container>
          <v-row dense>
            <v-col cols="12">

                <v-flex cols="12" md="12" class="pt-0 pb-0">
                  <v-text-field  label="Name" v-model="jsonData.name"   clearable outlined dense></v-text-field>
                </v-flex>
                <v-flex cols="12" md="12" class="pt-0 pb-0">
                  <v-text-field  label="LastName" v-model="jsonData.lastName"   clearable outlined dense></v-text-field>
                </v-flex>
                <v-flex cols="12" md="12" class="pt-0 pb-0">
                  <v-text-field  label="Email" v-model="jsonData.email"   clearable outlined dense></v-text-field>
                </v-flex>
              <v-flex cols="12" md="12" class="pt-0 pb-0">
                <v-text-field  label="Postal Code" v-model="jsonData.postalCode"  clearable outlined dense></v-text-field>
              </v-flex>
              <v-flex cols="12" md="12" class="pt-0 pb-0">
                <v-text-field  label="Opcional" v-model="jsonData.optinal"   clearable outlined dense></v-text-field>
              </v-flex>
            </v-col>
            <v-row>
              <v-col cols="8">
                <v-btn color="info" @click="getForm">Send
                </v-btn>
              </v-col>
             <v-col>
               <v-btn color="error" to="/">Cancel
               </v-btn>
             </v-col>

            </v-row>
            <br>
            <br>
          </v-row>
        </v-container>
      </v-card>
  </div>
</template>
<script>
import ApiService from '../service/ApiService';
export default {
  name: 'ContactUs',
  data () {
    return {
      jsonData: {
        name: null,
        lastName: null,
        email: null,
        postalCode: null,
        optinal: null
      }
    }
  },
  methods: {
    getForm() {
      ApiService.apiMockup(this.jsonData).then((res) => {
        const { data } = res;
        console.log(data)
      })

    }
  }

}
</script>
<style scoped lang="scss">
.sw-contact {
  margin: 5.225rem auto 0 auto;
}
</style>
