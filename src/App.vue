<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">
        <NavBar></NavBar>
      </router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from './components/commons/NavBar';
export default {
  components: {NavBar}
}
</script>
