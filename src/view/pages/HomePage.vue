<template>
  <div class="index">
    <!-- <user-login :visible="visible"></user-login> -->
    <!-- <project-introduction class="introduction"></project-introduction> -->
    <home-layout>
      <template #top>
        <top-navigation></top-navigation>
      </template>
      <template #sider>
        <home-sider></home-sider>
      </template>
      <template #main>
        <home-main></home-main>
      </template>
      <template #foot>
        <foot-link></foot-link>
      </template>
    </home-layout>
  </div>
</template>

<script lang="ts" setup>
// import UserLogin from "../component/UserLogin.vue";
import TopNavigation from "../component/TopNavigation.vue";
import FootLink from "../component/FootLink.vue";
import HomeSider from "../component/HomeSider.vue";
import HomeMain from "../component/HomeMain.vue";
import HomeLayout from "../component/layout/HomeLayout.vue";
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
}

.introduction {
  height: 30%;
  padding-top: 5%;
}
</style>
