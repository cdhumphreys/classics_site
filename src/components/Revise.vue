<template>
  <div class="book">
    <h2>Book {{books[$route.params.bookNumber - 1].number}}</h2>
    <h3><em>{{books[$route.params.bookNumber - 1].title}}</em></h3>
    <h5>Revision Summary</h5>

  </div>
</template>

<script>
// change this to be the summary data
import testData from '../assets/bookTest.js';

export default {
  name: 'book',
  data () {
    return {
      books: testData
    };
  }
};
</script>

<style scoped lang="scss">
  @import "../styles/settings.scss";
  .book {
    font-size: 30px;
  }
  h2, h3 {
    font-family: $font-themed;
  }
</style>
