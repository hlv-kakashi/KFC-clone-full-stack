import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import Bottom from '../cart_components/Bottom';
import Item from '../menu_components/Item';
import styles from "./Menu.module.css";


const Search = () => {
const [search,setSearch]= useState([]);
let val= localStorage.getItem("search");
useEffect(()=>{
    axios.get(`https://kfcapi.herokuapp.com/api/searchapi/item/?search=${val}`)
    .then(({data})=>{
        setSearch(data)
    })
},[])


  return (
    <div className={styles.fsearchbox} >
        <h1>{search.length} RESULTS</h1>
        <h2>We found {search.length} "{val}"</h2>
        <div className={styles.innersearch} >
          {search.length?
          search.map((el,index)=>{
          return <Item key={index} {...el}/>
          }):<h1>Sorry No Result found</h1>}
        </div>
        <Bottom/>
    </div>
  )
}

export default Search