<template>
  <div>
    <span class="title">背景</span>
    <p class="content">
      由<span class="name">@逗齐</span
      >在阿斌Java之路知识星球1群提出要做的GPT套壳项目
    </p>
    <span class="title">项目简介</span>
    <p class="content">
      本项目是一个基于多个大语言模型的套壳项目，目的是为了让更多的人能够更方便的使用大语言模型，便捷的使用对话和代理功能。
    </p>
    <span class="title">特点</span>
    <p class="content">
      本项目的特点是完全开源，群友们可以自由的使用和修改，也可以提交自己的代码，让项目更加完善。
    </p>
    <span class="title">参与者</span>
    <p class="content">
      <span class="name">@逗齐</span>
      <span class="name">@云南鲜花批发</span>
    </p>
    <span class="title">项目地址</span>
    <p class="content">
      <el-link
        class="github-link"
        href="https://github.com/EndlessOvO/assistantGPT-frontend"
        type="primary"
        ><icon-github size="16px"></icon-github
        ><span class="link-text">前端项目地址-给个star⭐️</span></el-link
      >
      <el-link
        class="github-link"
        href="https://github.com/EndlessOvO/assistantGPT-backend"
        type="primary"
        ><icon-github size="16px"></icon-github
        ><span class="link-text">后端项目地址-给个star⭐️</span></el-link
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import IconGithub from "@/assets/svg/IconGithub.vue";
</script>

<style scoped>
.title {
  font-size: 22px;
  font-weight: bold;
  color: #242323;
  user-select: none;
  border-bottom: 2px solid #3d835c;
}

.content {
  font-size: 14px;
  color: #242323;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.name {
  font-size: 14px;
  color: rgb(115, 115, 226);
  font-weight: bold;
  background-color: rgb(209, 209, 209);
  border-radius: 5px;
  padding: 1px 4px;
  margin: 0 5px;
}

.github-link {
  display: inline-flex;
  margin-bottom: 2px;
}

.link-text {
  margin-left: 2px;
}
</style>
