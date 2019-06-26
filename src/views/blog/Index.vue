<template>
    <div class="article-box">
        <div class="blogs left-box">

            <column-desc
                    :img="'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg'"
                    :img-url="'https://www.baidu.com'"
                    :title="category"
            >
                {{ category }}用来做什么？我的个人博客网站它不仅仅是我个人兴趣和爱好，还是我创业的起点。我爱网页设计，我爱写前端代码。它充实了我的生活，实现了我的目标和梦想。
            </column-desc>

            <div class="clear blank"></div>
            <div class="blogs-box white-bg">
                <div class="blogs-list">
                    <ul>
                        <li v-for="item in articleList" :key="item.id">

                            <i v-if=" (item.id % 3 != 0)">
                                <a href="javascript:;" @click="articleDetail(item.id)">
                                    <img :src="item.img" alt="">
                                </a>
                            </i>
                            <h2>
                                <em>顶</em>
                                <a href="javascript:;" @click="articleDetail(item.id)" target="_blank">{{ item.title }}</a>
                            </h2>
                            <p>
                               {{ item.desc}}
                            </p>
                            <span>
                                <a v-for="(tag,index) in item.tags" :key="index" href='' target='_blank'>{{ tag }}</a>
                            </span>
                        </li>

                    </ul>
                </div>
                <page-list :page="p" :list-num="total" @btnClick="loadPage" :key="p + '-' + total"></page-list>
            </div>
        </div>
        <aside class="side-section right-box">
            <rec-img-text-list title="站长推荐" :big-obj="recBig" :rec-list="recList"></rec-img-text-list>

            <div class="blank clear"></div>

            <rec-text-list title="点击排行" :rec-list="clickSortList" ></rec-text-list>

            <div class="blank clear"></div>
            <div class="white-bg cloud">
                <h2 class="side-title">标签云</h2>
                <ul>
                    <a href="../e/tags/index-tagid=59&amp;tempid=8.html" target="_blank">网站建设(3)</a> <a
                        href="../e/tags/index-tagid=45&amp;tempid=8.html" target="_blank">网页布局(1)</a> <a
                        href="../e/tags/index-tagid=49&amp;tempid=8.html" target="_blank">视频教程(1)</a> <a
                        href="../e/tags/index-tagid=28&amp;tempid=8.html" target="_blank">前端(1)</a> <a
                        href="../e/tags/index-tagid=44&amp;tempid=8.html" target="_blank">设计原则(1)</a> <a
                        href="../e/tags/index-tagid=39&amp;tempid=8.html" target="_blank">程序源码(1)</a> <a
                        href="../e/tags/index-tagid=4&amp;tempid=8.html" target="_blank">匆匆4年(1)</a> <a
                        href="../e/tags/index-tagid=14&amp;tempid=8.html" target="_blank">爱情(1)</a> <a
                        href="../e/tags/index-tagid=21&amp;tempid=8.html" target="_blank">心灵鸡汤(1)</a> <a
                        href="../e/tags/index-tagid=9&amp;tempid=8.html" target="_blank">收获(1)</a> <a
                        href="../e/tags/index-tagid=11&amp;tempid=8.html" target="_blank">个人网站(0)</a> <a
                        href="../e/tags/index-tagid=55&amp;tempid=8.html" target="_blank">企业网站模板(1)</a> <a
                        href="../e/tags/index-tagid=37&amp;tempid=8.html" target="_blank">建站(1)</a> <a
                        href="../e/tags/index-tagid=2&amp;tempid=8.html" target="_blank">3(1)</a> <a
                        href="../e/tags/index-tagid=1&amp;tempid=8.html" target="_blank">2(1)</a> <a
                        href="../e/tags/index-tagid=27&amp;tempid=8.html" target="_blank">女程序员(3)</a> <a
                        href="../e/tags/index-tagid=17&amp;tempid=8.html" target="_blank">毕业(2)</a> <a
                        href="../e/tags/index-tagid=29&amp;tempid=8.html" target="_blank">赛跑(1)</a> <a
                        href="../e/tags/index-tagid=7&amp;tempid=8.html" target="_blank">付出才有收获(1)</a> <a
                        href="../e/tags/index-tagid=10&amp;tempid=8.html" target="_blank">个人博客(5)</a></ul>
            </div>
            <div class="ad ad-small"><a href='https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=l1qstn8f'
                                        target=_blank><img
                    src='http://menhu.yangqq.com/d/file/p/2019/05-11/c58f3150b86b1cad751bff3e094b09fc.jpg' border=0
                    width='320' height='140' alt=''></a></div>
            <div class="white-bg auto">
                <h2 class="side-title">猜你喜欢</h2>
                <ul>
                    <li><a target="_blank" href="plan/44.html">女程序员两年外包的日子</a></li>
                    <li><a target="_blank" href="diary/24.html">QQ在线——生活日记</a></li>
                    <li><a target="_blank" href="life/28.html">Web之路，经历了心酸之后</a></li>
                    <li><a target="_blank" href="plan/43.html">程序员那些琐碎的负面情绪</a></li>
                    <li><a target="_blank" href="diary/23.html">遇见一个未知的你</a></li>
                    <li><a target="_blank" href="diary/20.html">爱情的背叛者</a></li>
                    <li><a target="_blank" href="diary/22.html">最后的午餐</a></li>
                    <li><a target="_blank" href="plan/46.html">鄙人从事IT业已经有9年时间,少壮不努力，长大搞IT</a></li>
                    <li><a target="_blank" href="diary/2.html">【告别2018】耕耘才有所得，付出才有收获</a></li>
                    <li><a target="_blank" href="life/33.html">25岁毕业，拿一万块钱月薪，看程序人生（黑色幽默）</a></li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>
    import ColumnDesc from "../../components/ColumnDesc";
    import PageList from "../../components/PageList";
    import RecImgTextList from "../../components/RecImgTextList";
    import RecTextList from "../../components/RecTextList";


    export default {
        name: "Index",
        components: {RecTextList, RecImgTextList, PageList, ColumnDesc},
        data() {
            return {
                //分类
                category: this.$route.params.category,
                p: 1,
                total: 0,
                articleList: [],
                recList: [],
                recBig: false,
                clickSortList: []
            }
        },
        created() {
            this.total = 505;
            //this.loadPage(1);
            this.getArticle()
            this.getRecList()
            this.getClickSort()
        },
        watch: {
            $route(to,from){
                this.category = this.$route.params.category
                this.getArticle()
                //请求文章数据
            }
        },
        methods: {
            getArticle(){

                let url = '/test/article' + (this.category ? this.category : 1)  +'.json';
                this.axios.get(url).then((response) => {
                    this.articleList = response.data;
                    //window.console.log(response.data)
                })
            },
            getRecList() {
                this.axios.get('/test/recList.json').then((response) => {
                    this.recBig = response.data[0]
                    this.recList = response.data;
                })
            },
            getClickSort() {
                this.axios.get('/test/recSort.json').then((response) => {
                    this.clickSortList = response.data;
                })
            },
            loadPage(p) {
                this.p = p;
                window.console.log('当前页：' + this.p)

            },
            articleDetail(id){
                this.$router.push(`/article/${id}`)
            }
        },

    }
</script>

<style scoped>

</style>