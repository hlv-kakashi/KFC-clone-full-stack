import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./item.module.css"



const Reccom = () => {
    let [recom,setrecom]= useState([]);
    useEffect(()=>{
      axios.get("https://kfcapi.herokuapp.com/api/searchapi/item/?search=classic")
      .then(({data})=>{
        setrecom(data);
      })
    },[])

  return (
    <div>
      <h2 className={styles.reccomtitle} >Reccomended Meals</h2> 
     {recom.map((el,index)=>{
      return <div key={index} className={styles.recombox} >
              <div><img src={el.image} alt="" /></div>
               <div>
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
                <h3>{el.price}</h3>
              </div>
            </div>
       
     })}
       

    </div>
  )
}

export default Reccom