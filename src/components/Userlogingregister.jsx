import React from "react";
import { useState } from 'react';
import { Button, Input } from 'antd';
import Uploadimage from "./Uploadimage";
import { Radio,DatePicker } from 'antd';
export default function Userlogingregister(){


    

    const [usnermane, setusername] = useState("");
    const [password, setpassword] = useState("");
    console.log(usnermane);
    console.log(password);

    const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangedate = (date, dateString) => {
    console.log(date, dateString);
  };

    return (<div style={{display:"flex",color:"white",gap:20,flexDirection:"column",height:"100%",justifyContent:"center",width:"100%",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",}}>

        <p>acoount</p>
        </div>
<div  style={{display:"flex",alignItems:"center",color:"white",flexWrap:"wrap",gap:10,margin:"5px"}}>
<div style={{width:"100%"}}><Input onChange={(value)=>setusername(value.target.value)} placeholder="username" /></div>
<div style={{width:"49%"}}><Input onChange={(value)=>setpassword(value.target.value)} placeholder="password" /></div>
<div style={{width:"49%"}}><Input placeholder="confirm password" /></div>
<div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
  <Button type="primary" onClick={()=>{axios.post('http://localhost:3000/register', {
  username: usnermane,
  password: password
});}}> submit</Button>
</div>
</div>

</div>)

}