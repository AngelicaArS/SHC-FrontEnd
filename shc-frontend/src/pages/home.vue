<template>
    <HeaderComponent></HeaderComponent>
    <h1>home</h1>
    <FooterComponent></FooterComponent>
</template>
<script>
import FooterComponent from "../components/footer-component.vue";
import HeaderComponent from "../components/header-component.vue";
    export default {
    name: "home-page",
    props: {
        msg: String
    },
    components: { FooterComponent, HeaderComponent }
}
</script>
<style scoped>

</style>