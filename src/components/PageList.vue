<template>
    <div class="pagelist">
        <button v-for="(item,index) in pageInfo"
                @click="btnClick(item.to,$event)" :key="index"
                type="button"
                :class="item.cls"
                :id="item.cls"
        >
            {{ item.text}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "PageList",
        props:{
            //当前页
            page: {type: Number,default: 1},
            //每页展示条数
            perPage: {type: Number, default: 10, validator: (value)=> value >= 0},
            //总条数
            listNum: {type: Number, required: true, validator: (value)=> value >= 0},
            //展示总条数
            totalShow: {type: Boolean, default: true},
            //展示总页数
            allPageShow: {type: Boolean, default: true},
            //展示首尾
            preNextShow: {type: Boolean, default: true},
        }, data() {
            return {
                p: this.page,
                pageNum: this.perPage,
                totalNum: this.listNum,
                showTotal: this.totalShow,
                showAllPage: this.allPageShow,
                showPreNext: this.preNextShow,
                allPage: Math.ceil(this.listNum / this.perPage),
                pageInfo : [],
            }
        },
        created(){
            this.calculationPage();
        },
        methods: {
            btnClick(page) {
                window.console.log('内部按钮页：' + page);
                this.$emit('btnClick',page);
            },
            //分页计算
            calculationPage() {
                let pageList = [];
                if (this.pageNum > 1) {
                    pageList.push({to: this.p - 1,text:'上一页',cls: 'p-no-pre'});
                    if (this.showPreNext) {
                        pageList.push({to: 1,text:'首页',cls: 'p-no-first'});
                    }
                }
                if (this.allPage > 6) {
                    if (this.p < 5) {
                        for (let i = 1; i < 6; i++) {
                            let cls = 'p-no-' + i + ( this.p == i ? ' active' : '');
                            pageList.push({to: i,text:i,cls: cls});
                        }
                        pageList.push({to: 0,text:'. . .',cls: 'p-no-more'});
                        pageList.push({to: this.allPage,text:this.allPage,cls: 'p-no-' + this.allPage + ( this.p == this.allPage ? ' active' : '')});

                    } else {
                        if (this.p < this.allPage - 3) {
                            for (let i = this.p - 2; i < this.p + 3; i++) {
                                let cls = 'p-no-' + i + ( this.p == i ? ' active' : '');
                                pageList.push({to: i,text:i,cls: cls});
                            }
                            pageList.push({to: 0,text:'. . .',cls: 'p-no-more'});
                            pageList.push({to: this.allPage,text:this.allPage,cls: 'p-no-' + this.allPage + ( this.p == this.allPage ? ' active' : '')});
                        } else {
                            pageList.push({to: 1, text:1, cls: 'p-no-1' + (this.p == 1 ? ' active' : '')});
                            pageList.push({to: 0,text:'. . .',cls: 'p-no-more'});
                            for (let i = this.allPage - 4; i < this.allPage + 1; i++) {
                                let cls = 'p-no-' + i + ( this.p == i ? ' active' : '');
                                pageList.push({to: i,text:i,cls: cls});
                            }
                        }
                    }
                } else {
                    for (let i = 1; i < this.allPage + 1; i++) {
                        pageList.push({to: i, text:i, cls: 'p-no-' + i});
                    }
                }

                if (this.pageNum < this.allPage) {
                    pageList.push({to: this.p + 1, text:'下一页', cls: 'p-no-next' });

                    if (this.showPreNext) {
                        pageList.push({to: this.allPage, text:'尾页', cls: 'p-no-last' });
                    }
                }

                this.pageInfo = pageList;

            },
        }
    }
</script>

<style>

    /* 页数按钮样式 */
    .pagelist button{
        display:inline-block;
        min-width:30px;
        height:28px;
        cursor:pointer;
        color:#666;
        font-size:13px;
        line-height:28px;
        background-color:#f9f9f9;
        border:1px solid #dce0e0;
        text-align:center;
        margin:0 4px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .p-no-first,.p-no-last,.p-no-next,.p-no-pre{
        width:50px;
        color:#0073A9;
        border:1px solid #0073A9
    }
    .p-no-next,.p-no-pre{width:70px}

    .pagelist .current{
        background-color:#0073A9;
        border-color:#0073A9;
        color:#FFF
    }
    /* 页面数量 */
    .pagelist span{
        display:inline-block;
    }
    .p-all-page{margin:0 10px}
    .p-all-page span,.totalSize span{color:#0073A9;margin:0 5px}
    /*button禁用*/
    .pagelist button:disabled{opacity:.5;cursor:no-drop}

</style>