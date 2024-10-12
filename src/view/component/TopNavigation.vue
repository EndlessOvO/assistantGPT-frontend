<template>
  <div class="index">
    <div class="container">
      <icon-logo ref="iconLogo" class="logo" :size="iconSize" />
      <span class="title">Assistant-GPT</span>
      <div class="items">
        <navigation-item
          class="navigation-item"
          :title="'test'"
          v-for="item in 8"
          :key="item"
        >
          <el-icon><ChromeFilled /></el-icon>
        </navigation-item>
      </div>

      <div class="user">
        <navigation-user :username="'unll'">
          <el-icon><UserFilled /></el-icon>
        </navigation-user>
      </div>
      <div class="operate"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import IconLogo from "@/assets/svg/IconLogo.vue";
import NavigationItem from "@/view/component/navigation/NavigationItem.vue";
import NavigationUser from "@/view/component/navigation/NavigationUser.vue";
const iconLogo = ref<InstanceType<typeof IconLogo>>();
const iconSize = ref("41");
onMounted(() => {
  const height = iconLogo.value?.$el.clientHeight;
  if (height) {
    console.log(height);
    iconSize.value = height.toString();
  }
});
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #ebeef5;
  box-shadow: 0px 1px 4px 0px rgba(108, 108, 118, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  height: 80%;
  width: 99%;
  display: flex;
  align-items: center;
}

.logo {
  margin-left: 1rem;
  height: 100%;
  aspect-ratio: 1/1;
}

.title {
  font-family: DingTalk, serif;
  font-size: 24px;
  font-weight: bold;
  margin-left: 1rem;
  color: black;
}

.items {
  height: 100%;
  width: 50%;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  border: none;
  box-shadow: none;
}

.navigation-item {
  height: auto;
  width: auto;
  padding: 5px 10px;
  border-radius: 5px;
}

.user {
  height: 100%;
  width: 20%;
  min-width: 150px;
  margin-left: auto;
}
</style>
