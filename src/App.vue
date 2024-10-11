<template>
  <div class="index">
    <home-page />
  </div>
</template>

<script lang="ts" setup>
import HomePage from './view/pages/HomePage.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body, #app , .index {
  height: 100%;
  width: 100%;
}
</style>
