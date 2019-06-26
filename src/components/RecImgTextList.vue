<template>
    <div class="white-bg rec">
        <h2 class="side-title">{{ title }}</h2>
        <section class="top-news img-scale" v-if="bigObj">
            <router-link  target="_blank" :to="bigObj.url">
                <img :src="bigObj.img"><span>{{ bigObj.title }}</span>
            </router-link>
        </section>
        <ul>
            <li v-for="item in recList" :key="item.id">
                <router-link :to="item.url" :title="item.title"  target="_blank">
                    <i><img :src="item.img"></i>
                <p>{{ item.title}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["title","bigObj","recList"]
    }
</script>

<style scoped>

</style>