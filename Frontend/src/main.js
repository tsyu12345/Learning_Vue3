import "./assets/global.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faLeaf, faFile} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "bootstrap/dist/css/bootstrap.min.css"

library.add(faLeaf)
library.add(faFile)


const app = createApp(App)
app.component('fa', FontAwesomeIcon )
app.use(router)
app.mount('#app')
