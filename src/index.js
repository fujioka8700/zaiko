import Vue from 'vue'
import AnchorLink from './components/AnchorLink.vue'
import TailwindcssBreakpoint from './components/TailwindCssBreakpoint.vue'
import PageHeader from './components/PageHeader.vue'
import ArticleList from './components/ArticleList.vue'
import AsideList from './components/AsideList.vue'
import './style.scss'
import './style.css'

let app = new Vue({
  el: '#app',
  data: {
    show: false
  },
  components: {
    AnchorLink,
    TailwindcssBreakpoint,
    PageHeader,
    ArticleList,
    AsideList
  }
})
