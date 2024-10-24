<template>
  <div class="main-contrains">
    <div class="right">
      <div class="top">
        <p class="title">当前版本: V0.01</p>
        <el-checkbox-group v-model="list" class="group" disabled>
          <el-checkbox
            v-for="item in list"
            :key="item"
            label="Option 1"
            value="Option 1"
            size="large"
          />
        </el-checkbox-group>
      </div>
      <div class="bottom">
        <p class="title">当前已接入模型</p>
        <div class="llamas">
          <icon-star-fire
            class="llamas-item"
            size="60px"
            v-for="item in 30"
            :key="item"
          />
        </div>
      </div>
    </div>
    <div class="left"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconStarFire from "@/assets/svg/llamas/IconStarFire.vue";
const list = ref(["Option 1", "Option 2", "Option 3"]);
</script>

<style scoped>
.main-contrains {
  height: 100%;
  width: 100%;
  display: flex;
}

.right {
  height: 100%;
  width: 80%;
}

.title {
  font-family: DingTalk;
  font-size: 24px;
  font-weight: bold;
  color: #242323;
}

.top {
  height: 50%;
}

.group {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.bottom {
  height: 50%;
}

.llamas {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 2rem;
}

.llamas-item {
  margin: 0.5rem;
  padding: 4px;
  border-radius: 10px;
  background-color: #e6eff3;
}
</style>
