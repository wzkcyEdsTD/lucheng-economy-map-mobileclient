import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router';
Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  // mode: 'history',
  scrollBehavior(to,from,savePosition){ 
    if(savePosition) {
      return savePosition;
    }else{
      return {x:0,y:0}
    }
  },
  routes: routers
};
export const router = new VueRouter(RouterConfig);
