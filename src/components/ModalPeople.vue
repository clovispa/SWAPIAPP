<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
          v-model="dialog"
      >
        <template>
          <v-card>
            <v-toolbar
                color="primary"
                dark
            >Details :</v-toolbar>
            <v-card-text>
              <div>
                <v-row>
                  <br>
                  <v-col>Name:</v-col>
                  <v-col><strong>{{ dataPerson[0].name }}</strong></v-col>
                  <v-col>Gender:</v-col>
                  <v-col>{{ dataPerson[0].gender }}</v-col>
                </v-row>
                <v-row>
                  <v-col>Skin Color:</v-col>
                  <v-col><strong>{{ dataPerson[0].skin_color }}</strong></v-col>
                  <v-col>Height:</v-col>
                  <v-col>{{ dataPerson[0].height }}</v-col>
                </v-row>
                <v-row>
                  <v-col>Hair Color:</v-col>
                  <v-col><strong>{{ dataPerson[0].hair_color }}</strong></v-col>
                  <v-col>Eye Color:</v-col>
                  <v-col>{{ dataPerson[0].eye_color }}</v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="viewdialog"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>

export default {
  name: "ModalPeople",
  props: ['dataPerson'],
  data (){
    return {
      dialog: true
    }
  },
  methods: {
    viewdialog() {
      this.$store.commit('SET_MODAl', false)
    }
  }
}
</script>

