<template>
  <div>{{ friends }}</div>
</template>
<script lang="ts">
import Vue from "vue";
import { getUserFriends } from "@/api/user";
export default Vue.extend({
  data() {
    return {
      friends: []
    };
  },
  created() {
    this.getMyFriends();
  },
  methods: {
    async getMyFriends() {
      const { data } = await getUserFriends(this.$store.state.id, {});
      console.log(data);
      this.friends = data;
    }
  }
});
</script>
