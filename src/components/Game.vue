<template>
  <div>
    <div class="userInfoContainer">
      <div style="margin: 5px 0px"> Tries left: {{ lifes }} </div>
      <div style="margin: 5px 0px"> Nº correct countries: {{ correctAnswers }} </div>
    </div>
    <div class="container">
      <div class="flagContainer">
        <img src="@/assets/flags-big/bb.png" alt="flag" id="border" />
      </div>
      <form @submit="answerTodo" v-on:answer-todo="answerTodo">
        <br />
        <div id="answerContainer">
          <h3 style="margin-right: 2%;">Name the country:</h3>
          <input type="text" v-model="answer" class="textAnswer" />
        </div>
        <br />
        <!--        <p v-on:answerCorrect="updateResponse()"> Preview {{ answer }}
          :src="'../assets/flags-big/'+code+'.png'" 
        </p>-->
        <div id="buttonContainer">
          <b-button
            type="submit"
            @click="$emit('answer-todo', answer)"
            id="bbutton"
            style="width: 80%"
            class="btn btn-success btn-lg btn-block"
          >Answer</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "game",
  data() {
    return {
      answer: "",
      response: "",
      correctAnswers: 0,
      lifes: 5,
      code: ""
    };
  },
  created(){
    this.code = this.countries[0].code.toLowerCase();
  },
  computed: mapState({
    countries: state => state.messages.countries
  }),
  methods: {
    answerTodo(answer) {
      if(this.answer.toUpperCase() === "spain".toUpperCase()){
        this.makeToast('success');
        this.response = this.answer + " is correct";
      } else {
        this.makeToast('danger')
        this.response = this.answer + " is wrong";
      }
      /*this.response =
        this.answer.toUpperCase() === "spain".toUpperCase()
          ? this.answer + " is correct"
          : this.answer + " is wrong";*/
    },
    makeToast(variant = null) {
        this.$bvToast.toast('Toast body content', {
          title: `Variant ${variant || 'default'}`,
          toaster: 'b-toaster-top-right',
          variant: variant,
          solid: true,
          autoHideDelay: 1000
        })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bbutton {
  margin: 0px;
}
#border {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#answerContainer {
  margin-top: 3%;
  display: flex;
  justify-content: center;
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
  justify-content: center;
  text-align: left;
  max-height: 100%;
  max-width: 100%;
  overflow-y: auto;
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
  justify-content: center;
}
.flagContainer img {
  max-height: 100%;
  max-width: 60%;
  width: 80%;
  object-fit: cover;
}
</style>
