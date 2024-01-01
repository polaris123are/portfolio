import React from "react";
import { useState } from 'react';
import { Button, Input } from 'antd';
import Uploadimage from "./Uploadimage";
import { Radio,DatePicker } from 'antd';
import { Modal } from 'antd';
import axios from "axios";
import MyimageUpload from "./MyimageUpload";
const { TextArea } = Input;
export default function PortfolioPersonalInformation(){

    const [isModalOpeneducation, setIsModalOpeneducation] = useState(false);
    const [isModalOpencertificate, setIsModalOpencertificate] = useState(false);
    const [isModalOpenworkexperience, setIsModalOpenworkexperience] = useState(false);
    const [workexperiences,setworkexperiences]=useState([]);
    const [certificates,setcertificates]=useState([]);
    const [education,seteducation]=useState([]);
    const [Adress,setAdress]=useState("")
    const [ville,setville]=useState("")
    const [code_postale,setcode_postale]=useState("")
    const [Email,setEmail]=useState("")
    const [gender,setgender]=useState("")
    const [Linkedin,setLinkedin]=useState("")
    const [twitter,settwitter]=useState("")
    const [github,setgithub]=useState("")
    const [Phone_Number,setPhone_Number]=useState("")
    const [cerificatedate,setcerificatedate]=useState("")
    const [namecertificate,setnamecertificate]=useState("")
    const [specialisationcertificate,setspecialisationcertificate]=useState("")
    const [organization,setorganization]=useState("")
    const [degree,setdegree]=useState("")
    const [fieldOfStudy,setfieldOfStudy]=useState("")
    const [startDate,setstartDate]=useState("")
    const [endDate,setendDate]=useState("")
    const [description,setdescription]=useState("")
    const [school,setschool]=useState("")
    const [city,setdcity]=useState("")
    const [dateworking,setdateworking]=useState("")
    const [positionworking,setposition]=useState("")
    const [locationworking,setlocation]=useState("")
    const [organizationworking,setorganizationworking]=useState("")
    const [imageuser,setimageuser]=useState("")
    const [imagecerticate,setimageertificate]=useState("")
    const [aboutme,setaboutme]=useState("")
    
      const handleOk = () => {
        const data={
        imagePath:imagecerticate,
        name:namecertificate,
        organizationIssuedBy:organization,
        specialization:specialisationcertificate,
        cerificatedate:cerificatedate} ;
        
        setcertificates([...certificates,data])

        setIsModalOpen(false);
      };


      

      const handleOkworkexperience= () => {
const data= {
    date:dateworking,
     position:positionworking,
     location:locationworking,
     organization:organizationworking
    }

    setworkexperiences([...education,data])

    
    setIsModalOpenworkexperience(false);
      };

      const [technolgies,settechnolgies]=useState([])
      const [technologiename,settechnologiename]=useState("")
      const [imagetechnologie,settechnologieimage]=useState("")
      const [isModalopentechnologie, setisModalopentechnologie] = useState(false);
      
        const handleOktechnologies = () => {
  
          const data= {
              name:technologiename,
              image:imagetechnologie
       }
   
       settechnolgies([...technolgies,data])
       setisModalopentechnologie(false);
         };
      const [projects,setprojects]=useState([])
    const [title,settitle]=useState("")
    const [descriptionp,setdescriptionp]=useState("")
    const [githubLink,setgithubLink]=useState("")
    const [tools,settools]=useState("")
    const [isModalopenprojects, setIsModalOpenprojects] = useState(false);
    
      const handleOkprojets = () => {

        const data= {
            title:title,
            description:descriptionp,
            githubLink:githubLink,
            tools:tools,
     }
 
     setprojects([...projects,data])
     setIsModalOpenprojects(false);
       };
     

      const handleOkeducation = () => {

       const data= {
        school:school,
        degree:degree,
        fieldOfStudy:fieldOfStudy,
        startDate:startDate,
        endDate:endDate,
        description:description,
        city:city
    }

    seteducation([...education,data])
        setIsModalOpeneducation(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      
      const data={
        imagePath:imageuser,
        aboutMe:aboutme,
        email:Email,
        linkedIn:Linkedin,
        twitter:twitter,
        phoneNumber:Phone_Number,
        specialization:"",
        projects:projects,
        education:education,
        workExperience:workexperiences,
        technologies:technolgies,
        certificates:certificates
        }
    

    console.log(data);

    

   
   
    const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangedate = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangedatecertificate = (date, dateString) => {
    console.log(date, dateString);
  };

    return (<div style={{display:"flex",color:"white",gap:20,alignItems:"center",width:"100%"}}>

            <div style={{margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"70%"}}>
        
        <div>
        <div style={{margin:"10px"}}>
        <p>adress Information:</p>
        </div>
<div style={{display:"flex",alignItems:"center",color:"white",flexWrap:"wrap",gap:10,margin:"5px"}}>
<div style={{width:"100%"}}><Input   placeholder="Adress" /></div>
<div style={{width:"49%"}}><Input placeholder="ville" /></div>
<div style={{width:"49%"}}><Input placeholder="code postale" /></div>
        </div>
        
<div  style={{display:"flex",alignItems:"center",color:"white",flexWrap:"wrap",gap:10,margin:"5px"}}>

<div style={{width:"50%"}}>
<p style={{margin:"5px"}}>gender:</p>
    <Radio.Group onChange={onChange} value={value}  style={{margin:"10px"}}>
      <Radio value={1} style={{color:"white"}}>Male</Radio>
      <Radio value={2} style={{color:"white"}}>Female</Radio>
    </Radio.Group></div>
<div style={{width:"70%"}}> <DatePicker onChange={onChangedate} picker="days" /></div>
</div>
<div style={{margin:"10px"}}>
        <p>contact Information:</p>
        </div>
<div  style={{display:"flex",alignItems:"center",color:"white",flexWrap:"wrap",gap:10,margin:"5px"}}>
<div style={{width:"45%"}}><Input onChange={(value)=>{setLinkedin(value.target.value)}} placeholder="Linkedin" /></div>
<div style={{width:"45%"}}><Input onChange={(value)=>{settwitter(value.target.value)}} placeholder="twitter" /></div>
<div style={{width:"50%"}}><Input onChange={(value)=>{setEmail(value.target.value)}} placeholder="Email" /></div>
<div style={{width:"50%"}}><Input placeholder="github" /></div>
<div style={{width:"50%"}}><Input onChange={(value)=>{setPhone_Number(value.target.value)}} placeholder="Phone Number" /></div>

</div>
<div >
<div style={{margin:"20px 10px 20px 10px",display:"flex",justifyContent:"space-between"}}><h3>certificates:</h3>
<div><Button onClick={()=>{setIsModalOpencertificate(true)}} type={"primary"}>add certificates</Button></div>
</div>

<ol style={{fontSize:"12px"}}>
    {certificates.map(element=><div style={{display:"flex",justifyContent:"space-evenly"}}><p style={{fontSize:"12px"}}>{element.name}</p>
    <p style={{fontSize:"12px"}}>{element.name}</p>
    <p style={{fontSize:"12px"}}>{element.organizationIssuedBy}</p>
    <p style={{fontSize:"12px"}}>{element.specialization}</p>
    <p style={{fontSize:"12px"}}>{element.cerificatedate}</p>
    <img src={element.imagecerticate} width={20} style={{border:"10px"}}/>
     </div>)}
</ol>

</div>


<div >
<div style={{margin:"20px 10px 20px 10px",display:"flex",justifyContent:"space-between"}}><h3>Education:</h3>
<div><Button onClick={()=>{setIsModalOpeneducation(true)}} type={"primary"}>add Education</Button></div>
</div>

<ol style={{fontSize:"12px"}}>
    {education.map(element=><div style={{display:"flex",justifyContent:"space-evenly"}}><p style={{fontSize:"12px"}}>{element.city}</p><p style={{fontSize:"12px"}}>{element.school}</p><p style={{fontSize:"12px"}}>{element.fieldOfStudy}</p><p style={{fontSize:"12px"}}>{element.startDate}</p><p style={{fontSize:"12px"}}>{element.endDate}</p></div>)}
</ol>

</div>

<div >
<div style={{margin:"20px 10px 20px 10px",display:"flex",justifyContent:"space-between"}}><h3>add Work experience:</h3>
<div><Button onClick={()=>{setIsModalOpenworkexperience(true)}} type={"primary"}>Work experience</Button></div>
</div>

<ol style={{fontSize:"12px"}}>
    {workexperiences.map(element=><div style={{display:"flex",justifyContent:"space-evenly"}}><p style={{fontSize:"12px"}}>{element.position}</p><p style={{fontSize:"12px"}}>{element.date}</p><p style={{fontSize:"12px"}}>{element.location}</p><p style={{fontSize:"12px"}}>{element.organization}</p></div>)}
</ol>

</div>

<div >
<div style={{margin:"20px 10px 20px 10px",display:"flex",justifyContent:"space-between"}}><h3>projects:</h3>
<div><Button onClick={()=>{setIsModalOpenprojects(true)}} type={"primary"}>add projects</Button></div>
</div>

<ol style={{fontSize:"12px"}}>
    {projects.map(element=><div style={{display:"flex",justifyContent:"space-evenly"}}>
        <p style={{fontSize:"12px"}}>{element.title}</p>
        <p style={{fontSize:"12px"}}>{element.description}</p>
        <p style={{fontSize:"12px"}}>{element.githubLink}</p>
        <p style={{fontSize:"12px"}}>{element.tools}</p>
        </div>)}
</ol>

</div>
<div >
<div style={{margin:"20px 10px 20px 10px",display:"flex",justifyContent:"space-between"}}><h3>technologies:</h3>
<div><Button onClick={()=>{setisModalopentechnologie(true)}} type={"primary"}>add technologies</Button></div>
</div>

<ol style={{fontSize:"12px"}}>
    {technolgies.map(element=><div style={{display:"flex",justifyContent:"space-evenly"}}><p style={{fontSize:"12px"}}>{element.name} {element.imagetechnologie}</p><img src={element.imagetechnologie} width={20}/></div>)}
</ol>

</div>


<div>
<div style={{margin:"20px 10px 20px 10px",display:"flex",justifyContent:"space-between"}}><h3>About me:</h3>
</div>
<TextArea
        value={aboutme}
        onChange={(e) => setaboutme(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{
          minRows: 5,
          maxRows: 8,
        }}
      />

</div>





<div style={{width:"100%",display:"flex",justifyContent:"flex-end",margin:"10px 0 10px 0"}}>
    <Button type="primary" onClick={()=>axios({
  method: 'post',
  url: '/login',
  data: {
   data:data
  }
})}>submit</Button>
</div>
</div>
</div>


<Modal title="add Certificates" open={isModalOpencertificate} onOk={handleOk} onCancel={()=>setIsModalOpencertificate(false)} width={"500px"}>
<div style={{display:"flex",gap:20,width:"100%",alignItems:"center"}}>
<div style={{display:"flex",flexDirection:"column",gap:10,width:"60%"}}>
<Input onChange={(value)=>{setnamecertificate(value.target.value)}} placeholder="name of certificate" />
<Input onChange={(value)=>{setorganization(value.target.value)}} placeholder="organization essued by" />
<Input onChange={(value)=>{setspecialisationcertificate(value.target.value)}} placeholder="specialisation" />
<DatePicker onChange={(date, dateString) => {setcerificatedate(dateString)}} picker="days" />
</div>
<div><div><MyimageUpload setimageurl={setimageertificate}/></div></div>
</div>
    </Modal>

<Modal title="add education" open={isModalOpeneducation} onOk={handleOkeducation} onCancel={()=>setIsModalOpeneducation(false)} width={"500px"}>
<div style={{display:"flex",gap:20,width:"100%",alignItems:"center",flexDirection:"column"}}>
<Input onChange={(value)=>{setdegree(value.target.value)}} placeholder="degree" />
<Input onChange={(value)=>{setfieldOfStudy(value.target.value)}} placeholder="fieldOfStudy" />

<Input onChange={(value)=>{setdescription(value.target.value)}} placeholder="description" />
<Input onChange={(value)=>{setschool(value.target.value)}} placeholder="schoole" />
<Input onChange={(value)=>{setdcity(value.target.value)}} placeholder="ville" />
<DatePicker style={{width:"100%"}} onChange={(date, dateString) => {setstartDate(dateString)}} />
<DatePicker style={{width:"100%"}} onChange={(date, dateString) => {setendDate(dateString)}} picker="endDate" />
</div>
    </Modal>

    
    <Modal title="add education" open={isModalOpenworkexperience} onOk={handleOkworkexperience} onCancel={()=>setIsModalOpenworkexperience(false)} width={"500px"}>
    <div style={{display:"flex",gap:20,width:"100%",alignItems:"center"}}>
<div style={{display:"flex",flexDirection:"column",gap:10,width:"60%"}}>
<Input onChange={(value)=>{setorganizationworking(value.target.value)}} placeholder="organization" />
<Input onChange={(value)=>{setlocation(value.target.value)}} placeholder="location" />
<Input onChange={(value)=>{setposition(value.target.value)}} placeholder="position" />
<DatePicker onChange={(date, dateString) => {setdateworking(dateString)}}  picker="days" />
</div>
</div>
    </Modal>


    <Modal title="add projects" open={isModalopenprojects} onOk={handleOkprojets} onCancel={()=>setIsModalOpenprojects(false)} width={"500px"}>
    <div style={{display:"flex",gap:20,width:"100%",alignItems:"center"}}>
<div style={{display:"flex",flexDirection:"column",gap:10,width:"60%"}}>
<Input onChange={(value)=>{settitle(value.target.value)}} placeholder="title" />
<Input onChange={(value)=>{setdescriptionp(value.target.value)}} placeholder="description" />
<Input onChange={(value)=>{setgithubLink(value.target.value)}} placeholder="githubLink" />
<Input onChange={(value)=>{settools(value.target.value)}} placeholder="tools" />
</div>
<div><div><Uploadimage urlpath={setimageertificate}/></div></div>
</div>
    </Modal>

    <Modal title="add technologies" open={isModalopentechnologie} onOk={handleOktechnologies} onCancel={()=>setisModalopentechnologie(false)} width={"500px"}>
    <div style={{display:"flex",gap:20,width:"100%",alignItems:"center"}}>
<div style={{display:"flex",flexDirection:"column",gap:10,width:"60%"}}>
<Input onChange={(value)=>{settechnologiename(value.target.value)}} placeholder="name" />
</div>
<div><div><MyimageUpload setimageurl={settechnologieimage}/></div></div>
</div>
    </Modal>
      
    </div>)



}