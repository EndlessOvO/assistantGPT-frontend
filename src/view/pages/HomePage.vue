<template>
  <div class="index">
    <el-button type="primary" @click="visible = !visible">Primary</el-button>
    <user-login :visible="visible" @updateVisible="handleUpdateVisible"></user-login>
  </div>
</template>

<script lang="ts" setup>
import UserLogin from '../component/UserLogin.vue';
import { ref } from 'vue';
const visible = ref<boolean>(false);

const handleUpdateVisible = (value: boolean) => {
  visible.value = value;
}
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
}

</style>