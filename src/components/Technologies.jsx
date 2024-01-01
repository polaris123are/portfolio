import React from "react";
import boots from "../assets/boots.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import react from "../assets/React-icon.svg.png";
import redux from "../assets/redux-icon.webp";
import vs from "../assets/vs.png";
import sass from "../assets/sass.png";
import gsap from "../assets/gsap.svg";

export default function Technologies(){
var size="50px"
var gaps=10
    return <div style={{color:"white",display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
<div style={{height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
<div><h2 >My Tech Stack</h2></div>
<div><p>Technologies i ve been working recently </p></div>

</div>

<div>
<div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:100,margin:20}}>
    <img src={boots} width={size} height={size}/>
    <img src={css} width={size} height={size}/>
    <img src={js} width={size} height={size}/>
    <img src={figma} width={size} height={size}/>
    <img src={git} width={size} height={size}/>
    <img src={html} width={size} height={size}/>
    
  
    </div>
    <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:100,margin:20}}>
    <img src={react} width={size} height={size}/>
    <img src={redux} width={size} height={size}/>
    <img src={vs} width={size} height={size}/>
    <img src={sass} width={size} height={size}/>
    <img src={gsap} width={size} height={size}/>
    <img src={boots} width={size} height={size}/>
  
</div>
</div>
    </div>
}