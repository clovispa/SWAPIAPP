<template>
  <div class="sw-home">
    <header class="sw-home__header">
      <img src="../assets/swimg.jpg" alt="starWar">
    </header>
    <main class="sw-home__main">
      <h1>Welcome to Star Wars API</h1>
      <p>All the Star Wars data you've ever wanted:</p>
      <p> Planets, Spaceships, Vehicles, People, Films and Species</p>
    <sw-bottom :isActive="true" path="/section">Get started</sw-bottom>
    </main>
  </div>
</template>

<script>


import SwBottom from "../components/commons/SwButton";
export default {
  name: 'Home',
  components: {
    SwBottom
  }
}
</script>
<style scoped lang="scss">
.sw-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2.225rem auto 0 auto;

  .sw-home__header {
    position: relative;

    img {
      max-width: 80%;
      height: auto;
      border-radius: 10px;
      display: block;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: 46px 67px;
    }
  }

  .sw-home__main {
    text-align: center;
    padding: 30px;

    h1 {
      font-weight: 700;
      font-size: 1.625rem;
    }

    p {
      margin-bottom: 20px;
    }
  }
}
</style>
