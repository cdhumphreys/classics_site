<template>
  <div class="book">
    <h2>Book {{$route.params.bookNumber}}</h2>
    <h3><em>{{bookTitle}}</em></h3>
    <ul v-for="(question, questionIndex) in easy['questions']" v-bind:data-difficulty="'easy'">
      <transition name="fade">
        <div v-if="questionIndex <= currentQuestion" v-bind:data-question="questionIndex">
          <h3>{{question}}</h3>
          <li class="answer" v-for="(answer, answerIndex) in easy['answers'][questionIndex]" v-on:click="answerQuestion" v-bind:data-answer="answerIndex" v-bind:data-questionIndex="questionIndex">
            <h4>{{answer}}</h4>
          </li>
        </div>
      </transition>
    </ul>
    <div v-if="rightAnswers > 0" class="total">
      Total: {{rightAnswers}} / 12
    </div>
  </div>
</template>

<script>
import testData from '../assets/bookTest.js';
export default {
  name: 'book',
  data () {
    return {
      bookTitle: '',
      easy: {},
      medium: {},
      hard: {},
      currentQuestion: 0,
      rightAnswers: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.bookTitle = testData[this.$route.params.bookNumber - 1]['title'];
      this.easy = testData[this.$route.params.bookNumber - 1]['easy'];
      this.medium = testData[this.$route.params.bookNumber - 1]['medium'];
      this.hard = testData[this.$route.params.bookNumber - 1]['hard'];
    },
    answerQuestion(e) {
      const answerIndex = e.path[1].dataset.answer;
      const questionIndex = e.path[2].dataset.question;
      const questionDifficulty = e.path[3].dataset.difficulty;

      if (parseInt(questionIndex) === this.currentQuestion) {
        const answerGiven = this[questionDifficulty].answers[questionIndex][answerIndex];
        const correctAnswer = this[questionDifficulty].correct[questionIndex];

        const clickedElement = e.path[1];

        const correctAnswerIndex = this[questionDifficulty].answers[questionIndex].indexOf(correctAnswer);
        const correctAnswerElement = document.querySelectorAll('.answer[data-questionIndex="' + questionIndex + '"]')[correctAnswerIndex];

        if (answerGiven === correctAnswer) {
          this.correctAnswerGiven(clickedElement);
          this.rightAnswers++;
        } else {
          this.wrongAnswerGiven(clickedElement, correctAnswerElement);
        }
        this.currentQuestion++;
      }
    },
    correctAnswerGiven(element) {
      element.classList.add('correctAnswer');
    },
    wrongAnswerGiven(givenAnswerElement, correctAnswerElement) {
      console.log('elements', givenAnswerElement, correctAnswerElement);
      correctAnswerElement.classList.add('correctAnswer');
      givenAnswerElement.classList.add('wrongAnswer');
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../styles/settings.scss";
  .book {
    font-family: $font-themed;
    font-size: 20px;
  }

  .correctAnswer {
    background-color: rgba(0,255,0, 0.5);
  }
  .wrongAnswer {
    background-color: rgba(255,0,0, 0.5);
  }

  .answer:hover {
    cursor: pointer;

  }

  .answer:hover h4 {
    text-shadow: 1px 1px rgba(0,0,0, 0.5);
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(-100%);
  }

  ul {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    div {
      text-align: left;
    }

    li {
      list-style: none;
      width: 50%;
      margin-left: 5rem;
      background-color: rgba(255,255,255,1);
      transition: background-color 1000ms ease-in-out;

      h4 {
        text-align: center;
        border: 2px black solid;
        padding: 1rem;
      }
    }
  }

  .total {
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    width: 5rem;
    border: 2px black solid;

    font-size: 2rem;
    color: black;
  }

</style>
