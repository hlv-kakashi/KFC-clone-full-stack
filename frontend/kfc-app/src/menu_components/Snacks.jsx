
import { addsnacks } from '../redux/action';
import { getdata } from "../utils/getdata"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';
const Snacks = () => {
    const dispatch = useDispatch();
    const snacks= useSelector((state)=>state.snacks);
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getdata("https://kfcapi.herokuapp.com/api/product/menu?type=snacks");
         dispatch(addsnacks(payload));
     }

  return (
  <div id="snacks">
    <h1>SNACKS</h1>
   <div className={styles.itembox} >
    {snacks.map((el)=>{
      return <Item {...el} key={el._id}  />
    })}
   </div>
  </div>
  )
}

export default Snacks