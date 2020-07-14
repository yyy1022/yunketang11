import request from "../utils/http";

// import {fromData} from "element-ui/src/utils/date-util";

export function loginApi(userName, password) {
    const formData = new FormData();
    formData.append("username", userName)
    formData.append("password", password)


    formData.append("rememberMe", "false")
    return request.post("/api/pcUser/login", formData)
}

//获取当前登录用户的信息
export function getUserInfo() {
    return request.get('/api/pcUser/login-user/info')
}
// /pcUser/logout  退出登录
export function logOut() {
    return request.get('/api/pcUser/logout')
}