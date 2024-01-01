import React from "react";
import image from "../assets/abdelilah.png"
export default function Headerart(){
    return( <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#191919",color:"white",padding:"1rem"}}>
    <div style={{width:"400px"}} ><h1> Hi 👋,  </h1>
    <h1> My Name is  </h1>
    <h1 style={{color:"#13B0F5"}}> Abdelilah Zidane </h1>
    <h1> I build things for web </h1>
    </div>
    <img className="sh" src={image} width={"200px"} height={"200px"} alt="image" style={{borderRadius:"50%"}}/>
    </div>
    
    )
}