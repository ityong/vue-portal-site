<template>
    <div class="white-bg lanmu">
        <img :src="img">
        <h1><router-link :to="imgUrl">{{ title }}</router-link></h1>
        <p><slot></slot></p>
    </div>
</template>

<script>
    export default {
        name: "ColumnDesc",
        props: {
            title: String,
            img: String,
            imgUrl: String,
        }, data() {
            return {

            }
        },
    }
</script>

<style scoped>

</style>