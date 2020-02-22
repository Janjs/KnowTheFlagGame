<template>
  <div class="container">
    <div class="flagContainer">
       <img src="@/assets/flags-big/us.png" alt="flag" id="border" />
    </div>
    <form>  
      <br />
      <div id="answerContainer"> 
        <h3 style="margin-right: 2%;">Name the country:</h3>
        <input type="text" v-model="answer" class="textAnswer" />
      </div>
      <br />
      <!--        <p v-on:answerCorrect="updateResponse()"> Preview {{ answer }}</p>-->
      <div id="buttonContainer"> 
        <b-button id="bbutton" style="width: 80%" class="btn btn-success btn-lg btn-block">Answer</b-button>
      </div>
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
#bbutton {
  margin: 0px
}
#border {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#answerContainer {
  margin-top: 3%;
  display: flex;
  justify-content:center;
  width: 100%;
}
#buttonContainer {
  display: flex;
  justify-content: space-around;
}
.textAnswer {
  width: 56%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align:left;
  max-height:100%;
  max-width: 100%;
  overflow-y: auto;
  margin: 10% 0px;
}
.flagContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  max-width: 100%;
  width: 80%;
  display: flex;
  justify-content:center;
}
.flagContainer img {
  max-height:100%;
  max-width: 60%;
  width: 80%;
  object-fit: cover;
}

</style>
