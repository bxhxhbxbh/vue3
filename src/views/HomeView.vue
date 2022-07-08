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
          <Breadcrumb class="topper"/>
          <router-view />
          <div class="footer">&copy; Frontend 2022 Casey </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue'
import Header from './headerPage/Header.vue';
import MenuSide from './sidePage/Menu.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    MenuSide,
    Breadcrumb
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
  background: #892348;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: calc(100vh - 100px);
  }
}
.el-aside[data-v-9ea40744] {
  width: var(--iiii);
  background: #892348;
}
.el-main {
  background: white;
  height: calc(100vh - 100px);
  width: 100%;
  --el-main-padding: 0 !important;
}
.topper {
  position: fixed;
  background: white;
  width: 100%;
  top: 100px;
  height: 60px;
  line-height: 60px;
  z-index: 3;
  box-shadow: 0.1px 0 10px 10px rgba(0, 0, 0, 0.2);
}
.footer {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 2;
  box-shadow: 0 -0.1px 10px 10px rgba(0, 0, 0, 0.2);
}

</style>
