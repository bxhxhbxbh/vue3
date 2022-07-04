<template>
  <div class="login-page">
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="70px" class="loginForm">
      <h2>后台管理系统</h2>
      <el-form-item label="账号" prop="userName">
        <el-input v-model="loginForm.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input v-model="loginForm.passWord" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button class="sub-btu" type="primary" @click="submitForm(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { InitData } from "@/types/login";
import { ElMessage } from 'element-plus';
import type { FormInstance } from "element-plus";
import { loginDataFn } from "@/api";

import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'loginView',
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const rules = {
      userName: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 6, max: 24, message: '账号长度需要在6-24之间', trigger: 'blur' },
      ],
      passWord: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 24, message: '密码长度需要在6-24之间', trigger: 'blur' },
      ]
    }
    const submitForm = (loginFormRef: FormInstance) => {
      loginFormRef.validate((valid: Boolean) => {
        if(valid) {
          loginDataFn(data.loginForm).then(res => {
            ElMessage({
              message: '登陆成功',
              type: 'success',
            })
            console.log(res, 'ooooo')
            localStorage.setItem("token", res.data.token)
            router.push('/home')
          })
        } else {
          ElMessage.error('验证失败')
        }
      })
    }
    return {
      ...toRefs(data),
      rules,
      submitForm
    }
  },
});
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 200px;
  background: url("../assets/bg.png") round;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .loginForm {
    width: 400px;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;
    .sub-btu {
      width: 100%;
    }
  }
}
</style>