<template>
  <div id="choose">
    <ul>
      <li class="topic"><router-link to="/plot">Plot</router-link></li>
      <li class="topic"><router-link to="/themes">Themes</router-link></li>
      <li class="topic"><router-link to="/characters">Characters</router-link></li>
      <li class="topic"><router-link to="/essays">Essays</router-link></li>
      <li class="topic"><router-link to="/my_submissions">My Submissions</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main'
};
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";
ul {
  position: absolute;
  top: 0;
  left: 0;

  padding: 2rem 2rem 0 2rem;
  width: 100%;
  height: 100%;

  font-family: $font-themed;
  font-size: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  box-sizing: border-box;

  li {
    list-style: none;
    flex: 0 1 auto;
    width: 20%;
    height: 3rem;

    margin: 2rem;
    background-color: $primary-color;
    border: 2px black solid;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      width: 100%;
      height: 100%;
      padding: 0 0.25rem 0 0.25rem;
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

    }
  }
  li:last-child {
    flex-grow: 0.5;
  }
}

</style>
