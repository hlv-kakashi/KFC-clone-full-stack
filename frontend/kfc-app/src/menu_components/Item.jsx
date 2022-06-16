import React, { useState } from 'react'
import styles from "./item.module.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addcart, addcartcount } from '../redux/action';

const Item = ({_id,image,price,title,desc}) => {
    const [count,setCount]= useState(0)
    const cart= useSelector((state)=>state.cart);
    const dispatch = useDispatch();
  return (
    <div className={styles.innerbox} >
      <img src={image} alt="food" />
      <div>
        <h2>{title}</h2>
        <p><span style={{fontSize:"11px",background:"red",color:"red",borderRadius:"50%"}} >12</span> Non veg</p>
        <h2>{price}</h2>       
        <p>{desc}</p>
        <div className={styles.cartbutton}
        
        >
          <h3> {!count?(<p className={styles.addto}
            onClick={ ()=>{
            setCount(count+1)
            const el={
                id:_id,image,price,title,desc,qty:count+1
            }
            axios.post("https://kfc-aman.herokuapp.com/cart",el)
            .then(()=>dispatch(addcart(el)))
            
            }}> Add to cart</p>):(<div>

              
            <button
            className={styles.minus}
            onClick={()=>{setCount(count-1)
             const el={
                id:_id,image,price,title,desc,qty:count-1
            }
            axios.put(`https://kfc-aman.herokuapp.com/cart/${_id}`,el)
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
            axios.put(`https://kfc-aman.herokuapp.com/cart/${_id}`,el)
            .then(()=>{
              dispatch(addcartcount(el));
            })
            }} >&#43;</button>


           </div>)} </h3>
          <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"/>
       </div>
      </div>
    </div>
  )
}

export default Item