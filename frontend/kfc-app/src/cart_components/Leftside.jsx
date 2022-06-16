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
     let payload= await getdata("https://kfc-aman.herokuapp.com/cart");
     dispatch(getCart(payload));
    }   

  return (
    <div>
        {cart.map((el)=>{
            return <Cartproduct key={el.id} {...el}/>
        })}
    </div>
  )
}

export default Leftside