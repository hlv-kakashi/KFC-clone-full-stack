import React, { useEffect } from 'react'
import footkfc from "../assets/svg/footkfc.svg"
const Temp = () => {

  // useEffect(()=>{
  // fetch("https://maps.googleapis.com/maps/api/js?libraries=Pune&key=AIzaSyCTGSoP60TH4ikMAFd4Uw7WlleZA8LXK0A")
  //   // .then((e)=>e.json())
  //   .then((d) => (console.log(d),
  //     console.log(window.google.maps)))
  // },[])
  return <div>
    <div
    //  style={{-webkit-filter: grayscale(100%); filter: grayscale(100%);}}
     >
<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4&q=${"Delhi"}`}></iframe>
</div>
  </div>
}

export default Temp