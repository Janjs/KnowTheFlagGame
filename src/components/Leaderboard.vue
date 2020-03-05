<template>
  <div style="overflow-y: auto;">
    <p>The data below is added/removed from the SQLite Database using Django's ORM and Rest Framework.</p>
    <br/>
    <p>Subject</p>
    <input type="text" placeholder="Hello" v-model="name">
    <p>Leaderboard</p>
    <input type="number" v-model="score">
    <br><br>
    <input 
      type="submit" 
      value="Add" 
      @click="addPlayer({ name: name, score: score })" 
      :disabled="!name || !score">

    <hr/>
    <h3>Loaderboard on Database</h3>
    <p v-if="players.length === 0">Noone Played</p>
    <div class="msg" v-for="(player, index) in players" :key="index">
        <p class="msg-index">[{{index}}]</p>
        <p class="msg-subject" v-html="player.name"></p>
        <p class="msg-body" v-html="player.score"></p>
        <input type="submit" @click="deleteMessage(player.pk)" value="Delete" />
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
    players: state => state.players.players
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

.userInfoContainer {
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
  margin: 0 auto;
  max-width: 30%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}

.msg-index {
  color: #ccc;
  font-size: 0.8rem;
  /* margin-bottom: 0; */
}

img {
  width: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}

</style>
