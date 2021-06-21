<template>
  <div id="app">
    <v-app id="inspire" v-if="dialog">
      <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
          <v-card>

            <v-card-text>
              <br>
            <h1>Congratulations message sent !!</h1>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="closed"
              >
                Closed
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "ModalMessageSend",
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closed () {
      this.dialog = false;
      this.$store.commit('SET_DIALOG', false);
    }
  }
}
</script>

