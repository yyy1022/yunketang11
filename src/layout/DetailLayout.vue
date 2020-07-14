<template>
    <div>
        <HeaderOne></HeaderOne>
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>

<script>

    import Bottom from "../components/Bottom";
    import HeaderOne from "../components/HeaderOne";

    export default {
        name: "DetailLayout",
        components: {
            HeaderOne,
            Bottom
        }
    }
</script>

<style scoped>

</style>