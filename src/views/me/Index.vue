<template>
    <div class="article-box">
        <div class="page white-bg">
            <div class="page-title" id="pageContents">
                <ul>
                    <li><router-link to="/about" href="about.html">关于我们</router-link></li>
                    <li><router-link to="/contact" href="contact.html">联系我们</router-link></li>
                    <li><router-link to="/help" href="help.html">帮助问答</router-link></li>
                </ul>
            </div>

            <router-view></router-view>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>