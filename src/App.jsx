import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import LandingPage from './components/Landing/LandingPage'

function App(props) {
  const [ moreInfoSection, setMoreInfoSection ] = useState(false)
  const [ pageLoadState, setPageLoadState ] = useState({imageState: false, docState: false})

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
    if(document.readyState === "complete")setPageLoadState((prev) => ({ ...prev, docState: true }));
    return () => {
      window.removeEventListener('load', handleLoad);
      images.forEach((item) => {
        item.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);



  return (
    <>
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
