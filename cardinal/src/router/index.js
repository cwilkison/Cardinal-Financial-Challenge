import VueRouter from 'vue-router'
import App from '../App.vue'
import EmployeeDetail from '../components/EmployeeDetail.vue'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/employee',
      component: EmployeeDetail
    }
  ]
})

export default router
