import React from "react";
import Input from "antd/es/input/Input";
import { FcSearch } from "react-icons/fc";
import Portfolios from "./Portfolios";
export default function Allportfolios(){
    return <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}> 
<div style={{display:"flex",padding:"2rem"}}>
<div style={{width:"300px"}}><Input placeholder="Search"/></div>

<FcSearch size={40}/>
</div>

<Portfolios/>



    </div>
}