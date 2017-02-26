<template>
  <div class="plot">
    <ul>
      <li v-for="book in books">
          <label :for="book.number">
            <span class="outer"><span class="inner" :class="book.number == activeBook ? 'scaledUp' : 'scaledDown'"></span></span>
            <input v-model="activeBook" type="radio" :id="book.number" :value="book.number" name="selector">
            <h2>Book {{book.number}}:</h2>
            <h2><em>{{ book.title }}</em></h2>
          </label>
          <div class="clickouts"
              :class="book.number == activeBook ? '' : 'hidden'">
            <router-link :to="'/plot/revise/'+book.number">
              Revise Summary
            </router-link>
            <router-link :to="'/plot/test/'+book.number">
              Test Myself!
            </router-link>
          </div>

      </li>
    </ul>
  </div>
</template>

<script>
import testData from '../assets/bookTest.js';

export default {
  name: 'plot',
  data () {
    return {
      books: testData,
      activeBook: 1
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";
  ul {
    font-family: $font-themed;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-around;
    align-items: center;


    li {
      display: flex;
      width: 90%;
      padding: 2rem 0 2rem 0;
      flex: 1 1 auto;
      flex-direction: row;
      flex-wrap: wrap;
      list-style: none;
      justify-content: space-between;
      align-items: center;



      font-size: 1.5rem;

      label {
          width: 50%;
          display: flex;
          flex: 1 1 auto;
          flex-direction: row;
          flex-wrap: wrap;

          align-items: center;
          justify-content: flex-start;

          .outer {
            display: block;
            position: relative;
            width: 20px;
            height: 20px;
            border: 5px solid $primary-color;
            border-radius: 50%;
          }
          .inner {
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;

            width: 15px;
            height: 15px;
            background-color: $primary-color;
            border-radius: 50%;
            transition: all 500ms ease-in-out;
          }


          input {
            opacity: 0;
          }
          h2 {
            padding-left: 1rem;

            em {
              font-size: 1.8rem;
            }
          }


      }

      .clickouts {
        display: flex;
        flex: 0 0 auto;
        justify-content: space-between;
        align-items: center;

        transition: all 250ms ease-in-out;

        a {

          flex-basis: 40%;
          border: 2px black solid;
          color: white;
          text-decoration: none;
          background-color: $primary-color
        }
      }
    }


  }

  .hidden {
    opacity: 0;
    visibility: hidden;
  }

  .scaledDown {
    transform: translate(-50%, -50%) scale(0);
  }
  .scaledUp {
    transform: translate(-50%, -50%) scale(1);
  }

</style>
