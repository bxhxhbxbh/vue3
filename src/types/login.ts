import type { FormInstance } from "element-plus";
import { ref } from "vue"

export interface LoginFormInt {
    userName: String,
    passWord: String
}
export interface CurLanguageInt {
    curLanguage: String
}
export class InitData {
    loginForm: LoginFormInt = {
        userName: '',
        passWord: ''
    }
    language: CurLanguageInt = {
        curLanguage: 'zh-cn'
    }
    loginFormRef = ref<FormInstance>()
}