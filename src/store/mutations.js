/**
 * Created by Administrator on 2017/11/11 0011.
 */
import {RECEIVE_FIRSTPAGE,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPCART,
  RECEIVE_MINE,
  } from './type'
export default {
   [RECEIVE_FIRSTPAGE] (state,{firstPage}){
     state.firstPage=firstPage
   },
  [RECEIVE_CATEGORY] (state,{category}){
    state.category=category
  },
  [RECEIVE_SHOPCART] (state,{shopCart}){
    state.shopCart=shopCart
  },
  [RECEIVE_MINE] (state,{mine}){
    state.mine= mine
  },
}
