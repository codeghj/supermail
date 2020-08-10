import axios from 'axios'
export function request(config){
//  const instance=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//  })
//  return instance(config)
return new Promise((resolve,reject)=>{
   const instance=axios.create({
          baseURL:'http://123.207.32.32:8000',
          timeout:5000
       })
      //  请求拦截(记得return)
      // instance.interceptors.request.use(config=>{
      //    console.log(config)
      //    return config
      // },err=>{

      // })
      // // 响应拦截
      // instance.interceptors.response.use(res=>{
      //     console.log(res)
      //     return res
      // },err=>{

      // })
       instance(config).then(res=>{
          resolve(res)
       })
})
}