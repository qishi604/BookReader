<template>
    <div id="book" class="{{classBody}}">
        <div class="g-book-content">
            <button class="u-night-toggle" @click="change">{{nightMode?'白天模式':'夜间模式'}}</button>
            <h1 class="{{classTitle}}">{{book.title}}</h1>
            <div class="{{classContent}}">
                {{book.content}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Book',
        el: '#book',
        methods: {
            change: function () {
                this.nightMode = !this.nightMode
            }
        },
        data() {
            return {
                nightMode: false,
                book: {
                    title: 'Book one',
                    content: '使用 Vue.js 和 vue-router 创建单页应用非常的简单，使用 Vue.js 开发，整个应用已经被拆分成了独立的组件。在使用 vue-router 时，我们需要做的就是把路由映射到各个组件，vue-router 会把各个组件渲染到正确的地方。'
                }
            }
        },
        computed: {
            classBody: function () {
                return 'g-bd' + (this.nightMode ? '-night' : '')
            },
            classTitle: function () {
                return 'u-title' + (this.nightMode ? '-night' : '')
            },
            classContent: function () {
                return 'u-content' + (this.nightMode ? '-night' : '')
            }
        }
    }
</script>
