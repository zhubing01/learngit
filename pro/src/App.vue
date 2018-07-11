<template>
  <div id="app">
    <app-header></app-header>
    <!-- <app-data></app-data> -->
    <transition name="router-fade">
      <router-view></router-view>
    </transition>
      <!-- <div class="data-wrap">
          dataWrap
      </div> -->
    <app-footer></app-footer>
  </div>
</template>
  
<script>
  import AppHeader from '@/components/header'
  // import AppData from '@/view/app/data'
  import AppFooter from '@/components/footer'

  export default {
    components: {
      AppHeader,
      // AppData,
      AppFooter
    },
    created() {
      this.$router.push('/view/app/data'); // 页面加载时跳转
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
  .data-wrap {
      color: #333;
  }
</style>