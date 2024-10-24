<template>
  <div>
    <span class="line">
      <span style="margin-left: 2px">由</span>
      <span class="name">@逗齐</span>
      <span class="name">@云南鲜花批发</span>
      <span style="margin-left: 2px">倾力开发</span>
    </span>
    <span class="line">
      <icon-github size="18px"></icon-github>
      <span style="margin-left: 2px">点个星星</span></span
    >
  </div>
</template>

<script setup lang="ts">
import IconGithub from "@/assets/svg/IconGithub.vue";
// import IconMail from "@/assets/svg/IconMail.vue";
</script>

<style scoped>
.line {
  font-family: DingTalk;
  font-size: 14px;
  color: #242323;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 14px;
  color: rgb(115, 115, 226);
  font-weight: bold;
  background-color: rgb(209, 209, 209);
  border-radius: 5px;
  padding: 1px 4px;
  margin: 0 2px;
}
</style>
