import{request} from './request'
export function detialsSwiper(iid){
    return request({
     url:'http://152.136.185.210:8000/api/z8/detail',
     params:{
         iid
     }
    })
}
export function recommend(){
    return request({
        url:'http://152.136.185.210:8000/api/z8/recommend'
    })
}
export class Goods{
    constructor(iteminfo,columns,services){
        this.title=iteminfo.title
        this.desc=iteminfo.desc
        this.newprice=iteminfo.price
        this.oldprice=iteminfo.oldPrice
        this.discount=iteminfo.discountDesc
        this.columns=columns
        this.services=services
        this.realprice=iteminfo.lowNowPrice

    }
}
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.score=shopInfo.score;
        this.goodsCount=shopInfo.cGoods;
    }
}
export class ItemParams{
    constructor(info,rule){
        this.imag=info.images? info.image[0]:''
        this.set=info.set
        this.tables=rule.tables
    }
}
export class UserComment{
    constructor(rate){
        this.content=rate.content;
        this.image=rate.images;
        this.created=rate.created;
        this.user=rate.user;
        this.style=rate.style
     


    }
}