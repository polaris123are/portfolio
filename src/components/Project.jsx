import React from "react";
import aa from "../assets/abstract.jpg"
import hub from "../assets/hub.png"
export default function Project({title,image}){
    return (<div className="sh" style={{width:"250px",color:"white", backgroundColor:"#363636",borderRadius:"10px"}}>
        
        <img style={{borderRadius:"10px 10px 0 0"}} src={image} width={"250px"} height={"150px"}/>
        <div style={{padding:"0.5rem"}}>
        <div><h3>{title}</h3></div>
        <div > <p style={{fontSize:"12px",color:"#666666",margin:5}}>  dipisicing elit. Labore omnis eligendi debadipisicing elit. Labore omnis eligendi debitis perspiciatis qui temporibus odio iure vel commodi dolorem. Iure cumque, repudiandae voluptate assumenda praesentium animi ipsum vitae? Possimus!</p></div>
        <div style={{display:"flex",gap:5,justifyContent:"flex-end",padding:"0.5rem"}}>
        <img style={{fontSize:"13px"}} width={"15px"} src={hub}/>
        <div  style={{fontSize:"10px",}}><a style={{color:"white"}} href={"#"}>view code</a></div>
        </div>
        </div>
    </div>)
}