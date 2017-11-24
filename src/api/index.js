import axios from 'axios'
export const RESULT_OK = 0
export function reqFirstPage() {//返回的是promise对象
  return axios.get('/api1/petFirstPage')
}
export function reqCategory() {//返回的是promise对象
  return axios.get('/api1/category')
}
export function reqShopCart() {//返回的是promise对象
  return axios.get('/api1/shopCart')
}
export function reqMine() {//返回的是promise对象
  return axios.get('/api1/mine')
}
