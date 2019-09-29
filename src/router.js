import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/cash/ticket/index.html/',
    routes: [
      {
        path: '/',
        meta: {title: '券码生成'},
        component: () => import('./views/BottomBar.vue'),
        redirect: '/home',
        children: [
          {
            path: '/home',
            name: 'home',
            meta: {title: '券码生成', keepAlive: true},
            component: () => import('./views/Home.vue')
          },
          {
            path: '/hexiao',
            name: 'hexiao',
            meta: {title: '券码核销', keepAlive: true},
            component: () => import('./views/HeXiao.vue')
          },
          {
            path: '/my',
            name: 'my',
            meta: {title: '个人中心', keepAlive: true},
            component: () => import('./views/My.vue')
          },
        ]
      },
      {
        path: '/login',
        name: 'login',
        meta: {title: '登录'},
        component: () => import('./views/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        meta: {title: '注册'},
        component: () => import('./views/Register.vue')
      },
      {
        path: '/createCoupon',
        name: 'createCoupon',
        meta: {title: '新增券码'},
        component: () => import('./views/CreateCoupon.vue')
      },
      {
        path: '/createCouponPrev',
        name: 'createCouponPrev',
        meta: {title: '查看券码'},
        component: () => import('./views/CreateCouponPrev.vue')
      },
      {
        path: '/heixiaoRecord',
        name: 'heixiaoRecord',
        meta: {title: '核销记录'},
        component: () => import('./views/HeXiaoRecord.vue')
      },
      {
        path: '/auditRecord',
        name: 'auditRecord',
        meta: {title: '审核记录'},
        component: () => import('./views/AuditRecord.vue')
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        meta: {title: '个人资料'},
        component: () => import('./views/userInfo.vue')
      },
      {
        path: '/changePassword',
        name: 'changePassword',
        meta: {title: '修改密码'},
        component: () => import('./views/ChangePassword.vue')
      },
      {
        path: '*',
        meta: {title: '页面找不到'},
        component: () => import('./views/404.vue')
      }
    ]
});
