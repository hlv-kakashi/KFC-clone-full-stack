import { Link } from "react-router-dom"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBeer } from 'react-icons/fa';
import mainLogo from "../../assets/svg/mainLogo.svg"
import findKFC from "../../assets/svg/findKFC.svg"
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
      
}
p {
      margin: 0;
      font-size: 0.89rem;
      ${'' /* line-height: 27px; */}
      font-weight:700;
      ${'' /* letter-spacing: 2px; */}
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
              <Link to={"#"}><p>Find A KFC </p> <img height={"10rem"} style={{padding:"0px 5px"}} src={findKFC} alt=""/></Link>
            </li>
            <li className='rightPartTopNav'>
              <Link to={"#"}><img height={"10rem"} style={{padding:"0px 5px"}} src={findKFC} alt=""/></Link>
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