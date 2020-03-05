<template>
  <div style="overflow-y: auto; width: 100%">
    <div class="title">
      <h3>Loaderboard</h3>
    </div> 
    <p v-if="players.length === 0">Noone Played</p>
    <div class="msg">
        <p class="msg-index">Position</p>
        <p class="msg-index">Name</p>
        <p class="msg-index">Score</p>
    </div> 
    <div class="msg" v-for="(player, index) in players" :key="index">
        <p class="msg-index">{{index+1}}.</p>
        <p class="msg-subject" v-html="player.name"></p>
        <p class="msg-body" v-html="player.score"></p>
    </div> 
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Players",
  data() {
    return {
      name: "",
      score: "",
    };
  },
  computed: mapState({
    players: state => state.players.players.sort(function(a, b) {
      return b.score - a.score;
    })
  }),
  methods: mapActions('players', [
    'addPlayer',
    'deletePlayer'
  ]),
  created() {
    this.$store.dispatch('players/getPlayers')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  max-width: 65%;
}

.title {
  top: 0;
  right: 0;
  width: 100%;
  height: 10%;
  background: rgba(0, 0, 0, 0.19);
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.msg {
  top: 0;
  right: 0;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  vertical-align: middle;
  margin: auto;
}

.msg-index {
  font-size: 1.3rem;
  /* margin-bottom: 0; */
}

</style>
