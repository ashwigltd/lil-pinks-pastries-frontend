import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PastryPricing from '../views/PastryPricing.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/pastrypricing',
    name: 'PastryPricing',
    component: PastryPricing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
