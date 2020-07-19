<template>
    <div>
        <!--    <Header></Header>-->
        <Slideshow></Slideshow>
        <Streaming></Streaming>
        <Course type="free" :pageNum="1" :pageSize="10" title="免费课程"></Course>

        <Course
                type="boutique"
                :pageNum="1"
                :pageSize="5"
                title="精品课程"
        ></Course>

        <Course type="discount" :pageNum="1" :pageSize="5" title="限时折扣课程">
            >
        </Course>
        <Headline></Headline>
        <Fixde></Fixde>
    </div>
</template>
<script>
    // import Header from "../../views/index/components/Header";
    import Slideshow from "../../views/index/components/Slideshow";
    import Streaming from "../../views/index/components/Streaming";
    import Course from "../../views/index/components/Course";
    import Headline from "./components/Headline";
    import Fixde from "./components/Fixde";
    // import Bottom from "../../components/Bottom";

    export default {
        name: "Index",
        components: {
            // Header,
            Slideshow,
            Streaming,
            Course,
            Headline,
            Fixde
            // Bottom
        },
    };
</script>
<style lang="less" scoped></style>
