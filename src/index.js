import Vue from 'vue'
import AnchorLink from './components/AnchorLink.vue'
import tailwindcssBreakpoint from './components/TailwindCssBreakpoint.vue'
import './style.scss'
import './style.css'

let app = new Vue({
  el: '#app',
  data: {
    show: false
  },
  components: {
    AnchorLink,
    tailwindcssBreakpoint
  }
})
