import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入菜单
import Menu from './pages/menu.vue';

import Page1 from './pages/page1.vue';
import Page2 from './pages/page2.vue';

// 配置路由
const router = new VueRouter({
  routes: [
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/page1',
      component: Page1
    },
    {
      path: '/page2',
      component: Page2
    },
    {
      path: '/*',
      redirect: 'menu'
    }]
});

export default router;
