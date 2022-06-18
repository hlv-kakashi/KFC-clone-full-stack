import axios from "axios"



export const getdata= async (url)=>{

let res=await axios.get(url)
let {data}= await res;

return data;

} 