import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/quasar.sass'
import './styles/quasar.variables.sass'
import { Quasar, Notify } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, Notify, quasarUserOptions)
app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')
