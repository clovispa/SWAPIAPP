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
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
              >
                <v-flex cols="12" md="12" class="pt-0 pb-0">
                  <v-text-field  label="Name" v-model="jsonData.name"  :rules="nameRules"  clearable outlined dense></v-text-field>
                </v-flex>
                <v-flex cols="12" md="12" class="pt-0 pb-0">
                  <v-text-field  label="LastName" v-model="jsonData.lastName" :rules="lastNameRules"   clearable outlined dense></v-text-field>
                </v-flex>
                <v-flex cols="12" md="12" class="pt-0 pb-0">
                  <v-text-field  label="Email" v-model="jsonData.email" :rules="emailRules"  clearable outlined dense></v-text-field>
                </v-flex>
              <v-flex cols="12" md="12" class="pt-0 pb-0">
                <v-text-field  label="Postal Code" v-model="jsonData.postalCode"  :rules="postalCodeRules" clearable outlined dense></v-text-field>
              </v-flex>
              <v-flex cols="12" md="12" class="pt-0 pb-0">
                <v-text-field  label="Opcional" v-model="jsonData.optinal"   clearable outlined dense></v-text-field>
              </v-flex>
              </v-form>
            </v-col>
            <v-row>
              <v-col cols="8">
                <v-btn color="info" :disabled="!valid || isEmpty"  @click="validate">Send
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
    <modal-message-send :dialog="dialog"/>
    <loading :loading="loading" />
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';
import Loading from '../components/commons/Loading';
import ModalMessageSend from '../components/commons/ModalMessageSend';
export default {
  name: 'ContactUs',
  components: {ModalMessageSend, Loading},
  data () {
    return {
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 12) || 'Name must be less than 12 characters',
      ],
      lastNameRules: [
        v => !!v || 'LastName is required',
        v => (v && v.length <= 12) || 'LastName must be less than 12 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      postalCodeRules: [
        v => !!v || 'postalCode is required',
        v => /((^[5]{1})[0-2][0-9]{3})|((^[0]{1})[1-9]{1}[0-9]{3})|((^[1-4]{1})[0-9]{1}[0-9]{3})$/.test(v) || 'PostalCode must be valid',
      ],
      jsonData: {
        name: null,
        lastName: null,
        email: null,
        postalCode: null,
        optinal: null
      },
      isEmpty: true
    }
  },
  computed: {
    ...mapGetters(['loading', 'dialog']),
  },
  watch: {
    'jsonData.name' () {
      if (this.jsonData.name == '') this.isEmpty = true
       else this.isEmpty = false
    },
    'jsonData.lastName' () {
      if (this.jsonData.lastName == '') this.isEmpty = true
      else this.isEmpty = false
    },
    'jsonData.email' () {
      if (this.jsonData.email == '') this.isEmpty = true
      else this.isEmpty = false
    },
    'jsonData.postalCode' () {
      if (this.jsonData.postalCode == '') this.isEmpty = true
      else this.isEmpty = false
    }
  },
  methods: {
    ...mapActions({
      apiMockup: 'apiMockup',
    }),
    validate () {
        this.$refs.form.validate();
      this.call();

    },
    call() {
      if(this.valid && this.isEmpty == false){
        this.apiMockup(this.jsonData)
      } else {
        this.validate();
      }
    }
  }

}
</script>
<style scoped lang="scss">
.sw-contact {
  margin: 5.225rem auto 0 auto;
}
</style>
