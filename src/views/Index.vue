<template>
    <div class="article-box">
        <!-- banner begin-->
        <div class="banner-box">

            <banner></banner>

        </div>
        <!-- banner end-->
        <!-- headline-boc begin-->
        <div class="headline-box white-bg">
            <div class="headline-news">
                <h2 class="headline-news-title">
                    <span>头条</span>
                    <router-link :to="'/article/1'"  title="个人博客，属于我的小世界！">个人博客，属于我的小世界！</router-link>
                </h2>
                <p class="headline-news-small-text">
                    个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。</p>

                <ul class="headline-news-list">
                    <li v-for="i in 6" :key="i">
                        <router-link :to="'/article/1'" 
                                     title="【告别201】耕耘才有所得，付出才有收获">【告别201{{ i }}】耕耘才有所得，付出才有收获
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- headline-box end-->
        <div class="clear blank"></div>
        <div class="recommend-news box white-bg tab-num01">
            <div class="gd-box">
                <ul class="id-tab">
                    <li class="tab-current">博客日记</li>
                    <li>程序人生</li>
                    <li>设计心得</li>
                    <li>人生规划</li>
                </ul>
            </div>
            <div class="id-tab-content">
                <section class="tab-box">
                    <div class="recommend-news-pic">
                        <i>
                            <router-link :to="'/article/1'" >
                                <img src="../assets/images/newspic01.jpg" alt="【告别2018】耕耘才有所得，付出才有收获"><span>推荐</span>
                            </router-link>
                        </i>
                        <h2>
                            <router-link :to="'/article/1'">【告别2018】耕耘才有所得，付出才有收获</router-link>
                        </h2>
                        <p>
                            网站模板我更新速度是很慢的，数了一下，大概12个模板，不多，但是每一套个人博客网站模板都是我精心设计的，期间认识了很多做优化的朋友还有客户，根据他们的要求还有建议，我又做了很多调整，无论是静态模板的编写还是后台调用方式上，都有很大的进步，我这一年的时间，比我7年加起来的收获还要多。</p>
                        <router-link :to="'/article/1'" class="btn-blue-border">阅读更多</router-link>
                    </div>
                    <div class="recommend-news-list">
                        <ul>
                            <li v-for="i in 6" :key="i">
                                <router-link :to="'/article/1'" ><span><b>{{ i}}</b>2019-05</span>
                                    <h3>遇见一个未知的你</h3>
                                    <p>听着那熟悉的歌曲 &amp;shy;看着那一张张可爱的图片 &amp;shy;读着我们共同欣赏的诗&amp;hellip;&amp;hellip; &amp;shy;也许我们曾经相遇
                                        &amp;shy; &amp;shy;看着你远去的背影 &amp;shy;沿着你来的方向 &amp;sh</p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><router-link :to="'/article/1'"
                                                          title="更多博客日记"><i></i><i></i><i></i></router-link></span>
                </section>
                <section class="tab-box"></section>
            </div>
        </div>
        <!-- recommend-news end-->
        <div class="clear blank"></div>
        <div class="pics box white-bg tab-num02">
            <div class="gd-box">
                <ul class="id-tab">
                    <li class="tab-current">个人网站</li>
                    <li>企业网站</li>
                    <li>事业单位</li>
                    <li>网购商城</li>
                </ul>
            </div>
            <div class="id-tab-content">
                <section class="tab-box">
                    <div class="pic-list-img">
                        <ul>
                            <li v-for="i in 12" :key="i">
                                <router-link :to="'/article/1'"  ><i><img
                                        src="../assets/images/pic03.jpg" alt="《今夕何夕》Html5响应式个人博客网站模板"></i><span>《今夕何夕》Html5响应式个人博客网站模板</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><router-link :to="'/article/1'" 
                                                          title="更多个人网站"><i></i><i></i><i></i></router-link></span>
                </section>
            </div>
        </div>
        <!-- pics end-->
        <div class="clear blank"></div>

        <div class="news box white-bg tab-num03">
            <div class="gd-box">
                <ul class="id-tab">
                    <li class="tab-current">百度SEO</li>
                    <li>SEO专业术语</li>
                    <li>SEO常见问题</li>

                </ul>
            </div>
            <div class="id-tab-content">
                <section class="tab-box">
                    <div class="news-new">
                        <ul>
                            <li v-for="i in 4" :key="i">
                                <section>
                                    <router-link :to="'/article/1'"  class="news-new-pic">
                                        <img src="../assets/images/pic06.jpg">
                                    </router-link>
                                    <h2>
                                        <router-link :to="'/article/1'" >个人博客，我为什么要用帝国cms？</router-link>
                                    </h2>
                                    <p>
                                        选择帝国cms，做一个博客系统，很多人都说是大材小用。确实是有那种感觉，因为cms有很多功能表用不上。但是帝国cms的安装包也就才6M，如果你放一张高清的1920的图，都比这安装包大！我就来说一说我为什么要用帝国cms。</p>
                                    <span>
                                        <router-link to="">个人博客</router-link>
                                        <router-link to="">帝国cms</router-link>
                                    </span>
                                </section>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><router-link :to="'/article/1'"
                                                          title="更多百度SEO"><i></i><i></i><i></i></router-link></span>
                </section>
                <!--第一个数字11，是父栏目ID-->
            </div>
        </div>

        <div class="clear blank"></div>
        <div class="videos box white-bg tab-num04">
            <div class="gd-box">
                <ul class="id-tab">
                    <li class="tab-current">前端设计</li>
                    <li>JS教程</li>
                    <li>CMS教程</li>

                </ul>
            </div>
            <div class="id-tab-content">
                <section class="tab-box">
                    <div class="videos-list">
                        <ul>
                            <li v-for="i in 8" :key="i">
                                <router-link :to="'/article/1'" ><i><img
                                        src="../assets/images/pic09.jpg"></i>
                                    <h2>企业网站建设前期，公司该做什么样的网站？要看企业如何定位自身</h2>
                                    <p><b class="datetime">2019-05-07</b><span class="view-num">58人在看</span></p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><router-link :to="'/article/1'"
                                                          title="更多前端设计"><i></i><i></i><i></i></router-link></span>
                </section>
            </div>
        </div>
        <!-- videos end-->
        <div class="blank clear"></div>

        <div class="word white-bg box tab-num05">
            <div class="gd-box">
                <ul class="id-tab">
                    <li class="tab-current">网络推广</li>
                    <li>品牌营销</li>
                    <li>意识思维</li>

                </ul>
            </div>
            <div class="id-tab-content">
                <section class="tab-box">
                    <div class="word-list">
                        <ul class="word-left">
                            <li v-for="i in 8" :key="i">
                                <span>2019-05-07</span>
                                <router-link :to="'/article/1'"
                                             title="企业网站建设前期，公司该做什么样的网站？要看企业如何定位自身">企业网站建设前期，公司该做什么样的网站？要看企业如何定位自身
                                </router-link>
                            </li>
                        </ul>
                        <ul class="word-right">
                            <li v-for="i in 8" :key="i">
                                <span>2019-05-04</span>
                                <router-link :to="'/article/1'"  title="企业网站建设价格根据什么来定价的？">
                                    企业网站建设价格根据什么来定价的？
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><router-link :to="'/article/1'"
                                                          title="更多网络推广"><i></i><i></i><i></i></router-link></span>
                </section>
            </div>
        </div>
        <!-- word end-->
        <div class="clear"></div>
        <div class="ad ad-all">
            <router-link :to="'/article/1'"
                         target=_blank><img
                    src='http://menhu.yangqq.com/d/file/p/2019/05-11/1769fa8ec1bbfb36bd084703ce0cc244.jpg' border=0
                    width='1170' height='140' alt=''></router-link>
        </div>

        <div class="word white-bg box tab-num06">
            <div class="gd-box">
                <ul class="id-tab">
                    <li class="tab-current">网页制作</li>
                    <li>FTP工具</li>
                    <li>编程软件</li>
                    <li>jQuery插件</li>

                </ul>
            </div>
            <div class="id-tab-content">
                <section class="tab-box">
                    <div class="down-list">
                        <ul>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex01.png"></i>
                                    <h2>腾讯QQ下载v9.1.1.24953 最新版<span>2019-05-04</span></h2>
                                    <p>
                                        提供QQ下载2018正式版官方免费下载，经过不断的更新，现在的PC端QQ已经是非常成熟的聊天软件了，新版本带来了全新的界面，集成的聊天窗口吸收了QQforMac的界面元素</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex02.png"></i>
                                    <h2>腾讯tim(QQ简洁版) v2.3.1.20994 官方最新版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="http://menhu.yangqq.com/d/file/p/2019/05-04/77858802ef0b011a8066feb4fa6048f1.jpg"></i>
                                    <h2>营销qq2019最新版 v2.21.2927 官方版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex03.png"></i>
                                    <h2>Wine QQ国际版 UbuntuKylin版 官方版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex04.png"></i>
                                    <h2>企业QQ2019电脑版 v2.0 最新版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex05.png"></i>
                                    <h2>Smart QQ下载 2.0 官方版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex06.png"></i>
                                    <h2>腾讯QQ下载v9.1.1.24953 最新版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex07.png"></i>
                                    <h2>腾讯tim(QQ简洁版) v2.3.1.20994 官方最新版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>

                            <li>
                                <router-link :to="'/article/1'"   class="dl-link">
                                    <i><img
                                            src="../assets/images/ex08.png"></i>
                                    <h2>营销qq2019最新版 v2.21.2927 官方版<span>2019-05-04</span></h2>
                                    <p>
                                        HBuilderX是编辑器和IDE的完美结合，HBuilderX是HBuilder的下一代产品，体积小巧，启动秒开，默认包包含优秀的字处理能力，创新众多其他编辑器不具备的高效字处理模型。</p>
                                </router-link>
                                <router-link :to="'/article/1'"   class="d-list-hover">
                                    <em>安全下载</em></router-link>
                            </li>
                        </ul>
                    </div>
                    <span class="tab-a-more"><router-link :to="'/article/1'" 
                                                          title="更多网页制作"><i></i><i></i><i></i></router-link></span>
                </section>
            </div>
        </div>
        <div class="clear blank"></div>
        <div class="white-bg box tags">
            <div class="news-title">
                <h2>热门标签</h2>
                <span class="tab-a-more"><router-link :to="'/article/1'" 
                                                      title="更多"><i></i><i></i><i></i></router-link></span></div>
            <ul>
                <router-link v-for="i in 35" :key="i" :to="'/article/1'">企业网站({{ i }})</router-link>
            </ul>
        </div>
        <!-- tags end-->
        <div class="blank clear"></div>
        <div class="links white-bg box ">
            <div class="news-title">
                <h2>友情链接</h2>
            </div>
            <ul>
                <li>
                    <router-link :to="'/article/1'"  >青于蓝建站</router-link>
                </li>
                <li>
                    <router-link :to="'/article/1'"  >网络营销推广</router-link>
                </li>
            </ul>
        </div>
        <!-- links end-->
        <div class="blank clear"></div>
    </div>


</template>

<script>
    import Banner from "../components/Banner";

    export default {
        name: 'Main',
        components: {Banner},
        props: {
            //msg: String
        }
    }
</script>
