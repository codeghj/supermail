import {request}from './request'

export function getfenlei(){
    return request({
        url:'http://152.136.185.210:8000/api/z8/category'
    })
}
export function getsubcategory(maitKey){
    return request({
        url:'http://152.136.185.210:8000/api/z8/subcategory',
        params:{
            maitKey
        }
    })
}
export function getsubcategorydetails(miniWallkey,type){
    return request({
        url:'http://152.136.185.210:8000/api/z8/subcategory/detail',
        params:{
            miniWallkey,
            type
        }

    })
}