<template>
  <div style="overflow-y: auto;">
    <div class="userInfoContainer">
      <div style="margin: 5px 0px">Tries left: {{ lifes }}</div>
      <div style="margin: 5px 0px">Nº correct countries: {{ correctAnswers }}</div>
      <div style="margin: 5px 0px">
        <b-button
            type="submit"
            @click="getHint"
            id="bbutton"
            class="btn btn-info btn-lg btn-block"
          >{{ hints }} Hints</b-button>
      </div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Save your results on the leaderboard"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            :state="nameState"
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    <div class="container">
      <div class="flagContainer">
        <img
          :src="getImgUrl(code)"
          alt="flag"
          id="border"
          v-bind:class="[this.wrongAnswer ? 'shakeImg' : null]"
        />
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
import { mapState, mapActions } from "vuex";

export default {
  name: "game",
  data() {
    return {
      answer: "",
      response: "",
      correctAnswers: 0,
      hints: 3,
      lifes: 5,
      code: "",
      wrongAnswer: false,
      nameState: null,
      imgSrc: require("@/assets/flags-big/es.png"),
      flagNumber: null,
      name: "",
    };
  },
  created() {
    this.flagNumber = this.randomNumber();
    this.response = this.countries[this.flagNumber].name;
    this.code = this.countries[this.flagNumber].code.toLowerCase();
    this.imgSrc = require("@/assets/flags-big/"+this.code+".png");
    this.getImgUrl(code);
  },
  computed: mapState({
    countries: state => state.players.countries
  }),
  methods: mapActions('players', [
    'addPlayer',
  ]),
  methods: {
    answerTodo(answer) {
      if (this.answer.toUpperCase() === this.countries[this.flagNumber].name.toUpperCase()) {
        this.correctAnswers += 1;
        this.answer = "";
        this.flagNumber = this.randomNumber();
        this.response = this.countries[this.flagNumber].name;
        this.code = this.countries[this.flagNumber].code.toLowerCase();
        this.imgSrc = this.getImgUrl(code);
      } else {
        if (this.lifes === 0) {
          this.noLifesLeft();
        }
        this.lifes -= 1;
        this.wrongAnswer = true;
        var self = this;
        setTimeout(function() {
          self.wrongAnswer = false;
        }, 1000);
      }
    },
    getHint(){
      if(this.hints>=1){
        this.hints -= 1;
        this.answer = this.response;
      } 
    },
    getImgUrl(pet) {
      var images = require.context('@/assets/flags-big/', false, /\.png$/)
      return images('./' + pet + ".png")
    },
    randomNumber : function(){
      return Math.floor(Math.random() * (197 - 0 + 1)) + 0;
    },
    noLifesLeft() {
      this.showModal();
    },
    setAnswerNullAgain() {
      this.wrongAnswer = false;
    },
    showModal() {
      this.$refs["modal"].show();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.answer = "";
      this.response = "";
      this.correctAnswers = 0;
      this.lifes = 5;
      this.code = "";
      this.wrongAnswer = false;
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      this.$store.dispatch('players/addPlayer', { name: this.name, score: this.correctAnswers })
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
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
  margin-bottom: 3%;
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
  width: 50%;
  object-fit: cover;
}

.shakeImg {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
