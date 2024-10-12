<template>
  <div class="index">
    <el-button type="primary" @click="visible = true">Primary</el-button>
    <el-dialog v-model="visible" 
      style="background: linear-gradient(to right, #222222 60%, #153649 0);"
      width="670px" 
      align-center="true"
      close-icon="CloseBold">
      <div class="dialog" style="height: 100%;width: 100%;">
        <div class="login-form">
          <div class="login-welcom">
            <h1>欢迎回来&nbsp;👋🏻</h1>
            <p style="font-size: 16px;">登录您的帐户</p>
          </div>
          <div class="login-form-line">
            <input type="email" placeholder="电子邮箱" :autofocus="true" />
            <p class="under">跳过密码；通过电子邮件向我发送登录链接</p>
            <input type="password" placeholder="密码" />
            <p class="under">我忘记密码了</p>
          </div>
          <el-button class="button" type="primary">
            <el-icon><Unlock /></el-icon>
            <p style="margin-left: 2px;">登录</p>
          </el-button>
        </div>
        <div class="other-line">
          <div style="width: 70%;height: 70%;">
            <el-button style="background-color: white; width: 100%; height: 16%;font-size: 16px; margin-bottom: 1rem;color: black;">
              <el-icon><ChromeFilled /></el-icon>
              <p style="margin-left: 4px;">使用 Goolge 登录</p>
            </el-button>
            <el-button style="background-color: white; width: 100%; height: 16%;font-size: 16px;margin-left: 0; margin-bottom: 1rem;color: black;">
              <el-icon><ChromeFilled /></el-icon>
              <p style="margin-left: 4px;">使用 GitHub 登录</p>
            </el-button>
            <el-button style="background-color: white; width: 100%; height: 16%;font-size: 16px;margin-left: 0; margin-bottom: 1rem;color: black;">
              <el-icon><ChromeFilled /></el-icon>
              <p style="margin-left: 4px;">使用 WeChat 登录</p>
            </el-button>
            <el-button style="background-color: white; width: 100%; height: 16%;font-size: 16px;margin-left: 0; margin-bottom: 1rem;color: black;">
              <el-icon><UserFilled /></el-icon>
              <p style="margin-left: 4px;">使用通行秘钥登录</p>
            </el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref<Boolean>(true);
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
}

.dialog {
  display: flex;
  height: 100%;
  width: 100%;
}

.other-line {
  width: 40%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  margin-left: 1rem;
  height: 100%;
  width: 60%;
  color: white;
}

.login-welcom {
  margin-bottom: 1rem;
}

.login-welcom h1 {
  font-size: 38px;
}

.login-form-line {
  width: 100%;
  display: grid;
}

.login-form-line .under {
  margin-top: 2px;
  font-size: 14px;
  color: #5a9cf8;
}

.login-form-line input {
  padding: .8rem;
  width: 80%;
  margin-top: 1rem;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #fff;
  color: white;
  font-size: 16px;
}

.login-form-line input::placeholder {
  font-size: 15px;
  color: #909090;
}

.button {
  margin-top: 1.8rem;
  margin-bottom: 1rem;
  width: 30%;
  height: 3rem;
  font-size: 18px;
}

.login-welcom p {
  font-size: 14px;
}

</style>