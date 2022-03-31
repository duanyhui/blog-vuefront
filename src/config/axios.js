import axios from 'axios'


axios.defaults.baseURL="http://localhost:9090"

// 前置拦截器
axios.interceptors.request.use(config =>{
    return config
})

axios.interceptors.response.use(config =>{
    let res = response.data;

    console.log("===============")
    console.log(res)
    console.log("===============")
})