import $http from "../axios"
import { LoginFormInt } from "@/types/login"

export const loginDataFn = (data:LoginFormInt) => {
    return $http.post("/login", data)
}

export const travelDataFn = () => {
    return $http.get("/travel")
}

export const scoreDataFn = () => {
    return $http.get("/travel")
}

// function params(arg0: string, params: any, data: LoginFormInt) {
//     throw new Error("Function not implemented.")
// }
