import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
.container44 {
    background-color: rgb(32, 33, 36);
    padding: 50px 250px;
    text-align: justify;
    color: white;
    font-family:Arial, Helvetica, sans-serif
}

p {
    width: 70%;
    font-size: 12px;
}

.boxes44 {
    display: flex;
    margin: auto;
    margin-top: 50px;
    /* border: 1px solid red; */
}

ul {
    list-style-type: none;
}

li {
    font-size: 12px;
    margin-bottom: 7px;
}

li:hover {
    text-decoration: underline;
}

.cards4 {
    width: 18%;
}

ul>p {
    font-size: 14px;
}

.lastbox44 {
    display: flex;
    /* border: 1px solid green; */
    height: 50px;
    margin-top: 60px;
}

.section44 {
    display: flex;
    /* border: 1px solid red; */
    width: 75%;
    margin-right: 80px;
}

.section44>div:hover {
    text-decoration: underline;
}

.section44>div {
    width: 19%;
    margin-right: 5px;
    border-right: 1px solid gray;
}
.section44>:nth-child(5){
    border-right: none;
}
@media only screen and (min-width:0px) and (max-width:1024px) {
    .boxes44{
        flex-direction: column;
    }
    .cards44{
        width: 100%;
        height: 40px;
        overflow: hidden;
        text-align: center;
    }
    .cards44:nth-child(1){
       height: 150px;
       margin-left:-60px;

    }
    i{
        margin-right: 2px
    }

    
}

`
export const Footer = () => {
    return (
        <div>
            <FooterStyled>
                <div className="container44">
                    <p>Calorie Statement</p>
                    <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition
                        information available upon request in-store and on kfc.com. Prices, participation, and product availability
                        may vary.</p>
                    <br />
                    <p>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Sierra Mist are registered trademarks of PepsiCo, Inc.
                        Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
                    <br />
                    <div className="boxes44">
                        <div className="cards44">
                            <img src="https://sage-dolphin-365e39.netlify.app/images/Screenshot%20(74).jpg" alt='' />
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
                            <div>
                                <p>Privacy Policy </p>
                            </div>
                            <div>
                                <p>Update 12/2021</p>
                            </div>
                            <div>
                                <p>Terms Of Use</p>
                            </div>
                            <div>
                                <p>Our Cookies & Ads</p>
                            </div>
                            <div>
                                <p>Do Not Sell My Personal Information</p>
                            </div>
                        </div>
                        <div>
                            <p>Copyright © KFC Corporation 2022 All Rights Reserved</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            {/* <i class="fab fa-instagram" style={{marginRight: "3px"}}></i>
                <i class="fab fa-facebook" style={{marginRight: "3px"}}></i>
                <i class="fab fa-twitter"></i> */}
                        </div>
                    </div>
                    <div style={{ borderLeft: "gray" }}>
                        <p> Asessibility Statement</p>
                    </div>
                </div>
            </FooterStyled>
        </div>
    )
}

