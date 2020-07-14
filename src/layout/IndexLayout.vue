<template>
    <div>

        <Header></Header>
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Bottom from "../components/Bottom";

    export default {
        name: "IndexLayout",
        components: {
            Header,
            Bottom,
        }
    }
</script>

<style scoped>

</style>