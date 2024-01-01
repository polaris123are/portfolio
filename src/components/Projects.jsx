import React from "react";
import Project from "./Project";
import ad from "../assets/abstract4.jpg";
import ar from "../assets/abstract5.jpg";
import ae from "../assets/abstract6.jpg";
export default function Projects(){
    return (<div>
    <div style={{height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white"}}>
<div><h2 >My Tech Stack</h2></div>
<div><p>Technologies i ve been working recently </p></div>

</div>

    <div style={{display:"flex",justifyContent:"center",gap:50,flexWrap:"wrap"}}>

       <Project title={"project 1"} image={ad}/>
       <Project title={"project 2"} image={ar}/>
       <Project title={"project 3"} image={ae}/>
    
    </div>
    </div>)
}