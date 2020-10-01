import{request} from './request'

export function homerequest(){
 return request({
     url:'/home/multidata',
 })
}
export function homegoods(type,page){
    return request({
        url:'http://152.136.185.210:8000/api/w6/home/data',
        params:{
        type,
        page
        }
    })

}