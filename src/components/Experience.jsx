import React from "react";

export default function Experience({post,time,entreprise,ville,date}){
    return (<div style={{margin:"0",color:"#666666",fontSize:"12px",padding:"1rem",borderBottom:"solid 0.3px white"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}><p style={{fontSize:"17px",color:"#FAA916"}}>{post} </p>
        <span style={{backgroundColor:"#D7FFE0",borderRadius:"20px",color:"#018C0F",fontSize:"10px",padding:"0.5rem"}}>{time}</span>
        </div>
        

        <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0 10px 0"}}><div style={{display:"flex",gap:20}}><p style={{color:"#A7A7A7"}}>{entreprise}</p>
        <p style={{color:"#A7A7A7"}}>{ville}</p></div><p style={{color:"#A7A7A7"}}>{date}</p></div>
        
        
        
        </div>)
}