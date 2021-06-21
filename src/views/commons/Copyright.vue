<template>
  <v-footer class="copyright-footer">
    <div class="container is-flex">
      <div>
        <p class="copyright-footer-text">
          &copy; Copyright {{currentYear}} Todos los derechos reservados CJPF
        </p>
      </div>
      <div>
      </div>
    </div>
  </v-footer>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Copyright',
  data () {
    return {
      currentYear: moment().format('YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
.copyright-footer {
  background-color: black;
  height: 100px;
  z-index: -1;
  padding: 100px;
}
.copyright-footer-text {
  color: white;
}
</style>
