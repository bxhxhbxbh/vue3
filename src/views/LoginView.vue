<template>
  <div class="login-page">
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="125px" class="loginForm">
      <h2>{{$t('common.name')}}</h2>
      <el-form-item :label="$t('common.switch')">
        <div class="laguage" @click="changeLanguage">
          <span class="active">{{language.curLanguage === 'en-us'? $t('common.switchEn') : $t('common.switchZh')}}</span>
        </div>
      </el-form-item>
      <el-form-item :label="$t('common.account')" prop="userName">
        <el-input v-model="loginForm.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item :label="$t('common.password')" prop="passWord">
        <el-input v-model="loginForm.passWord" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button class="sub-btu" type="primary" @click="submitForm(loginFormRef)">{{$t('common.signIn')}}</el-button>
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

import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'LoginView',
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const { locale } = useI18n()
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
            console.log(res)
              if(res.status === 200) {
                ElMessage({
                message: '登陆成功',
                type: 'success',
              })
              console.log(res, 'ooooo')
              localStorage.setItem("token", res.data.token)
              router.push('/home')
            } else {
              ElMessage({
                message: '后台错误',
                type: 'success',
              })
            }
          }).catch(err => {
            ElMessage({
              message: '服务错误',
              type: 'success',
            })
          })
        } else {
          ElMessage.error('验证失败')
        }
      })
    }
    const changeLanguage = () => {
      const localeStr: any = locale
      data.language.curLanguage = data.language.curLanguage === 'zh-cn' ? 'en-us' : 'zh-cn'
      localeStr.value = data.language.curLanguage
    }
    return {
      ...toRefs(data),
      rules,
      submitForm,
      changeLanguage
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
    width: 450px;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;
    .sub-btu {
      width: 100%;
    }
  }
  .laguage {
    font-weight: bold;
    .active {
      color: rgb(11, 154, 237)
    }
  }
}

</style>
<style>
.el-form .el-form-item .el-form-item__label {
  line-height: 16px !important;
  align-items: center !important;
}
</style>