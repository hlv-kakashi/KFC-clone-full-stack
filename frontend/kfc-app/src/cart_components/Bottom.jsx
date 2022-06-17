import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Item from "../menu_components/Item"
const Bottom = () => {
 let [recom,setrecom]= useState([]);
 useEffect(()=>{
   axios.get("https://kfc-aman.herokuapp.com/item/?search=meal")
   .then(({data})=>{
     setrecom(data);
   })
 },[])

  return (
    <>
    <h2>Top Recommended Meals</h2>
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}} >
         {recom.map((el,index)=>{
          return(
           <Item key={index+Math.random()} {...el} />
          )
         })}
        </div>
    
    </>

  )
}

export default Bottom