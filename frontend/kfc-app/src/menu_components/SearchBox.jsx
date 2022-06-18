import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./item.module.css";

const SearchBox = () => {
const [searchval,setSearchval]= useState("");
const navigate= useNavigate();
  return (
    <div className={styles.searchbox} >
     
       <input type="text" 
       value={searchval} 
       placeholder="Search Our Menu"
       onChange={(e)=>setSearchval(e.target.value)}
       onKeyUp={(e)=>{
        if(e.code=='Enter'){
            localStorage.setItem("search",searchval);
            navigate("/search")
        }
        
       }}
       />

    </div>
  )
}

export default SearchBox