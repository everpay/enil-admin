import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  
 {
    path: '/elektropay-account',
    component: Layout,
    children: [
      {
        path: 'elektropay-account/dashboard/index',
        name: 'Balances',
        component: () => import('@/views/elektropay-account/dashboard/index'),
        meta: { title: 'Elektropay Account', icon: 'form' }
      }
    ]
  },

{
    path: '/history',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'History',
        component: () => import('@/views/history/index'),
        meta: { title: 'Transfer History', icon: 'form' }
      }
    ]
  },

    {
    path: '/recipients',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Recipients',
        component: () => import('@/views/recipients/index'),
        meta: { title: 'Recipients', icon: 'users' }
      }
    ]
  },
  
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/settings',
    component: Layout,
    redirect: '/settings',
    name: 'Settings',
    meta: {
      title: 'Settings',
      icon: 'settings'
    },
    children: [
      {
        path: 'account',
        component: () => import('@/views/settings/account/index'), // Parent router-view
        name: 'Account',
        meta: { title: 'Account' },
        children: [
          {
            path: 'profile',
            component: () => import('@/views/settings/account/profile'),
            name: 'Profile',
            meta: { title: 'Profile' }
          },
          {
            path: 'business',
            component: () => import('@/views/settings/account/business'),
            name: 'Business',
            meta: { title: 'Business Info' },
            children: [
              {
                path: 'my-money',
                component: () => import('@/views/settings/account/my-money'),
                name: 'My Money',
                meta: { title: 'My Money' }
              },
              {
                path: 'notifications',
                component: () => import('@/views/settings/account/notifications'),
                name: 'Notifications',
                meta: { title: 'Notifications' }
              }
            ]
          },
          {
            path: 'selling-tools',
            component: () => import('@/views/settings/account/selling-tools'),
            name: 'Selling Tools',
            meta: { title: 'Selling Tools' }
          }
        ]
      },
      {
        path: 'account-summary',
        component: () => import('@/views/settings/account-summary/index'),
        meta: { title: 'Account Summary' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
