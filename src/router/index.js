import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ApplicationForm from '../views/ApplicationForm.vue'
import FormSubmitted from '../views/FormSubmitted.vue'
import VideoProduction from '../views/VideoProduction/VideoProduction.vue'
import Academy from '../views/Academy/Academy.vue'
import SoundProduction from '../views/SoundProduction/SoundProduction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/VideoProduction',
    name: 'VideoProduction',
    component: VideoProduction,
  },
    {
    path: '/Academy',
    name: 'Academy',
    component: Academy,
  }, 
  {
    path: '/SoundProduction',
    name: 'SoundProduction',
    component: SoundProduction,
  },
    {
    path: '/ApplicationForm',
    name: 'ApplicationForm',
    component: ApplicationForm,
  },
  {
    path: '/FormSubmitted',
    name: 'FormSubmitted',
    component: FormSubmitted
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
