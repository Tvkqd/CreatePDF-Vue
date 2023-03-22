import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/Customers.vue'
import CustomerDetails from './views/CustomerDetails.vue'
import SamplePDF from './views/SamplePDF.vue'
import ClassPDF from './views/ClassPDF.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/customers'
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/customerdetails/:id',
      name: 'customerdetails',
      component: CustomerDetails
    },
    {
      path: '/samplePDF',
      name: 'samplePDF',
      component: SamplePDF
    },
    {
      path: '/classPDF',
      name: 'classPDF',
      component: ClassPDF
    }
  ]
})
export default router
