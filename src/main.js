import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'../src/assets/css/style.css'



import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"


import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faStar,faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram ,faFacebook ,faTwitter,faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faStar, faHeart, faShoppingCart, faUser,faInstagram,faFacebook,faTwitter,faPinterest)


 
  createApp(App)
  .use(store).use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
