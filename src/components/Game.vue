<template>
  <div>
    <img src="@/assets/flag.png" alt="flag" />
    <form>
      <label for="fname">Name of the flag</label>
      <br />
      <input type="text" v-model="answer" />
      <br />
      <p v-on:answerCorrect="updateResponse()"> Preview {{ answer }}</p>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>

export default {
  name: "game",
  data() {
    return {
      answer: "",
    };
  },
  methods: { 
    processanswer: function (){
      this.$emit('answerCorrect', 'GJ!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  width: 250px;
}
</style>
