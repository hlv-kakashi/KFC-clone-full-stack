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
// import {useSelector} from "react-redux"

const MainFixPartOfNavbar = styled.div`
    ${'' /* font-family:"Helvetica Neue", "sans-serif"; */}
${'' /* body{
  margin-top:200px ;
} */}
.firstDiv{
    font-size:16px;
    position:fixed;
    z-index:9;
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
  z-index:10;
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
`

export const FixedNavbar = () => {

  return (

    <div>
      <MainFixPartOfNavbar>
        <img className="redLineCss" src={redLine} alt="" />
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
              <div className="StartButton" ><Link to={"/startorder"} style={{ color: "white", textDecoration: "none" }} >Start Order</Link></div>
              <div>
                <Link to={"/signin"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={signin} alt="" /></Link>
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
      </MainFixPartOfNavbar>
    </div>
  );
};









// import { FaBeer } from 'react-icons/fa';

// class Question extends React.Component {
//     render() {
//         return <h3> Lets go for a <FaBeer />? </h3>
//     }
// }