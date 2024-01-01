import React, { useState } from "react";
import Uploadimage from "./Uploadimage";
import { Button, Input } from 'antd';
import { Radio,DatePicker } from 'antd';
export default function AddCertificates(){

    const [certificats,setcertificats]=useState([{name:"Dev ops "}]);

    

    return (<div style={{width:"100%",height:"100vh",display:"flex",gap:30,justifyContent:"center",alignItems:"center",color:"white"}}>
        <div style={{display:"flex"}}>
        <div>
        <div><Input  placeholder="name" /></div>
        <div><Input  placeholder="organization ussed by" /></div>
        <div><Input  placeholder="date of completion" /></div>
        <div><Input  placeholder="specialisation" /></div>
        </div>
        <div>
            <Uploadimage/>
        </div>
        </div>
        <div>
        certificates uploaded
        <ul>
            {certificats.map(element=><li>{element.name}</li>)}
        </ul>
        </div>
        
    </div>)



}