import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
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
  const [ pageLoadState, setPageLoadState ] = useState({imageState: false, docState: false})
  // useEffect(()=>{
  //   if(landingPageVisibility){
  //      setTimeout(() => {
  //         setLandingPageVisibility(false)
  //      }, 4150);
  //   }
  // }, [] )
  // function collapseMoreInfo(data){
  //   if(data) setMoreInfoSection(false)
  // }
  const [ progress, setProgress ] = useState(0);
  const [ progressPercentage, setProgressPercentage ] = useState(0);
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setProgress(prev=>(prev>=100 ? prev : prev+=10));
  //   }, 150)
  //   return ()=> clearInterval(interval);
  // },[])

  useEffect(() => {
    const handleLoad = () => {
      setPageLoadState((prev) => ({ ...prev, docState: true }));
    };
    window.addEventListener('load', handleLoad);
    const images = document.querySelectorAll('img');
    let loaded = 0;
    const handleImageLoad = () => {
      loaded += 1;

      if (loaded === images.length) {
        setPageLoadState((prev) => ({ ...prev, imageState: true }));
      }
    };
    images.forEach((item) => {
      item.addEventListener('load', handleImageLoad);
    });
    return () => {
      window.removeEventListener('load', handleLoad);
      images.forEach((item) => {
        item.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);



  return (
    <>
      {/* {landingPageVisibility && <LandingPage />} */}
      {
        ReactDOM.createPortal(
          <LandingPage progress={pageLoadState}/>,
          document.getElementById('preloader')
        )
      }
      {
      <>
        <Navbar onExpandedMoreInfoSection={moreInfoSection} onCollapseMoreInfoSection={(data)=>collapseMoreInfo(data)}/>
        {!moreInfoSection && <Main onExpandMoreSectionFromHero={(data)=>{setMoreInfoSection(data)}}/>}
      </>
      }
    </>
  )
}

export default App
