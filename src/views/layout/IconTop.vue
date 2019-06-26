<template>
    <div>
        <a href="#" title="返回顶部" :class="isShow ? 'cd-is-visible' : ''" class="icon-top-btn"></a>
    </div>
</template>

<script>
    export default {
        name: 'IconTop',
        props: {
            isShow: Boolean,
        },
    }
</script>

<style>
    .icon-top-btn {
        background: url(../../assets/images/istop.png) no-repeat center #fff;
        background-size: 22px;
        width: 40px;
        height: 40px;
        border: #ccc 1px solid;
        border-radius: 100%;
        position: fixed;
        right: 20px;
        bottom: 10%;
        z-index: 9999999;
        opacity: 0;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .cd-is-visible { visibility: visible; opacity: 1; }
</style>
