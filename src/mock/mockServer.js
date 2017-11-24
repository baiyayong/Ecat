/**
 * Created by Administrator on 2017/11/24 0024.
 */
import Mock from 'mockjs'
import data from './data.json'
//映射几个接口
Mock.mock('/api1/petFirstPage',{
  code:0,
  data:data.firstPage.petFirstPage
})
Mock.mock('/api1/category',{
  code:0,
  data:data.cateGory
})
Mock.mock('/api1/shopCart',{
  code:0,
  data:data.shopCart
})
Mock.mock('/api1/mine',{
  code:0,
  data:data.mine
})

