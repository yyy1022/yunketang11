import request from "../utils/http";

// export function getSlide(number) {
//   return request
//     .get(`/api/weChat/applet/course/banner/list?=number=${number}`)
//     .then((res) => {
//       console.log(res);
//       // this.list = res.data.song_list;
//     });
// }

export function getSlide(number) {
  const url = `/api/weChat/applet/course/banner/list?=number=${number}`;
  return request.get(url).then((res) => {
    return {
      ...res,
    };
  });
}
// 直播
export function getStreaming() {
  const url = `/api/pc/liveCourseInfo/list`;
  return request.post(url).then((res) => {
    return {
      ...res,
    };
  });
}
// 免费  课程
export function getCourse(type, pageNum, pageSize) {
  const url = `/api/weChat/applet/course/list/type?type=${type}&pageNum=${pageNum}&pageSize=${pageSize}`;
  return request.post(url).then((res) => {
    return {
      ...res,
    };
  });
}
//头条
export function getHeadline(pageNum,pageSize) {
  return request.post(`/api/weChat/applet/article/list?pageNum=${pageNum}&pageSize=${pageSize}`,{})
}
//底部
export function getBottom() {
  return request.post(`/api/system/dict/data/list/open?dictType=blogroll&pageNum=1&pageSize=10&orderByColumn=dictSort&isAsc=asc`)
}
//详情
// /pc/course/detail/
export function getDetail(courseId) {
  return request.get(`/api//pc/course/detail/${courseId}`)
}
//评论/pc/comment/commentList/course/114
export function getComment(courseId) {
  return request.get(`/api//pc/comment/commentList/course/${courseId}`)
}


// 购物车
export function getShoppingCart(courseId) {
  return request.get(`/api/weChat/applet/shoppingCart/join/shoppingCart/${courseId}`)
}


// 购物车列表

export function goodsList() {
  return request.get(`/api/weChat/applet/shoppingCart/my/list`)
}



// 删除购物车
export function deleteGoods(shoppingCartId) {
  return request.get(`/api/weChat/applet/shoppingCart/remove/${shoppingCartId}`)
}

//播放界面切换章节的接口
export function switchChapters(sectionId){
  const url =`/api/weChat/applet/course/switch/section/${sectionId}`;
  return request.get(url).then(res=>{
    return {
      ...res,
    }
  })
}