<template>
    <div class="course-box ">
        <div class="title">头条精选</div>
        <router-link v-for="(item, index) in list" :key="index" tag="div" :to="'/detail/'+item.courseId">
            <div class="course-Bigbox">
                <div class="imgBox"><img :src="item.coverImgUrl"/></div>
                <p class="text">{{ item.courseTitle }}</p>
                <p class="text1">
                    {{ item.title }}
                </p>


            </div>
        </router-link>
    </div>
</template>

<script>
    import {getHeadline} from "../../../api/course";

    export default {
        name: "Headline",
        data() {
            return {
                list: [],
            };
        },
        created() {
            getHeadline(1, 5).then(res => {
                this.list = res.data.rows;
                console.log(this.list)
            })

        }
    }
</script>

<style scoped lang="less">
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

        .text1:hover{
            color: #00cf8c;
        }

    }

</style>