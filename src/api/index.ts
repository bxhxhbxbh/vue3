import $http from "../axios"
import { LoginFormInt } from "@/types/login"

export const loginDataFn = (data:LoginFormInt) => {
    return $http.post("/login", data)
}