import { nextTick } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [ // Array<RouteRecordRaw> 这个偶尔报错
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: "/1",
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/1',
        name: '',
        meta: {
          isShow: true,
          title: '列表',
        },
        component: () => import('@/views/mainPage/FormView.vue'),
      },
      {
        path: '/2',
        name: '',
        meta: {
          isShow: true,
          title: '列表',
        },
        component: () => import('@/views/mainPage/FormView.vue'),
      },
      {
        path: '/3',
        name: '',
        meta: {
          isShow: true,
          title: '列表',
        },
        component: () => import('@/views/mainPage/TableView.vue'),
      },
      {
        path: '/4',
        name: '',
        meta: {
          isShow: true,
          title: '列表',
        },
        component: () => import('@/views/mainPage/TableView.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token:string | null = localStorage.getItem('token')
  if(!token && to.path !== '/') {
    // console.log(1321)
    return '/'
  }else if(to.path !== '/' && token){
    // console.log(4546546)
    // 动态添加路由 调用路由接口
    // const routerData:any = await getRouter()
    routes.map(item => {
      if(item.children)
      item.children.map(tool => {
        if(to.path === tool.path) {
          next()
        } else {
          next({path: '/'})
        }
      })
    })
  }
  next()
})

export default router
