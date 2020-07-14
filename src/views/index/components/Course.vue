<template>
  <div class="course-box ">
    <div class="title">{{ title }} <div class="title">更多<i class="el-icon-right"></i></div></div>
    <router-link v-for="(item, index) in list" :key="index" tag="div" :to="'/detail/'+item.courseId">
      <div class="course-Bigbox" >
        <div class="imgBox"><img :src="item.coverFileUrl" /></div>
        <p class="text">{{ item.courseTitle }}</p>
        <p class="text1">
          共{{ item.subSectionNum }}节课|{{ item.learningNum }}人报名
        </p>
        <p v-if="item.isFree == 1" class="text3" >免费</p>
        <div v-if="item.isFree == 0">
          <span style="color:#ff4500; font-size: 12px;"
            >￥{{ item.discountPrice }}</span
          >
          <span class="text2">￥{{ item.coursePrice }}</span>
          <div class="nofress">{{ item.discountDesc }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { getCourse } from "../../../api/course";

export default {
  name: "Course",

  props: {
    type: {
      type: String,
    },
    pageNum: {
      type: Number,
    },
    pageSize: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    getCourse(this.type, this.pageNum, this.pageSize, this.title).then(
      (res) => {
        this.list = res.data.rows;
        console.log(this.list);
      }
    );
  },
};
</script>
<style lang="less" scoped>

ul {
  list-style: none;
}
.course-box {
  //   height: 500px;
  width: 1090px;
  min-width: 1090px;
  margin: auto;
  cursor: pointer;
  overflow: hidden;
  .title {
    font-size: 24px;
    text-align: center;
    margin: 10px;
    div{
      float: right;
      font-size: 14px;
      color: #666666;
    }

  }
}
.course-Bigbox {
  width: 20%;
  height: 200px;
  // border: 1px solid black;
  float: left;
  .imgBox {
    overflow: hidden;
    width: 200px;
    height: 122px;
    img {
      width: 200px;
      height: 122px;
      overflow: hidden;
      transition: transform 2s;
    }
    img:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-size: 12px;
  }
  .text:hover {
    color: #00cf8c;
  }
  .text1 {
    color: #888;
  }
  .text2 {
    text-decoration: line-through;
    color: #8888;
    font-size: 12px;
  }
  .text3{ color: #00cf8c;}

  .nofress {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
    font-size: 12px;
    width: 50px;
    float: right;
    margin-right: 25px;
  }
}
</style>
