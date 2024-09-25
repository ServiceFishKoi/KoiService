import axios from "../utils/axios"


export const apiRegister = (data) =>
    axios({
        url: "",
        method: "post",
        data,

    })
export const apiLogin = (data) =>
    axios({
        url: "/login",
        method: "post",
        data,

    })