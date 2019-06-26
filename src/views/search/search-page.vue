<template>
    <div class="nin-screen-search">
        <div class="search-page">
            <div class="go-left" @click="$router.back()"></div>
            <div class="search">
                <!--<form action="" method="post" name="search-form">-->
                    <input name="keyboard" class="input_text" placeholder="请输入关键字词" :value="keyWorld" type="text">
                    <input name="Submit" class="input_submit" value="搜索" type="submit">
                <!--</form>-->
            </div>
            <div class="clear"></div>

            <div class="search-history">
                <div class="hot-search">
                    <p>历史搜索</p>
                    <ul class="search-sort-box">
                        <li><router-link to=""><i>1</i>vue发展的历史是什么样的</router-link></li>
                        <li><router-link to=""><i>2</i>个人博客</router-link></li>
                        <li><router-link to=""><i>3</i>博客</router-link></li>
                        <li><router-link to=""><i>4</i>杨青</router-link></li>
                        <li><router-link to=""><i>5</i>Java如何快速修炼</router-link></li>
                        <li><router-link to=""><i>6</i>模板</router-link></li>
                        <li><router-link to=""><i>7</i>评论</router-link></li>
                        <li><router-link to=""><i>8</i>建设</router-link></li>
                        <li><router-link to=""><i>9</i>帝国cms</router-link></li>
                        <li><router-link to=""><i>10</i>网</router-link></li>
                    </ul>
                </div>
                <div class="hot-search">
                    <p>热门搜索排行</p>
                    <ul class="search-sort-box">
                        <li><router-link to=""><i>1</i>个人</router-link></li>
                        <li><router-link to=""><i>2</i>个人博客</router-link></li>
                        <li><router-link to=""><i>3</i>博客</router-link></li>
                        <li><router-link to=""><i>4</i>杨青</router-link></li>
                        <li><router-link to=""><i>5</i>今夕何夕</router-link></li>
                        <li><router-link to=""><i>6</i>模板</router-link></li>
                        <li><router-link to=""><i>7</i>评论</router-link></li>
                        <li><router-link to=""><i>8</i>建设</router-link></li>
                        <li><router-link to=""><i>9</i>帝国cms</router-link></li>
                        <li><router-link to=""><i>10</i>网</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "search-page",
        data() {
            return {
                keyWorld: '',
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>