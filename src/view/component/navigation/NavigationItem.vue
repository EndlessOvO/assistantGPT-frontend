<template>
  <div class="index" style="border: none; box-shadow: none">
    <slot></slot>
    <span class="title">
      {{ props.title }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ title: string }>();
</script>

<style scoped>
.index {
  border: none;
  box-shadow: none;
  height: 100%;
  width: 100%;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.title {
  margin-left: 0.5rem;
  font-size: 16px;
}

/* 悬浮变色 */
.index:hover {
  background-color: #f0f0f0;
}

/* 点击变色 */
.index:active {
  background-color: #e0e0e0;
}
</style>
