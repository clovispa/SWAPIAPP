<template>
  <div>
    <section>
      <div class="container">
        <v-row>
          <v-col class="  sw-home">
            <v-container
                class="fill-height"
                fluid
                style="min-height: 434px"
            >
              <v-fade-transition mode="out-in">
                <v-row>
                  <v-col>
                    <v-card>
                      <img height="165" class="v-responsive" src="../assets/films.jpg" alt="starWar">
                      <v-card-title class="text-h6">
                        <v-btn
                            to="/films"
                        >
                          Films
                        </v-btn>
                      </v-card-title>
                    </v-card>
                  </v-col>

                  <v-col>
                    <v-card>

                      <img  class="v-responsive" height="165" width="370" src="../assets/porsche.jpg" alt="starWar">

                      <v-card-title class="text-h6">
                        <v-btn
                            to="/starships"
                        >
                          Starships
                        </v-btn>
                      </v-card-title>
                    </v-card>
                  </v-col>

                  <v-col>
                    <v-card>
                      <img  class="v-responsive" height="165" width="370" src="../assets/unnamed.jpg" alt="starWar">
                      <v-card-title class="text-h6">
                        <v-btn
                            to="/vehicles"
                        >
                          vehicles
                        </v-btn>
                      </v-card-title>
                    </v-card>
                  </v-col>

                </v-row>
              </v-fade-transition>
            </v-container>
          </v-col>
        </v-row>
      </div>

    </section>

  </div>
</template>

<script>



export default {
  name: "Section",
}
</script>
