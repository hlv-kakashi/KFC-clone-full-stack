
import { addrolls } from '../redux/action';
import { getdata } from "../utils/getdata"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./item.module.css"
import Item from './Item';

const Rolls = () => {
    const dispatch = useDispatch();
    const rolls= useSelector((state)=>state.rolls)
    useEffect(()=>{
        fetchData();
    },[])
    
     const fetchData= async()=>{
        let payload= await getdata("https://kfcapi.herokuapp.com/api/product/menu?type=rolls");
         dispatch(addrolls(payload));
     }
  return (
    <div id="rolls">
      <h1>CHICKEN ROLLS</h1>
     <div className={styles.itembox} >
      {rolls.map((el)=>{
        return <Item {...el} key={el._id}  />
      })}
     </div>
    </div>
  )
}

export default Rolls