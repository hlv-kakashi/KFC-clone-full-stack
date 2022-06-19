
import { addstayhome } from '../redux/action';
import { getdata } from "../utils/getdata"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';
const StayHome = () => {
  const stayhome= useSelector((state)=>state.stayhome);
  const dispatch= useDispatch();
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getdata("https://kfcapi.herokuapp.com/api/product/menu?type=stayhome");
         dispatch(addstayhome(payload));
     }

  return (
  <div id="stayhome">
    <h1>STAY HOME SPECIALS</h1>
   <div className={styles.itembox} >
    {stayhome.map((el)=>{
      return <Item {...el} key={el._id}  />
    })}
   </div>
  </div>
  )
}

export default StayHome