import { ADDBEVERAGES, ADDBIRYANI, ADDBOX, ADDBURGER, ADDCART, ADDCHICKEN, ADDLAUNCH, ADDROLLS, ADDSNACKS, ADDSTAYHOME, CARTCOUNT, DELETECART, GETCART } from "./action";


const initialState={
    chicken:[],
    launch:[],
    rolls:[],
    biryani:[],
    box:[],
    burger:[],
    stayhome:[],
    snacks:[],
    beverages:[],
    cart:[]
}

export const reducer= (state=initialState,{type,payload})=>{

switch(type){
    case ADDCHICKEN:{
      return{
        ...state,chicken:payload
      }
    }
    case ADDLAUNCH:{
        return{
          ...state,launch:payload
        }
      }
      case ADDROLLS:{
        return{
          ...state,rolls:payload
        }
      }
      case ADDBIRYANI:{
        return{
          ...state,biryani:payload
        }
      }
      case ADDBOX:{
        return{
          ...state,box:payload
        }
      }
      case ADDBURGER:{
        return{
          ...state,burger:payload
        }
      }
      case ADDSTAYHOME:{
        return{
          ...state,stayhome:payload
        }
      }
      case ADDSNACKS:{
        return{
          ...state,snacks:payload
        }
      }
      case ADDBEVERAGES:{
        return{
          ...state,beverages:payload
        }
      }
      case ADDCART:{
        return{
          ...state,cart:[...state.cart,payload]
        }
      }
      case CARTCOUNT:{
        for(let i=0;i<state.cart.length;i++){
          if(state.cart[i].id===payload.id){
            state.cart[i].qty=payload.qty;
            if(state.cart[i].qty==0){
              state.cart.splice(i,1);
            }
          }
        }
        let cart=[...state.cart]
        return{
          ...state,cart:cart
        }
      }
      case GETCART:{
          return{
            ...state,cart:payload
          }
      }
      case DELETECART:{
        for(let i=0;i<state.cart.length;i++){
          if(state.cart[i].id===payload){
            state.cart.splice(i,1);
          }
        }
        let cart=[...state.cart]
          return{
            ...state,cart:cart
          }
      }
    default :return state;
}
}