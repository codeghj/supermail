import  Toast from './Toast'
const obj={}
obj.install=function(Vue){
 const toastcondurst=Vue.extend(Toast)
 const toast=new toastcondurst()
 toast.$mount(document.createElement('div'))
 document.body.appendChild(toast.$el)
 Vue.prototype.$toast=toast
}
export default obj