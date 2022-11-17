import Vue from 'vue';
import VueRouter from 'vue-router';
import MyIndex from '../view/MyIndex'
import MyVideo from '../view/MyVideo'
import MyHome from '../view/MyHome.vue'
import MyMine from '../view/MyMine.vue'
import MyPosition from '../view/MyPosition.vue'
Vue.use(VueRouter);

export default new VueRouter({
  made: 'hash',

  routes: [
    {
      path: '/',
      redirect: '/index/one'
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/one',
      component: MyIndex,
      children: [
        {
          path: 'one',
          name: 'one',
          component: () => import('../view/CinemaOne.vue'),
        },
        {
          path: 'two',
          name: 'two',
          component: () => import('../view/CinemaTwo.vue'),
        },

        {
          path: 'three',
          name: 'three',
          component: () => import('../view/CinemaThree.vue')
        },

        {
          path: 'four',
          name: 'four',
          component: () => import('../view/CinemaFour.vue')
        }
      ]
    },
    // 视频详情
    {
      path: '/limovie',
      name: 'limovie',
      component: () => import('../view/LiMovie.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: MyVideo
    },
    // 城市选择
    {
      path: '/position',
      name: "position",
      component: MyPosition
    },
    // 搜索功能
    {
      path: '/search',
      name: "search",
      component: () => import('../view/MySearch.vue')
    },
    // 我的
    {
      path: '/myhome',
      name: 'myhome',
      component: MyHome
    },
    // 电影详情
    {
      path: '/details',
      name: 'details',
      component: () => import ('../view/MyDetails.vue')
    },
    // 售票
    {
      path: '/movieticket',
      name: 'movieticket',
      component: () => import ('../view/movieTicket.vue')
    },
    // 我的详细页
    {
      path: '/mymine',
      name: 'mymine',
      component: MyMine,
      beforeEnter(to, from, next) {
        let myId = window.localStorage.getItem("userId")
        if (myId) {
          next();
          return
        } else {
          next('/myhome')
        }
      }
    }


  ]


})




