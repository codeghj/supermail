import {request}from './request'

export function getfenlei(){
    return request({
        url:'http://152.136.185.210:8000/api/w6/category'
    })
}
export function getsubcategory(maitKey){
    return request({
        url:'http://152.136.185.210:8000/api/w6/subcategory',
        params:{
            maitKey
        }
    })
}
export function getsubcategorydetails(miniWallkey,type){
    return request({
        url:'http://152.136.185.210:8000/api/w6/subcategory/detail',
        params:{
            miniWallkey,
            type
        }

    })
}