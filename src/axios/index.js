import axios from 'axios'
import qs from 'qs'

const url="http://127.0.0.1:3000/"

export  function getMain(){
      return axios.get(`${url}article/getAll`)
}
export  function getdetail(val){
    return axios.get(`${url}article/getarticle?id=${val}`)
}
export  function deleteWz(val){
    return axios.get(`${url}article/del?id=${val}`)
}
export  function login(val){
    return axios.post(`${url}user/login`,qs.stringify(val))
}
export  function updata(val){
    return axios.post(`${url}article/updata`,qs.stringify(val))
}

export  function addWz(val){
    return axios.post(`${url}article/add`,qs.stringify(val))
}

export  function addcomment(val){
    return axios.post(`${url}comment/add`,qs.stringify(val))
}

export  function browseone(val){
    return axios.post(`${url}article/browseone`,qs.stringify(val))
}

export  function resg(val){
    return axios.post(`${url}user/regs`,qs.stringify(val))
}
























