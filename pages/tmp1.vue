<template>
  <div id="tmp1">{{tableData[0]}}</div>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ params, error }) {
    console.log(params);
    return axios
      .get("http://c22.malu.me/api/loglist")
      .then(res => {
        let tmp_tableData = [];
        res.data.data.forEach(element => {
          if (element.time && element.type) {
            tmp_tableData.push(element);
          }
        });
        return { tableData: tmp_tableData };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Post not found" });
      });
  },
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    console.log(this.tableData);
    // axios
    //   .get("http://c22.malu.me/api/loglist")
    //   .then(response => {
    //     console.log(response.data.data);
    //     this.tableData = response.data.data;
    //     // response.data.data.forEach(element => {
    //     //   if (element.time && element.type) {
    //     //     this.tableData.push(element);
    //     //   }
    //     // });
    //     // console.log(this.tableData);
    //     // this.tableData = response.data.data;
    //   })
    //   .catch(error => {
    //     // console.log(error);
    //     this.errored = true;
    //   })
    //   .finally(() => (this.loading = false));
  }
};
</script>