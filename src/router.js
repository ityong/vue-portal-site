import Vue from 'vue'
import Router from 'vue-router'

import Header from './views/layout/Header'
import Footer from './views/layout/Footer'
import Index from './views/Index'
import BlogIndex from './views/blog/Index'
import BlogDetail from './views/blog/Detail'
import CaseIndex from './views/case/Index'
import CaseCategory from './views/case/Category'
import VideoIndex from './views/video/Index'
import VideoPlay from './views/video/Play'
import SourceIndex from './views/source/Index'
import ProjectIndex from './views/project/Index'
import ProjectDetail from './views/project/Detail'
import Me from './views/me/Index'
import MeAbout from './views/me/About'
import MeContact from './views/me/Contact'
import MeHelp from './views/me/Help'
import MSearch from './views/search/search-page'

Vue.use(Router)

let baseHF = { header: Header, footer: Footer}


export default new Router({
    routes: [
        {
            path: '/',
            components: {...baseHF, default:Index}
        },
        {
            path: '/blog',
            components: {...baseHF, default:BlogIndex}
        },
        {
            path: '/article/:id',
            components: {...baseHF, default:BlogDetail}
        },
        {
            path: '/blog/:category',
            components: {...baseHF, default:BlogIndex}
        },
        {
            path: '/case',
            components: {...baseHF, default:CaseIndex}
        },
        {
            path: '/case-c',
            components: {...baseHF, default:CaseCategory}
        },
        {
            path: '/video',
            components: {...baseHF, default:VideoIndex}
        },
        {
            path: '/video/:id',
            components: {...baseHF, default:VideoPlay}
        },
        {
            path: '/video-c/:category',
            components: {...baseHF, default:VideoIndex}
        },
        {
            path: '/source',
            components: {...baseHF, default:SourceIndex}
        },
        {
            path: '/source-c/:category',
            components: {...baseHF, default:SourceIndex}
        },
        {
            path: '/project',
            components: {...baseHF, default:ProjectIndex}
        },
        {
            path: '/project/:id',
            components: {...baseHF, default:ProjectDetail}
        },
        {
            path: '/me',
            components: {...baseHF, default:Me},
            children: [
                {path: '/', redirect: '/about'},
                {path: '/about', component: MeAbout},
                {path: '/contact', component: MeContact},
                {path: '/help', component: MeHelp},
            ]
        },
        {
            path: '/m-search',
            components: {default:MSearch},
        },
    ]
})
