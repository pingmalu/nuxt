<template>
  <div id="test123">
    <div v-if="$slots.default">
      <span class="title-span">
        <i class="el-icon-warning m-loading"></i>
        <slot></slot>
      </span>
    </div>
    <el-table
      v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0.1)"
      empty-text=" "
      :data="tableData"
      stripe
      height="430"
      :row-class-name="tableRowClassName"
      style="width: 100%"
    >
      <!-- <transition-group tag="ul" name="flip-list"> -->
        <!-- <template> -->
          <el-table-column key="1" sortable prop="time" label="日期" width="140"></el-table-column>
          <el-table-column key="2" sortable prop="type" label="事件" width="180" align="center"></el-table-column>
        <!-- </template> -->
      <!-- </transition-group> -->
      <!-- <transition-group tag="ul" name="flip-list"> -->
      <!-- <div :key="time"> -->
      <!-- <el-table-column key="1" sortable prop="time" label="日期" width="140"></el-table-column> -->
      <!-- <el-table-column key="2" sortable prop="type" label="事件" width="180" align="center"></el-table-column> -->
      <!-- </div> -->
      <!-- </transition-group> -->
    </el-table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      loading: true,
      today: this.todaytime(),
      logurl: "//c1.malu.me/api/loglist/d",
      getRowKeys(row) {
        return row.id;
      }
    };
  },
  props: ["url"],
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // console.log(this.judgeTime(row.time));
      // if (this.judgeTime(row.time)) {
      // console.log(row.time.split(" ")[0]);
      // console.log(this.today);
      if (this.today == row.time.split(" ")[0]) {
        return "warning-row";
      }
      //  else if (rowIndex === 3) {
      //   return "success-row";
      // }
      return "";
    },
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    todaytime() {
      let today = new Date();
      return (
        today.getFullYear() +
        "-" +
        this.add0(today.getMonth() + 1) +
        "-" +
        this.add0(today.getDate())
      );
    },
    judgeTime(date) {
      // console.log(date);
      // 2019-03-14 09:11:18
      let _this = this;
      let dateStr = new Date(date);
      let today = new Date();
      let hour = today.getHours();
      let minute = today.getMinutes();
      let second = today.getSeconds();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      let otime = today.getTime();
      // 给出时间 - 今天0点
      let offset = dateStr.getTime() - otime;
      let isToday = offset / 1000 / 60 / 60;
      if (isToday > 0 && isToday <= 24) {
        return true;
        // return (
        //   "今天 " +
        //   _this.add0(hour) +
        //   ":" +
        //   _this.add0(minute) +
        //   ":" +
        //   _this.add0(second)
        // );
        // } else if (isToday < 0 && isToday >= -24) {
        //   return (
        //     "昨天 " +
        //     _this.add0(hour) +
        //     ":" +
        //     _this.add0(minute) +
        //     ":" +
        //     _this.add0(second)
        //   );
      } else {
        return;
      }
    }
  },
  mounted() {
    // if (this.url) {
    // this.logurl = this.url;
    // }
    this.logurl = this.url || this.logurl;
    axios
      .get(this.logurl)
      .then(response => {
        // console.log(response.data.data);
        response.data.data.forEach(element => {
          if (element.time && element.type) {
            this.tableData.push(element);
          }
        });
        // console.log(this.tableData);
        // this.tableData = response.data.data;
      })
      .catch(error => {
        // console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
<style scoped>
/* #test123 {
  width: 400px;
} */
.flip-list-move {
  transition: transform 1s;
}
.title-span {
  float: left;
  /* text-align: left; */
  background-color: #939393;
  color: #2d2d30;
  /* width: 180px; */
  display: inline;
  padding: 2px 10px;
  font-weight: 900;
  font-size: 14px;
  border-radius: 2px;
  margin: 0 0 0 10px;
}
#test123 >>> .el-table,
#test123 >>> .el-table__expanded-cell {
  color: #fff;
  background-color: rgba(255, 255, 255, 0);
}

#test123 >>> tr,
#test123 >>> th {
  background-color: rgba(255, 255, 255, 0);
  /* border-bottom: 1px solid rgba(255, 255, 255, 0) !important; */
}
#test123 >>> .el-table td,
#test123 >>> .el-table th.is-leaf {
  padding: 2px 0;
  font-size: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
}
#test123 >>> .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #f5f7fa1f;
}
#test123 >>> .el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: #2d2d30;
}
#test123
  >>> .el-table--striped
  .el-table__body
  tr.el-table__row--striped:hover
  td {
  background-color: #f5f7fa1f;
}
#test123 >>> .el-table::before {
  display: none;
}
#test123 >>> .warning-row {
  background-color: #ff5722 !important;
}
#test123 >>> .el-table--striped .el-table__body tr.warning-row td {
  background-color: #ff7950ca !important;
}
#test123 >>> .el-table--striped .el-table__body tr.warning-row:hover td {
  background-color: #ff5722 !important;
}
#test123 >>> .success-row {
  background-color: #f0f9eb !important;
}
#test123 >>> ::-webkit-scrollbar {
  width: 0.45em;
  height: 0.25em;
  position: absolute;
}

#test123 >>> ::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
}

#test123 >>> ::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.4);
}
/* .el-table th, .el-table tr {
  background-color: rgba(255, 255, 255, 0) !important;
}
.el-table,
.el-table__expanded-cell {
  background-color: rgba(255, 255, 255, 0) !important;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid rgba(255, 255, 255, 0) !important;
} */
.m-loading {
  animation: loading-spinner 2s infinite ease;
}
@keyframes loading-spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>