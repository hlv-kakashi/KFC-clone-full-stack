import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import instagram from "../../assets/svg/instagram.svg"
import facebook from "../../assets/svg/facebook.svg"
import twitter from "../../assets/svg/twitter.svg"
import footkfc from "../../assets/svg/footkfc.svg"

const FooterStyled = styled.div`
 text-align: center;
.footermaindiv{
    
    background-color: rgb(32, 33, 36);
    width:100vw;
    height:fit-Content;
    bottom:0;
    padding:2% 0% 5% 0%;
}
.container44 {
    width:85vw;
    display:grid;
    text-align: justify;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    margin:auto;
}

p {
    width: 100%;
    font-size: 12px;
}

.boxes44 {
    display: flex;
    width:100%;
    ${'' /* grid-template-columns:"2fr 1fr" */}
    justify-Content:space-between;
    margin-top: 50px;
    ${'' /* border: 1px solid red;  */}
}

ul {
    list-style-type: none;
}

li {
    font-size: 12px;
    margin-bottom: 1rem;
}

li:hover {
    text-decoration: underline;
}

.cards44 {
    width: 100%;
}

ul>p {
    font-size: 14px;
}

.lastbox44 {
    display: flex;
    /* border: 1px solid green; */
    height:40px;
    margin-top: 60px;
}

.section44 {
    display: flex;
    /* border: 1px solid red; */
    width: 75%;
    margin-right: 3rem;
}

.section44>div:hover {
    text-decoration: underline;
}

.section44>div {
    width: 100%;
    ${'' /* margin-right: ; */}
    ${'' /* border-right: 1px solid gray; */}
}
.section44>:nth-child(5){
    border-right: none;
}
.lastLinefoot{
    visibility:visible;
}
.lastLinefootsvg{
    visibility:hidden;
}
@media all and (min-width:0px) and (max-width:1024px) {
    .footermaindiv{
        width:100vw;
        height:fit-Content;
        bottom:0;
        padding:2% 0% 0% 0%;
        margin:auto;
        ${'' /* text-align:center; */}
    }
    .container44 {
        width:90vw;
        display:block;
        text-align: center;
        margin:auto;
    }
    .boxes44{
        flex-direction: column;
    }
    .cards44{
        width: 100%;
        height: 40px;
        overflow: hidden;
        text-align: center;
        bottom:0;
        width:95%;
    }
    .cards44:nth-child(1){
       width:fit-content;
       height: 150px;
       margin:auto;
       ${'' /* margin-left:4%; */}

    }
    i{
        ${'' /* margin-right: 2px */}
    }
    .lastLinefoot{
        visibility:hidden;
    }
    .lastLinefootsvg{
        visibility:visible;
        display:flex;
        justify-Content:center;
    }
    .lastbox44 {
        display: flex;
        ${'' /* height:40px; */}
        margin-top: 0px;
    }
    li {
        font-size: 12px;
        margin-bottom: 0rem;
    }
}

`
export const Footer = () => {
    return (
        <FooterStyled>
            <div className='footermaindiv'>
                <div className="container44">
                    <p>Calorie Statement</p>
                    <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition
                        information available upon request in-store and on kfc.com.<br /> Prices, participation, and product availability
                        may vary.</p>
                    <br />
                    <p>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Sierra Mist are registered trademarks of PepsiCo, Inc.<br />
                        Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
                    <br />
                    <div className="boxes44">
                        <div className="cards44">
                            <img height={"110rem"} style={{ padding: "0px 5px", cursor: "pointer" }} src={footkfc} alt="" />
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>KFC Food</p>
                                <li>Menu</li>
                                <li>Full Nutrition Guide</li>
                                <li>Nutrition Calculator</li>
                                <li>Food Allergies & Sensitivities</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Company</p>
                                <li>About KFC</li>
                                <li>How We Make Chicken</li>
                                <li>KFC Foundation</li>
                                <li>Company Responsibility</li>
                                <li>Franchise a KFC</li>
                                <li>Resposible Disclosure</li>
                                <li>KFC Newsroom</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Career</p>
                                <li>Restaurant Careers</li>
                                <li>Corporate Careers</li>
                                <li>Culture</li>
                                <li>Growth</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Resources</p>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                                <li>KFC App</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Find a KFC</p>
                                <li>Find a KFC</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lastbox44">
                        <div className="section44">
                            <div className='lastLinefoot'>
                                <p>Privacy Policy </p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Updated 01/2022</p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Terms Of Use</p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Our Cookies & Ads</p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Do Not Sell My Personal Information</p>
                            </div>
                        </div>
                        <div className='lastLinefoot'>
                            <p>Copyright © KFC Corporation 2022 All Rights Reserved</p>
                        </div>
                        <div style={{ display: "flex" }} className='lastLinefoot'>
                            <Link to={"https://www.instagram.com/_mad___boxer_/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={instagram} alt="" /></Link>
                            <Link to={"https://www.facebook.com/people/Arshad-Khan/100004164048208/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={facebook} alt="" /></Link>
                            <Link to={"https://www.linkedin.com/in/md-arshad-khan-350206154/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={twitter} alt="" /></Link>
                        </div>
                    </div>
                    <div style={{ borderLeft: "gray" }} className='lastLinefoot'>
                        <p> Asessibility Statement</p>
                    </div>
                </div>
                <div style={{ display: "flex" }} className='lastLinefootsvg'>
                    <Link to={"https://www.instagram.com/_mad___boxer_/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={instagram} alt="" /></Link>
                    <Link to={"https://www.facebook.com/people/Arshad-Khan/100004164048208/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={facebook} alt="" /></Link>
                    <Link to={"https://www.linkedin.com/in/md-arshad-khan-350206154/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={twitter} alt="" /></Link>
                </div>
            </div>
        </FooterStyled>
    )
}

