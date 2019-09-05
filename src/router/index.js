import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/cards'
import Addsmoothie from '@/components/Addsmoothie'
import EditSmoothie from '@/components/EditSmoothie'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cards',
      component:Cards
      
    },
    {
      path:'/add-smoothie',
      name:"Addsmoothie",
      component:Addsmoothie
    },
    {
      path:'/edit-smoothie/:url',
      name:'EditSmoothie',
      component:EditSmoothie
    }
   
  ]
})
