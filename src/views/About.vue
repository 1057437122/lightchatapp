<template>
  <div class="about">
    <h1>This is Me</h1>
    <div>{{ id }}</div>
    <div>{{ name }}</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: this.$store.state.accessToken,
      id: "",
      name: ""
    };
  },
  created() {
    this.id = this.$store.state.id;
    this.name = this.$store.state.name;
  }
});
</script>
