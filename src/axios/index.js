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

























