import React from "react";
import Experience from "./Experience";
import Certificate from "./Certificate";

export default function Certificates(){
    return (<div style={{color:"#666666",padding:"2rem"}}>
        <div style={{height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white"}}>
<div><h2 >Certificates</h2></div>
<div><p>Technologies i ve been working recently </p>
</div>
</div>
<div style={{display:"flex",justifyContent:"center",gap:50,flexWrap:"wrap"}}>
<Certificate/>
<Certificate/>
<Certificate/>
<Certificate/>
<Certificate/>
<Certificate/>
</div>

        
        </div>)
}