<template>
  <div>
    <div class="header-search">
      <input type="text" placeholder="搜索课程" />
      <div>
        <button>
          <i class="el-icon-search"></i>
          搜索
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search"
};
</script>
<style lang="less" scoped>
.header-search {
  float: left;
  margin: 15px 0 0 125px;
  input {
    width: 250px;
    height: 32px;
    border-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: 5px;
    border-color: #23db9b;
    // border-right-width: 1px !important;
    outline: none;
    border: 1px solid #9999;
    float: left;
  }
  div {
    height: 34px;
    width: 65px;
    border-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    // padding-left: 5px;
    border-color: #23db9b;
    border-right-width: 1px !important;
    outline: none;
    // border: 1px solid #9999;
    float: right;
    background-color: rgb(0, 207, 140);
    button {
      background: none;
      border: none;
      outline: none;
      color: white;
      margin-top: 7px;
    }
  }
}
</style>