// import Vue from 'vue'
// import App from './App'
//
// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Book.vue'

// test componets
var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})

var App = Vue.extend({})

// install router
Vue.use(VueRouter)

var router = new VueRouter()
router.map({
  '/book': {component: Main},
  '/foo': {component: Foo},
})

router.start(App, '#app')

// new Vue({
//   el: 'html',
//   components: {Main}
// })


// new Vue({
//   el: 'html',
//   methods: {
//     change: function () {
//       this.nightMode = !this.nightMode
//     }
//   },
//   data: {
//     nightMode: false,
//     book: {
//       title: 'Book one',
//       content: '使用 Vue.js 和 vue-router 创建单页应用非常的简单，使用 Vue.js 开发，整个应用已经被拆分成了独立的组件。在使用 vue-router 时，我们需要做的就是把路由映射到各个组件，vue-router 会把各个组件渲染到正确的地方。'
//     }
//   },
//   computed: {
//     classBody: function () {
//       return 'g-bd' + (this.nightMode ? '-night' : '')
//     },
//     classTitle: function () {
//       return 'u-title' + (this.nightMode ? '-night' : '')
//     },
//     classContent: function () {
//       return 'u-content' + (this.nightMode ? '-night' : '')
//     }
//   }
//
// });
