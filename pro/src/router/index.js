import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import app from '@/App'
import exit from '@/view/exit'
import data from '@/view/app/data'
import echarts from '@/view/app/echarts'
import bench from '@/view/app/bench'
import audio from '@/view/app/audio'
// import header from '@/components/header'
// import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/view/app/data',
      name: 'home',
      component: data
    }, {
      path: "",
      name: "exit",
      component: exit
    },{
      path: "/view/app/echarts",
      name: "echarts",
      component: echarts
    },{
      path: '/view/app/bench',
      name: 'bench',
      component: bench
    },{
      path: '/view/app/audio',
      name: 'audio',
      component: audio
    }
  ]
})
