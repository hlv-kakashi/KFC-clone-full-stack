import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from "../redux/action";
import { getdata } from "../utils/getdata";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cartproduct from './Cartproduct';


const Leftside = () => {
    const dispatch = useDispatch()
    const cart= useSelector((state)=>state.cart);
    
    useEffect(()=>{
      fetchdata()
    },[cart])
  
    const fetchdata= async ()=>{
     let payload= await getdata("https://kfcapi.herokuapp.com/api/productcart/cart");
     dispatch(getCart(payload));
    }   

  return (
    <div>
        {cart.map((el,index)=>{
            return <Cartproduct key={index}  {...el} fetchData={fetchdata} />
        })}
    </div>
  )
}

export default Leftside