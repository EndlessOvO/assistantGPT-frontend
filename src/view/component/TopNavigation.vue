<template>
  <div class="index">
    <div class="container">
      <icon-logo ref="iconLogo" class="logo" :size="iconSize" fill="#f3b33f" />
      <span class="title">Assistant-GPT</span>
      <div class="items">
        <navigation-item
          class="navigation-item"
          :title="item.title"
          v-for="item in menus"
          :key="item.title"
          @click="handleChecked"
        >
          <component :is="item.icon" size="18px" />
        </navigation-item>
      </div>

      <div class="user">
        <navigation-user :username="'endlessovo'">
          <el-avatar id="top-navigation-avatar">{{ "E" }}</el-avatar>
        </navigation-user>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { MenuItem } from "@/core/model/MenuItem";
import IconLogo from "@/assets/svg/IconLogo.vue";
import IconHome from "@/assets/svg/IconHome.vue";
import IconTokens from "@/assets/svg/IconTokens.vue";
import IconAgent from "@/assets/svg/IconAgent.vue";
import IconOrder from "@/assets/svg/IconOrder.vue";
import IconChat from "@/assets/svg/IconChat.vue";
import NavigationItem from "@/view/component/navigation/NavigationItem.vue";
import NavigationUser from "@/view/component/navigation/NavigationUser.vue";
import * as util from "@/core/util";
const iconLogo = ref<InstanceType<typeof IconLogo>>();
const iconSize = ref("40");
onMounted(() => {
  const height = iconLogo.value?.$el.clientHeight;
  if (height) {
    console.log(height);
    iconSize.value = height.toString();
  }
  console.log(util.stringToColor("endlessovo"));
  document
    .getElementById("top-navigation-avatar")
    ?.style.setProperty("background-color", util.stringToColor("endlessovo"));
});

const menus: MenuItem[] = [
  { title: "主页", icon: IconHome },
  { title: "Tokens", icon: IconTokens },
  { title: "Chat", icon: IconChat },
  { title: "Agent", icon: IconAgent },
  { title: "我的订单", icon: IconOrder },
];

const handleChecked = (e: MouseEvent) => {
  console.log(e);
};
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #ffffff;
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
  color: #000000;
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
  font-family: DingTalk, serif;
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
