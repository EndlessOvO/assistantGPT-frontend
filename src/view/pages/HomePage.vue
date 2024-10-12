<template>
  <div class="index">
    <!-- <user-login :visible="visible"></user-login> -->
    <top-navigation class="top-navigation"></top-navigation>
  </div>
</template>

<script lang="ts" setup>
// import UserLogin from "../component/UserLogin.vue";
import TopNavigation from "../component/TopNavigation.vue";
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
}

.top-navigation {
  height: 8%;
  width: 100%;
}
</style>
