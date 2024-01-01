import React from "react";
import Portfolioitem from "./Portfolioitem";
import ab from "../assets/abstract1.jpg";
import aj from "../assets/abstract.jpg";
import ak from "../assets/abstract2.jpg";
import al from "../assets/abstract3.jpg";
import ad from "../assets/abstract4.jpg";
import ar from "../assets/abstract5.jpg";
import ae from "../assets/abstract6.jpg";
import as from "../assets/abstract1.jpg";
import avc from "../assets/abstract1.jpg";
import aop from "../assets/abstract1.jpg";

export default function Portfolios(){


 const listofdata=[{name:"abdelilah zaidane"},{name:"amin imad"},{name:"ahmed ossma"},{name:"khalid othman"},{name:"dan man"}
    ,{name:"anas zaidane"},{name:"ahmed zaidane"}];

    return <div style={{display:"flex",margin:"0 auto", width:"800px",flexWrap:"wrap",gap:"20px"}}> 

<Portfolioitem name={"abdelilah zaidane"} image={ab}/>
<Portfolioitem name={"amin imad"} image={aj}/>
<Portfolioitem name={"ahmed ossma"} image={ak}/>
<Portfolioitem name={"khalid othman"} image={al}/>
<Portfolioitem name={"dan man"} image={ad}/>
<Portfolioitem name={"anas zaidane"} image={ar}/>
<Portfolioitem name={"ahmed zaidane"} image={ae}/>


    </div>
}

