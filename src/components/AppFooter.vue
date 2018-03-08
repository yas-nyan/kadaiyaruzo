<template>
  <div class="footer">
    <div class="footer__text container">
      <a v-bind:href="this.$config.github">
      <v-icon class="github" name="github"></v-icon>
      </a>
      <p></p>
      <p>&copy; {{year}} {{copy}} All Rights Reserved.</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "appfooter",
  data() {
    return {
      copy: `${this.$config.made_by}`,
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 200px;
  background-color: gray;
  padding: 30px;
  &__text {
    margin-top: 30px;
    color: white;
    .github {
      width: 40px;
    }
    a {
      color: white;
    }
  }
}
</style>
