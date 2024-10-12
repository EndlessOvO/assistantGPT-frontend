<template>
  <div class="index" style="border: none; box-shadow: none">
    <slot></slot>
    <el-dropdown style="margin-left: 1rem">
      <span class="el-dropdown-link">
        <span class="username">{{ props.username || "未登录用户" }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>主页</el-dropdown-item>
          <el-dropdown-item>信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ username: String }>();
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
  font-size: 26px;
  background-color: antiquewhite;
  border-radius: 10px;
}

.username {
  font-size: 18px;
  font-weight: bold;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
