
import Headerart from './Headerart'
import Technologies from './Technologies'
import Projects from './Projects'
import Footer from './Footer'
import WorkExperience from './WorkExperience'
import Education from './Educaation'
import AboutME from './AboutME'
import Contact from './Contact'
import Certificates from './Cerificates'


export default function Portfolio() {
  return (
    <div style={{margin:"0 auto",width:"1000px",backgroundColor:"#191919",height:"100vh"}}>
      <Headerart/>
      <Technologies/>
      <Projects/>
      <WorkExperience/>
      <Education/>
      <Certificates/>
      <AboutME/>
      <Contact/>
      <Footer/>
    </div>
  )
}