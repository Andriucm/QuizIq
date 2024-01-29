// Importar estilos CSS principales
import './assets/main.css'

// Importar librerías y módulos necesarios
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/config/firebase'

// Importar el componente principal de la aplicación
import App from './App.vue'

// Importar el enrutador
import router from './router'

// Importar la biblioteca de iconos de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faAward, faHeart)

// Importar el componente de ruleta
import { Roulette } from 'vue3-roulette'

// Crear la aplicación Vue
const app = createApp(App)

// Configurar Firebase
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

// Configurar Pinia
app.use(createPinia())

// Configurar el enrutador
app.use(router)

// Registrar el componente de ruleta
app.component('roulette', Roulette)

// Registrar el componente de icono de Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon)

// Montar la aplicación en el elemento con el id 'app'
app.mount('#app')
