import React from "react";
import Logo from "./Logo.png";

const Home=()=>{
    return(
        <div className="Main">
        <h3>The Evolution of 
        <br/>Airbab's Frontend</h3>
        <h5 className="sec">@spikebrehm</h5>
       
        <img className="logo" src={Logo} alt="Logo" />
        <h5>Airbnb</h5>
        </div>
    )
 
}

export default Home