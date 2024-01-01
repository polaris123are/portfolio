import React from "react";
import Experience from "./Experience";

export default function WorkExperience(){
    return (<div style={{color:"#666666",padding:"2rem"}}>
        <div style={{height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white"}}>
<div><h2 >My Work Experience</h2></div>
<div><p>Technologies i ve been working recently </p></div>

</div>
<Experience post={"jonior delopper"} time={"full time"} entreprise={"power fleet"} ville={"marrackech"} date={"05/12/2022"} />
        <Experience post={"java delopper"} time={"full time"} entreprise={"Mic consulting"} ville={"marrackech"} date={"05/12/2021"}/>
        <Experience post={"network technicien"} time={"full time"} entreprise={"Med Port"} ville={"tanger"} date={"05/12/2020"}/>
        </div>)
}