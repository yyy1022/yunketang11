<template>
  <!-- 免费 -->
  <div class="streaming-box">
    <p class="text">免费课程</p>
    <el-tabs
      :tab-position="tabPosition"
      style="height: 278px;  width: 100%; text-align:left;magin-top:10px;"
    >
      <el-tab-pane
        :label="item.course.courseTitle"
        v-for="(item, index) in list"
        :key="index"
        tag="div"
      >
        <div class="lesson-left">
          <div class="bigBox">
            <div class="inner" style="position: relative;">
              <img :src="item.course.coverFileUrl" />
              <div class="out">
                <div class="title">{{ item.course.courseTitle }}</div>
                <div style="margin-left: 200px; margin-top: 50px;">
                  <span>直播结束</span>
                </div>
                <div class="letf-appply">直播结束</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div></div> -->

        <!-- <div class="lesson-left"> -->
        <!-- <p></p> -->
      </el-tab-pane>
      <!-- <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>-->
    </el-tabs>
  </div>
</template>
<script>
import { getStreaming } from "../../../api/course";

export default {
  name: "Streaming",
  data() {
    return {
      tabPosition: "right",
      list: [],
      title: "",
    };
  },
  created() {
    getStreaming().then((res) => {
      this.list = res.data.rows;
      //   console.log(res.rows.course.courseTitle);
      //   console.log(res);
      console.log(this.list);
    });
  },
};
</script>
<style lang="less" scoped>
.streaming-box {
  width: 1090px;
  margin: auto;
  height: 350px;
  // border: 1px solid black;
  text-align: center;
}
.text {
  font-size: 24px;
  margin: 20px 0px;
}

/deep/element.style {
  height: 0 !important;
}
/deep/.el-tabs__active-bar {
  // border: none;
  background-color: transparent;
}
/deep/.el-tabs__item.is-active {
  color: black;
}
/deep/ .el-tabs__header {
  box-sizing: border-box;
  height: 350px;
  width: 52%;
  margin-left: 0 !important;
  background-color: #f4f4f4;

  .el-tabs__item {
    background-color: #f4f4f4;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;

    border-left: 5px solid transparent;

    &:hover {
      background-color: #fff;
      border-left: 5px solid #00cf8c;
      color: #00cf8c;
    }

    /deep/ .is-active {
      color: #00cf8c !important;
    }
  }
}
.lesson-left {
  width: 500px;
  float: left;
  /* padding: 80px 50px; */
  height: 350px;
  /* background-color: rgba(0, 0, 0, 0.6); */
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  /* border: 1px solid navy; */
  overflow: hidden;
}
.bigBox {
  height: 1000%;
  width: 100%;
}
.inner {
  width: 500px;
  height: 350px;
  color: #f4f4f4;
  opacity: 1;
  position: relative;
  /* height: 350px; */
  /* background-color: rgba(0, 0, 0, 0.6); */
}
.inner > img {
  width: 100%;
  height: 100%;
}
.out {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  /* height: 350px; */
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  position: absolute;
  top: 0px;
  z-index: 200;

  color: white;
}
.title {
  font-size: 24px;
  /* opacity: 1; */
  color: white;
  margin-left: 100px;
}
.letf-appply {
  height: 50px;
  width: 200px;
  margin-left: 150px;
  margin-top: 50px;
  background-color: #00cf8c;
  line-height: 50px;
  font-size: 24px;
  text-align: center;
}
</style>
