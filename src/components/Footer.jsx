import React from "react";
import git from "../assets/hub.png"
import lin from "../assets/linkedin.png"
import x from "../assets/twitter.png"
export default function Footer(){
    return (<div style={{margin:"4rem",color:"#666666",fontSize:"12px",padding:"2rem"}}>
        <div style={{display:"flex",gap:30,justifyContent:"flex-end"}}>
        <p>06363521452</p>
        <p>abdelilahzdn123@gmail.com</p>
        <div style={{display:"flex",gap:"5px"}}>
        <img width={"15px"} src={git}/>
        <img src={lin} width={"15px"} />
        <img src={x} width={"15px"} />
        </div>
        
        </div>
        
    </div>)
}