/**
 * Created by Administrator on 2017/11/11 0011.
 */
import {reqFirstPage,reqCategory,reqShopCart,reqMine,RESULT_OK} from '../api'
import {RECEIVE_FIRSTPAGE,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPCART,
  RECEIVE_MINE
} from './type'
export default {
  //获取主页
  getFirstPage({commit}){
    //发送ajax请求，获取FirstPage数据
    reqFirstPage().then(response =>{
      const result=response.data
      console.log(result);
      if(result.code===RESULT_OK){
        const firstPage=result.data
        //提交mutation请求
        commit(RECEIVE_FIRSTPAGE,{firstPage})
      }
    })

  },

  getCategory({commit},cd){
    //发送ajax请求，获取category数据
    reqCategory().then(response =>{
      const result=response.data
      if(result.code===RESULT_OK){
        const category=result.data
        //提交mutation请求
        commit(RECEIVE_CATEGORY,{category})
        //如果传递了回调函数，调用回调函数，通知调用者
        cd && cd()
      }
    })

  },
  //获取购物车列表
  getShopCart({commit},cd){
    //发送ajax请求，获取ratings数据
      reqShopCart().then(response =>{
      const result=response.data
      if(result.code===RESULT_OK){
        const shopCart=result.data
        //提交mutation请求
        commit(RECEIVE_SHOPCART,{shopCart})
        cd && cd()
      }
    })
  },
  getMine({commit},cd){
    //发送ajax请求，获取ratings数据
    reqMine().then(response =>{
      const result=response.data
      if(result.code===RESULT_OK){
        const mine=result.data
        //提交mutation请求
        commit(RECEIVE_MINE,{mine})
        cd && cd()
      }
    })
  },
}
