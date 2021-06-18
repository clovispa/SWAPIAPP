<template>
  <div class="sw-button">
    <router-link :class="{ 'active': isActive }" :to="path" >
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "swBottom",
  props: {
    path: {
      type: String,
      required: true
    },

    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped >
.sw-button {
  a {
    padding: 10px 25px;
    background-color: red;
    border-radius: 60px;
    color: #ffffff;
    border: none;
    font-weight: 700;
    text-decoration: none;
    margin-right: 10px;

      &.router-link-exact-active {
         background-color: red;
       }
  }

  .active {
    background-color: red;
  }
}
</style>
