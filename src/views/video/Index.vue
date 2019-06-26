<template>
    <div class="article-box">

        <div class="pics box white-bg">
            <ul class="id-tab">
                <li class="tab-current">{{category ? category : 'moren' }}</li>
            </ul>
            <div class="plr20">
                <section>
                    <div class="videos-list">
                        <ul>
                            <li v-for=" i in 8" :key="i">
                                <router-link to="/video/1">
                                    <i><img src="../../assets/images/pic02.jpg"></i>
                                    <h2>xxxxxx后台管理文档-在线视频教程</h2>
                                    <p><b class="datetime">2019-05-08</b><span class="view-num">25人在看</span></p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><a href="" title="更多前端设计"><i></i><i></i><i></i></a></span>
                </section>
            </div>
        </div>
        <!-- pics end-->
        <div class="clear blank"></div>
        <div class="pics box white-bg">
            <ul class="id-tab">
                <li class="tab-current">{{category ? category : 'moren' }}</li>
            </ul>
            <div class="plr20">
                <section>
                    <div class="videos-list">
                        <ul>
                            <li v-for=" i in 5" :key="i">
                                <router-link to="/video/1" >
                                    <i><img src="../../assets/images/pic02.jpg"></i>
                                    <h2>xxxxxx后台管理文档-在线视频教程</h2>
                                    <p><b class="datetime">2019-05-08</b><span class="view-num">25人在看</span></p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><a href="" title="更多前端设计"><i></i><i></i><i></i></a></span>
                </section>
            </div>
        </div>
        <!-- pics end-->
        <div class="clear blank"></div>
    </div>
</template>

<script>
    import Category from "./Category";

    export default {
        name: "Index",
        components: {
            "c-list" : Category
        },
        data() {
            return {
                category: ''
            }
        },
        watch: {
            $route (to, from) {
                this.category = this.$route.params.category
            }
        }
    }
</script>

<style scoped>

</style>