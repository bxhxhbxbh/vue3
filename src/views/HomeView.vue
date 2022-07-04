<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside>
          <MenuSide />
        </el-aside>
        <el-main>
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Header from '@/components/Header.vue';
import MenuSide from '@/components/Menu.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    MenuSide,
    HelloWorld,
  },
  // setup() {
  //   const data = reactive(
  //     {
  //       isCollapse: false,
  //     }
  //   )
  //   const collapseHandle = (bool:boolean) => {
  //     data.isCollapse = bool
  //   }
  //   return {
  //     ...toRefs(data),
  //     collapseHandle,
  //   }
  // }
});
</script>

<style lang="scss" scoped>
.el-header {
  background: #892348;
  height: 100px;
  line-height: 100px;
  --el-header-padding: 0;
}
.el-container {
  background: lightgray;
}
.el-aside {
  height: calc(100vh - 100px);
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: calc(100vh - 100px);
  }
}
.el-aside[data-v-9ea40744] {
  width: var(--iiii);
}
.el-main {
  height: calc(100vh - 100px);
  margin-left: 10px;
  background: white;
}

</style>
