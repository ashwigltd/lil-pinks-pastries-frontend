import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  },
  theme: {
    dark: true,
    light: false,
    themes: {
      dark: {
        dark: true,
        background: 'black'
      }
    }
  },
  components,
  directives
})
