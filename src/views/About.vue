<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ msg }}</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: this.$store.state.token
    };
  }
});
</script>
