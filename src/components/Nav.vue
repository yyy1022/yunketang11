<template>
  <div>
    <!-- <ul class="header-list">
      <li class="active">
        <a>首页</a>
      </li>
      <li class="block">
        <a>
          课程分类
          <i class="el-icon-arrow-down"></i>
        </a>
        <div class="list"></div>
      </li>
      <li style=" margin-right: 0px">
        <a>专属课堂</a>
      </li>
    </ul>-->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">课程分类</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>

      <el-menu-item index="3">专属课程</el-menu-item>
    </el-menu>

  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scope>
* {
  margin: 0;
  padding: 0;
}
.header-list {
  //   width: 250px;
  margin-top: 20px;
  height: 30px;
  list-style: none;
  line-height: 30px;
  //   margin: 20px 30px 0px 0px;
  //   overflow: hidden;
  //   float: left;
  //   border: 1px solid transparent;
  li {
    float: left;
    margin-right: 30px;
  }
}
li > a:hover {
  color: #00cf8c;
}
.active {
  border-bottom: 1px solid #00cf8c;
}
.list {
  width: 100px;
  height: 600px;
  border: 1px solid black;
  display: none;
  position: absolute;
  z-index: 1;
}
// .block {
//   position: relative;
// }
.el-menu-demo el-menu--horizontal el-menu{
  float: left;
}

</style>