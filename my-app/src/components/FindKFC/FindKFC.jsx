import React from 'react'
import redLine from "../../assets/svg/redLine.svg"
import styled from 'styled-components'
import search from "../../assets/svg/search.svg"
import setting from "../../assets/svg/setting.svg"

const FindSearchPartStyled = styled.div`
.findMapPart{
    padding-top:150px;
    height:100vh;
    width:98vw;
    display:grid;
    grid-template-columns:1fr 1fr;

}
.findMapSearch{
    line-height:"1px"
}
.mapDisplaySearch{

}
.redLineCss{
    margin-top:0px;
    height:30px;
    width:250px;
}
.mapIframe{
    position: -webkit-sticky;
    position: sticky;
    width:50vw;
    height:100vh;

}
.inputSearchForLocation{
    width: 70%;
    border:none;
    font-size: 18px;
    text-decoration: italic;
    height:30px;
}
.inputSearchForLocationDiv{
    position:sticky;
    border-bottom:2px solid red;
    flex-direction:row;
    align-items:center;
    width:60%;
    margin:auto;
    text-decoration:italic;
}
.useLocation{
    color:#db343b;
    font-size:18px;
    font-weight:500;
    cursor:pointer;
}
.useLocation:hover{
    text-decoration:none;
}
.browseOurDirectory{
    font-size:17px;
}
.browseOurDirectory1:hover{
    text-decoration:none;
    cursor:pointer;
}
`
const FindKFC = () => {
  return (
    <FindSearchPartStyled>
        <div className='findMapPart'>
            <div className='findMapSearch'>
                <img className="redLineCss" src={redLine} alt=""/>
                <p style={{letterSpacing:"1px", fontFamily:"fantasy", fontWeight:"100",fontSize:"32px"}}>Find a KFC Location</p>
                <p style={{letterSpacing:"1px", fontFamily:"sans-serif,Roboto", fontWeight:"600",fontSize:"15px"}}>SEARCH BY CITY AND STATE OR ZIP CODE</p>
                <div className='inputSearchForLocationDiv'>
                    <input className='inputSearchForLocation' type="text" placeholder="Louisville, KY" />
                    <img height={"25rem"} style={{ padding: "0vw 1vw", cursor:"pointer" }} src={search} alt="" />
                    <img height={"25rem"} style={{ padding: "0vw 1vw", cursor:"pointer" }} src={setting} alt="" />
                </div>
                <div> <br/>
                        <u className="useLocation">USE MY LOCATION</u>
                    </div>

                    <div className="browseOurDirectory"> <br/> <br/>
                        Use our locator to find a location near you or <u className="browseOurDirectory1">browse our directory. </u> 
                    </div>
            </div>
            <div className='mapDisplaySearch'>
                <img className='mapIframe' src='https://bostonraremaps.com/wp-content/uploads/2015/08/2058a-roessler-united-states-1868.jpg' alt='' />
            </div>
        </div>
    </FindSearchPartStyled>
  )
}

export default FindKFC