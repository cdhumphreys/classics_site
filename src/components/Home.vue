<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/main">Choose a Topic</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Iliad Revision'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/settings.scss";
h1, h2 {
  font-weight: normal;
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
  color: $primary-color;
}
</style>
