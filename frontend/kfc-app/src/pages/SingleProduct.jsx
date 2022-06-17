import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import SingleItem from '../menu_components/SingleItem';


const SingleProduct = () => {
    const {id}= useParams();
    const [single,setsingle]= useState([]);
    useEffect(()=>{
      axios.get(`https://kfc-aman.herokuapp.com/menu/${id}`)
      .then(({data})=>{
        setsingle(data)
      })
    },[])
    
  return (
    <div>
       {single.map((el,index)=>{
        return <SingleItem key={index} {...el}/>
       })}

    </div>
  )
}

export default SingleProduct