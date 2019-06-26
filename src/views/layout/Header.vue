<template>
    <div class="header-box">
        <div class="logo-section box">
            <div class="search">
                <form action="" method="post" name="searchform">
                    <input name="keyboard" class="input_text" placeholder="请输入关键字词" type="text">
                    <input name="Submit" class="input_submit" value="搜索" type="submit">
                </form>
            </div>
            <div class="logo">
                <router-link to="">
                    <img src="../../assets/images/logo.png">
                    <h2 class="logo-title">StyleYong</h2>
                    <p class="logo-text">技术建站，让你对手追赶</p>
                </router-link>
            </div>
        </div>
        <div class="clear"></div>
        <div class="top-nav">
            <h2><router-link to="/"><a>StyleYong</a></router-link></h2>
            <nav class="nav-menu-box">
                <ul class="star-list">
                    <li><router-link to="/" @click.native="navMenuClick">网站首页</router-link></li>
                    <li class="menu">
                        <router-link to="/blog" @click.native="navMenuClick">个人博客</router-link>
                        <ul class="sub start-list-sub">
                            <li><router-link to="/blog/1" @click.native="navMenuClick">博客日记</router-link></li>
                            <li><router-link to="/blog/2" @click.native="navMenuClick">程序人生</router-link></li>
                        </ul>
                        <span @click="subNavOpen($event)"></span></li>
                    <li class="menu">
                        <router-link to="/case" @click.native="navMenuClick">设计案例</router-link>
                        <ul class="sub start-list-sub">
                            <li><router-link to="/case-c" @click.native="navMenuClick">个人网站</router-link></li>
                            <li><router-link to="/case-c" @click.native="navMenuClick">企业网站</router-link></li>
                            <li><router-link to="/case-c" @click.native="navMenuClick">事业单位</router-link></li>
                            <li><router-link to="/case-c" @click.native="navMenuClick">网购商城</router-link></li>
                        </ul>
                        <span @click="subNavOpen($event)"></span></li>
                    <li class="menu"><router-link to="/video" @click.native="navMenuClick">视频教程</router-link>
                        <ul class="sub start-list-sub">
                            <li><router-link to="/video-c/前端设计" @click.native="navMenuClick">前端设计</router-link></li>
                            <li><router-link to="/video-c/JS教程" @click.native="navMenuClick">JS教程</router-link></li>
                            <li><router-link to="/video-c/CMS教程" @click.native="navMenuClick">CMS教程</router-link></li>
                        </ul>
                        <span @click="subNavOpen($event)"></span></li>
                    <li class="menu"><router-link to="/source" @click.native="navMenuClick">资源下载</router-link>
                        <ul class="sub start-list-sub">
                            <li><router-link to="/source-c/网页制作" @click.native="navMenuClick">网页制作</router-link></li>
                            <li><router-link to="/source-c/FTP工具" @click.native="navMenuClick">FTP工具</router-link></li>
                            <li><router-link to="/source-c/编程软件" @click.native="navMenuClick">编程软件</router-link></li>
                            <li><router-link to="/source-c/jQuery插件" @click.native="navMenuClick">jQuery插件</router-link></li>
                        </ul>
                        <span @click="subNavOpen($event)"></span>
                    </li>
                    <li><router-link to="/project" @click.native="navMenuClick">模板商城</router-link></li>
                    <li><router-link to="/me" @click.native="navMenuClick">关于我们</router-link></li>
                </ul>
            </nav>
            <h2 class="m-nav-h" @click="showMobileNav"><span class="nav-icon"></span></h2>
        </div>
        <div class="is-search">
            <section @click="showSearchPage"><i></i>请输入关键字词</section>
        </div>

        <!--<search-page v-if="isMinScreen"></search-page>-->
    </div>
</template>

<script>

    export default {
        name: 'Header',
        props: {},
        data() {
            return {
                isMinScreen: this.$root.$data.isMinScreen,
            }
        },
        watch: {
            //监听是否是小窗口界面
            "$root.$data.isMinScreen" : function (val) {
                if (typeof val === 'boolean') {
                    this.isMinScreen = val
                }
                //非小屏幕
                if (!val) {
                    document.getElementsByClassName('nav-menu-box').item(0).style.display = 'block'
                    let listSubList = document.querySelectorAll('.start-list-sub')
                    listSubList.forEach(function (v) {
                        v.removeAttribute('style')
                    })
                }
            },
        },
        methods: {
            //小窗口菜单显示逻辑
            showMobileNav() {
                let navDom = document.getElementsByClassName('nav-menu-box').item(0)
                navDom.style.display = (!navDom.style.display || navDom.style.display === 'none') ? "block" : "none"
            },
            subNavOpen (e) {
                let listSubList = document.querySelectorAll('.start-list-sub')
                listSubList.forEach(function (v) {
                    if (v === e.currentTarget.previousElementSibling) {
                        v.style.display = (v.style.display === 'block') ? "none" : "block"
                    } else {
                        v.style.display = 'none'
                    }
                })
                //document.getElementsByClassName('nav-menu-box').item(0).style.display = 'none'
            },
            //菜单点击原生事件
            navMenuClick(){
                if (this.isMinScreen) {
                    document.getElementsByClassName('nav-menu-box').item(0).style.display = 'none'
                }
            },
            //搜索页面
            showSearchPage(){
                this.$router.push('/m-search')
            }
        }
    }
</script>
