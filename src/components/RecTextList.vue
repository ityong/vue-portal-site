<template>
    <div class="white-bg sort-box">
        <h2 class="side-title">{{ title }}</h2>
        <ul>
            <li v-for="item in recList" :key="item.id">
                <i></i>

                <router-link :to="item.url" :title="item.title"  target="_blank">
                    <p>{{ item.title}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["title","recList"]
    }
</script>

<style scoped>

</style>