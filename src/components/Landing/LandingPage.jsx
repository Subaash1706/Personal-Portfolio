import React, { useEffect, useState } from 'react'
import classes from './landing.module.css'
import welcome from '../../../public/assets/svgs/welcome.svg'
import wish from '../../../public/assets/svgs/msg.svg'
import loading from '../../../public/assets/svgs/loadingcircle.svg'
import ready from '../../../public/assets/svgs/ready.svg';

function LandingPage({progress}) {
  const [ cursorState, setCursorState ] = useState(false)
  const [ reveal, setReveal ] = useState(false);
  const [ loadHide, setLoadHide ] = useState(false);
  const [ shrinkState, setShrinkState ]= useState(false);
  const [ layer, setLayer ] = useState(900);
  const [ hideDevCircle, setHideDevCircle ] = useState(false);

  function moveCursor(e){
    if(!reveal && cursorState){
      const cursor = document.getElementById('loaderCursor');
    const inner = document.getElementById('innerCircle');
    const innerX = inner.getBoundingClientRect().x;
    const innerY = inner.getBoundingClientRect().y;
    const cinnerX = cursor.getBoundingClientRect().x;
    const cinnerY = cursor.getBoundingClientRect().y;
    const cwidht = cursor.getBoundingClientRect().width;
    const cheight = cursor.getBoundingClientRect().height;
    cursor.style.top = `${+e.clientY - innerY}px`;
    cursor.style.left = `${+e.clientX - innerX}px`
    // console.log(`translate(-50*${e.clientY - innerY - (cwidht / 2)}%, -50*${e.clientX - innerX - (cheight / 2)}%)`)
  }
  }
  const { imageState: image, docState: doc } = progress;
  function renderDynamicCursorText(){
    if(!image && !doc) {
      return 'Loading assets'
    }
    else{
      if(!image && doc) return 'Loading assets'
      else if(image && !doc) {
        return 'Rendering page';
      }
      else if(image && doc) return 'Click to reveal'
    }
  }
  function revealSiteContent(){
    if(image && doc){ 
      setReveal(true)
      setCursorState(false);
      setTimeout(() => {
        setLoadHide(true);
      }, 550);
    };
  }
  useEffect(()=>{
    if(loadHide) {
      setTimeout(() => {
        setShrinkState(true)
      }, 500);
    }
  }, [ loadHide ])
  useEffect(()=>{
    if(shrinkState){
      setLayer(100);
      setTimeout(() => {
        setHideDevCircle(true);
      }, 3500);
    }
  }, [ shrinkState ])
  const docEle = document.documentElement;
  const root= document.getElementById('root');
  !shrinkState ? (docEle.style.setProperty('--ROOT-MAX-HEIGHT', '100vh'), docEle.style.setProperty('--SCROLL-WIDTH', '0px')) : (docEle.style.setProperty('--ROOT-MAX-HEIGHT', 'unset'), docEle.style.setProperty('--SCROLL-WIDTH', '10px'));
  function preventScroll(e){e.preventDefault();}
  return (
  <>
    {!loadHide && <div className={`${classes.container}`} id='loadContainer'>
      <div className={classes.landingPageContainer}>
          <div className={classes.landingPageImageContainer}>
            <img src={welcome} alt='Welcome text'/>
            <img src={welcome} alt='Welcome text'/>
            <img src={welcome} alt='Welcome text'/>
            <img src={welcome} alt='Welcome text'/>
          </div>
          <div className={classes.landingPageImageContainer}>
            <img src={wish} alt='Greeting'/>
            <img src={wish} alt='Greeting'/>
            <img src={wish} alt='Greeting'/>
            <img src={wish} alt='Greeting'/>
          </div>
          <div className={classes.landingPageImageContainer}>
            <img src={welcome} alt='Welcome text'/>
            <img src={welcome} alt='Welcome text'/>
            <img src={welcome} alt='Welcome text'/>
            <img src={welcome} alt='Welcome text'/>
          </div>
          <div className={classes.landingPageImageContainer}>
            <img src={wish} alt='Greeting'/>
            <img src={wish} alt='Greeting'/>
            <img src={wish} alt='Greeting'/>
            <img src={wish} alt='Greeting'/>
          </div>
      </div>
      <div className={`${classes.circle}`}>
        <img src={(image && doc) ? ready : loading} loading='eager' alt='Loading circle'/>
        <div className={`${classes.innerCircle}`} onMouseMove={moveCursor} onMouseLeave={()=>setCursorState(false)} onMouseEnter={()=>setCursorState(true)} id='innerCircle'>
          <div className={`${classes.cursor} ${reveal && classes.zoomInOut}`} id='loaderCursor' style={{top: !cursorState && '50%', left: !cursorState && '50%'}} onClick={revealSiteContent}>
              { !reveal ? renderDynamicCursorText() : '' }
          </div>
        </div>
      </div>
    </div>}
    {
    loadHide && 
      <div className={`${classes.postLoadContainer}`} style={{ display: hideDevCircle ? 'none' : 'block'}}>
        <div className={`${classes.postLoadContainerCursor} ${shrinkState && classes.shrink}`} style={{zIndex: layer}}> 
        </div>
      </div>
    }
  </>
  )
}

export default LandingPage