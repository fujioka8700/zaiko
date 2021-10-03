import Vue from 'vue'
import AnchorLink from './components/AnchorLink.vue'
import './style.scss'
import './style.css'

let app = new Vue({
  el: '#app',
  data: {
    arguments: []
  },
  components: {
    AnchorLink
  }
})
