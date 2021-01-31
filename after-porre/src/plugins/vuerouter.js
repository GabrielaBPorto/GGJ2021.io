import Vue from 'vue'
import VueRouter from 'vue-router'

import TelaInicial from '@/components/TelaInicial.vue'
import Cena from '@/components/Cena.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'Tela Inicial',
        component: TelaInicial
      },
      {
          path: '/cena',
          name: 'Cena',
          component: Cena
      }
    ]
})

router.replace({ path: '', redirect: '/' })

export default router

// Now the app has started!