<template>
	<div
		:class="`arror ${isCollapse ? 'arrorLeft' : 'arrorRight'}`"
		@click="showOrHide"
	>
		<i :class="`fa fa-angle-double-${!isCollapse ? 'left' : 'right'}`"></i>
	</div>
	<el-menu
        router
        active-text-color=""
        text-color="#fff"
        background-color="rgba(176, 33, 33, 0.1)"
		default-active="1"
		class="el-menu-vertical-demo"
		:collapse="isCollapse"
		@open="handleOpen"
		@close="handleClose"
		:style="`animation:${isCollapse ? 'widthNot' : 'widthYes'}`"
	>
		<el-menu-item index="1">
            <el-icon>
                <location />
            </el-icon>
            <span>Navigator One</span>
		</el-menu-item>
		<el-menu-item index="2">
            <el-icon>
                <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
		</el-menu-item>
		<el-menu-item index="3">
            <el-icon>
                <document />
            </el-icon>
            <span>Navigator Three</span>
		</el-menu-item>
		<el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <span>Navigator Four</span>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" scoped>
import { defineComponent, reactive, toRefs } from "vue";
import {
	Document,
	Menu as IconMenu,
	Location,
	Setting,
} from "@element-plus/icons-vue";

export default defineComponent({
	name: "Menu",
	components: { Document, IconMenu, Location, Setting },
	setup(props, context) {
		const data = reactive({
			isCollapse: false,
			menuList: "", //'@/json/menu.json'
		});
		const handleOpen = (key: string, keyPath: string[]) => {
			// console.log(key, keyPath)
		};
		const handleClose = (key: string, keyPath: string[]) => {
			// console.log(key, keyPath)
		};
		const showOrHide = () => {
			data.isCollapse = !data.isCollapse;
		};
		return {
			...toRefs(data),
			showOrHide,
			handleOpen,
			handleClose,
		};
	},
});
</script>

<style>
.el-menu {
	--el-menu-bg-color: rgba(255, 255, 255, 0.1) !important;
}

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
	background: #dcdcdd;
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

@keyframes widthYes {
	from {
		width: 64px;
	}

	to {
		width: 200px;
	}
}

@keyframes widthNot {
	from {
		width: 200px;
	}

	to {
		width: 64px;
	}
}
</style>
