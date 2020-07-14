<template>
  <!-- // 首页轮播 -->
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item
        v-for="(item, index) in list"
        :key="index"
        :style="{
          background: 'url(' + item.imgUrlPc + ')',
          backgroundsize: 'cover',
          backgroundPosition: '-800px',

          backgroundRepeat: ' no-repeat',
        }"
      >
        <!-- <div>
          <img :src="item.imgUrlPc" alt />
        </div> -->
        <div></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { getSlide } from "../../../api/course";

export default {
  name: "Slideshow",
  data() {
    return {
      list: [],
      url: "",
    };
  },
  created() {
    getSlide(4).then((res) => {
      this.list = res.data.data;
      // console.log(res.data.data);
    });
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 400px;
  background-repeat: no-repeat;
}
</style>
