<template>
    <div :class="`arror ${isCollapse? 'arrorLeft' : 'arrorRight'}`" @click="showOrHide">
        <i :class="`fa fa-angle-double-${!isCollapse? 'left' : 'right'}`" ></i>
    </div> 
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose" :style="`animation:${isCollapse? 'widthNot' : 'widthYes'}`">
        <el-sub-menu v-for="(item, index) in memuList" :index="index + 1" :key="index">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon>
                <icon-menu />
            </el-icon>
            <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>Navigator Four</template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" scoped>
import { defineComponent, reactive, toRefs } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import menuList from "@/json/menu.ts"

export default defineComponent({
    name: 'Menu',
    components: { Document, IconMenu,Location, Setting},
    setup(props, context) {
        const data = reactive(
            {
                isCollapse: false,
                menuList,
            }
        )
        const handleOpen = (key: string, keyPath: string[]) => {
            // console.log(key, keyPath)
        }
        const handleClose = (key: string, keyPath: string[]) => {
            // console.log(key, keyPath)
        }
        const showOrHide = () => {
            data.isCollapse = !data.isCollapse
        }
        return {
            ...toRefs(data),
            showOrHide,
            handleOpen,
            handleClose
        }
    }
});
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    height: calc(100vh - 101px);
    width: 200px;
}

.el-menu--collapse {
    height: calc(100vh - 101px);
    width: 64px;
}

.arror {
    position: absolute;
    height: calc(100vh - 100px);
    width: 10px;
    z-index: 1;
    line-height: calc(100vh - 100px);
}
.arrorRight {
    left: 200px;
    transition: left 0.26s linear;
}
.arrorLeft {
    left: 64px;
    transition: left 0.26s linear;
}
@keyframes leftYes{
   from {
    left: 64px;
   }
   to {
    left: 200px;
   }
}
@keyframes leftNot{
   from {
    left: 200px;
   }
   to {
    left: 64px;
   }
}
@keyframes widthYes{
   from {
    width: 64px;
   }
   to {
    width: 200px;
   }
}
@keyframes widthNot{
   from {
    width: 200px;
   }
   to {
    width: 64px;
   }
}
</style>