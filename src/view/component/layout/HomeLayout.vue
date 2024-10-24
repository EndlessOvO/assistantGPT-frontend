<template>
  <div class="index">
    <div class="top-navigation">
      <slot name="top"></slot>
    </div>
    <div class="main">
      <div class="sider">
        <slot name="sider"></slot>
      </div>
      <div class="main-contrainer">
        <slot name="main"></slot>
      </div>
    </div>
    <div class="foot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
  background-color: white;
}

.top-navigation {
  height: 8%;
  width: 100%;
}

.main {
  padding: 1%;
  height: 80%;
  width: 98%;
  display: flex;
}

.sider {
  height: 92%;
  width: 16%;
  box-shadow: 0 0 10px 1px #d3d2d2;
  border-radius: 6px;
  padding: 2%;
}

.main-contrainer {
  margin-left: 1%;
  height: 92%;
  width: 74%;
  padding: 2%;
}

.foot {
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
