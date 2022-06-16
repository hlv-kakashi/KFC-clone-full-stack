import smoothScrollTo from "../utils/smoothScrollTo"
import styles from "./item.module.css"

export const Sidebar= ()=>{



    return (
        <div className={styles.sidebox}>
          <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"></img>
          <h1>KFC MENU</h1>
          <h3 onClick={()=>{
            smoothScrollTo("chicken")
          }} >CHICKEN BUCKETS</h3>
          <h3 onClick={()=>{
            smoothScrollTo("launch")
          }} >NEW LAUNCH</h3>
          <h3 onClick={()=>{
            smoothScrollTo("rolls")
          }} >CHICKEN ROLLS</h3>
          <h3 onClick={()=>{
            smoothScrollTo("biryani")
          }} >BIRYANI BUCKETS</h3>
          <h3 onClick={()=>{
            smoothScrollTo("box")
          }} >BOX MEALS</h3>
          <h3 onClick={()=>{
            smoothScrollTo("burger")
          }} >BURGERS</h3>
          <h3 onClick={()=>{
            smoothScrollTo("stayhome")
          }} >STAY HOME SPECIALS</h3>
          <h3 onClick={()=>{
            smoothScrollTo("snacks")
          }} >SNACKS</h3>
          <h3 onClick={()=>{
            smoothScrollTo("beverage")
          }} >BEVERAGES</h3>
        </div>
    )
}