import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// import Axios from 'axios'
import http from './request/http'

import './assets/main.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App)



.component('font-awesome-icon', FontAwesomeIcon)

// app.config.globalProperties.$http = Axios
app.config.globalProperties.$http = http
app.use(router)
app.use(ElementPlus)

app.mount('#app')
