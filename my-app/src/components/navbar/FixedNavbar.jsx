import { Link } from "react-router-dom"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBeer } from 'react-icons/fa';
import mainLogo from "../../assets/svg/mainLogo.svg"
import findKFC from "../../assets/svg/findKFC.svg"
import signin from "../../assets/svg/signin.svg"
import cart from "../../assets/svg/cart.svg"
// import {useSelector} from "react-redux"

const MainFixPartOfNavbar = styled.div`
font-size:16px,
font-family:"Helvetica Neue", "sans-serif",
width:100vw,

.firstDiv{
    width:100vw;
    margin:auto;
    background-color:white;
}
.firstSubDiv{
}
Link{
    text-decoration:none;
    cursor:pointer;
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
      margin: 1rem 5rem;
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
p {
      margin: 0;
      font-size: 0.89rem;
      ${'' /* line-height: 27px; */}
      font-weight:700;
      ${'' /* letter-spacing: 2px; */}
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
`

export const FixedNavbar = () => {

  return (
   
    <div>
      <MainFixPartOfNavbar>
        <div className="firstDiv">
          <ul className="firstSubDiv">
            <li className='leftPartTopNav'>
              <Link to={"/"}><img src={mainLogo} className='logoImage' alt="" /></Link>
              <Link to={"#"}><p>Menu</p></Link>
              <Link to={"#"}><p>Careers</p></Link>
              <Link to={"#"}><p>About</p></Link>
              <Link to={"#"}><p>Find A KFC </p> <img height={"10rem"} style={{padding:"0px 5px", cursor:"pointer"}} src={findKFC} alt=""/></Link>
            </li>
            <li className='rightPartTopNav'>
              <button className="StartButton" style={{ }}>Start Order</button>
              <div>
                <Link to={"#"}><img height={"30rem"} style={{padding:"0.3vw 1vw"}} src={signin} alt=""/></Link>
                <Link to={"#"}><img height={"30rem"} style={{padding:"0.3vw 1vw"}} src={cart} alt=""/></Link>
              </div>
            </li>
          </ul>
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