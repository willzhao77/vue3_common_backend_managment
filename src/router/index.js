import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true,
      component: () => import('../views/Login.vue')
    },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      name: 'Student Management',
      iconClass: 'fa fa-users',
      redirect: '/home/student',
      component: () => import('../views/HomeView.vue'),
      children: [
          {
            path: '/home/student',
            name: 'Student List',
            iconClass: 'fa fa-list',
            component: () => import('@/views/students/StudentList.vue')
          },
          {
            path: '/home/info',
            name: 'info List',
            iconClass: 'fa fa-list-alt',
            component: () => import('@/views/students/InfoList.vue')
          },
          {
            path: '/home/work',
            name: 'workList',
            iconClass: 'fa fa-list-alt',
            component: () => import('@/views/students/WorkList.vue')
          },
      ]
    },
    {
      path: '/home',
      name: 'dataAnlysis',
      iconClass: 'fa fa-bar-chart',
      component: () => import('../views/HomeView.vue'),
      children: [
          {
            path: '/home/dataview',
            name: 'dataView',
            iconClass: 'fa fa-fa-chart',
            component: () => import('@/views/dataAnalysis/DataView.vue')
          },
          {
            path: '/home/mapview',
            name: 'mapView',
            iconClass: 'fa fa-line-chart',
            component: () => import('@/views/dataAnalysis/MapView.vue')
          },
          {
            path: '/home/travelmap',
            name: 'Travel Map',
            iconClass: 'fa fa-list-alt',
            component: () => import('@/views/dataAnalysis/TravelMap.vue')
          },
      ]
    },
    {
      path: '/users',
      name: 'userCenter',
      iconClass: 'fa fa-user',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/users/user',
          name: 'userRight',
          iconClass: 'fa fa-user',
          component: () => import('@/views/users/User.vue')
        },
      ]
    },
    {
      path: '/404',
      name: 'NotFound',
      hidden: true,
      component: () => import('../views/NotFound.vue')
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: '/404',
      hidden: true,
    },
  ]
})

//Add Navigation Guard
router.beforeResolve((to, from, next) => {
  // console.log('User Authenticated')
  // console.log('Coming from:', from.path)
  // console.log('Going to:', to.path)
  // console.log('Next:', next)
  if (to.name !== 'Login' && !localStorage.getItem('username')) next({ name: 'Login' })
  else next()
})

export default router
