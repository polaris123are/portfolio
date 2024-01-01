import React from "react";
import Experience from "./Experience";

export default function Education(){
    return (<div style={{color:"#666666",padding:"2rem"}}>
        <div style={{height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white"}}>
<div><h2 >My Education</h2></div>
<div><p>My Education throught out the years </p></div>

</div>
        <Experience post={"EMSI"} time={"full time"} entreprise={"EMSI Marrackech"} ville={"marrackech"} date={"05/12/2022"} />
        <Experience post={"Bts Reseux informatique"} time={"full time"} entreprise={"MohamedV"} ville={"benimellal"} date={"05/12/2021"}/>
        <Experience post={"Bacalaureat"} time={"full time"} entreprise={"Med Port"} ville={"MohamedV"} date={"05/12/2020"}/>
       
        </div>)
}