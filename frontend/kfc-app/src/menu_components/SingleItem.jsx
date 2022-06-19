import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcart, addcartcount } from '../redux/action'
import styles from "./item.module.css"
import Reccom from './Reccom'
import Beverages from "./Beverages"
import { useNavigate } from 'react-router-dom'

const SingleItem = ({_id,image,price,title,desc}) => {
const dispatch = useDispatch();
const [count,setCount]= useState(0)
const navigate= useNavigate()

  return (
    <div className={styles.singleupperbox} >

    <div className={styles.mainsinglebox} >
      <img src={image} alt="food" />
      <h2>{title}</h2>
      <p className={styles.singledesc} >{desc}</p>
      <p>Calories {Math.round(Math.random()*(2000-1000)+1000)}</p>
      <h2>{price}</h2>
       
        <div className={styles.cartbutton}>
          <h3> {!count?(<p className={styles.addto}
            onClick={ ()=>{
            setCount(count+1)
            const el={
                id:_id,image,price,title,desc,qty:count+1
            }
            axios.post("https://kfcapi.herokuapp.com/api/productcart/cart",el)
            .then(()=>dispatch(addcart(el)))
            
            }}> Add to cart</p>):(<div>

              
            <button
            className={styles.minus}
            onClick={()=>{setCount(count-1)
             const el={
                id:_id,image,price,title,desc,qty:count-1
            }
            axios.put(`https://kfcapi.herokuapp.com/api/productcart/cart/${_id}`,el)
            .then(()=>{
              dispatch(addcartcount(el));
            })
            } }>&#8211;</button>

            <span>{count}</span>


            <button 
            className={styles.plus}
            onClick={()=>{setCount(count+1)
            const el={
                id:_id,image,price,title,desc,qty:count+1
            }
            axios.put(`https://kfcapi.herokuapp.com/api/productcart/cart/${_id}`,el)
            .then(()=>{
              dispatch(addcartcount(el));
            })
            }} >&#43;</button>


           </div>)} </h3>
           <img 
          style={{cursor:"pointer"}}
          onClick={()=>{
            navigate("/cart")
          }} src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"/>
        </div>
        <h1 className={styles.pepsi}>You can enjoy this delicious dish with </h1>
        <Beverages/>
    </div>
    <div>
      <Reccom/>
    </div>     

    </div>
  )
}

export default SingleItem