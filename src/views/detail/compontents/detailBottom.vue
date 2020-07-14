<template>
    <div class="detailbottom-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="课程描述" name="first">
                <div v-html="text" class="description"></div>
            </el-tab-pane>
            <el-tab-pane label="目录" name="second">

                <ul class="directoryList">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="bigTitle">{{index+1+'.'+item.sectionName}}
                            <div class="bigTitle-ico"><i class="el-icon-bottom">下载</i></div>
                        </div>
                        <p class="smallTitle" v-for="(item,index) in item.subSections" :key="index">{{index+1+'-'+1+
                            item.sectionName}} <span class="hide">试看</span><i class="el-icon-video-play show"></i></p>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="评价" name="third">
                <div class="evaluate">
                    <div class="evaluate-box1">
                        <p>评价</p>
                        <p class="evaluate-box-text">
                            <i class="el-icon-star-on"></i><i
                                class="el-icon-star-on"></i><i class="el-icon-star-on"></i><i
                                class="el-icon-star-on"></i><i
                                class="el-icon-star-on"></i>
                            <span>非常好</span>
                        </p>
                    </div>
                    <div class="evaluate-box2">
                        <textarea placeholder="请发表您对课程的评价"></textarea>
                        <button>发表评论</button>
                    </div>
                    <ul>
                        <li v-for="(item ,index) in commentList" :key="index" class="comment">
                            <hr>
                            <p class="comment-title"><i class="el-icon-s-custom"></i>{{item.user.nickname}}</p>
                            <p class="comment-text">{{item.commentContent}}</p>
                            <p class="comment-time">{{item.updatedTime}}回复</p>
                        </li>
                    </ul>

                </div>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>

<script>
    import {getComment, getDetail} from "../../../api/course";

    export default {
        name: "detailBottom",
        data() {
            return {
                list: [],
                text: "",
                activeName: 'first',
                commentList: []
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },

        created() {
            // console.log(this.$route.params.courseId)
            getDetail(this.$route.params.courseId).then(res => {
                this.list = res.data.data.sections
                // console.log(res)
                this.text = res.data.data.courseDetail
            })
            getComment(this.$route.params.courseId).then(res => {
                this.commentList = res.data.rows
                console.log(res.data.rows)
                // this.text=res.data.data.courseDetail
            })

        }
    }
</script>

<style scoped lang="less">
    .detailbottom-box {
        width: 1090px;
        min-width: 1090px;

        margin: 50px auto;
        background-color: #ffffff;
        /*overflow: hidden;*/
    }

    .description {
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .directoryList {
        margin-left: 20px;
        list-style: none;

        .smallTitle {
            width: 1000px;
            height: 30px;
            line-height: 30px;
            padding: 10px 20px;
            background: #f2f2f2;
            margin: 10px 0;
            color: rgba(0, 0, 0, .65);
            font-size: 12px;
        }

        .smallTitle:hover {
            color: #00cf8c;
        }

        .smallTitle:hover .hide {
            display: block;
        }

        .smallTitle:hover .show {
            display: none;
        }


    }

    .bigTitle {
        font-size: 22px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        /*border: 1px solid black;*/
        position: relative;
    }

    .hide {
        display: none;
        float: right;
        font-size: 14px;
    }

    .show {
        float: right;
        margin: 8px;
    }

    .bigTitle-ico {
        position: absolute;
        top: 9px;
        right: 20px;
        width: 80px;
        height: 20px;
        background-color: rgb(45, 183, 245);
        color: #ffffff;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
    }

    /*详情*/

    .evaluate {

        width: 1090px;
        min-width: 1090px;
        margin: auto;
        /*height: 700px;*/
        background-color: white;


    }

    .evaluate-box1 {
        width: 999px;

        margin: auto;
        /*border: 1px solid orangered;*/

        color: rgba(0, 0, 0, .65);
        font-size: 14px;
        /*border: 1px solid red;*/
    }

    .evaluate-box-text > i {
        color: #fadb14;
        font-size: 16px;
    }

    .evaluate-box2 {
        width: 999px;
        margin: auto;
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 16px;
        margin-bottom: 50px;

    }

    .evaluate-box2 > textarea {
        width: 999px;
        height: 138px;
        min-height: 136px;
        max-height: 136px;
        overflow-y: hidden;
        margin-top: 0px;
        margin-bottom: 0px;
        /* resize: none; */
        padding-left: 20px;
    }

    .evaluate-box2 > textarea:hover {
        border-color: #00cf8c;
    }

    .evaluate-box2 > button {
        float: right;
        color: white;
        background-color: #00cf8c;
        width: 88px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        outline: none;
        border-color: transparent;
    }

    ul {
        list-style: none;
    }

    .comment {
        width: 999px;
        min-width: 999px;
        margin: auto;

        hr {
            margin: 20px 0px;
            height: 1px;
            border: 0px;
            background-color: rgb(232, 232, 232);
            color: rgb(232, 232, 232);
        }

        .comment-title {
            color: rgba(0, 0, 0, .65);
            font-size: 14px;
        }

        .comment-text {
            padding: 10px 0px 10px 40px;
            color: rgba(0, 0, 0, .65);
            font-size: 16px;
        }

        .comment-time {
            padding: 0 10px 0 0;
            color: #999;
            text-align: right;
        }

    }


</style>