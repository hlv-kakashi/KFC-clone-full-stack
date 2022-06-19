
import { addbiryani } from '../redux/action';
import { getdata } from "../utils/getdata"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';

const Biryani = () => {
    const dispatch = useDispatch();
    const biryani = useSelector((state)=>state.biryani)
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getdata("https://kfcapi.herokuapp.com/api/product/menu?type=biryani");
         dispatch(addbiryani(payload));
     }


  return (
  <div id="biryani">
    <h1>BIRYANI BUCKETS</h1>
   <div className={styles.itembox} >
    {biryani.map((el)=>{
      return <Item {...el} key={el._id}  />
    })}
   </div>
  </div>
  )
}

export default Biryani