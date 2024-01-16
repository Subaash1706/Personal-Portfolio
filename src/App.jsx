import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Heading from './components/Heading/Heading'
import Skills from './components/SkillGrid/Skills'
import Project from './components/ProjectSection/Project'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import LandingPage from './components/Landing/LandingPage'
import MorePersonalInformation from './components/More/MorePersonalInformation'

function App(props) {
  const [ landingPageVisibility, setLandingPageVisibility ] = useState(true)
  const [ moreInfoSection, setMoreInfoSection ] = useState(false)
  useEffect(()=>{
    if(landingPageVisibility){
       setTimeout(() => {
          setLandingPageVisibility(false)
       }, 4150);
    }
  }, [] )
  function collapseMoreInfo(data){
    if(data) setMoreInfoSection(false)
  }
  return (
    <>
      {landingPageVisibility && <LandingPage />}
      {
      <>
        <Navbar onExpandedMoreInfoSection={moreInfoSection} onCollapseMoreInfoSection={(data)=>collapseMoreInfo(data)}/>
        {!moreInfoSection && <Main onExpandMoreSectionFromHero={(data)=>{setMoreInfoSection(data)}}/>}
        {moreInfoSection && <MorePersonalInformation />}
      </>
      }
    </>
  )
}

export default App
