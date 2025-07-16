<template>
  <router-view :key="$route.fullPath"></router-view>
  <MainLayout/>
</template>

<script>
import MainLayout from './components/MainLayout.vue';

export default {
  components: {
    MainLayout
  },
  mounted() {
    window.Telegram.WebApp.expand();
  }
}
</script>