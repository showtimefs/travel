import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/register'
  },
  {
    name: 'register',
    component: () => import('./view/register/register.vue'),
    meta: {
      title: '会员中心'
    }
  },

    {
        name: 'carIndex',
        component: () => import('./view/carpool/carIndex.vue'),
        meta: {
            title: '共享拼车'
        }
    },
    {
        name: 'pushStroke',
        component: () => import('./view/carpool/pushStroke.vue'),
        meta: {
            title: '发布行程'
        }
    }

  // {
  //   name: 'cart',
  //   component: () => import('./view/cart'),
  //   meta: {
  //     title: '购物车'
  //   }
  // },
  // {
  //   name: 'goods',
  //   component: () => import('./view/goods'),
  //   meta: {
  //     title: '商品详情'
  //   }
  // }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
