<template>
  <div id="app">
    <div v-bind:class="[isSmallScreen() ? 'mobileRouting' : 'routing']">
          <div class="inside-routing">
                <h1>Know the country flag game</h1>
                  <router-link :to="{ name: 'game' }">
                    <b-button id="bbutton">Start Game</b-button>
                  </router-link>
                  <br />
                  <router-link :to="{ name: 'messages' }">
                    <b-button id="bbutton">Leaderboard</b-button>
                  </router-link>
                </div>
                </div>  
        <div v-bind:class="[isSmallScreen() ? 'mobileMain' : 'main']">
          <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    isSmallScreen() {
      return this.$mq === 'sm' ? true : false
    }
  }
}
</script>

<style>
#app {
  font-family: "Luminari", fantasy;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(0, 0%, 100%);
}
body {
  background-image: url("./assets/flagbackground.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}

.main {
  height: 100%;
  width: 80%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
}
.inside-routing{
   max-height: 100%;
  max-width: 100%;
}
.mainMobile {
  height: 80%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
}
.routing {
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  align-items: center;
}

.routingMobile {
  height: 20%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.091);
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  align-items: center;
}
#bbutton {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
  margin: 10px 10px;
}
</style>
