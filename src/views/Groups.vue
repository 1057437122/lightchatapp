<template>
  <div>
    {{ groups }}
    <a-table :columns="columns" :dataSource="groups.data">
      <a slot="name" slot-scope="text">{{ text }}</a>

      <span slot="action" slot-scope="record">
        <a @click="getDetail(record)">GetDetail</a>
      </span>
    </a-table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getUserGroups, postOnGroup } from "@/api/group";
export default Vue.extend({
  data() {
    return {
      groups: {
        data: [],
        paging: null
      },
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          scopedSlots: { customRender: "name" }
        },
        {
          title: "privacy",
          dataIndex: "privacy",
          key: "privacy",
          scopedSlots: { customRender: "privacy" }
        },
        {
          title: "id",
          dataIndex: "id",
          key: "id",
          scopedSlots: { customRender: "id" }
        },
        {
          title: "action",
          key: "action",
          scopedSlots: { customRender: "action" }
        }
      ]
    };
  },
  created() {
    this.getMyGroups();
  },
  methods: {
    async getMyGroups() {
      const { data } = await getUserGroups(this.$store.state.id, {});
      this.groups = data;
    },
    async getDetail(record: any) {
      console.log(record.id);
      console.log(record.name);
      console.log(record.privacy);
      postOnGroup(record.id, {
        message: "nice from api"
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          debugger;
          console.log(error);
        });
    }
  }
});
</script>
