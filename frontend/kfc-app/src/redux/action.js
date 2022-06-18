export const ADDCHICKEN= "ADDCHICKEN";
export const ADDLAUNCH= "ADDLAUNCH";
export const ADDROLLS= "ADDROLLS";
export const ADDBIRYANI= "ADDBIRYANI";
export const ADDBOX= "ADDBOX";
export const ADDBURGER= "ADDBURGER";
export const ADDSTAYHOME= "ADDSTAYHOME";
export const ADDSNACKS= "ADDSNACKS";
export const ADDBEVERAGES= "ADDBEVERAGES";
export const ADDCART= "ADDCART"
export const CARTCOUNT= "CARTCOUNT"
export const GETCART= "GETCART"
export const DELETECART="DELETECART"

export const addchicken = (payload)=>{
    return {
        type:ADDCHICKEN,
        payload
    }
}

export const addlaunch = (payload)=>{
    return {
        type:ADDLAUNCH,
        payload
    }
}

export const addrolls= (payload)=>{
    return {
        type:ADDROLLS,
        payload
    }
}

export const addbiryani= (payload)=>{
    return{
        type:ADDBIRYANI,
        payload
    }
}

export const addbox= (payload)=>{
    return {
        type:ADDBOX,
        payload
    }
}


export const addburger=(payload)=>{
    return{
        type:ADDBURGER,
        payload
    }
}

export const addstayhome=(payload)=>{
   return{
    type:ADDSTAYHOME,payload
   }
}

export const addsnacks= (payload)=>{
    return{
        type:ADDSNACKS,payload
    }
}

export const addbeverages= (payload)=>{
    return{
        type:ADDBEVERAGES,payload
    }
}

export const addcart= (payload)=>{
    return{
        type:ADDCART,payload
    }
}

export const addcartcount = (payload)=>{
    return{
       type:CARTCOUNT,payload
    }
}

export const getCart= (payload)=>{
    return{
        type:GETCART,payload
    }
}

export const deleteCart= (payload)=>{
    return{
        type:DELETECART,payload
    }
}