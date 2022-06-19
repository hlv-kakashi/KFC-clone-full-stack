import { Link } from "react-router-dom"
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaBeer } from 'react-icons/fa';
import mainLogo from "../../assets/svg/mainLogo.svg"
import findKFC from "../../assets/svg/findKFC.svg"
import signin from "../../assets/svg/signin.svg"
import cart from "../../assets/svg/cart.svg"
import redLine from "../../assets/svg/redLine.svg"
import location from "../../assets/svg/location.svg"
import menuNav2 from "../../assets/svg/menuNav2.svg"
import KFClogo from "../../assets/svg/KFClogo.svg"
import cross from "../../assets/svg/cross.svg"
import menuarrowsmall from "../../assets/svg/menuarrowsmall.svg"
import menu1 from "../../assets/png/menu1.png"
import menu2 from "../../assets/png/menu2.png"
import menu3 from "../../assets/png/menu3.png"
import menu4 from "../../assets/png/menu4.png"
import downArrow from "../../assets/svg/downArrow.svg"
import mainPick from "../../assets/svg/mainPick.svg"
import { useState } from "react"
const MainFixPartOfNavbar = styled.div`
    ${'' /* font-family:"Helvetica Neue", "sans-serif"; */}
    text-align: center;
.firstDiv{
    font-size:16px;
    position:fixed;
    z-index:10000;
    width:100vw;
    margin:auto;
    background-color:white;
}
.redLineCss{
  height:1.2rem;
  position:fixed;
  display:flex;
  float:left;
  margin:0rem 8.6rem;
  top:0;
  z-index:100001;
  visibility:visible;
}
.firstSubDiv{

}
Link{
    text-decoration:none;
    cursor:pointer;
}
Link:hover{
  text-decoration: underline;
}
.rightPartTopNav{
    display:flex;
    float:right;
    padding-right: 1vw;
}
.leftPartTopNav{
    display:flex;
    float:left;
    padding-right: 4vw;
    padding-left:0px;
    margin-left:0px;
}
.logoImage{
    height: 1.5rem;
}
.rightPartTopNav .leftPartTopNav{
    font-size:14px;
}
ul {
      margin: 2rem 5rem 1.3rem 5rem;
      list-style: none;
      display: flex;
      color:"black";
      justify-Content:space-between;
      gap:5rem;
}
li > *{
      display: flex;
      align-items: center;
      text-decoration: none;
      color: black;
      padding: 0rem 1.12rem;
      cursor:pointer;
}
li > *:hover{
  text-decoration: underline;
}
p {
      margin: 0;
      font-size: 0.89rem;
      font-weight:700;
}
.StartButton{
  margin-right:1.9vw;
  text-align:center;
  padding:0px 43px;
  font-weight:700;
  font-size:0.95rem;
  background:#e4002b;
  color:white;
  border:none;
  border-radius:30px;
  opacity:1;
  cursor:pointer;
}
.StartButton:hover{
  background:#c12c48;
}
${'' /* 2nd navbar for finding location */}
.secondFindNav{
  background:rgb(32,33,36);
  ${'' /* background:blue; */}
  padding:2px;
}
.secondFindNav1{
  color:white;
  font-size:0.95rem;
  text-decoration:none;
}
.toggleNavbar{
  visibility:hidden;
}


@media all and (min-width:0px) and (max-width:1100px){
.firstDiv, .redLineCss{
  visibility:hidden;
}
.toggleNavbar{
  display:grid;
  grid-template-rows:1fr 0.3fr;
  visibility:visible;
  position:fixed;
  z-index:100000000;
  background:white;
  width:100%;
  top:0;
  ${'' /* margin-top:0; */}
}
.toggleNavbar1{
  display:flex;
  justify-Content:space-between;
  padding:5px 20px;
  background:white;
  height:fit-content;
}
}
`
const SmallNavMenuForNavbar = styled.div`
.popupMenuOfNav{
  position:fixed;
  z-index:1000000000;
  background:#ffff;
  width:100vw;
  height:100vh;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  overflow:scroll;
}
.MenuPartDiv{
  background-color: #f8f7f5; 
  color: #000000; 
  height: 115px;
  width:95vw;
  display:flex;
  justify-content:space-between;
  margin:auto;
  align-items:center;
  font-family: Arial;
  font-size: 13px;
  font-weight: 900;
  margin:5vw;
}
.MenuPartImg{
  position:absolute;
  float:right;
  right:10px;
  padding-bottom:25px;
  
}
.MenuPartDivImg{
  background-color: #f8f7f5; 
  color: #000000; 
  width:100vw;
  margin:auto;
  align-items:center;
  font-family: Arial;
  font-size: 13px;
  font-weight: 900;
  display:grid;
}
.mainPickImage{
  height:50vh;
  margin:auto;
}
.StartButton1{
  width:150px;
  text-align:center;
  padding:10px;
  font-weight:700;
  font-size:1rem;
  background:#e4002b;
  color:white;
  border:none;
  border-radius:30px;
  opacity:1;
  cursor:pointer;
  margin:auto;
}
.StartButton1:hover{
  background:#c12c48;
}
.SmallMediaLinks > *{
      text-decoration: none;
      color: black;
      cursor:pointer;
}
.SmallMediaLinks > *:hover{
  text-decoration: underline;
}
`
export const FixedNavbar = () => {

  const [visibleMenu, setVisibleMenu] = useState(false)
 
  const handleMenuOptions = () => {
    setVisibleMenu(true)
  }
  const handleMenuOptionsClose = () => {
    setVisibleMenu(false)
  }

  return (

    <div>
      <MainFixPartOfNavbar>
        <div className="defaultNavbar">
          <img  className="redLineCss" src={redLine} alt="" />
          <div className="firstDiv">
            <ul className="firstSubDiv">
              <li className='leftPartTopNav'>
                <Link to={"/"}><img src={mainLogo} className='logoImage' alt="" /></Link>
                <Link to={"/menu"}><p>Menu</p></Link>
                <Link to={"/careers"}><p>Careers</p></Link>
                <Link to={"/about"}><p>About</p></Link>
                <Link to={"/find"}><p>Find A KFC </p> <img height={"10rem"} style={{ padding: "0px 5px", cursor: "pointer" }} src={findKFC} alt="" /></Link>
              </li>
              <li className='rightPartTopNav'>
                <div className="StartButton" ><Link to={"/menu"} style={{ color: "white", textDecoration: "none" }} >Start Order</Link></div>
                <div>
                  <Link to={"/api/Auth/login"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={signin} alt="" /></Link>
                  <Link to={"/cart"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={cart} alt="" /></Link>
                </div>
              </li>
            </ul>
            <div className="secondFindNav">
              <Link to={"/find"} className="secondFindNav1" style={{ fontWeight: "500", alignItems: "center" }}>
                <img height={"20rem"} style={{ padding: "2px 10px 0px 0px", cursor: "pointer", flexDirection: "row", alignItems: "center" }} src={location} alt="" />
                Start an Order for Pickup or Delivery
              </Link>
            </div>
          </div>
          <div className="toggleNavbar">
            <div className="toggleNavbar1">
              <Link to={"#"}><img height={"15rem"} style={{ padding: "0.3vw 1vw" }} src={menuNav2} onClick={handleMenuOptions} alt="" /></Link>
              <Link to={"/"}><img height={"21rem"} style={{ padding: "0.3vw 1vw" }} src={KFClogo} alt="" /></Link>
              <Link to={"/cart"}><img height={"20rem"} style={{ padding: "0.3vw 1vw" }} src={cart} alt="" /></Link>
            </div>
            <div className="secondFindNav">
              <Link to={"/find"} className="secondFindNav1" style={{ fontWeight: "500", alignItems: "center" }}>
                <img height={"20rem"} style={{ padding: "2px 10px 0px 0px", cursor: "pointer", flexDirection: "row", alignItems: "center" }} src={location} alt="" />
                Start an Order for Pickup or Delivery
              </Link>
            </div>
          </div>
        </div>
      </MainFixPartOfNavbar>
      
      {visibleMenu && <div className="popupMenuOfNavVisibility" >      
        <SmallNavMenuForNavbar>
          <div className="popupMenuOfNav">
            <div>
            <img height={"25rem"} style={{ padding: "1.5vw 2vw", float:"left" }} onClick={()=>handleMenuOptionsClose()} src={cross} alt="" />
            </div>
            <div>
              <p style={{ letterSpacing: "1px", fontFamily: "fantasy", fontSize: "32px", textAlign:"left", padding:"20px 20px 10px 5vw" }}>LET'S GET COOKIN'</p>
              <h4 style={{textAlign:"left", paddingLeft:"5vw"}}><Link to={"/api/Auth/login"}>Sign In / Sign Up </Link><img height={"7rem"} style={{alignItems:"center"}} src={menuarrowsmall} alt="" /></h4>
              <div className="MenuPartDiv ">
                <p className="SmallMediaLinks" style={{padding:"20px"}}><Link  onClick={()=>handleMenuOptionsClose()}  to={"/menu"} >MENU</Link></p>
                <img className="MenuPartImg" src={menu1} alt=""/>
              </div>
              <div className="MenuPartDiv ">
                <p className="SmallMediaLinks" style={{padding:"20px"}}><Link  onClick={()=>handleMenuOptionsClose()}  to={"/careers"} >CAREERS</Link></p>
                <img className="MenuPartImg" src={menu2} alt=""/>
              </div>
              <div className="MenuPartDiv ">
                <p className="SmallMediaLinks" style={{padding:"20px"}}><Link  onClick={()=>handleMenuOptionsClose()}  to={"/about"} >ABOUT</Link></p>
                <img className="MenuPartImg" src={menu3} alt=""/>
              </div>
              <div className="MenuPartDiv ">
                <p className="SmallMediaLinks" style={{padding:"20px"}}><Link  onClick={()=>handleMenuOptionsClose()}  to={"/find"} >FIND A KFC</Link><img height={"10rem"} style={{ padding: "0px 5px", cursor: "pointer" }} src={findKFC} alt="" /></p>
                <img className="MenuPartImg" src={menu4} alt=""/>
              </div>
              <div className="MenuPartDiv " style={{height:"fit-content", display:"flex"}}>
                <p className="SmallMediaLinks" style={{padding:"20px"}}><Link  onClick={()=>handleMenuOptionsClose()}  to={"/more"} >MORE</Link><img height={"8rem"} style={{ padding: "0px 5px", cursor: "pointer" }} src={downArrow} alt="" /></p>
              </div>
              <div className="MenuPartDivImg">
                <img style={{height:"55px", margin:"auto"}} src={redLine} alt="" /><br/><br/>
                <p style={{ letterSpacing: "2px", fontFamily: "fantasy", fontWeight: "100", fontSize: "30px", width:"80%", margin:"auto" }}>UNLOCK MORE FINGER LICKIN' GOOD BENEFITS</p>
                <p style={{ letterSpacing: "1px", fontFamily: "sans-serif,Roboto", fontWeight: "500", fontSize: "12px" }}>Create an account to get access to exclusive deals and faster checkout.</p><br/><br/>
                <div className="StartButton1" ><Link  onClick={()=>handleMenuOptionsClose()}  to={"/signin"} style={{ color: "white", textDecoration: "none" }} >Sign me up!</Link></div><br/><br/>
                <img className="mainPickImage" src={mainPick} alt=""/>
              </div>
            </div>
          </div>
        </SmallNavMenuForNavbar>
      </div>
      }
    </div>
  );
};