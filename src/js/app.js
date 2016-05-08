var Vue = require('vue');
Vue.use(require('vue-resource'));   // xhr用

/**
 * ルートオブジェクト??
 * 　→これが何かよくわからん
 */
var vm = new Vue({
    el: 'body',
    data: {
        hoge: 'hogehoge',
        showPage: 0 // 0: 一覧、1: 承認画面
    },
    computed: {
        isList: function () {
            return this.showPage === 0;
        },
        isApprove: function () {
            return this.showPage === 1;
        }
    },
    methods: {
        test: function () {
            this.showPage = this.showPage === 0 ? 1 : 0;
        }
    }
});
