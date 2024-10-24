<template>
  <div class="index" style="box-shadow: none">
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
  font-weight: bold;
  color: #242323;
  user-select: none;
}

/* 悬浮变色 */
.index:hover {
  background-color: #eaeaea;
}

/* 点击变色 */
.index:active {
  background-color: #b7b7b7;
}
</style>
