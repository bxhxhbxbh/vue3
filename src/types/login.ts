import type { FormInstance } from "element-plus";
import { ref } from "vue"

export interface LoginFormInt {
    userName: String,
    passWord: String,
}
export class InitData {
    loginForm: LoginFormInt = {
        userName: '',
        passWord: ''
    }
    loginFormRef = ref<FormInstance>()
}